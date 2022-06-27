/**
 * Написать функцию, которая будет видоизменять
 входную строку шифром Цезаря со сдвигом ровно ОДИН.
 (Каждая буква в подаваемой строке меняется на следующую по алфавиту,
 либо на предыдущую в зависимости от направления кодирования)

 !! Например при сдвиге вперед (С1) -
 из слова "Hello" получается слово "Ifmmp".
 При сдвиге назад (С0) -
 слово "Hello" превратится в "Gdkkn"

 На вход функции подается строка и
 последовательность кодирования/декодирования.

 Например: Caesar("hello", "C1-C0-C1-C0") вернет нам "hello",
 т.к. мы дважды смещали вперед (кодировали),
 и дважды смещали назад (декодировали):)
 */

 function caesarCode(word, code) {
    let result = '';
    for (let i = 0; i < code.length; i++) {
        code[i] = code[i].match(/\d/);
        if (!isNaN(code[i])) {
            if (Number(code[i]) === 1) {
                result = '';
                for (let el of word) {
                    let temp = String.fromCharCode(el.charCodeAt() + 1);
                    if (isLetter(temp)) {
                        result += temp;
                    } else {
                        result += el;
                    }
                }
            } else if (Number(code[i]) === 0) {
                result = '';
                for (let el of word) {
                    let temp = String.fromCharCode(el.charCodeAt() - 1);
                    if (isLetter(temp)) {
                        result += temp;
                    } else {
                        result += el;
                    }
                }
            }
            word = result;
        }
    }
    function isLetter(char) {
        return char.match(/^[a-z]+$/i);
    }
    return result;
}

// test
console.log('1', caesarCode("Hello", "C0"));
console.log('2', caesarCode("Hello", "C1"));
console.log('3', caesarCode("Hello", "C1-C0"));
console.log('4', caesarCode("Hello", "C1-C0-C1"));
console.log('5', caesarCode("Hello", "C1-C0-C1-C0"));
console.log('6', caesarCode("apple", "C0"));
console.log('7', caesarCode('fuzz', 'c1'));
console.log('8', caesarCode("ZZZ", "C1"));
console.log('9', caesarCode('aaa', 'C0'));
console.log('10', caesarCode("zzz", "C1"));
console.log('11', caesarCode("123", "C1-C0-C1-C0"));
console.log('12', caesarCode("хэлоу", "C1-C0-C1-C0"));
