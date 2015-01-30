using BankApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BankApp
{
    public class AppController : ApiController
    {
        private DbContext db = new DbContext();
        // GET api/<controller>
        public IEnumerable<Account> Get()
        {

            var account = new Account();
            account.Iban = "19946532135";
            account.Description = "Sample Account";
            account.Balance = 100;

            db.Accounts.Add(account);
            db.SaveChanges();

            return db.Accounts.ToArray();

            //return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}