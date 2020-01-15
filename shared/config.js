require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

module.exports = {
  env,
  development: {
    env: 'development',
    weather_url: process.env.DEV_WEATHER_URL,
    weather_key: process.env.DEV_WEATHER_KEY
  },
  test: {
    env: 'test',
    weather_url: process.env.TEST_WEATHER_URL,
    weather_key: process.env.TEST_WEATHER_KEY
  },
  production: {
    env: 'production',
    weather_url: process.env.PROD_WEATHER_URL,
    weather_key: process.env.PROD_WEATHER_KEY
  },
};