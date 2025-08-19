using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Application.Response
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public DTOs.UserDto UserDetails { get; set; }
    }
}
