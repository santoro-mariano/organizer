using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Organizer.DataAccess;
using Organizer.Model;

namespace Organizer.Business
{
    public class FinantialManager
    {
        public IEnumerable<Currency> GetCurrencies()
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Currencies.ToList();
            }
        }

        public Currency GetCurrencyById(long currencyId)
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Currencies.Find(currencyId);
            }
        }

        public int AddCurrency(Currency currency)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Currencies.Add(currency);
                return ctx.SaveChanges();
            }
        }

        public int UpdateCurrency(Currency currency)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Entry(currency).State = EntityState.Modified;
                return ctx.SaveChanges();
            }
        }

        public int RemoveCurrency(long currencyId)
        {
            using (var ctx = new OrganizerContext())
            {
                var currency = ctx.Currencies.Find(currencyId);
                if (currency == null)
                {
                    return 0;
                }
                ctx.Currencies.Remove(currency);
                return ctx.SaveChanges();
            }
        }

        public IEnumerable<Account> GetAccounts()
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Accounts.ToList();
            }
        }

        public Account GetAccountById(long accountId)
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Accounts.Find(accountId);
            }
        }

        public int AddAccount(Account account)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Accounts.Add(account);
                return ctx.SaveChanges();
            }
        }

        public int UpdateAccount(Account account)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Entry(account).State = EntityState.Modified;
                return ctx.SaveChanges();
            }
        }

        public int RemoveAccount(long accountId)
        {
            using (var ctx = new OrganizerContext())
            {
                var account = ctx.Accounts.Find(accountId);
                if (account == null)
                {
                    return 0;
                }
                ctx.Accounts.Remove(account);
                return ctx.SaveChanges();
            }
        }

        public IEnumerable<Card> GetCards()
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Cards.ToList();
            }
        }

        public IEnumerable<Card> GetCardsByType(CardType cardType)
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Cards.Where(c => c.Type == cardType);
            }
        }

        public Card GetCardById(long cardId)
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.Cards.Find(cardId);
            }
        }

        public int AddCard(Card card)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Cards.Add(card);
                return ctx.SaveChanges();
            }
        }

        public int UpdateCard(Card card)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Entry(card).State = EntityState.Modified;
                return ctx.SaveChanges();
            }
        }

        public int RemoveCard(long cardId)
        {
            using (var ctx = new OrganizerContext())
            {
                var card = ctx.Cards.Find(cardId);
                if (card == null)
                {
                    return 0;
                }
                ctx.Cards.Remove(card);
                return ctx.SaveChanges();
            }
        }

        public IEnumerable<CardCompany> GetCardCompanies()
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.CardCompanies.ToList();
            }
        }

        public CardCompany GetCardCompanyById(long cardCompanyId)
        {
            using (var ctx = new OrganizerContext())
            {
                return ctx.CardCompanies.Find(cardCompanyId);
            }
        }

        public int AddCardCompany(CardCompany cardCompany)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.CardCompanies.Add(cardCompany);
                return ctx.SaveChanges();
            }
        }

        public int UpdateCardCompany(CardCompany cardCompany)
        {
            using (var ctx = new OrganizerContext())
            {
                ctx.Entry(cardCompany).State = EntityState.Modified;
                return ctx.SaveChanges();
            }
        }

        public int RemoveCardCompany(long cardCompanyId)
        {
            using (var ctx = new OrganizerContext())
            {
                var cardCompany = ctx.CardCompanies.Find(cardCompanyId);
                if (cardCompany == null)
                {
                    return 0;
                }
                ctx.CardCompanies.Remove(cardCompany);
                return ctx.SaveChanges();
            }
        }
    }
}
