// 2. У нас поменялись требования к паролю. Юзерам выслана ссылка на смену пароля. Теперь когда они зайдут к нам на сайт, мы должны проверить, что их новый пароль соответствует следующим требованиям:
//      - минимум 8 символов                            | латинские буквы, максимум 15
//      - минимум одна заглавная буква
//      - минимум одна цифра
//      - минимум один специальный символ из набора     | ^!@_$&*()-+
// а. Создайте функцию, которая будет принимать на вход строку (пароль) и возвращать true, если пароль соответствует требованиям и false, если не соответствует.
// б. Нашим аналитикам интересно, какие цифры чаще всего используются юзерами в паролях.
// модифицируйте функцию так, чтобы она вместо булевого значения возвращала объект по следующим примерам:
//   input: 'Password123!' -> output: { isValid: true, digits: [1, 2, 3] }
//   input: 'myC00!Pa55w0rd' -> output: { isValid: true, digits: [0, 0, 5, 5, 0] }
function isValidPassword(password: string) {
  const symbolAmount = /^.{8,15}$/.test(password);
  const hasCapital = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecChar = /[\^!@_$&*()\-\+]/.test(password);
  const isValid = symbolAmount && hasCapital && hasNumber && hasSpecChar;
  const matchDigits = password.match(/\d/g);
  const digits = matchDigits ? matchDigits.map(Number) : [];
  return { isValid, digits };
}
console.log(isValidPassword('abcdefA12345!!!'));
console.log(isValidPassword('Pass123@'));
console.log(isValidPassword('12345578'));
console.log(isValidPassword('12345678asdfgj!'));
console.log(isValidPassword('1234Yf*'));
console.log(isValidPassword('123456789Aqwert!'));

// 3. Наши пользователи ранее могли в качестве имени (username) выбрать как произвольное имя так и емейл.
// Теперь мы хотим убрать возможность использовать просто имя.
// Чтобы обработать существубщие данные,
// создайте функцию, которая будет принимать на вход .json файл с данными пользователей (username, name, last_name, email)
// и возвращать массив заготовленных сообщений для коммуникации с юзерами.
// На выходе должен быть объект с данными только по юзерам у которых username не является емейлом. Ожидаемый объект на выходе:
// {
//     username_1: {
//         email: 'email_1',
//         message: 'Hello {name} {last_name}, please update your username "{username_1}" to be a valid email to comply with our new policy.'
//     },
//     username_2: {
//         email: 'email_2',
//         message: 'Hello {name} {last_name}, please update your username "{username_2}" to be a valid email to comply with our new policy.'
//     },
//      ...
// }
import { readFileSync } from 'fs';
const fileNames = readFileSync('/Users/hannak/TestRepo/HW16/names.json', 'utf-8');
const newObject = JSON.parse(fileNames);
type objectType = {
  username: string;
  name: string;
  last_name: string;
  email: string;
};
function checkUsername(users: objectType[]) {
  const result: Record<string, { email: string; message: string }> = {};
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  users.forEach(user => {
    if (!emailReg.test(user.username)) {
      result[user.username] = {
        email: user.email,
        message: `Hello ${user.name ?? ''} ${user.last_name ?? ''} , please update your username "${user.username}" to be a valid email to comply with our new policy.`
      };
    }
  });
  return result;
}
const checkResult = checkUsername(newObject);
console.log(checkResult);
