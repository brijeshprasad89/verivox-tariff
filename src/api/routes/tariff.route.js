const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const userCtrl = require('../controllers/tariff.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(validate(paramValidation.getTarrifs),userCtrl.get);

module.exports = router;
