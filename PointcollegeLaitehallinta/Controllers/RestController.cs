using PointcollegeLaitehallinta.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PointcollegeLaitehallinta.RestControllers
{
    [RoutePrefix("api/laitteet")]
    public class RestController : ApiController {

        

        
        [Route("")]
        [HttpGet]
        public IEnumerable<Laitteet> GetLaitteet() {

            LaitehallintaEntities ent = new LaitehallintaEntities();

            List<Laitteet> laitteet = new List<Laitteet>();
            laitteet = ent.Laitteets.ToList();

            return laitteet;
        }
        
        [Route("{id:int}")]
        [HttpGet]
        public Laitteet GetLaitteet(int id) {

            LaitehallintaEntities ent = new LaitehallintaEntities();

            var laite = (from l in ent.Laitteets
                         where l.Laitetyypit.Laitetyyppi == id
                         select l).SingleOrDefault();
            return (Laitteet)laite;
        }

        [Route("")]
        [HttpPost]
        public void AddLaite([FromBody] Laitteet laitteet) {

            LaitehallintaEntities ent = new LaitehallintaEntities();


            //toimii!!!
            //muista lisätä samanlainen objecti myös varastopaikoista
            ent.Laitteets.Add(new Laitteet {
                Laitetyypit = laitteet.Laitetyypit,
                Lisatietoja = laitteet.Lisatietoja,
                Tapahtumalokits = laitteet.Tapahtumalokits,
                Laitenimi = laitteet.Laitenimi,
                Sarjanumero = laitteet.Sarjanumero,
                Merkki = laitteet.Merkki,
                Hankitapaiva = laitteet.Hankitapaiva,
                Muisti = laitteet.Muisti,
                Kovalevynkoko = laitteet.Kovalevynkoko
            });

            ent.SaveChanges();
            
        }
    }
}
