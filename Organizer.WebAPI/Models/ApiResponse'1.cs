namespace Organizer.WebAPI.Models
{
    public class ApiResponse<T> : ApiResponse
    {
        public T Data { get; set; }
    }
}