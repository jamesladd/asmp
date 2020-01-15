const providers = require('../../shared/providers/weather-providers');
const noOpProvider = providers.NoOp;

describe('NoOp Weather Provider Test', () => {
  describe('get', () => {
    it('should return hard coded result', () => {
      expect(noOpProvider.get()).toMatchObject({ temperature_degrees: 0, wind_speed: 0 });
    });
  });
});