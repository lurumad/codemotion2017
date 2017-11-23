using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bancorrupto.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string OwnerId { get; set; }
        public ApplicationUser Owner { get; set; }
        public int AccountTypeId { get; set; }
        public AccountType AccountType { get; set; }
        public decimal Balance { get; set; }
        public string IFSC { get; set; }
    }
}
