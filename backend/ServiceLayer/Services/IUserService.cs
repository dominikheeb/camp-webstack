using System.Collections.Generic;
using ServiceLayer.Dto;

namespace ServiceLayer.Services
{
    public interface IUserService
    {
        ICollection<UserDto> GetAllUser();
    }
}