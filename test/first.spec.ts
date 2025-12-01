
import assert from "assert";
import { Calculator } from "../app/calc";


describe("Test calculator", () => {
    describe("Test sum", () => {
    const calc = new Calculator();
    it("Add two zeros", () => {
    const result = calc.add(0,0);
    assert.strictEqual(result, 0);
    });
    it("Add zero and number", () => {
    const result = calc.add(0,100);
    assert.strictEqual(result, 100);
    });
    it("Add two numbers", () => {
    const result = calc.add(111,123);
    assert.strictEqual(result, 234);
    });
     it("Add zero and negative number", () => {
    const result = calc.add(0,-21);
    assert.strictEqual(result, -21);
    });
     it("Add two negative numbers", () => {
    const result = calc.add(-8,-25);
    assert.strictEqual(result, -33);
    });
     it("Add negative and positive numbers", () => {
    const result = calc.add(-23,10);
    assert.strictEqual(result, -13);
    });
     it("Add three numbers", () => {
    const result = calc.add(23,1,15);
    assert.strictEqual(result, 39);
    });
     it("Add three numbers including zero", () => {
    const result = calc.add(100,0,200);
    assert.strictEqual(result, 300);
    });
     it("Add two long numbers", () => {
    const result = calc.add(123456789,123456789);
    assert.strictEqual(result, 246913578);
    });
     it("Add ten numbers", () => {
    const result = calc.add(1,1,2,3,4,5,6,7,8,9);
    assert.strictEqual(result, 46);
    });
    it("Add two fractions", () => {
    const result = calc.add(1.5,2.5);
    assert.strictEqual(result, 4);
    });
    })
    describe("Test divide", () => {
    const calc = new Calculator();
    it("Divide two integers", () => {
    const result = calc.divide(30,2);
    assert.strictEqual(result, 15);
    });    
    it("Divide zero", () => {
    const result = calc.divide(0,7677676);
    assert.strictEqual(result, 0);
    });
    it("Divide and result in fraction", () => {
    const result = calc.divide(46,5);
    assert.strictEqual(result, 9.2);
    });
    it("Divide two negative", () => {
    const result = calc.divide(-10,-5);
    assert.strictEqual(result, 2);
    });
    it("Divide neg and pos", () => {
    const result = calc.divide(-20,10);
    assert.strictEqual(result, -2);
    });
    it("Divide two fractions", () => {
    const result = calc.divide(6.5,2.5);
    assert.strictEqual(result, 2.6);
    });
    it("Divide fraction and number", () => {
    const result = calc.divide(6.6,3);
    assert.strictEqual(result, 2.2);
    });
    it("Divide number and fraction", () => {
    const result = calc.divide(30,1.5);
    assert.strictEqual(result, 20);
    });
    it("Divide by zero", () => {
    assert.throws(
    () => calc.divide(20, 0),
    /You can not divide by 0/
  );
    });    
    
    
})
})