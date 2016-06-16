/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Stock = require('../lib/stock');
const request = require('request');

describe('Stock', () => {
  describe('constructor', () => {
    it('should construct a new Stock object', () => {
      const stock1 = new Stock('AMZN');
      expect(stock1).to.be.instanceof(Stock);
      expect(stock1.symbol).to.equal('AMZN');
    });
  });

  describe('#purchase', () => {
    it('should purchase stock', (done) => {
      const stock1 = new Stock('AMZN');
      stock1.purchase(50, (err, totalPaid) => {
        expect(err).to.be.null;
        expect(totalPaid).to.be.above(0);
        expect(stock1.shares).to.equal(50);
        expect(stock1.name).to.have.length.above(0);
        expect(stock1.purchasePricePerShare).to.be.above(0);
        expect(totalPaid).to.equal(stock1.shares * stock1.purchasePricePerShare);
        done();
      });
    });
  });
  describe('#sell', () => {
    it('should sell stock', (done) => {
      const stock1 = new Stock('AMZN');
      // stock1.purchase(50, (err, totalPaid) => {
      stock1.shares = 50;
      stock1.purchasePricePerShare = 100;

      stock1.sell(30, (err, sharePrice, totalGained) => {
        expect(err).to.be.null;
        expect(totalGained).to.be.above(0);
        expect(stock1.shares).to.equal(20);
        expect(stock1.purchasePricePerShare).to.be.above(0);
        expect(totalGained).to.equal(30 * sharePrice);
        done();
      });

      // });
    });
  });
});
