using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BankApp.Models
{
    public class DbInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<DbContext>
    {
        protected override void Seed(DbContext context)
        {
            context.Accounts.Add(new Account { 
                Iban = "123456",
                Description = "Sample Account",
                Balance = 25000
            });
           
            context.SaveChanges();
        }
    }
}