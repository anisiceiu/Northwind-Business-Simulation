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
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProductService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ProductDTO>> GetAllAsync()
        {
            var products = await _unitOfWork.ProductRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<ProductDTO>>(products);
        }

        public async Task<IEnumerable<ProductDTO>> GetAllWithIncludesAsync()
        {
            var products = await _unitOfWork.ProductRepository.GetAllWithIncludesAsync("Category", "Supplier");
            if (products == null || !products.Any())
            {
                return Enumerable.Empty<ProductDTO>();
            }
            else
            {
                var productDTOs = products.Select(p =>
                new ProductDTO
                {
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category?.CategoryName,
                    ProductId = p.ProductId,
                    ProductName = p.ProductName,
                    QuantityPerUnit = p.QuantityPerUnit,
                    Discontinued = p.Discontinued,
                    ReorderLevel = p.ReorderLevel,
                    SupplierId = p.SupplierId,
                    SupplierName = p.Supplier?.CompanyName,
                    UnitPrice = p.UnitPrice,
                    UnitsInStock = p.UnitsInStock,
                    UnitsOnOrder = p.UnitsOnOrder

                }).OrderBy(p => p.ProductName).ToList();

                return productDTOs;
            }

        }

        public async Task<ProductDTO?> GetByIdAsync(int id)
        {
            var product = await _unitOfWork.ProductRepository.GetByIdAsync(id);
            return product == null ? null : _mapper.Map<ProductDTO>(product);
        }

        public async Task<ProductDTO> CreateAsync(ProductDTO productDto)
        {
            var product = _mapper.Map<Product>(productDto);
            await _unitOfWork.ProductRepository.AddAsync(product);
            await _unitOfWork.CommitAsync(); // persist changes
            return _mapper.Map<ProductDTO>(product);
        }

        public async Task<bool> UpdateAsync(ProductDTO productDto)
        {
            var product = _mapper.Map<Product>(productDto);
            await _unitOfWork.ProductRepository.UpdateAsync(product);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var product = await _unitOfWork.ProductRepository.GetByIdAsync(id);
            if (product == null) return false;
            await _unitOfWork.ProductRepository.DeleteAsync(product);
            var result = await _unitOfWork.CommitAsync();
            return result > 0;
        }
    }
}
