using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BankApp.Models
{
    public class Account
    {
        public Account() {
            this.StartingBalance = 0;
        }

        public int ID{get; set;}
        public string Iban { get; set; }
        public string Description { get; set; }
        public float Balance { get; set; }
        public float StartingBalance { get; set; }
        public float EndingBalance { get; set; }
    }
}