﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class LaitehallintaEntities : DbContext
    {
        public LaitehallintaEntities()
            : base("name=LaitehallintaEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Henkilot> Henkilots { get; set; }
        public virtual DbSet<Laitetyypit> Laitetyypits { get; set; }
        public virtual DbSet<Laitteet> Laitteets { get; set; }
        public virtual DbSet<Postinumerot> Postinumerots { get; set; }
        public virtual DbSet<Tapahtumalokit> Tapahtumalokits { get; set; }
        public virtual DbSet<Tapahtumatyyppit> Tapahtumatyyppits { get; set; }
        public virtual DbSet<Varastopaikat> Varastopaikats { get; set; }
        public virtual DbSet<Varastot> Varastots { get; set; }
    }
}
