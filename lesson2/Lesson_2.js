/**
 * Lesson_2
 *
 * Логические операторы, булева логика
 *
 * && -  Возвращает true,
 * если обе операции сравнения возвращают true,
 * иначе возвращает false
 *
 * || - Возвращает true,
 * если хотя бы одна операция сравнения возвращают true,
 * иначе возвращает false *
 *
 * ! - Возвращает true,
 * если операция сравнения возвращает false
 *
 *  Приоритет:
 *  && - это как умноджение
 *  || - это как сложение
 *
 *  Циклы
 *  позволяют в зависимости от определенных условий выполнять некоторое действие множество раз
 *  for     - для перебора известного числа итераций
 *  for..in - для перебора объектов (его свойств)
 *  for..of - для перебора наборов данных (символы в строке, массив)
 *  while   - выполняется до тех пор, пока некоторое условие истинно
 *  do..while - сначала выполняется код цикла,
 *  а потом происходит проверка условия в инструкции while, т.е. этот цикл
 *  гарантирует хотя бы однократное выполнение действий,
 *  даже если условие в инструкции while не будет истинно.
 *
 *  Оператор инкремента ++
 *  увеличивает переменную на единицу.
 *  i++ префиксный инкремент, который сначала увеличивает переменную на единицу,
 *  а затем возвращает ее значение
 *  ++i постфиксный инкремент, который сначала возвращает значение переменной,
 *  а затем увеличивает его на единиц
 *
 *  !!!
 *  В при переполнении массива или если какое-то значение не определено,
 *  js отработает, но вернёт undefined.
 *  Java и Python упадут с ошибками/exceptions
 *
 *  Операторы:
 *  break - прерывает/выходит из цикла
 *  continue - прерывает итерацию, но не выходит из цикла
 *
 *  https://ksendzov.com/
 *  https://metanit.com/web/javascript/2.7.php
 */

console.log(true || false);
console.log(false || false || true);
console.log(true && false && true);
console.log(true && false || true && false);

if (true || false && false) {
    console.log('1');
} else {
    console.log('2');
}

if ((true || false) && false) {
    console.log('1');
} else {
    console.log('2');
}

if (false && true && false) {
    console.log('1');
} else {
    console.log('2');
}

/**
 * Dog show
 * Для участия в шоу надо:
 * - чтобы хозяину собаки было больше 18-ти лет
 * - взнос 1000 денег
 * - наличе собаки
 * @param age number
 * @param money number
 * @param dog boolean
 * @returns {string} Ответ от организаторов :)
 */
function dogShow(age, money, dog) {
    if (age >= 18 && money >= 1000 && dog) {
        return money > 1000
            ? 'get the change and ticket' : 'Get ticket';
    } else if (age < 18) {
        return 'Early';
    } else if (money < 1000) {
        return 'Keep calm and work hard!!';
    } else if (!dog) {
        return 'Get a cat';
    } else {
        return 'Nehay bude';
    }
}

console.log(dogShow(28, 2000, true));

count = 0;
while (count < 10) {
    if (count % 2 == 0) {
        console.log(count, '- even');
    } else {
        console.log(count, '- odd');
    }
    count++;
}

mm = [1, 2, 3, 4, 5, 6, 7, 6, 5, 34, 3, 6, 8];
for (let i = 0; i < mm.length; i++) {
    console.log(mm[i], 'Win!!!');
}

mm_2 = ['Alla', 'Nataliia', 'Milana', 'Anatoliy', 'Dmitriy'];
for (name of mm_2) {
    console.log(name);
}



