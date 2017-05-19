namespace Organizer.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MovementEntityModified : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Movement", "OriginAccountId", "dbo.Account");
            DropIndex("dbo.Movement", new[] { "OriginAccountId" });
            AlterColumn("dbo.Movement", "OriginAccountId", c => c.Long());
            CreateIndex("dbo.Movement", "OriginAccountId");
            AddForeignKey("dbo.Movement", "OriginAccountId", "dbo.Account", "AccountId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Movement", "OriginAccountId", "dbo.Account");
            DropIndex("dbo.Movement", new[] { "OriginAccountId" });
            AlterColumn("dbo.Movement", "OriginAccountId", c => c.Long(nullable: false));
            CreateIndex("dbo.Movement", "OriginAccountId");
            AddForeignKey("dbo.Movement", "OriginAccountId", "dbo.Account", "AccountId", cascadeDelete: true);
        }
    }
}
