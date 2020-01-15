const configs = require('../shared/config');
const logger = require("../shared/logger");

const models = require('../business/models');
const config = configs[configs.env];

const getWeather = async (req, res) => {
  logger.debug('getWeather');
  try {
    const { Weather } = models;
    const service = Weather.create(config);
    const weather = await service.get();
    return res.status(200).json(weather);
  } catch (error) {
    logger.error('getWeather', error);
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getWeather
};
