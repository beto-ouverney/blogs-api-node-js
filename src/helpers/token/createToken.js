const jwt = require('jsonwebtoken');
require('dotenv').config();

async function CreateToken(user) {
  const token = jwt.sign({
    data: user }, process.env.JWT_SECRET, { expiresIn: '365d', algorithm: 'HS256',
  });

  return token;
}

module.exports = { CreateToken };
