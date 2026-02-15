import { expect } from "chai";
import { Calculator } from "../app/calc";

describe("Test calculator", () => {

  describe("Test sum", () => {
    const calc = new Calculator();

    it("Add two zeros", () => {
      const result = calc.add(0, 0);
      expect(result).to.equal(0);
    });

    it("Add zero and number", () => {
      const result = calc.add(0, 100);
      expect(result).to.equal(100);
    });

    it("Add two numbers", () => {
      const result = calc.add(111, 123);
      expect(result).to.equal(234);
    });

    it("Add zero and negative number", () => {
      const result = calc.add(0, -21);
      expect(result).to.equal(-21);
    });

    it("Add two negative numbers", () => {
      const result = calc.add(-8, -25);
      expect(result).to.equal(-33);
    });

    it("Add negative and positive numbers", () => {
      const result = calc.add(-23, 10);
      expect(result).to.equal(-13);
    });

    it("Add three numbers", () => {
      const result = calc.add(23, 1, 15);
      expect(result).to.equal(39);
    });

    it("Add three numbers including zero", () => {
      const result = calc.add(100, 0, 200);
      expect(result).to.equal(300);
    });

    it("Add two long numbers", () => {
      const result = calc.add(123456789, 123456789);
      expect(result).to.equal(246913578);
    });

    it("Add ten numbers", () => {
      const result = calc.add(1,1,2,3,4,5,6,7,8,9);
      expect(result).to.equal(46);
    });

     it("Add two fractions", () => {
        const result = calc.add(1.5,2.5);
        expect(result).to.equal(4);
        });
  });

  describe("Test divide", () => {
    const calc = new Calculator();

    it("Divide two integers", () => {
      const result = calc.divide(30, 2);
      expect(result).to.equal(15);
    });

    it("Divide zero", () => {
      const result = calc.divide(0, 7677676);
      expect(result).to.equal(0);
    });

    it("Divide and result in fraction", () => {
      const result = calc.divide(46, 5);
      expect(result).to.equal(9.2);
    });

    it("Divide two negative numbers", () => {
      const result = calc.divide(-10, -5);
      expect(result).to.equal(2);
    });

    it("Divide negative and positive", () => {
      const result = calc.divide(-20, 10);
      expect(result).to.equal(-2);
    });

    it("Divide two fractions", () => {
        const result = calc.divide(6.5,2.5);
        expect(result).to.equal(2.6);
        });

    it("Divide fraction and number", () => {
        const result = calc.divide(6.6,3);
        expect(result).to.equal(2.2);
        });

    it("Divide number and fraction", () => {
        const result = calc.divide(30,1.5);
        expect(result).to.equal(20);
        });

    it("Divide by zero", () => {
      expect(() => calc.divide(20, 0)).to.throw("You can not divide by 0");
    });
  });

});
