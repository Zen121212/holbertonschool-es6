import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  diplayFullPrice() {
    return `${this.amount} ${this.currency.diplayFullCurrency()}`;
  }

  static conertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
