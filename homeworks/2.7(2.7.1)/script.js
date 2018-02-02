function areArraysEquel(A, B)
{
    // сразу проверяем количество элементов, если разное, то сразу признаем что массивы A и B разные
    if (A.length !== B.length) 
    {
        return false;
    }

    // ищем в массиве B наличие значений из массиве A 
    var C = A.filter(function(value, index, obj) 
    {
        return (B.indexOf(value) > -1);

        // вариант на случай если сравнивать нужно как строки 
        //return (B.indexOf(value) > -1) || B.indexOf("" + value) > -1;
    });

    // проверяем количество элементов в отфильтрованном масссиве C и в оригинале A, если разное, то признаем что искомые массивы A и B разные
    if (C.length !== A.length) 
    {
        return false;
    } 

    return true;
}

// вариант 1
var a = [1, 2, 3];
var b = [1, 2];
document.writeln(areArraysEquel(a, b) + "<BR>");

// вариант 2
var a = [1, 2, 3];
var b = [1, 4, 3];
document.writeln(areArraysEquel(a, b) + "<BR>");

// вариант 3
var a = [1, 2, 3];
var b = ["1", 2, 3];
document.writeln(areArraysEquel(a, b) + "<BR>");

// вариант 4
var a = [1, 2, 3];
var b = [1, 2, 3];
document.writeln(areArraysEquel(a, b) + "<BR>");