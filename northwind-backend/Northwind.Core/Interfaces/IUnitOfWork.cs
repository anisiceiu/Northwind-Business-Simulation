﻿using Northwind.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Category> CategoryRepository { get; }
        IRepository<Product> ProductRepository { get; }
        IRepository<User> AccountRepository { get; }
        IRepository<Supplier> SupplierRepository { get; }
        IRepository<Customer> CustomerRepository { get; }
        IRepository<Employee> EmployeeRepository { get; }
        IRepository<Shipper> ShipperRepository { get; }
        // Add other repositories as needed

        Task<int> CommitAsync();
    }
}
