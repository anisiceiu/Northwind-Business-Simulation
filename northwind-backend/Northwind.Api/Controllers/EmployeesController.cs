using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Application.DTOs;
using Northwind.Application.Interfaces;

namespace Northwind.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService  _EmployeeService;

        public EmployeesController(IEmployeeService EmployeeService)
        {
            _EmployeeService = EmployeeService;
        }

        // GET: api/Category
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeDto>>> GetAll()
        {
            var Employees = await _EmployeeService.GetAllAsync();
            return Ok(Employees);
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeDto>> GetById(int id)
        {
            var Employee = await _EmployeeService.GetByIdAsync(id);
            if (Employee == null) return NotFound();
            return Ok(Employee);
        }

        // POST: api/Employee
        [HttpPost]
        public async Task<ActionResult<EmployeeDto>> Create(EmployeeDto EmployeeDto)
        {
            var created = await _EmployeeService.CreateAsync(EmployeeDto);
            return CreatedAtAction(nameof(GetById), new { id = created.EmployeeId }, created);
        }

        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, EmployeeDto EmployeeDto)
        {
            if (id != EmployeeDto.EmployeeId) return BadRequest("Id mismatch");

            var updated = await _EmployeeService.UpdateAsync(EmployeeDto);
            if (!updated) return NotFound();

            return NoContent();
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _EmployeeService.DeleteAsync(id);
            if (!deleted) return NotFound();

            return NoContent();
        }
    }
}
