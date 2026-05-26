const nodemailer = require('nodemailer');
require('dotenv').config({ path: './.env' });

async function testMail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'Test Email via Service',
      text: 'This is a test email to check SMTP configuration using service: gmail.',
    });
    console.log('Success via Service:', info.messageId);
  } catch (err) {
    console.error('SMTP Error via Service:', err.message);
  }
}

testMail();
