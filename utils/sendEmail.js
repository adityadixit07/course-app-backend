// import{createTransport} from 'nodemailer'

// export const sendEmail = async (to, subject, text) => {
//   const transporter = createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });
//   await transporter.sendMail({
//     to,
//     subject,
//     text,
//   });
// };

import { createTransport } from "nodemailer";
const initializeTransporter = () => {
  return createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};
export const sendEmail = async (to, subject, text) => {
  const transporter = initializeTransporter();

  try {
    await transporter.sendMail({
      to,
      subject,
      text,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
