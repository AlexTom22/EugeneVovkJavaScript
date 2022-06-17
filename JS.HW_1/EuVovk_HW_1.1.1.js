/**
 1*:
 Преобразовать написанный код в 26-33 пунктах в функцию,
 принимающую на вход возраст.
 Пример: const checkAge = function(age) {
    Ваши преобразования
 }

 Вывести в консоль результат работы функции с возрастами 17, 18, 61
 */

const checkAge = ages(17, 18, 61);
console.log(checkAge);

function ages(age_1, age_2, age_3) {
    let age;
    if (age_1 == 10) {
        age = 'age_1 equals 10.';
    } else {
        age = 'age_1 doesn\'t equal 10.';
    }
    if (age_1 < age_2) {
        age += '\nYou don’t have access cause your age is ' + age_1
            + '. It’s less then ' + age_2 + '.';
    } else if (age_1 >= age_2 && age_1 < age_3) {
        age += '\nWelcome  !';
    } else if (age_1 > age_3) {
        age += '\nKeep calm and look Culture channel.';
    } else {
        age += '\nTechnical work.';
    }
    return age;
}
