/**
 *  JavaScript - это скриптовый язык с динамический типизацией,
 *  т.е. когда переменная, которую мы создали с процессе выполнения,
 *  принимает разный тип данных
 */

//  Объявление переменных
let user_name = 'Vadim';
//let name2 = Vadim;
console.log(user_name);

let age = 32;
console.log(age);

let person = user_name + age;
console.log(person);
console.log(user_name + '______' + age);

let user_age = 30;
let work_period = 10;
let total_time = user_age + work_period;

//  Оператор typeof
console.log('total_time =', total_time, typeof (total_time));

//  неявное приведение типа: number -> string
console.log('total_time =' + total_time, typeof ('total_time =' + total_time));

//  Математические операции
arithmeticOperation('-');
arithmeticOperation('*');
arithmeticOperation('/');
arithmeticOperation('%');

//  Тип Boolean
let morning = false;
let evening = true;
console.log('morning =', morning, typeof (morning));
console.log("evening =", evening, typeof (evening));

//  Операторы сравнения
compare(10, 20, '>');
compare(10, 20, '<');
compare(10, 20, '=');
compare(10, 10, '=');
compare(10, 20, '>=');
compare(10, 20, '<=');
compare(20, 20, '>=');

let a = 15;
let b = 20;
let compare2 = a != b;

//  Условные конструкции. Конструкция if..else
if (compare2) {
    console.log('Compare is', compare2);
} else if (a == 15) {
    console.log("a ==", a);
} else {
    console.log('!!_Compare is', false);
}

//  Конструкция switch..case
function arithmeticOperation(sbl) {
    let user_age = 30;
    let work_period = 10;
    let total_time;
    switch (sbl) {
        case '-':
            total_time = user_age - work_period;
            break;
        case '*':
            total_time = user_age * work_period;
            break;
        case '/':
            total_time = user_age / work_period;
            break;
        case '%':
            total_time = user_age % work_period;
            break;
        default:
            total_time = sbl;

    }
    console.log('total_time =', total_time, typeof (total_time));
}

function compare(num1, num2, smb) {
    let apples = num1;
    let cherry = num2;
    let compare;

    switch (smb) {
        case '=':
            compare = apples == cherry;
            break;
        case '!=':
            compare = apples != cherry;
            break;
        case '>':
            compare = apples > cherry;
            break;
        case '<':
            compare = apples < cherry;
            break;
        case '>=':
            compare = apples >= cherry;
            break;
        case '<=':
            compare = apples <= cherry;
            break;
        default:
            compare = 'ERROR: unknown operator!';
    }
    console.log('compare =', compare);
}
