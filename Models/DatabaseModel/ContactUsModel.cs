using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinalProject.Models.DatabaseModel
{
    [Table("ContectUs")]
    public class ContactUsModel
    {
        [Key]
        public int ContactUsMails { get; set; }

        [Column]
        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Column]
        [Required]
        [StringLength(50)]
        public string Email { get; set; }

        [Column(TypeName = "TEXT")]
        [Required]
        public string Messsage { get; set; }
    }
}