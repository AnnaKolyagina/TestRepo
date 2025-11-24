//0. Создайте функцию для эмуляции броска кубика. 
// На входе - колчество граней. 
// На выходе - результат броска. 
// Реализация должна работать только со следующим количеством граней (но в будущем должно быть легко расширить этот набор): 2, 4, 6, 8, 10, 12, 20, 100
function roll(sides: number) {
const validSides = [2, 4, 6, 8, 10, 12, 20, 100]
    if(validSides.includes(sides)) {
        return Math.floor(Math.random() * sides) +1;
    }
    else {
        throw new Error(`Invalid # of sides!`);
    }
}
console.log(roll(2));
console.log(roll(6));
console.log(roll(8));
console.log(roll(20));
console.log(roll(30));

//1. Создайте функцию, которая создает массив с 10 случайными числами и возвращает произведение 3 самых больших значений 
function createArrayOf10(length: number, numb: number): number[] {
const array1 = Array.from({ length }, () => Math.floor(Math.random() * numb));
    return array1;
}
const randomAmount = 10;
const randomMax = 11;
const multiply3Max = function(randomAmount: number,randomMax: number) {
    const random10 = createArrayOf10(randomAmount,randomMax);
    console.log(random10);
    const highest3Values = function(random10: number[]) {
const sortNum = random10.sort((x,y) => y-x);
const highest3Values = sortNum.slice(0,3);
return highest3Values;
    }
    console.log(highest3Values);
    const multiply = highest3Values(random10).reduce((acc,num) => acc*num, 1);
console.log(multiply);
}
multiply3Max(randomAmount,randomMax);

//2. Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление. При желании можете добавить еще какие-то методы на выбор (эта задача нам пригодится впоследствии)
class Calculator {
add(...args: Array<number>) {
    return args.reduce((accum,num) => accum + num,0);
}
minus(value1: number, value2: number)  {
    return value1 - value2;
} 
multiply(value1: number, value2: number) {
    return value1*value2;
}
divide(value1: number, value2: number) {
    if(value2===0) {
        throw new Error("You can not divide by 0");
    }
    return value1/value2;
}}
   const calc = new Calculator();
   console.log(
    "Add Result = " + calc.add(2,5,6,7) + 
    "\nMinus Result = "  + calc.minus(2344,477) + 
    "\nMultiply Result = " + calc.multiply(5454,2) + 
    "\nDivide Result = " + calc.divide(236,46)
   );


//3. Создайте функцию для подсчета стоимости товаров в корзине. На входе функция принимает массив объектов со свойстами name, price, quantity
type Goods = {
    name: string,
    price: number,
    quantity: number
}

const apples: Goods = {
    name: "Gala",
    price: 6,
    quantity: 2
}

const milk: Goods = {
    name: "Mlekovita",
    price: 5,
    quantity: 1
}

const bread: Goods = {
    name: "White",
    price: 4,
    quantity: 3
}

const sumOfGoods: Goods[] = [apples, milk, bread];
const calculateSum = function(items: Goods[]) {
    let sum = 0;
    for (const item of items) {
        if(item) {
        sum += item.price * item.quantity;
    }
}
return sum;
}
console.log(`Your products cost is: ${calculateSum(sumOfGoods)}`)


//4. Создайте функцию, которая будет принимать в себя массив значений 
//и возвращать только те, в которых заданное (второй параметр, по умолчанию - 4) количество букв
function lettersAmount (arr: string[], length: number = 4): string[] {
return arr.filter(item => {
const matches = item.match(/[a-zA-Zа-яА-ЯёЁ]/g)?? [];
return matches.length === length;})
}
const animals = ["duck", "45red", "funny", "foxy4554"];
console.log(lettersAmount(animals));
console.log(lettersAmount(animals,3));