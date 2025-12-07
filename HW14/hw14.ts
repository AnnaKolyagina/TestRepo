//Модифицировать функцию подсчета стоимости товаров из прошлого задания. Теперь для расчета стоимости, товары должны соответствовать хотя бы одному из условий:
//товар в наличии
//стоимость товаров одного вида выше 500
//Пример входных данных:
//const products = [
    //{ name: 'A', price: 100, quantity: 2, inStock: true },
    //{ name: 'B', price: 40, quantity: 5, inStock: false },
    //{ name: 'C', price: 10, quantity: 1, inStock: true },
    //{ name: 'D', price: 200, quantity: 3, inStock: false }
//];
type Goods = {
    name: string,
    price: number,
    quantity: number,
    instock: boolean
}

const apples: Goods = {
    name: "Gala",
    price: 600,
    quantity: 2,
    instock: true
}

const milk: Goods = {
    name: "Mlekovita",
    price: 500,
    quantity: 1, 
    instock: false
}

const bread: Goods = {
    name: "White",
    price: 400,
    quantity: 3,
    instock: true
}

const sumOfGoods: Goods[] = [apples, milk, bread];
const calculateSum = function(items: Goods[]) {
    let sum = 0;
    for (const item of items) {
        if(item.instock === true || item.price > 500) {
        sum += item.price * item.quantity;
    }
}
return sum;
}
console.log(`Your products cost is: ${calculateSum(sumOfGoods)}`)


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

import { readFileSync } from "fs";
const usersFromFile = readFileSync("/Users/hannak/TestRepo/HW14/hw14.json", "utf-8");
const users: UserType[] = JSON.parse(usersFromFile);
type UserType = {
    id: number;
    username: string;
    role: string;
};
type RolesType = {
    [role: string]: {
        count: number;
        users: { id: number; username: string }[];
    };
};
const countRoles = users.reduce<RolesType>((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = { count: 0, users: [] };
    }
    acc[user.role].count++;
    acc[user.role].users.push({ id: user.id, username: user.username });
    return acc;
}, {});
console.log(countRoles);