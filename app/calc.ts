export class Calculator {
  add(...args: Array<number>) {
    return args.reduce((accum, num) => accum + num, 0);
  }

  minus(value1: number, value2: number) {
    return value1 - value2;
  }

  multiply(value1: number, value2: number) {
    return value1 * value2;
  }

  divide(value1: number, value2: number) {
    if (value2 === 0) {
      throw new Error("You can not divide by 0");
    }
    return value1 / value2;
  }
}