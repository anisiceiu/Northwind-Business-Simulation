using AutoMapper;
using Northwind.Application.DTOs;
using Northwind.Application.Interfaces;
using Northwind.Core.Interfaces;
using Northwind.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Application.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public EmployeeService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<EmployeeDto>> GetAllAsync()
        {
            var employees = await _unitOfWork.EmployeeRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<EmployeeDto>>(employees);
        }

        public async Task<EmployeeDto?> GetByIdAsync(int id)
        {
            var Employee = await _unitOfWork.EmployeeRepository.GetByIdAsync(id);
            return Employee == null ? null : _mapper.Map<EmployeeDto>(Employee);
        }

        public async Task<EmployeeDto> CreateAsync(EmployeeDto EmployeeDto)
        {
            var Employee = _mapper.Map<Employee>(EmployeeDto);
            await _unitOfWork.EmployeeRepository.AddAsync(Employee);
            await _unitOfWork.CommitAsync(); // persist changes
            return _mapper.Map<EmployeeDto>(Employee);
        }

        public async Task<bool> UpdateAsync(EmployeeDto EmployeeDto)
        {
            var Employee = _mapper.Map<Employee>(EmployeeDto);
            await _unitOfWork.EmployeeRepository.UpdateAsync(Employee);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var Employee = await _unitOfWork.EmployeeRepository.GetByIdAsync(id);
            if (Employee == null) return false;
            await _unitOfWork.EmployeeRepository.DeleteAsync(Employee);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }
    }
}
