using FinalProject.Models.DatabaseModel;
using Microsoft.EntityFrameworkCore;

namespace FinalProject.DataBaseContext
{
    public class ContactUsDbContext : DbContext
    {
        public ContactUsDbContext(DbContextOptions<ContactUsDbContext> options) :
        base(options)
        { }

        public DbSet<ContactUsModel> ContactUs { get; set; }
    }
}