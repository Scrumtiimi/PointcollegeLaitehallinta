//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PointcollegeLaitehallinta.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Henkilot
    {
        public System.Guid Henkilo_uid { get; set; }
        public string Henkilonumero { get; set; }
        public string Etunimi { get; set; }
        public string Sukunimi { get; set; }
        public string Osoite { get; set; }
        public Nullable<System.Guid> Postinumero_uid { get; set; }
        public string Kayttajanimi { get; set; }
        public string Salasana { get; set; }
        public string Lisatietoja { get; set; }
    }
}
