class ProductA {
    constructor(totalConsumptionInKwh) {
      this.totalConsumptionInKwh = totalConsumptionInKwh;
      this.name = "Base Tariff";
      this.baseCost = 5;
      this.additionalCost = 0.22;
      this.totalCost = null;
    }
  
    calculateTotalBill = () => {
      this.totalCost = this.baseCost * 12 + this.totalConsumptionInKwh*this.additionalCost;
      return this.totalCost;
    }
  }
  
  
  module.exports = ProductA