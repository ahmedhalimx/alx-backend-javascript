/**
* defines the Currency class
*/
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  /**
  * @param {Stirng} code
  */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  /**
  * @param {Stirng} name
  */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
  * display currency's name and symbol 'code'
  */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
