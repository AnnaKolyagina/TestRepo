'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var apples = {
  name: 'Gala',
  price: 600,
  quantity: 2,
  instock: true
};
var milk = {
  name: 'Mlekovita',
  price: 500,
  quantity: 1,
  instock: false
};
var bread = {
  name: 'White',
  price: 400,
  quantity: 3,
  instock: true
};
var sumOfGoods = [apples, milk, bread];
var calculateSum = function (items) {
  var sum = 0;
  for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    if (item.instock === true || item.price > 500) {
      sum += item.price * item.quantity;
    }
  }
  return sum;
};
console.log('Your products cost is: '.concat(calculateSum(sumOfGoods)));
//1. Для оплаты корпоративного инструмента нам нужно узнать сколько у нас пользователей с разными ролями, т.к. разные роли нуждаются в разных видах подписки
//На входе у нас .json файл с данными пользователей содержащий свойства: id, username, role
//На выходе нам нужен объект вида:
//{
//role_1: {
//count: 5,
//users: [{id, username}, {id, username}, ...]
//},
//role_1: {
//count: 20,
//users: [{id, username}, {id, username}, ...]
//},
//...
//}
var fs_1 = require('fs');
var usersFromFile = (0, fs_1.readFileSync)('/Users/hannak/TestRepo/HW14/hw14.json', 'utf-8');
var stringUsers = JSON.parse(usersFromFile);
console.log(stringUsers);
