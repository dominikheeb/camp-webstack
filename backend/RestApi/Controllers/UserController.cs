using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ServiceLayer.Services;

namespace RestApi.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        private readonly IUserService _userService;

        public UserController()
        {
            _userService = new UserService(); //TODO: Dependency Injection
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetUsers()
        {
            return Ok(_userService.GetAllUser());
        }
    }
}
