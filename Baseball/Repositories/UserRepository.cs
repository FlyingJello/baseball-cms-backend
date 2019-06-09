using Baseball.Data;
using Baseball.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Baseball.Repositories
{
    public interface IUserRepository
    {
        User FindUserByUsername(string username);
        void AddUser(User user);
        User FindUserById(int id);
    }

    public class UserRepository : IUserRepository
    {
        private BaseballContext _db;

        public UserRepository(BaseballContext baseballContext)
        {
            _db = baseballContext;
        }

        public void AddUser(User user)
        {
            if (_db.Users.Any(usr => usr.Username == user.Username))
            {
                throw new ArgumentException("Username \"" + user.Username + "\" is already taken");
            }

            _db.Users.Add(user);
            _db.SaveChanges();
        }

        public User FindUserById(int id)
        {
            return _db.Users.Single(user => user.Id == id);
        }

        public User FindUserByUsername(string username)
        {
            return _db.Users.SingleOrDefault(x => x.Username == username);
        }
    }
}
