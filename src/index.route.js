const express = require('express');
const tariffRoutes = require('./api/routes/tariff.route');

const router = express.Router(); // eslint-disable-line new-cap


/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount tariff routes at /tariff
router.use('/tariff', tariffRoutes);


module.exports = router;
