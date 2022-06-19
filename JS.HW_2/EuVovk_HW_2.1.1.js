/**
 * 2я домашка по JS со звездочками:

 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
 
 */

function riseToPowerOf(n) {
    for (let i = 1; i <= n; i++) {
        return 2 ** i;
    }
}

console.log(riseToPowerOf(10));