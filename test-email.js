const nodemailer = require('nodemailer');
require('dotenv').config({ path: './.env' });

async function testMail() {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.MAIL_PORT || '587'),
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'Test Email',
      text: 'This is a test email to check SMTP configuration.',
    });
    console.log('Success:', info.messageId);
  } catch (err) {
    console.error('SMTP Error:', err.message);
  }
}

testMail();
