const bcrypt = require('bcrypt');

const password = 'password123';
console.log('Plain text:', password);
const hashedPassword = bcrypt.hashSync(password, 10);
console.log('Hashed:', hashedPassword);
