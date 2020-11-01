const chai = require("chai");
const expect = chai.expect;
const TariffService = require("../services/tariff.service");
describe("TariffService", function() {
  describe("compareTariffs", function() {
    it("should return productA as first tariff", function() {
      const tariffService = new TariffService();
      const productTariff = tariffService.compareTariffs(6000);
      expect(productTariff.length).to.equal(2);
      expect(productTariff[0].name).to.equal("Base Tariff");
      expect(productTariff[0].annualCost).to.equal(1380);
    });

    it("should return productB as first tariff", function() {
      const tariffService = new TariffService();
      const productTariff = tariffService.compareTariffs(3500);
      expect(productTariff.length).to.equal(2);
      expect(productTariff[0].name).to.equal("Packaged Tariff");
      expect(productTariff[0].annualCost).to.equal(800);
    });

  });
});