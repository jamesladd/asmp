const logger = require('../logger');
const axios = require('axios');

/**
 * Some general configuration can be added like timeout, headers, params etc.
 * More details can be found on https://github.com/axios/axios
 **/
const config = {
};

const httpClient = axios.create(config);

/**
 * Auth interceptors
 * @description Configuration related to AUTH token can be done in interceptors.
 * Currently it is just doing nothing but idea to to show the capability of axios and its interceptors
 * In future, interceptors can be created into separate files and consumed into multiple http clients
 * @param {*} config
 */
const authInterceptor = config => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.Accept = 'application/json';
  return config;
};

const loggerInterceptor = config => {
  logger.debug('loggerInterceptor', config.method, config.url);
  return config;
};

/** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

module.exports = httpClient;
