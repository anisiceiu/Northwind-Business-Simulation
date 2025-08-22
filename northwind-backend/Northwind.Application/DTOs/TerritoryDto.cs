using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Application.DTOs
{
    public class TerritoryDto
    {
        public string TerritoryId { get; set; } = null!;

        public string TerritoryDescription { get; set; } = null!;

        public int RegionId { get; set; }
    }
}
