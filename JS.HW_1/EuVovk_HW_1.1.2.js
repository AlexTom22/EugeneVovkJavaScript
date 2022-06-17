/**
 2*:
 Преобразовать задание 1* таким образом,
 чтобы первым делом в функции проверялся тип данных.
 И если он не Number - кидалась ошибка.
 */

function ages(age_1, age_2, age_3) {
    let age;
    if (typeof (age_1) == "number"
        && typeof (age_2) == "number"
        && typeof (age_3) == "number") {
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
    } else {
        return new Error('This function takes only numbers !');
    }
    return age;
}
const checkAge = ages('17', 18, 61);
console.log(checkAge);