﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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

            LaitehallintaEntities3 ent = new LaitehallintaEntities3();

            List<Laitteet> laitteet = new List<Laitteet>();
            laitteet = ent.Laitteet.ToList();

            return laitteet;
        }
        
        [Route("{id:int}")]
        [HttpGet]
        public Laitteet GetLaitteet(int id) {

            LaitehallintaEntities3 ent = new LaitehallintaEntities3();

            var laite = (from l in ent.Laitteet
                         where l.Laitetyypit.Laitetyyppi == id
                         select l).SingleOrDefault();
            return (Laitteet)laite;
        }

        [Route("")]
        [HttpPost]
        public void AddLaite([FromBody] Laitteet laite) {

            LaitehallintaEntities3 ent = new LaitehallintaEntities3();

            try {
                var getLaite = ent.Laitteet.Count(l => l.Laitetyypit.Laitetyyppi == laite.Laitetyypit.Laitetyyppi);
                //check if posted laite object doesn't contain laitetyyppi then it will create new one 
                if(getLaite < 1) {
                    Guid LaiteUIDNew = Guid.NewGuid();
                    Guid LaiteTyyppiUIDNew = Guid.NewGuid();
                    Guid LaiteVarastopaikkaGUID = Guid.NewGuid();

                    //create new instance of laitteet and laitetyypit assing values from json object
                    Laitteet newLaite = new Laitteet();
                    newLaite.Laitenimi = laite.Laitenimi;
                    newLaite.Laitetyyppi_uid = LaiteTyyppiUIDNew;
                    newLaite.Laite_uid = LaiteUIDNew;
                    newLaite.Sarjanumero = laite.Sarjanumero;
                    newLaite.Merkki = laite.Merkki;
                    newLaite.Malli = laite.Malli;
                    newLaite.Hankitapaiva = laite.Hankitapaiva;
                    newLaite.Muisti = laite.Muisti;
                    newLaite.Kovalevynkoko = laite.Kovalevynkoko;
                    newLaite.Varastopaikka_uid = LaiteVarastopaikkaGUID;
                    newLaite.Lisatietoja = laite.Lisatietoja;
                    newLaite.Varastopaikat = laite.Varastopaikat;

                    Laitetyypit newLaiteTyyppi = new Laitetyypit();
                    newLaiteTyyppi.Laitetyyppi_uid = LaiteTyyppiUIDNew;
                    newLaiteTyyppi.Laitetyyppi = laite.Laitetyypit.Laitetyyppi;
                    newLaiteTyyppi.Laitetyyppinimi = laite.Laitetyypit.Laitetyyppinimi;
                    newLaiteTyyppi.Lisatietoja = laite.Lisatietoja;

                    //only varastopaikka_uid at the moment as otherwise there is constraint error on database
                    //most likely this object will consist more data
                    Varastopaikat newVarastoPaikka = new Varastopaikat();
                    newVarastoPaikka.Varastopaikka_uid = LaiteVarastopaikkaGUID;



                    ent.Laitteet.Add(newLaite);
                    ent.Laitetyypit.Add(newLaiteTyyppi);
                    ent.Varastopaikat.Add(newVarastoPaikka);

                    ent.SaveChanges();

                }
           
            } catch (Exception e) {
                Console.WriteLine("Tietokannasta löytyy jo kyseinen tieto", e);
            }

           
            
        }

        [Route("muutatiedot")]
        [HttpPost]
        public void ModifyLaite([FromBody] Laitteet laite) {
            LaitehallintaEntities3 ent = new LaitehallintaEntities3();

            Laitteet updateLaite = ent.Laitteet.Single(l => l.Laitetyypit.Laitetyyppi == laite.Laitetyypit.Laitetyyppi);

            if(updateLaite != null) {
                updateLaite.Laitenimi = laite.Laitenimi;
                updateLaite.Kovalevynkoko = laite.Kovalevynkoko;
                updateLaite.Lisatietoja = laite.Lisatietoja;
                updateLaite.Malli = laite.Malli;
                updateLaite.Muisti = laite.Muisti;

            }

            ent.SaveChanges();
            ent.Dispose();
        }
    }
}
