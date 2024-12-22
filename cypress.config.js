const dotenv = require('dotenv').config();

module.exports = {
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      defaultPassword: process.env.SENHA_DEFAULT,
    },
  },
};
