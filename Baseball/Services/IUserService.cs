using Baseball.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Baseball.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        User Create(User user);
        User GetById(int id);
    }
}
