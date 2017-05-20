using System;
using System.Collections.Generic;
using System.Web.Http;
using Organizer.Business;
using Organizer.Model;
using Organizer.WebAPI.Models;

namespace Organizer.WebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Cards")]
    public class CardsController: ApiController
    {
        private readonly FinantialManager finantialManager = new FinantialManager();

        public ApiResponse<IEnumerable<Card>> GetCards()
        {
            var result = new ApiResponse<IEnumerable<Card>>();
            try
            {
                result.Data = this.finantialManager.GetCards();
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        public ApiResponse<IEnumerable<Card>> GetCardsByType([FromUri] CardType type)
        {
            var result = new ApiResponse<IEnumerable<Card>>();
            try
            {
                result.Data = this.finantialManager.GetCardsByType(type);
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        [Route("{cardId}")]
        public ApiResponse<Card> GetCard(long cardId)
        {
            var result = new ApiResponse<Card>();
            try
            {
                result.Data = this.finantialManager.GetCardById(cardId);
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        public ApiResponse PostCard([FromBody] Card card)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.AddCard(card) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        public ApiResponse PutCard([FromBody] Card card)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.UpdateCard(card) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        [Route("{cardId}")]
        public ApiResponse DeleteCard(long cardId)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.RemoveCard(cardId) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }


        [Route("Companies")]
        public ApiResponse<IEnumerable<CardCompany>> GetCardCompanies()
        {
            var result = new ApiResponse<IEnumerable<CardCompany>>();
            try
            {
                result.Data = this.finantialManager.GetCardCompanies();
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        [Route("Companies/{cardCompanyId}")]
        public ApiResponse<CardCompany> GetCardCompany(long cardCompanyId)
        {
            var result = new ApiResponse<CardCompany>();
            try
            {
                result.Data = this.finantialManager.GetCardCompanyById(cardCompanyId);
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        [Route("Companies")]
        public ApiResponse PostCardCompany([FromBody] CardCompany cardCompany)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.AddCardCompany(cardCompany) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        [Route("Companies")]
        public ApiResponse PutCardCompany([FromBody] CardCompany cardCompany)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.UpdateCardCompany(cardCompany) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        [Route("Companies/{cardId}")]
        public ApiResponse DeleteCardCompany(long cardCompanyId)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.RemoveCardCompany(cardCompanyId) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }
    }
}
