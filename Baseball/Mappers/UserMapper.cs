using Baseball.Dto;
using Baseball.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Baseball.Mappers
{
    public class UserMapper
    {
        public User DtoToModel(UserDto dto)
        {
            return new User()
            {
                Username = dto.Username,
                Password = dto.Password
            };
        }

        public UserDto ModelToDto(User user)
        {
            return new UserDto()
            {
                Id = user.Id,
                Username = user.Username
            };
        }
    }
}
