using LeaderBoard.Enums;
using LeaderBoard.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace LeaderBoard.ViewModels
{
    public class AuthResponseDetails
    {
        public string SuccessMessage { get; set; }
        public string ErrorMessage { get; set; }
        public ResponseCodeEnum ResponseCode { get; set; }
        public User Details { get; set; }

        public AuthResponseDetails() { }
    }
}
