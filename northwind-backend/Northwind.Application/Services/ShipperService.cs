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
    public class ShipperService : IShipperService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ShipperService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ShipperDto>> GetAllAsync()
        {
            var Shippers = await _unitOfWork.ShipperRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<ShipperDto>>(Shippers);
        }

        public async Task<ShipperDto?> GetByIdAsync(int id)
        {
            var Shipper = await _unitOfWork.ShipperRepository.GetByIdAsync(id);
            return Shipper == null ? null : _mapper.Map<ShipperDto>(Shipper);
        }

        public async Task<ShipperDto> CreateAsync(ShipperDto ShipperDto)
        {
            var Shipper = _mapper.Map<Shipper>(ShipperDto);
            await _unitOfWork.ShipperRepository.AddAsync(Shipper);
            await _unitOfWork.CommitAsync(); // persist changes
            return _mapper.Map<ShipperDto>(Shipper);
        }

        public async Task<bool> UpdateAsync(ShipperDto ShipperDto)
        {
            var Shipper = _mapper.Map<Shipper>(ShipperDto);
            await _unitOfWork.ShipperRepository.UpdateAsync(Shipper);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var Shipper = await _unitOfWork.ShipperRepository.GetByIdAsync(id);
            if (Shipper == null) return false;
            await _unitOfWork.ShipperRepository.DeleteAsync(Shipper);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }
    }
}
