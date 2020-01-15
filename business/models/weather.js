const logger = require('../../shared/logger');
const providers = require('../../shared/providers/weather-providers');

// Class Weather acts as a proxy to the actual provider of
// the Weather. This enables the interface to remain the same
// when different providers are plugged-in.
// ie: Feature toggles.
//
// For example, when the configuration is invalid the NoOp provider
// will be used enabling the service to run but show that it is not
// configured correctly - making support easier.
//

class Weather {
  constructor(provider) {
    this.provider = provider;
  }

  create(config) {
    logger.debug('Weather.create', config);
    if (this.isConfiguredCorrectly(config)) {
      return new Weather(providers.Weather.create(config));
    }
    return new Weather(providers.NoOp);
  }

  isConfiguredCorrectly(config) {
    return this.isValidConfigValue(config.weather_url) && this.isValidConfigValue(config.weather_key);
  }

  isValidConfigValue(value) {
    return value && value !== '';
  }

  get() {
    logger.debug('Weather.get');
    return this.provider.get();
  }
}

const weather = new Weather();
module.exports = weather;
