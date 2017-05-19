namespace Organizer.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Account",
                c => new
                    {
                        AccountId = c.Long(nullable: false, identity: true),
                        CBU = c.String(),
                        Description = c.String(),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.AccountId);
            
            CreateTable(
                "dbo.CardCompany",
                c => new
                    {
                        CardCompanyId = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.CardCompanyId);
            
            CreateTable(
                "dbo.Card",
                c => new
                    {
                        CardId = c.Long(nullable: false, identity: true),
                        Type = c.Int(nullable: false),
                        CompanyId = c.Long(nullable: false),
                        Number = c.String(),
                        Owner = c.String(),
                    })
                .PrimaryKey(t => t.CardId)
                .ForeignKey("dbo.CardCompany", t => t.CompanyId, cascadeDelete: true)
                .Index(t => t.CompanyId);
            
            CreateTable(
                "dbo.Currency",
                c => new
                    {
                        CurrencyId = c.Long(nullable: false, identity: true),
                        Symbol = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.CurrencyId);
            
            CreateTable(
                "dbo.Movement",
                c => new
                    {
                        MovementId = c.Long(nullable: false, identity: true),
                        Type = c.Int(nullable: false),
                        Origin = c.Int(nullable: false),
                        OriginAccountId = c.Long(nullable: false),
                        Description = c.String(),
                        CurrencyId = c.Long(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.MovementId)
                .ForeignKey("dbo.Currency", t => t.CurrencyId, cascadeDelete: true)
                .ForeignKey("dbo.Account", t => t.OriginAccountId, cascadeDelete: true)
                .Index(t => t.OriginAccountId)
                .Index(t => t.CurrencyId);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        UserId = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                        Lastname = c.String(),
                        Username = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Movement", "OriginAccountId", "dbo.Account");
            DropForeignKey("dbo.Movement", "CurrencyId", "dbo.Currency");
            DropForeignKey("dbo.Card", "CompanyId", "dbo.CardCompany");
            DropIndex("dbo.Movement", new[] { "CurrencyId" });
            DropIndex("dbo.Movement", new[] { "OriginAccountId" });
            DropIndex("dbo.Card", new[] { "CompanyId" });
            DropTable("dbo.User");
            DropTable("dbo.Movement");
            DropTable("dbo.Currency");
            DropTable("dbo.Card");
            DropTable("dbo.CardCompany");
            DropTable("dbo.Account");
        }
    }
}
