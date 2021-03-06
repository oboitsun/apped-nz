// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const PASSWORD = process.env.password;
export default async function handler(req, res) {
  // console.log(req.body);
  let nodemailer = require("nodemailer");
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "nodemailer.mail.sender@gmail.com",
        pass: PASSWORD,
      },
      secure: true,
    });

    // create reusable transporter object using the default SMTP transport hello@webignite.com

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"From APPED NZ" <nodemailer.mail.sender@gmail.com>', // sender address
      to: "hello@apped.nz", // list of receivers
      subject: `Message From APPED NZ Contact Form`,
      text: `Name: ${req.body.name}<br/>Contact info:${req.body.email}<br/>Budget:${req.body.budget}<br/>Message:${req.body.message}`,
      html: `<div><div>Name: ${req.body.name}</div><br/><div>Contact info:${req.body.email}<br/></div><div>Budget:${req.body.budget}<br/></div><div>Message:${req.body.message}</div></div>`,
    });

    return `Message sent: %s", ${info.messageId}`;
  }

  const result = await main();
  console.log(result);
  res.json({ done: true, result });
}
