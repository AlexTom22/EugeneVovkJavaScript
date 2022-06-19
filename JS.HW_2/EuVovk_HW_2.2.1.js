/**
 * 2я домашка по JS со звездочками:

 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку,
 которая и будет выводиться в консоль (как в условии смайлик),
 а также количество строк для вывода
 e.g. function printSmile(stroka, numberOfRows)

 */

smiles('\u263a', 15);

function smiles(string, numberOfRows) {
    let str = string;
    console.log(string);
    for (let i = 0; i < numberOfRows - 1; i++) {
        str += string;
        console.log(str);
    }
}