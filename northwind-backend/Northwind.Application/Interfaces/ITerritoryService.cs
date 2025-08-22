using Northwind.Application.DTOs;
using Northwind.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Application.Interfaces
{
    public interface ITerritoryService
    {
        Task<IEnumerable<TerritoryDto>> GetAllAsync();
        Task<TerritoryDto?> GetByIdAsync(int id);
        Task<TerritoryDto> CreateAsync(TerritoryDto categoryDto);
        Task<bool> UpdateAsync(TerritoryDto categoryDto);
        Task<bool> DeleteAsync(int id);
    }
}
