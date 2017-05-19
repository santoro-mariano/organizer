using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Organizer.Model
{
    [Table("Account")]
    public class Account
    {
        [Key]
        [Column("AccountId")]
        public long Id { get; set; }

        public string CBU { get; set; }

        public string Description { get; set; }

        public decimal Amount { get; set; }
    }
}
