const logger = require('../logger');
const httpClient = require('./http-client');

class NoOpWeatherProvider {
  get() {
    logger.error('NoOpWeatherProvider.get - did you configure correctly?');
    return {
      "wind_speed": 0,
      "temperature_degrees": 0
    };
  }
}

class WeatherProvider {
  constructor(config) {
    this.config = config;
  }

  create(config) {
    logger.debug('WeatherProvider.create', config);
    return new WeatherProvider(config);
  }

  async get() {
    logger.debug('WeatherProvider.get', this.config);
    logger.info('*** TODO.JCL *** complete this when ACCESS_KEY available.');
    // const result = await httpClient.get(this.url(), this.httpConfig());
    // return result.data;
    return {
      wind_speed: 20,
      temperature_degrees: 29
    };
  }

  url() {
    return this.config.weather_url;
  }

  httpConfig() {
    return {};
  }
}

const NoOp = new NoOpWeatherProvider();
const Weather = new WeatherProvider();

module.exports = {
  NoOp,
  Weather
};
