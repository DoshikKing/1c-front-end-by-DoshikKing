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