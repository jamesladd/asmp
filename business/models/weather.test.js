const Weather = require('./weather');

describe('Weather Test', () => {
  describe('create', () => {

    it('should use NoOp provider when config invalid', () => {
      const weather = Weather.create({});
      expect(weather.provider.constructor.name).toBe('NoOpWeatherProvider');
    });

    it('should use Weather provider when config valid', () => {
      const weather = Weather.create({ weather_url: 'test-url', weather_key: 'test-key' });
      expect(weather.provider.constructor.name).toBe('WeatherProvider');
    });
  });

  describe('get', () => {
    it('should delegate to provider', () => {
      const weather = Weather.create({});
      weather.provider = {
        get() {
          return 'provider-called';
        }
      };
      expect(weather.get()).toBe('provider-called');
    });
  });
});