using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Organizer.Model
{
    [Table("CardCompany")]
    public class CardCompany
    {
        [Key]
        [Column("CardCompanyId")]
        public long Id { get; set; }
        
        public string Name { get; set; }
    }
}
