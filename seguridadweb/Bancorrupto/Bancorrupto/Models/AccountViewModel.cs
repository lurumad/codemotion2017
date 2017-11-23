using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bancorrupto.Models
{
    public class AccountViewModel
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public decimal Balance { get; set; }
        public string Type { get; set; }
        public string IFSC { get; set; }
    }
}
