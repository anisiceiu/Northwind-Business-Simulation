using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Application.DTOs;
using Northwind.Application.Interfaces;

namespace Northwind.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TerritorysController : ControllerBase
    {
        private readonly ITerritoryService  _TerritoryService;

        public TerritorysController(ITerritoryService TerritoryService)
        {
            _TerritoryService = TerritoryService;
        }

        // GET: api/Category
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TerritoryDto>>> GetAll()
        {
            var Territorys = await _TerritoryService.GetAllAsync();
            return Ok(Territorys);
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TerritoryDto>> GetById(int id)
        {
            var Territory = await _TerritoryService.GetByIdAsync(id);
            if (Territory == null) return NotFound();
            return Ok(Territory);
        }

        // POST: api/Territory
        [HttpPost]
        public async Task<ActionResult<TerritoryDto>> Create(TerritoryDto TerritoryDto)
        {
            var created = await _TerritoryService.CreateAsync(TerritoryDto);
            return CreatedAtAction(nameof(GetById), new { id = created.TerritoryId }, created);
        }

        // PUT: api/Territory/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, TerritoryDto TerritoryDto)
        {
            if (id != TerritoryDto.TerritoryId) return BadRequest("Id mismatch");

            var updated = await _TerritoryService.UpdateAsync(TerritoryDto);
            if (!updated) return NotFound();

            return NoContent();
        }

        // DELETE: api/Territory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _TerritoryService.DeleteAsync(id);
            if (!deleted) return NotFound();

            return NoContent();
        }
    }
}
