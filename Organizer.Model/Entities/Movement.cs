using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Organizer.Model
{
    [Table("Movement")]
    public class Movement
    {
        [Key]
        [Column("MovementId")]
        public long Id { get; set; }

        public MovementType Type { get; set; }

        public MovementOrigin Origin { get; set; }

        public long? OriginAccountId { get; set; }

        public Account OriginAccount { get; set; }

        public string Description { get; set; }

        public long CurrencyId { get; set; }

        public Currency Currency { get; set; }

        public decimal Amount { get; set; }

        public DateTime Date { get; set; }

    }
}
