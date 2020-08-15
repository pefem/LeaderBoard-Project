using LeaderBoard.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text.Json;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using RouteAttribute = System.Web.Http.RouteAttribute;
using Newtonsoft;
using System.Linq;
using LeaderBoard.ViewModels;
using LeaderBoard.Enums;

namespace LeaderBoard.Controllers
{
    public class AuthController : ApiController
    {
        LeaderBoardDBEntities db;

        public AuthController()
        {
            this.db = new LeaderBoardDBEntities();
        }

        // POST api/values
        [System.Web.Http.HttpPost]
        public IHttpActionResult Post([FromBody] AuthRequestViewModel user)
        {
            AuthResponseDetails responseDetails = new AuthResponseDetails();
            try
            {
                User validUser = this.db.Users.Where(x => x.Email == user.Email || x.UserName == user.Email).FirstOrDefault();
                if (null != validUser)
                {
                    if (this.IsUserAccountPasswordValid(user.Password, validUser))
                    {
                        responseDetails.SuccessMessage = "Login successful";
                        responseDetails.ResponseCode = ResponseCodeEnum.Success;
                        responseDetails.Details = this.db.Users.Where(x=>x.UserID == validUser.UserID).FirstOrDefault();
                    }
                    else
                    {
                        responseDetails.ErrorMessage = "Oops, invalid user account.";
                    }
                }
                else
                {
                    responseDetails.ErrorMessage = "Oops, invalid user account.";
                }
            }
            catch (Exception ex)
            {
                responseDetails.ErrorMessage = "Oops, something went wrong.";
                responseDetails.ResponseCode = ResponseCodeEnum.InternalServerError;
            }

            return Json(responseDetails);
        }
        public bool IsUserAccountPasswordValid(string password, User user)
        {
            return VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt);
        }

        public static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }
    }
}
