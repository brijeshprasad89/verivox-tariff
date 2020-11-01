const ProductB = require('../models/productB.model');
const ProductA = require('../models/productA.model');
const ProductTariff = require('../models/productTariff.model');

class TariffService {
    constructor() {  }

    compareTariffs = (consumption) => {
        const productA = new ProductA(consumption);
        const productB = new ProductB(consumption);
        return productA.calculateTotalBill() < productB.calculateTotalBill() ? 
        [new ProductTariff("Base Tariff",productA.totalCost), new ProductTariff("Packaged Tariff",productB.totalCost)] : 
        [new ProductTariff("Packaged Tariff",productB.totalCost), new ProductTariff("Base Tariff",productA.totalCost)]
    }
}

module.exports = TariffService