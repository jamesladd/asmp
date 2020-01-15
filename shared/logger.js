/* eslint no-console: ["off"] */
const configs = require('../shared/config');

/**
 * @description Logger class
 * This is responsible for logging of all kind of stuff in the application
 * Default, we are using the console api for logging and this provides the basic level of logging such as
 * you can use the available method of console in development but in production these will be replaced with empty methods
 * This can be extended with the help of adding Log level functionality
 */
class AppLogger {

  constructor() {
    this.initLogger();
  }

  initLogger() {
    /** Checking the environment */
    if (configs.env !== 'production') {
      this.log = console.log.bind(console);
      this.debug = console.debug.bind(console);
      this.info = console.info.bind(console);
      this.warn = console.warn.bind(console);
      this.error = console.error.bind(console);
      this.logToServer = this.error;
    } else {
      /** In case of production replace the functions definition */
      this.log = this.debug = this.info = this.warn = this.error = () => {};
      this.logToServer = (err) => {
        /** temp added to print in the console during production */
        console.error(err); //
        /** TODO.JCL: API integration for logging to server or any custom logic in case of Production environment */
      };
    }
  }
}

const logger = new AppLogger();
module.exports = logger;
