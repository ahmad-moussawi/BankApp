using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace BankApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/js/libs").Include(
                "~/web/js/jquery-2.1.0.js",
                "~/web/js/materialize.js",
                "~/web/js/angular/angular.js",
                "~/web/js/angular/angular-ui-router.js"
                ));


            bundles.Add(new ScriptBundle("~/js/app").Include(
                "~/web/js/app/run.js",
                "~/web/js/app/app.js"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/bootstrap.css",
                 "~/Content/Site.css"));
        }
    }
}
