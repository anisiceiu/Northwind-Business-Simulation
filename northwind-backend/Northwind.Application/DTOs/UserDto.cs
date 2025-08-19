using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Northwind.Application.DTOs
{
    public class UserDto
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime? LastLogin { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public string Password { get; set; }
        [JsonIgnore]
        public byte[]? PasswordHash { get; set; }
        [JsonIgnore]
        public byte[]? PasswordSalt { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public bool IsActive { get; set; } = true;
    }
}
