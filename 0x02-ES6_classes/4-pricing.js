import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  /**
  * @param {Number} amount
  */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  /**
  * @param {Currency} currency
  */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency Object');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
