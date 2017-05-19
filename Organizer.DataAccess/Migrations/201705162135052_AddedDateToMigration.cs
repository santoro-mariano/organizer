namespace Organizer.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedDateToMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movement", "Date", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movement", "Date");
        }
    }
}
