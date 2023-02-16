import nodemailer from 'nodemailer';

class MailController {
	private config = () => {
		return nodemailer.createTransport({
			host: 'localhost',
			port: 25,
		});
	};

	sendWelcomeMail = (email: string) => {
		this.config().sendMail({
			from: 'me@gmail.com',
			to: 'you@gmail.com',
			subject: 'Signup user',
			text: `Welcome ${email} to my website`,
		});
	};

	sendResetPasswordMail = (email: string, reset_token: string) => {
		this.config().sendMail({
			from: 'me@gmail.com',
			to: email,
			subject: 'Signup user',
			html: `<div>
          <a href="http://localhost:5173/reset-password/${reset_token}" target="_blank">Reset password</a>
          </div>`,
		});
	};
}

export default MailController;
