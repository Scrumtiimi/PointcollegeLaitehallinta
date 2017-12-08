using PointcollegeLaitehallinta.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PointcollegeLaitehallinta.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            return View();
        }

        public ActionResult AddLaite() { 
            return View();
        }
        public ActionResult RemoveLaite() {
            return View();
        }
        public ActionResult ModifyLaite() {
            return View();
        }
        public ActionResult GetLaite() {
            return View();
        }
    }
}
