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
    public class SupplierService : ISupplierService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public SupplierService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<SupplierDto>> GetAllAsync()
        {
            var suppliers = await _unitOfWork.SupplierRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<SupplierDto>>(suppliers);
        }

        public async Task<SupplierDto?> GetByIdAsync(int id)
        {
            var supplier = await _unitOfWork.SupplierRepository.GetByIdAsync(id);
            return supplier == null ? null : _mapper.Map<SupplierDto>(supplier);
        }

        public async Task<SupplierDto> CreateAsync(SupplierDto supplierDto)
        {
            var supplier = _mapper.Map<Supplier>(supplierDto);
            await _unitOfWork.SupplierRepository.AddAsync(supplier);
            await _unitOfWork.CommitAsync(); // persist changes
            return _mapper.Map<SupplierDto>(supplier);
        }

        public async Task<bool> UpdateAsync(SupplierDto supplierDto)
        {
            var supplier = _mapper.Map<Supplier>(supplierDto);
            await _unitOfWork.SupplierRepository.UpdateAsync(supplier);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var supplier = await _unitOfWork.SupplierRepository.GetByIdAsync(id);
            if (supplier == null) return false;
            await _unitOfWork.SupplierRepository.DeleteAsync(supplier);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }
    }
}
