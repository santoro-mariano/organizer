using System;
using System.Collections.Generic;
using System.Web.Http;
using Organizer.Business;
using Organizer.Model;
using Organizer.WebAPI.Models;

namespace Organizer.WebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Accounts")]
    public class AccountsController: ApiController
    {
        private readonly FinantialManager finantialManager = new FinantialManager();

        public ApiResponse<IEnumerable<Account>> GetAccounts()
        {
            var result = new ApiResponse<IEnumerable<Account>>();
            try
            {
                result.Data = this.finantialManager.GetAccounts();
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        [Route("{accountId}")]
        public ApiResponse<Account> GetAccount(long accountId)
        {
            var result = new ApiResponse<Account>();
            try
            {
                result.Data = this.finantialManager.GetAccountById(accountId);
                result.Result = true;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }
            return result;
        }

        public ApiResponse PostAccount([FromBody] Account account)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.AddAccount(account) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        public ApiResponse PutAccount([FromBody] Account account)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.UpdateAccount(account) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }

        [Route("{accountId}")]
        public ApiResponse DeleteAccount(long accountId)
        {
            var result = new ApiResponse();
            try
            {
                result.Result = this.finantialManager.RemoveAccount(accountId) > 0;
            }
            catch (Exception exc)
            {
                result.ResultMessage = exc.Message;
            }

            return result;
        }
    }
}
