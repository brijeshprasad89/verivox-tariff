class ProductB {
  constructor(totalConsumptionInKwh) {
    this.totalConsumptionInKwh = totalConsumptionInKwh;
    this.name = "Packaged Tariff";
    this.baseCost = 800;
    this.additionalCost = 0.30;
    this.totalCost = null;
  }

  calculateTotalBill = () => {
    if(this.totalConsumptionInKwh <= 4000) {
      this.totalCost = this.baseCost;
      return this.totalCost;
    }
    const extraConsumption = this.totalConsumptionInKwh - 4000;
    this.totalCost = this.baseCost + extraConsumption * this.additionalCost;
    return this.totalCost
  }
}


module.exports = ProductB