
const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/weather', controllers.getWeather);

module.exports = router;