using System;
using System.Collections.Generic;
using System.Web.Http;
using Organizer.Business;
using Organizer.Model;
using Organizer.WebAPI.Models;

namespace Organizer.WebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Movements")]
    public class MovementsController: ApiController
    {
        private readonly MovementManager movementManager = new MovementManager();

        public ApiResponse<IEnumerable<Movement>> GetMovements()
        {
            var result = new ApiResponse<IEnumerable<Movement>>();
            try
            {
                result.Data = this.movementManager.GetMovements();
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        [Route("{movementId}")]
        public ApiResponse<Movement> GetMovement(long movementId)
        {
            var result = new ApiResponse<Movement>();
            try
            {
                result.Data = this.movementManager.GetMovementById(movementId);
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        [Route("Descriptions")]
        public ApiResponse<IEnumerable<string>> GetMovementDescriptions()
        {
            var result = new ApiResponse<IEnumerable<string>>();
            try
            {
                result.Data = this.movementManager.GetMovementDescriptions();
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        public ApiResponse PostMovement([FromBody] Movement movement)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.movementManager.AddMovement(movement) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        public ApiResponse PutMovement([FromBody] Movement movement)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.movementManager.UpdateMovement(movement) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        [Route("{movementId}")]
        public ApiResponse DeleteMovement([FromBody] long movementId)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.movementManager.RemoveMovement(movementId) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }
    }
}
