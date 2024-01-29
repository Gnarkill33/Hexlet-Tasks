
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