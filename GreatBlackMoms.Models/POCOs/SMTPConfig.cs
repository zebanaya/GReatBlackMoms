namespace GreatBlackMoms.Models.POCOs
{
    public class SMTPConfig
    {
        public string InboxEmail { get; set; }
        public string MainEmail { get; set; }
        public string MailPass { get; set; }
        public string Server { get; set; }
        public int Port { get; set; }
    }
}