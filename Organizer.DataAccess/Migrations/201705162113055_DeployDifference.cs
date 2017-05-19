namespace Organizer.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeployDifference : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Card", "ExpirationDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Card", "ExpirationDate");
        }
    }
}
