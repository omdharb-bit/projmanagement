import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailgenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagerlink.com",
    },
  });

  const emailTextual = mailgenerator.generatePlaintext(options.mailgenContent);

  const emailHtml = mailgenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTO_HOST,
    port: process.env.MAILTRAP_SMTO_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTO_USER,
      pass: process.env.MAILTRAP_SMTO_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };
  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed silently. Make sure that you have provided your MAILTRAP credentials in the .env file",
    );
    console.error("Error: ", error);
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we're excited to have you on board.",
      action: {
        intstructons:
          "To verify your email please click on the following button",
        button: {
          color: "#328547ff",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help,or have questions? Just reply to this email,we'ed love to help",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to change the reset password of your account.",
      action: {
        intstructons:
          "To reswet your password please click on the following button",
        button: {
          color: "#328547ff",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help,or have questions? Just reply to this email,we'ed love to help",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
