using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Organizer.Model
{
    [Table("Card")]
    public class Card
    {
        [Key]
        [Column("CardId")]
        public long Id { get; set; }

        public CardType Type { get; set; }

        public long CompanyId { get; set; }

        public CardCompany Company { get; set; }

        public string Number { get; set; }

        public string Owner { get; set; }

        public DateTime ExpirationDate { get; set; }
    }
}
