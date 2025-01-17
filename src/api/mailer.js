import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "josip.sudar@gmail.com",
    pass: "dgughhjzlgguludi",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    // eslint-disable-next-line no-undef
    from:
      (await require("../utils/storage").get("email")) ||
      "josip.sudar@gmail.com", // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
