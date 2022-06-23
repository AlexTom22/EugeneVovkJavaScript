/**
 * Task 3**
 *   В файле task3.txt найдете структуру компании
 *   и задания, необходимые выполнить.
 */

/**
 *   1. Вывод всех предприятий и их отделов
 *   с количеством сотрудников
 *   Для предприятия посчитать сумму всех сотрудников во всех отделах.
 */
for (let i = 0; i < enterprises.length; i++) {
    console.log(enterprises[i].name);
    let total = 0;
    for (let j = 0; j < enterprises[i].departments.length; j++) {
        console.log('-', enterprises[i].departments[j].name,
            '(' + enterprises[i].departments[j].employees_count,
            'сотрудников)'
        );
        total += enterprises[i].departments[j].employees_count;
    }
    if (total != 0) {
        console.log('Всего', total, 'сотрудников.');
    } else {
        console.log('Нет сотрудников.');
    }
}

/**
 *  2. Функция возвращает название предприятия,
 *  по id отдела или названию отдела
 *  @param data принимает id отдела или название отдела
 *  @return {string} возвращает название предприятия
 */
function getEnterpriseName(data) {
    let buff;
    if (data && !isNaN(data)) {
        for (let idx in enterprises) {
            for (let dep of enterprises[idx].departments) {
                if (dep.id == data) {
                    buff = enterprises[idx].name;
                }
            }
        }
    } else {
        for (let i = 0; i < enterprises.length; i++) {
            for (let j = 0; j < enterprises[i].departments.length; j++) {
                if (enterprises[i].departments[j].name == data) {
                    if (enterprises[i].name == undefined) {
                        break;
                    } else {
                        buff == null
                            ? buff = enterprises[i].name + '\n'
                            : buff += enterprises[i].name + '\n';
                    }
                }
            }
        }
    }
    return buff;
}

/**
 *  3. Функция, которая добавляет предприятие
 *  @param newCompany название предприятия
 */
function addEnterprise(newCompany) {
    enterprises.push({
        'id': '',
        'name': newCompanyName,
        'departments': []
    });
}

/**
 *  4. Функция, которая добавляет отдел в предприятие
 *  @param id id предприятия, в которое будет добавлен отдел
 *  @param newDep название отдела
 */
function addDepartment(id, newDep) {
    for (let i in enterprises) {
        if (enterprises[i].id == id) {
            console.log(enterprises[i].name);
            enterprises[i].departments.push({
                'id': '',
                'name': newDep,
                'employees_count': ''
            });
        }
    }
}

/**
 *   5. Функция для редактирования названия предприятия
 *   @param id id предприятия
 *   @param newCompany новое имя предприятия
 */
function editEnterprise(id, newCompany) {
    return enterprises
        .filter(el => el.id == id)
        .map(el => el.name = newCompany);
}

/**
 *  6. Функция для редактирования названия отдела
 *  @param id id отдела
 *  @param newDep новое имя отдела
 */
function editDepartment(id, newDep) {
    for (let el in enterprises) {
        for (let dep of enterprises[el].departments) {
            if (dep.id == id) {
                dep.name = newDep;
            }
        }
    }
}

/**
 *  7. Функция для удаления предприятия
 *  @param id id предприятия
 */
function deleteEnterprise(id) {
    for (let comp of enterprises) {
        if (comp.id == id) {
            enterprises.splice(
                enterprises.indexOf(comp),
                1
            );
        }
    }
}

/**
 *  8. Функция для удаления отдела
 *  Удалить отдел можно только, если в нем нет сотрудников
 *  @param id id отдела, который надо удалить
 */
function deleteDepartment(id) {
    for (let idx in enterprises) {
        for (let dep of enterprises[idx].departments) {
            if (dep.id == id && dep.employees_count <= 0) {
                enterprises[idx].departments.splice(
                    (enterprises[idx].departments.indexOf(dep)),
                    1
                );
            }
        }
    }
}

/**
 *  9. Функция для переноса сотрудников между отделами одного предприятия
 *  @param src id отдела, из которого будут переноситься сотрудники
 *  @param dest id отдела, в который будут переноситься сотрудники)
 */
function moveEmployees(src, dest) {
    let buff = 0;
    for (let idx in enterprises) {
        for (let dep of enterprises[idx].departments) {
            if (dep.id == src) {
                buff = dep.employees_count;
                dep.employees_count = 0;
            }
        }
        for (let dep of enterprises[idx].departments) {
            if (dep.id == dest) {
                dep.employees_count += buff;
            }
        }
    }
}
