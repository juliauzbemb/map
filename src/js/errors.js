export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [100, 'input error'],
      [200, 'value error'],
      [300, 'description error'],
      [400, 'request error'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return 'Unknown error';
    }
  }
}
