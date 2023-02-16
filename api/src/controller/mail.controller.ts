import nodemailer from "nodemailer";

class MailController {
    private config = () => {
        return nodemailer.createTransport({
          host: "localhost",
          port: 25,
        });
      };
    
      sendWelcomeMail = (email: string) => {
        this.config().sendMail({
          from: "me@gmail.com",
          to: "you@gmail.com",
          subject: "Signup user",
          text: `Welcome ${email} to my website`,
        });
      };
    
      sendResetPasswordMail = (email: string) => {
        this.config().sendMail({
          from: "me@gmail.com",
          to: email,
          subject: "Signup user",
          html: `<div>
          <a href="">Reset password</a>
          </div>`
        });
      };
}

export default MailController;