using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Baseball.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Baseball.Controllers.Players
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        [HttpPost]
        public IActionResult Add(Player player)
        {
            return Ok();
        }
    }
}