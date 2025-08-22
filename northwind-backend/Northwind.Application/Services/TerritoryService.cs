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
    public class TerritoryService : ITerritoryService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public TerritoryService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<TerritoryDto>> GetAllAsync()
        {
            var Territorys = await _unitOfWork.TerritoryRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<TerritoryDto>>(Territorys);
        }

        public async Task<TerritoryDto?> GetByIdAsync(int id)
        {
            var Territory = await _unitOfWork.TerritoryRepository.GetByIdAsync(id);
            return Territory == null ? null : _mapper.Map<TerritoryDto>(Territory);
        }

        public async Task<TerritoryDto> CreateAsync(TerritoryDto TerritoryDto)
        {
            var Territory = _mapper.Map<Territory>(TerritoryDto);
            await _unitOfWork.TerritoryRepository.AddAsync(Territory);
            await _unitOfWork.CommitAsync(); // persist changes
            return _mapper.Map<TerritoryDto>(Territory);
        }

        public async Task<bool> UpdateAsync(TerritoryDto TerritoryDto)
        {
            var Territory = _mapper.Map<Territory>(TerritoryDto);
            await _unitOfWork.TerritoryRepository.UpdateAsync(Territory);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var Territory = await _unitOfWork.TerritoryRepository.GetByIdAsync(id);
            if (Territory == null) return false;
            await _unitOfWork.TerritoryRepository.DeleteAsync(Territory);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }
    }
}
