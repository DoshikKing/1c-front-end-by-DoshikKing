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

// Вызываем функцию из массива и вводим сам массив с помощью return this

function getCaller() {
    return this;
}

var alice = {name : "Alice", fn : getCaller}

alice.fn()

// Создаем однотипные объекты с праметрами имя и возраст

function Human(name, age) {
    this.name = name;
    this.age = age;
    // return this
}

var alice = new Human("Alice", 19);

alice

// Множество. Не хранит одинаковые элементы. Хранит уникальные элементы

var numbers = new Set();

numbers.add(42);

//Set(2) {42}

numbers.add(43);

//Set(2) {42, 43}

numbers.has(42);

// true

// Все удаляем

numbers.clear();

// Смотрим размер

numbers.size();

// Итерирование по множеству

for (var item of colors) {
    console.log(item);
}