using System.Collections.Generic;
using ServiceLayer.Dto;

namespace ServiceLayer.Services
{
    public class UserService : IUserService
    {
        public ICollection<UserDto> GetAllUser()
        {
            return new List<UserDto> {new UserDto {Id = 1, Name= "Test" }, new UserDto { Id = 1, Name = "Test2" } };
        }
    }
}