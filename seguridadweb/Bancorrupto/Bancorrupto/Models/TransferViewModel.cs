using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bancorrupto.Models
{
    public class TransferViewModel
    {
        [Required]
        public string AccountFrom { get; set; }
        [Required]
        public string AccountTo { get; set; }
        [Required]
        public decimal Amount { get; set; }
    }
}
