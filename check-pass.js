require('dotenv').config({ path: './.env' });
const pass = process.env.MAIL_PASS;
console.log('Password length:', pass.length);
console.log('Password characters:', [...pass].map(c => c.charCodeAt(0)));
