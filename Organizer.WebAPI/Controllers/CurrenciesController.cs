using System;
using System.Collections.Generic;
using System.Web.Http;
using Organizer.Business;
using Organizer.Model;
using Organizer.WebAPI.Models;

namespace Organizer.WebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Currencies")]
    public class CurrenciesController: ApiController
    {
        private readonly FinantialManager finantialManager = new FinantialManager();

        public ApiResponse<IEnumerable<Currency>> GetCurrencies()
        {
            var result = new ApiResponse<IEnumerable<Currency>>();
            try
            {
                result.Data = this.finantialManager.GetCurrencies() ?? new List<Currency>();
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        [Route("{currencyId}")]
        public ApiResponse<Currency> GetCurrency(long currencyId)
        {
            var result = new ApiResponse<Currency>();
            try
            {
                result.Data = this.finantialManager.GetCurrencyById(currencyId);
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        public ApiResponse PostCurrency([FromBody] Currency currency)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.AddCurrency(currency) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        public ApiResponse PutCurrency([FromBody] Currency currency)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.UpdateCurrency(currency) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        [Route("{currencyId}")]
        public ApiResponse DeleteCurrency(long currencyId)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.RemoveCurrency(currencyId) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }
    }
}