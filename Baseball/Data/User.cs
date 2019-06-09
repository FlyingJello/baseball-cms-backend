using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Baseball.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public User(string username, string password)
        {
            Username = username;
            Password = password;
        }


        public User(int id, string username, byte[] passwordHash, byte[] passwordSalt)
        {
            Id = id;
            PasswordHash = passwordHash;
            PasswordSalt = passwordSalt;
            Username = username;
        }
    }
}
