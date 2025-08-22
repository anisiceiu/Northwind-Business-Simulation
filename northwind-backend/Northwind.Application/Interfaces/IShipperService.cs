using Northwind.Application.DTOs;
using Northwind.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Application.Interfaces
{
    public interface IShipperService
    {
        Task<IEnumerable<ShipperDto>> GetAllAsync();
        Task<ShipperDto?> GetByIdAsync(int id);
        Task<ShipperDto> CreateAsync(ShipperDto categoryDto);
        Task<bool> UpdateAsync(ShipperDto categoryDto);
        Task<bool> DeleteAsync(int id);
    }
}
