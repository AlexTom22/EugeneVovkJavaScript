/**
 * 2я домашка по JS со звездочками:

 4**. Написать функцию, которая проверяет, является ли слово палиндромом
 e.g. function isPalindrom(word)

 Проверки: 'abba', 'Abba'
 */

console.log(isPalindrom('abba'));
console.log(isPalindrom('garage'));
console.log(isPalindrom('Abba'));

function isPalindrom(word) {
    word = word.toUpperCase();
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - 1]) {
            return false;
        }
        return true;
    }
}
