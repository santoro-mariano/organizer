using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Organizer.Model
{
    [Table("User")]
    public class User
    {
        [Key]
        [Column("UserId")]
        public long Id { get; set; }

        public string Name { get; set; }

        public string Lastname { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
    }
}
