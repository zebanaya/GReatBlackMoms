using System.Threading.Tasks;
using GreatBlackMoms.Models.Dtos;
using GreatBlackMoms.Models.POCOs;

namespace GreatBlackMoms.Services.Interfaces
{
    public interface IEmailService
    {
         Task<bool> SendContactUsEmail(ContactUsEmailDto contactUsEmailDto, SMTPConfig config);
         Task<bool> SendResearchRegistrationEmail(ContactUsEmailDto contactUsEmailDto, SMTPConfig config);
    }
}