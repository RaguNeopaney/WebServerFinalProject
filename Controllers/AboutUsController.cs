using FinalProject.DataBaseContext;
using FinalProject.Models.DatabaseModel;
using FinalProject.Models.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{
    [Authorize]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [AutoValidateAntiforgeryToken]
    public class AboutUsController : Controller
    {
        // DBContext stuff
        private ContactUsDbContext _context { get; set; }
        public AboutUsController(ContactUsDbContext ctx)
        {
            _context = ctx;
        }

        public IActionResult AboutUs()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ContactUs(ContactUsViewModel ContactUsViewModelForDB)
        {
            if (ModelState.IsValid)
            {
                ContactUsModel contactUstosave = new ContactUsModel
                {
                    Name = ContactUsViewModelForDB.Name,
                    Email = ContactUsViewModelForDB.Email,
                    Messsage = ContactUsViewModelForDB.Message
                };
                _context.ContactUs.Add(contactUstosave);
                _context.SaveChanges();

            }

            return RedirectToAction("AboutUs", "AboutUs");
        }
    }
}
