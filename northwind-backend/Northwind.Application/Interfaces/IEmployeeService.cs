using Northwind.Application.DTOs;
using Northwind.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Application.Interfaces
{
    public interface IEmployeeService
    {
        Task<IEnumerable<EmployeeDto>> GetAllAsync();
        Task<EmployeeDto?> GetByIdAsync(int id);
        Task<EmployeeDto> CreateAsync(EmployeeDto employeeDto);
        Task<bool> UpdateAsync(EmployeeDto categoryDto);
        Task<bool> DeleteAsync(int id);
    }
}
