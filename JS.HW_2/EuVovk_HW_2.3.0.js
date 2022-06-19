/**
 * 2я домашка по JS со звездочками:

 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль,
 сколько в слове гласных, и сколько согласных букв.
 e.g. function getWordStructure(word)
 В консоли:
 Слово (word) состоит из  (число) гласных и (число) согласных букв

 Проверки: 'case', 'Case', 'Check-list'

 --------------------------------------------------------------------------
 Буква Y – гласная или согласная?
 В английском языке буква Y может отвечать как за гласный,
 так и согласный звук.
 Все зависит от того, в каком месте слова она находится.
 Правило очень простое – если буква Y является первой буквой в слоге,
 в котором есть еще еще какие-то буквы кроме самой Y – значит это согласная.
 В любом другом месте слова – гласной.

 */

function getWordStructure(word) {
    const array = word.split('');
    const vowels = /[AEIOU]/i;
    const consonants = /[BCDFGHJKLMNPQRSTVWXZ]/i;
    let countVow = 0;
    let countCon = 0;

    for (let smbl of array) {
        if (vowels.test(smbl)) {
            countVow++;
        }
        if (consonants.test(smbl)) {
            countCon++;
        }
    }
//-------------------------Буква 'Y' – гласная или согласная?------------------------------
    for (let i = 0; i < array.length; i++) {
        let smbl;
        if (array[i] == 'y' || array[i] == 'Y') {
            if (array.indexOf(smbl) != -1) {
                countCon++;
            } else if (vowels.test(smbl)) {
                countCon++;
            } else {
                countVow++;
            }
        }
    }

    console.log(`Слово ${word} состоит из ${countVow} гласных и ${countCon} согласных букв`);
}

//---------------- Передача массива в параметры -------------------------------
const arrayVowelsY = ['gym', 'my', 'cycle', 'baby', 'hairy', 'sky'];
const arrayConsonantsY = ['yes', 'yam', 'yell', 'yellow', 'yogurt', 'beyond'];
getWordStructure_2(arrayVowelsY);
getWordStructure_2(arrayConsonantsY)

function getWordStructure_2(words) {
    for (let i = 0; i < words.length; i++) {
        const array = words[i].split('');
        const vowels = /[AEIOU]/i;
        const consonants = /[BCDFGHJKLMNPQRSTVWXZ]/i;
        let countVow = 0;
        let countCon = 0;

        for (let smbl of array) {
            if (vowels.test(smbl)) {
                countVow++;
            }
            if (consonants.test(smbl)) {
                countCon++;
            }
        }

        for (let i = 0; i < array.length; i++) {
            let smbl;
            if (array[i] == 'y' || array[i] == 'Y') {
                if (array.indexOf(smbl) != -1) {
                    countCon++;
                } else if (vowels.test(smbl)) {
                    countCon++;
                } else {
                    countVow++;
                }
            }
        }

        console.log(`Слово ${words[i]} состоит из ${countVow} гласных и ${countCon} согласных букв`);
    }
}