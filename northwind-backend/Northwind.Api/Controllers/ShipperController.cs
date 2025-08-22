using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Application.DTOs;
using Northwind.Application.Interfaces;

namespace Northwind.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShippersController : ControllerBase
    {
        private readonly IShipperService  _ShipperService;

        public ShippersController(IShipperService ShipperService)
        {
            _ShipperService = ShipperService;
        }

        // GET: api/Category
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShipperDto>>> GetAll()
        {
            var Shippers = await _ShipperService.GetAllAsync();
            return Ok(Shippers);
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShipperDto>> GetById(int id)
        {
            var Shipper = await _ShipperService.GetByIdAsync(id);
            if (Shipper == null) return NotFound();
            return Ok(Shipper);
        }

        // POST: api/Shipper
        [HttpPost]
        public async Task<ActionResult<ShipperDto>> Create(ShipperDto ShipperDto)
        {
            var created = await _ShipperService.CreateAsync(ShipperDto);
            return CreatedAtAction(nameof(GetById), new { id = created.ShipperId }, created);
        }

        // PUT: api/Shipper/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, ShipperDto ShipperDto)
        {
            if (id != ShipperDto.ShipperId) return BadRequest("Id mismatch");

            var updated = await _ShipperService.UpdateAsync(ShipperDto);
            if (!updated) return NotFound();

            return NoContent();
        }

        // DELETE: api/Shipper/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _ShipperService.DeleteAsync(id);
            if (!deleted) return NotFound();

            return NoContent();
        }
    }
}
