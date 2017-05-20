using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Organizer.DataAccess;
using Organizer.Model;

namespace Organizer.Business
{
    public class MovementManager
    {
        public IEnumerable<Movement> GetMovements()
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Movements.ToList();
            }
        }

        public Movement GetMovementById(long entryId)
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Movements.Find(entryId);
            }
        }

        public IEnumerable<string> GetMovementDescriptions()
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Movements.Select(m => m.Description).ToList();
            }
        }

        public int AddMovement(Movement movement)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Movements.Add(movement);
                return ctx.SaveChanges();
            }
        }

        public int UpdateMovement(Movement movement)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Entry(movement).State = EntityState.Modified;
                return ctx.SaveChanges();
            }
        }

        public int RemoveMovement(long entryId)
        {
            using (var ctx = new OrganizerContext())
            {
                var entry = ctx.Movements.Find(entryId);
                if (entry == null)
                {
                    return 0;
                }
                ctx.Movements.Remove(entry);
                return ctx.SaveChanges();
            }
        }
    }
}
