/**
 * Функции в JS
 *
 * Функцию можно вызывать в любом месте программы и многократно:
 * function имя_функции(параметры);
 * Параметры - значения, которые передаём в функцию, для их обработки.
 * Параметры могут быть, а могут и не быть.
 *
 * Шаблонная строка:
 * `${q1 * q2}`
 *
 * Spread syntax:
 * function имя_функции(...параметры);
 *
 * Функцию можно передавать в параметры функции:
 * function method_2(a, b, func) {}
 *
 * Переменным можно присваивать значение функции:
 * let f1 = yolochka;
 *
 * Анонимная функция:
 * lef f1 = function () {
 *   let text_1 = 'Hello world';
 *   console.log(text_1);
 * }
 *
 * Стрелочная функция:
 * let f1 = () => console.log('Hello');
 * Но если в функции будет return, то без {} не сработает,
 * т.к. для конструкции return нужна блочная система.
 *
 * JavaScript часто описывают как язык
 * прототипного наследования — каждый объект,
 * имеет объект-прототип, который выступает как шаблон,
 * от которого объект наследует методы и свойства.
 */

function yolochka() {
    let text_1 = 'Hello world';
    console.log(text_1);
}

function yolochka_1(q1, q2) {
    // let result = q1 + q2;
    // console.log('Sum == ' + result);
    // console.log('Sum ==', q1 + q2);
    //console.log(`Sum == ${q1 * q2}`);
    return q1 + q2;
}

function yolochka_2(q1, q2) {
    if (q1 > 4) {
        let m_result = q2 * 10;
        console.log(m_result);
    }
}

function yolochka_3(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }
    console.log(result);
}

yolochka();
yolochka_1(5, 10);
yolochka_2(5, 10);
yolochka_3(5, 10, 20, 100);

const names = ['Alex', 'Inna', 'Vadim', 'Anatoly', 'Natalia'];

function names_aditor(person_name) {
    let name_1 = 'Hello, ' + person_name + '!';
    console.log(name_1);
}

for (let i = 0; i < names.length; i++) {
    names_aditor(names[i]);
}

//  -----------Функция, как значение переменной-------------
let f1 = yolochka;
f1();

//  -----------------Стрелочная функция---------------------
let f2 = () => console.log('----');
f2();

let t1 = 10;
let t2 = 15;
let t3 = 20;

let sum = (n1, n2) => {
    console.log(`Sum = ${n1 + n2}`);
}
sum(t1, t2);

//  -----------------Прототип------------------------------
function yolochka_pro() {
}

yolochka_pro.prototype.method_1 = function () {
    console.log('method_1');
}

yolochka_pro.prototype.method_2 = function (a, b, func) {
    const temp = func(a, b);
    console.log('method_2 + sum =', temp);
}

//  ------------Создаём сущность yolochka_pro()-------------
let wood = new yolochka_pro();
wood.method_1();
wood.method_2(10, 20, yolochka_1);

// -----------Тернарный оператор-----------------------------
const item = 7;
let f3 = (item > 10)
    ? (a, b) => console.log(a + b)
    : (a, b) => console.log(a - b);

f3(10, 30);
