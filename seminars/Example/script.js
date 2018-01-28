var array = [1, 2, 3, 4, 5];

// Получаем числовой остаток, ввыодя числа с числовым остатком 1 из массива

array.filter(function(x) {
    return x % 2 == 1;
});

// Домножаем весь массив на 2

array.map(function(x) {
    return x * 2
});

// Выводим каждое значение массива

array.forEach(function(x) {
    console.log(x);
});

// Сортирует массив по порядку
array.sort();

// Переворачивает массив

array.reverse();

// return temperature > 0 ? "Water" : "Ice"; - тоже самое что if{}else{}
// return temperature > - тернарный оператор

function getWaterState(temperature) {
    return temperature > 0 ? "Water" : "Ice";
}