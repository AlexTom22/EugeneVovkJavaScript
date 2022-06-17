/**
 3**:
 Преобразовать 2* таким образом, чтобы значение '2'
 (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
 преобразовываясь в number
 */

function ages(age_1, age_2, age_3) {
    let age;
    age_1 = intValid(age_1);
    age_2 = intValid(age_2);
    age_3 = intValid(age_3);

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
        return new Error('This function takes only positive numbers !');
    }
    return age;
}

function intValid(age) {
    const negativError = new Error('This function takes only positive numbers !');
    let array = new Array();

    if (typeof (age) == 'string') {
        array = age.trim().split('');
        for (let i = 0; i < array.length; i++) {
            if (Number.isNaN(parseInt(array[i]))) {
                return negativError;
            }
        }
    }
    return parseInt(age) > 0 ? parseInt(age) : negativError;
}