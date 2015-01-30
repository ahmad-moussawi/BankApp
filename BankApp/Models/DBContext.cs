using System.Data.Entity;

namespace BankApp.Models
{
    public class DbContext : System.Data.Entity.DbContext
    {
        public DbContext()
            : base("DefaultConnection")
        {

        }

        public DbSet<Account> Accounts { get; set; }
    }

}