using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bancorrupto.Models
{
    public class AccountType
    {
        public static AccountType Checking = new AccountType(1, nameof(Checking));
        public static AccountType Savings = new AccountType(2, nameof(Savings));

        public int Id { get; protected set; }
        public string Name { get; protected set; }

        public AccountType(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public static IReadOnlyCollection<AccountType> GetTypes()
        {
            return new[] { Checking, Savings };
        }

        public static AccountType FindBy(int id)
        {
            var state = GetTypes().SingleOrDefault(s => s.Id == id);

            if (state == null)
            {
                throw new ArgumentOutOfRangeException($"Invalid id {id}");
            }

            return state;
        }
    }
}
