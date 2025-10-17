import Mailgen from "mailgen";

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
  forgotPasswordMailgenContent
}