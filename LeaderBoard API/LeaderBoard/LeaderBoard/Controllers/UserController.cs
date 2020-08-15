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
using Newtonsoft.Json;
using LeaderBoard.ViewModels;

namespace LeaderBoard.Controllers
{
    public class UserController : ApiController
    {
        LeaderBoardDBEntities db;

        public UserController()
        {
            this.db = new LeaderBoardDBEntities();
        }

        [System.Web.Http.HttpGet]
        [Route("api/users")]
        public IHttpActionResult GetAll()
        {
            List<User> users = new List<User>();
            try
            {
                users = this.db.Users.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Json(users);
        }

        [System.Web.Http.HttpGet]
        [Route("api/user/{id}")]
        public IHttpActionResult Get(string id)
        {
            User user = new User();
            try
            {
                user = this.db.Users.Where(x => x.UserID == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Json(user);
        }

        [System.Web.Http.HttpGet]
        [Route("api/leaderboard/{id}")]
        public IHttpActionResult GetLeaderBoard(string id)
        {
            Board user = new Board();
            try
            {
                user = this.db.Boards.Where(x => x.UserId == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Json(user);
        }

        [System.Web.Http.HttpPost]
        [Route("api/user")]
        public IHttpActionResult Post([FromBody] UserViewModel user)
        {
            try
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(user.Password, out passwordHash, out passwordSalt);

                this.db.Users.Add(new User()
                {
                    UserID = Guid.NewGuid().ToString(),
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    UserName = user.UserName,
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt,
                    AccessFailedCount = 0,
                    ConcurrencyStamp = "",
                    Email = "",
                    EmailConfirmed = false,
                    LockoutEnabled = false,
                    LockoutEnd = DateTime.Now,
                    PhoneNumber = "",
                    PhoneNumberConfirmed = false,
                    SecurityStamp = "",
                    SocialAccount = ""
                });
                this.db.SaveChanges();
                return Json(new { success = true, error_message = "" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, error_message = "an error occurred" });
            }
        }

        [System.Web.Http.HttpPut]
        [Route("api/user")]
        public IHttpActionResult Put([FromBody] UserViewModel user)
        {
            try
            {
                var existingUser = this.db.Users.Where(x => x.UserName == user.UserName).FirstOrDefault();
                existingUser.FirstName = user.FirstName;
                existingUser.LastName = user.LastName;

                byte[] passwordHash, passwordSalt;
                if (user.Password != null)
                {
                    CreatePasswordHash(user.Password, out passwordHash, out passwordSalt);
                    existingUser.PasswordHash = passwordHash;
                    existingUser.PasswordSalt = passwordSalt;
                }

                this.db.Entry<User>(existingUser).State = EntityState.Modified;
                this.db.SaveChanges();
                return Json(new { success = true, error_message = "" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, error_message = "an error occurred" });
            }
        }

        // POST api/values
        [System.Web.Http.HttpPost]
        [Route("api/leaderboard")]
        public IHttpActionResult PostLeaderBoard([FromBody] Board board)
        {
            try
            {
                board.BoardId = Guid.NewGuid().ToString();
                this.db.Boards.Add(board);
                this.db.SaveChanges();
                return Json(new { success = true, error_message = "" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, error_message = "an error occurred" });
            }
        }

        // POST api/values
        [System.Web.Http.HttpPut]
        [Route("api/leaderboard")]
        public IHttpActionResult PutLeaderBoard([FromBody] Board board)
        {
            try
            {
                var boardUser = this.db.Boards.Where(x => x.UserId == board.UserId).FirstOrDefault();
                if (boardUser == null)
                {
                    board.BoardId = Guid.NewGuid().ToString();
                    board.DateCreated = DateTime.Now;
                    this.db.Boards.Add(board);
                } else
                {
                    boardUser.Score = board.Score;
                    boardUser.GamesPlayed = board.GamesPlayed;
                    this.db.Entry<Board>(boardUser).State = EntityState.Modified;
                }
                this.db.SaveChanges();
                return Json(new { success = true, error_message = "" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, error_message = "an error occurred" });
            }
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

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
