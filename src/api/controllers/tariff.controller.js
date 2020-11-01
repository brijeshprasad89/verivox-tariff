const TariffService = require('../services/tariff.service');

/**
 * Get tariffs
 * @returns List of Products
 */
const tariffService = new TariffService();
function get(req, res) {
  return res.json(tariffService.compareTariffs(req.query.consumption));
}

module.exports = {  get };
