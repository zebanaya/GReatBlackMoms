using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using GreatBlackMoms.Models.Dtos;
using GreatBlackMoms.Models.POCOs;
using GreatBlackMoms.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace GreatBlackMoms.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommunicationController : ControllerBase
    {
        private IEmailService _EmailService { get; }
        private IConfiguration _Config { get; }
        private SMTPConfig _SMTPConfig { get; set; }

        public CommunicationController(IEmailService EmailService, IConfiguration Config)
        {
            this._EmailService = EmailService;
            this._SMTPConfig = new SMTPConfig 
            {
                InboxEmail = Config["GreatBlackMomsContactUsEmail"],
                MainEmail = Config["MainEmail"],
                MailPass = Config["MainMailPass"],
                Server = Config["SMTPServer"],
                Port = Convert.ToInt32( Config["SMTPPort"])
            };
            this._Config = Config;
        }

        [HttpPost("SendContact")]
        public async Task<IActionResult> SendContactUsEmail(ContactUsEmailDto contactUsEmailDto)
        {
            if (await _EmailService.SendContactUsEmail(contactUsEmailDto, _SMTPConfig))
                return Ok(true);
            return BadRequest(false);
        }

        [HttpPost]
        public async Task<IActionResult> SendResearchRegistrationEmail(ContactUsEmailDto contactUsEmailDto)
        {
            if (await _EmailService.SendResearchRegistrationEmail(contactUsEmailDto, _SMTPConfig))
                return Ok(true);
            return BadRequest(false);
        }
    }
}