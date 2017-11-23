using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using Heroes.Api.Model;
using System.Collections.Generic;
using System.Linq;
using System.Net;

namespace Heroes.Api.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : ControllerBase
    {
        private List<Hero> heroes = new List<Hero>
        {
            new Hero{ Id = 11, Name = "Mr. Nice" },
            new Hero{ Id = 12, Name = "Narco" },
            new Hero{ Id = 13, Name = "Bombasto" },
            new Hero{ Id = 14, Name = "Celeritas" },
            new Hero{ Id = 15, Name = "Magneta" },
            new Hero{ Id = 16, Name = "RubberMan" },
            new Hero{ Id = 17, Name = "Dynama" },
            new Hero{ Id = 18, Name = "Dr IQ" },
            new Hero{ Id = 19, Name = "Magma" },
            new Hero{ Id = 20, Name = "Tornado" }
        };

        [HttpGet]
        [SwaggerResponse(HttpStatusCode.OK, typeof(List<Hero>))]
        public IActionResult Get()
        {
            return Ok(heroes);
        }

        [HttpGet("{id:int}")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Hero))]
        public IActionResult GetBy(int id)
        {
            return Ok(null);
        }
    }
}
