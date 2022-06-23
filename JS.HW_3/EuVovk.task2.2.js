/**
 * Task 2***
 * Реализуйте считывание из JSONки из файла task2.json с помощью,
   например, модуля fs. для дальнейшего использования в функции, описанной в задании
 */

const fs = require('fs');
const jsonData = fs.readFileSync('data/task2.1.json', 'utf8');
console.log(jsonData);

