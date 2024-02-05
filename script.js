// ОСНОВЫ JS

// ЗАДАНИЕ 1

/* normalizeUrl.js
Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале. Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://. А потом на основе этого добавлять или не добавлять https://.

Примеры вызова:

normalizeUrl("google.com"); // "https://google.com"
normalizeUrl("https://ai.fi"); // "https://ai.fi"
*/


/* МОЕ РЕШЕНИЕ
const normalizeUrl = (address) => {
    const start = address.startsWith('https://');
    if (start) {
      return `${address}`;
    }
    return `https://${address}`;
  };
*/

/* ДРУГОЕ РЕШЕНИЕ
const normalizeUrl = (site) => {
  let normalizedUrl;

  if (site.startsWith('https://')) {
    normalizedUrl = site;
  } else {
    normalizedUrl = `https://${site}`;
  }

  return normalizedUrl;
};
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 2

/* convertText.js
Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

Примеры вызова:

convertText('Hello'); // 'Hello'
convertText('hello'); // 'olleh'

// Не забудьте учесть пустую строку
convertText(''); // ''
Перевернуть строчку можно используя функцию reverse(). В качестве аргумента в неё нужно передать строку, которую мы хотим перевернуть:

const result = reverse('Hello!');
console.log(result); // => '!olleH'
Есть разные подходы к решению этой задачи. Возможно, вам пригодится метод toUpperCase() и возможность получения символа из строки (например, str[0]).

Попробуйте написать два варианта функции: с обычным if-else, и с тернарным оператором.

Подсказки
Подумайте какую проверку нужно написать первым делом: проверку заглавности буквы или является ли пустой строка. Что первичнее?
*/

/* МОЕ РЕШЕНИЕ
const convertText = (string) => {
  const capitalizedString = string.toUpperCase();
  const letter = capitalizedString[0];
  if ('') {
    return string;
  } else if (string[0] === letter) {
    return string;
  } else {
    return reverse(string);
  }
};
*/

/* ДРУГОЕ РЕШЕНИЕ
const convertText = (text) => {
  if (text === '') {
    return '';
  }

  const reversable = text[0] !== text[0].toUpperCase();
  return reversable ? reverse(text) : text;
};
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 3

/* Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается just a number. Объяснения есть только для следующих чисел:

* 666 - devil number
* 42 - answer for everything
* 7 - prime number

Примеры вызова функции:

getNumberExplanation(8);   // just a number
getNumberExplanation(666); // devil number
getNumberExplanation(42);  // answer for everything
getNumberExplanation(7);   // prime number
*/

/* МОЕ РЕШЕНИЕ
const getNumberExplanation = (num) => {
  switch (num) {
    case 666:
      return 'devil number';
    case 42:
      return 'answer for everything';
    case 7:
      return 'prime number';
    default:
      return 'just a number';
  }
};
*/

/* ДРУГОЕ РЕШЕНИЕ
const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return 'devil number';
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    default:
      return 'just a number';
  }
};
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 4

/* Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.

printNumbers(4);
4
3
2
1
finished!
*/

/* МОЕ РЕШЕНИЕ
const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
  // END
};
*/

/* ДРУГОЕ РЕШЕНИЕ
let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 5

/* Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку и возвращает её:

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'
*/

/* МОЕ РЕШЕНИЕ
const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';
  while (i <= finish) {
    result = `${result}${i}`;
    i += 1;
  }
  return result;
};
*/

/* ДРУГОЕ РЕШЕНИЕ
const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';

  while (i <= finish) {
    result = `${result}${i}`;
    i = i + 1; // eslint-disable-line operator-assignment
  }

  return result;
};
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 6

/* Реализуйте функцию mySubstr(), которая извлекает из строки подстроку указанной длины. Она принимает на вход два аргумента (строку и длину) и возвращает подстроку, начиная с первого символа:

const text = 'If I look back I am lost';
console.log(mySubstr(text, 1));  # => 'I'
console.log(mySubstr(text, 7));  # => 'If I lo'
В этом задании аргумент, обозначающий длину извлекаемой подстроки, не может быть длиннее самой строки.

Используйте тот же подход, что в функции для переворота строки из урока: собирайте строку-результат в цикле, перебирая начальную строку до определённого момента.
*/

/* МОЕ РЕШЕНИЕ
const mySubstr = (text, length) => {
  let i = 0;
  let result = '';
  while (i < length) {
    result = `${result}${text[i]}`;
    i += 1;
  }
  return result;
};
*/

/* ДРУГОЕ РЕШЕНИЕ
const mySubstr = (string, length) => {
  let resultString = '';
  let i = 0;
  while (i < length) {
    resultString += string[i];
    i += 1;
  }

  return resultString;
};
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 7

/* Функция countChars() из теории считает, сколько раз входит буква в предложение и при этом учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

countChars('HexlEt', 'e'); // 2
countChars('HexlEt', 'E'); // 2
*/

/* МОЕ РЕШЕНИЕ
const countChars = (string, char) => {
  if (string === '') {
    return 0;
  }
  let i = 0;
  let count = 0;
  const newString = string.toLowerCase();
  const letter = char.toLowerCase();
  while (i <= string.length) {
    if (newString[i] === letter) {
      count += 1;
    }
    i += 1;
  }
  return count;
};
*/

/* ДРУГОЕ РЕШЕНИЕ
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1; // eslint-disable-line operator-assignment
    }
    i = i + 1; // eslint-disable-line operator-assignment
  }

  return count;
};
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 8

/* 
Сэмвелл обнаружил, что его сообщения перехватываются и читаются в замке «Близнецы», поэтому его атаки перестали быть внезапными. Немного подумав, он разработал программу, которая будет шифровать передаваемые сообщения по следующему алгоритму: программа получает на вход строку и меняет местами в ней каждые 2 подряд идущих символа. Если длина строки нечётная, то последний символ остаётся на своём месте.

encrypt('move');   // 'omev'
encrypt('attack'); // 'taatkc'
encrypt('car!'); // 'ac!r'

// Если длина строки нечётная,
// то последний символ остаётся на своём месте
encrypt('go!'); // 'og!'

Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.

Подсказки
В этом упражнении вам пригодятся: шаблонные строки, Логическое ИЛИ (||)
*/

/* МОЕ РЕШЕНИЕ

*/

/* ДРУГОЕ РЕШЕНИЕ
const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};
*/

/*************************************************************************************************************************************/

// ЗАДАНИЕ 9

/* 
В файле myMathModule.js:

Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;

Экспортируйте функцию.

В файле solution.js:

Импортируйте функцию getTriangleArea() из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square() (принимает число и возвращает его квадрат).
Экспортируйте созданную функцию по умолчанию.
*/

/* МОЕ РЕШЕНИЕ
import square from './square.js';

// BEGIN (write your solution here)
import { getTriangleArea } from './myMathModule.js';

const calculateArea = (n) => {
  const base = square(n) / 2;
  const area = getTriangleArea(n, base);
  return area;
};
export default calculateArea;
*/

/* ДРУГОЕ РЕШЕНИЕ
import square from './square.js';

// BEGIN
import { getTriangleArea } from './myMathModule.js';

const solution = (n) => getTriangleArea(n, square(n) / 2);

export default solution;
*/

/*************************************************************************************************************************************/

// Массивы

// ЗАДАНИЕ 1

/* 
Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

'long' – вернётся массив, содержащий значения saturday и sunday
'short' – вернётся массив со значениями sat и sun
import { getWeekends } from '../dates.js';

// Возвращаемое значение не демонстрируем, так как это равносильно ответу
getWeekends('long'); // Аналог вызова без аргументов (long — формат по умолчанию)
getWeekends('short'); // Вызов вернёт массив с короткими значениями
*/

/* МОЕ РЕШЕНИЕ
const getWeekends = (format) => {
  const long = ['saturday', 'sunday'];
  const short = ['sat', 'sun'];
  if (format === 'short') {
    return short;
  }
  return long;
};

export { getWeekends };
*/

/* ДРУГОЕ РЕШЕНИЕ
export const getWeekends = (format = 'long') => {
  const longFormat = ['saturday', 'sunday'];
  const shortFormat = ['sat', 'sun'];

  switch (format) {
    case 'long':
      return longFormat;
    case 'short':
      return shortFormat;
    default:
      // тут нужно выбрасывать ошибку,
      // что данный формат не поддерживается.
      // будем проходить позже, как это делать, поэтому
      // пока достаточно просто сделать break;
      console.log('This format is not supported');
      break;
  }
};
*/

/*************************************************************************************************************************************/