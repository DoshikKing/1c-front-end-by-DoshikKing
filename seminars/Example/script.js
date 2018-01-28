var array = [1, 2, 3, 4, 5];

array.filter(function(x) {
    return x % 2 == 1;
});

array.map(function(x) {
    return x * 2
});

array.forEach(function(x) {
    console.log(x);
});

//Сортирует массив по порядку
array.sort();

//Переворачивает массив

array.reverse();

//return temperature > 0 ? "Water" : "Ice"; - тоже самое что if{}else{}

function getWaterState(temperature) {
    return temperature > 0 ? "Water" : "Ice";
}