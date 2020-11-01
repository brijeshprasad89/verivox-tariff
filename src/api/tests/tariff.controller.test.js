const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

describe('## Misc', () => {
  describe('# GET /api/health-check', () => {
    it('should return OK', (done) => {
      request(app)
        .get('/api/health-check')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.text).to.equal('OK');
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/404', () => {
    it('should return 404 status', (done) => {
      request(app)
        .get('/api/404')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# Error Handling', () => {

    it('should handle express validation error - consumption is required', (done) => {
      request(app)
        .get('/api/tariff?')
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.message).to.equal('"consumption" is required');
          done();
        })
        .catch(done);
    });

    it('should handle express validation error - consumption must be a number', (done) => {
      request(app)
        .get('/api/tariff?consumption=')
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.message).to.equal('"consumption" must be a number');
          done();
        })
        .catch(done);
    });

  });
});

describe("# Tariff Controller", () => {
  describe('GET /api/tariff?consumption=', () => {
    it('should calculate tariff and return array of products', (done) => {
      request(app)
        .get(`/api/tariff?consumption=${850}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.length).to.equal(2);
          expect(res.body[0].name).to.equal("Base Tariff");
          done();
        })
        .catch(done);
    });
  })
})
