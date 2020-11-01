const Joi = require('joi');

module.exports = {
  // GET /tarrifs
  getTarrifs: {
    query: {
      consumption: Joi.number().required()
    }
  },
};
