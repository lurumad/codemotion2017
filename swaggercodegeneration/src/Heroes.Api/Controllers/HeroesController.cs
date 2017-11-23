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
            new Hero{ Id = 11, Title = "Mr. Nice" },
            new Hero{ Id = 12, Title = "Narco" },
            new Hero{ Id = 13, Title = "Bombasto" },
            new Hero{ Id = 14, Title = "Celeritas" },
            new Hero{ Id = 15, Title = "Magneta" },
            new Hero{ Id = 16, Title = "RubberMan" },
            new Hero{ Id = 17, Title = "Dynama" },
            new Hero{ Id = 18, Title = "Dr IQ" },
            new Hero{ Id = 19, Title = "Magma" },
            new Hero{ Id = 20, Title = "Tornado" }
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
