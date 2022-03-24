using FinalProject.Areas.Identity.Data;
using FinalProject.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(FinalProject.Areas.Identity.IdentityHostingStartup))]

namespace FinalProject.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) =>
            {
                services.AddDbContext<FinalProjectdbContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("FinalProjectdbContextConnection")));

                services.AddDefaultIdentity<FinalProjectUser>(options => options.SignIn.RequireConfirmedAccount = false)
                    .AddEntityFrameworkStores<FinalProjectdbContext>();
            });
        }
    }
}