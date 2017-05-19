using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Organizer.Model
{
    [Table("Currency")]
    public class Currency
    {
        [Key]
        [Column("CurrencyId")]
        public long Id { get; set; }

        public string Symbol { get; set; }

        public string Description { get; set; }
    }
}
