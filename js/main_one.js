var userAge = +prompt('Введите свой возраст!');

if (userAge > 0 && userAge <= 18) {
    alert('Вы еще молоды! Вам надо учиться.')
} else if (userAge > 18 && userAge <= 50) {
    alert('Вам нужно работать!');
} else if (userAge > 50 && userAge <= 59) {
    alert('Вам скоро на пенсию');
} else if (userAge > 59 && userAge <= 150) {
    alert('Вы пенсионер')
} else {
    alert('Что-то пошло не так!')
}