using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Bancorrupto.Models;
using Bancorrupto.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Dapper;
using System.Data.SqlClient;

namespace Bancorrupto.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext dbContext;
        private readonly UserManager<ApplicationUser> userManager;

        public HomeController(
            ApplicationDbContext dbContext,
            UserManager<ApplicationUser> userManager)
        {
            this.dbContext = dbContext;
            this.userManager = userManager;
        }

        public async Task<IActionResult> Index()
        {
            var user = await userManager.GetUserAsync(User);
            var accounts = await dbContext.Accounts
                .Where(x => x.OwnerId == user.Id)
                .Select(x => new AccountViewModel
                {
                    Id = x.Id,
                    Number = x.Number,
                    Balance = x.Balance
                })
                .ToListAsync();

            return View(accounts);
        }

        [HttpGet]
        public async Task<IActionResult> Search(string number)
        {
            ViewData["Search"] = number;
            Response.Cookies.Append("cookie", "value");
            var user = await userManager.GetUserAsync(User);
            var ownerid = new SqlParameter("ownerid", user.Id);
            string sql = $"SELECT * FROM Accounts WHERE OwnerId = @ownerid AND Number LIKE '%" + number + "%'";
            var account = await dbContext.Accounts
                .Include(x => x.AccountType)
                .FromSql(sql, ownerid)
                .Select(x => new AccountViewModel
                {
                    Id = x.Id,
                    Balance = x.Balance,
                    Number = x.Number,
                    Type = x.AccountType.Name
                })
                .ToListAsync();
            return View(account);
        }

        [HttpGet]
        public async Task<IActionResult> Order(string by, bool asc)
        {
            var user = await userManager.GetUserAsync(User);
            var orderBy = String.IsNullOrWhiteSpace(by) ? "Number" : by;
            var order = asc ? "ASC" : "DESC";
            string sql = "SELECT a.Id, Balance, IFSC, Number, aty.Name AS Type FROM Accounts a INNER JOIN AccountTypes aty ON a.AccountTypeId = aty.Id WHERE OwnerId = @ownerid ORDER BY " + orderBy + " " + order;
            var viewModel = await dbContext
                .Database
                .GetDbConnection()
                .QueryAsync<AccountViewModel>(sql, new { ownerid = user.Id });
            return View(viewModel);
        }

        public IActionResult Transfer(string number)
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Transfer(TransferViewModel viewModel)
        {
            var accountFrom = await dbContext.Accounts.SingleAsync(x => x.Number == viewModel.AccountFrom);
            var accountTo = await dbContext.Accounts.SingleAsync(x => x.Number == viewModel.AccountTo);
            accountFrom.Balance -= viewModel.Amount;
            accountTo.Balance += viewModel.Amount;
            await dbContext.SaveChangesAsync();
            return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        public IActionResult Donate()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Donate(DonateViewModel viewModel)
        {
            var user = await userManager.GetUserAsync(User);
            var accounts = await dbContext.Accounts.Where(x => x.OwnerId == user.Id).ToListAsync();
            foreach (var account in accounts)
            {
                account.Balance = 0;
            }
            await dbContext.SaveChangesAsync();
            return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Report(object report)
        {
            return new JsonResult(new { reported = true });
        }
    }
}
