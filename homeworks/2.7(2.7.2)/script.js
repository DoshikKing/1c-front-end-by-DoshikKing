//----------------------------------------------------------
// почистить строку от всех A-B-несимволов
//----------------------------------------------------------
function normalize(str){
    var res = ("" + str).toUpperCase();

    // удаляем A-B-несимволы
    res = res.replace(/[\x01-\x40]/g, " ").replace(/[\x5B-\x60]/g, " ").replace(/[\x7B-\x7E]/g, " ").replace(/[\xB0-\xDF]/g, " ").replace(/\x0D/g," ");

    // удаляем двойные пробелы
    while(res.indexOf("  ") >= 0) res = res.replace(/  /g, " ");

    // trim-им слева и справа
    if(res.substr(0,1) == " ") res = res.substr(1);
    if(res.substr(res.length-1, 1) == " ") res = res.substr(0, res.length-1);

    return res;

    
}

//----------------------------------------------------------
// ищем слова и считаем сколько они раз встречаются
//----------------------------------------------------------
function addWord(dictionary, word) {
    if (!(word in dictionary)) {
        dictionary[word] = 0;
    }
    dictionary[word] += 1;

    return({word : word, count : dictionary[word]});
}

// получаем текст
var textarea = document.getElementById("sandbox");

// удаляем все знаки пунктуации и преобразуем в массив
var splitted = normalize(textarea.value).split(" ");

// удаляем все короткие слова из текста
var C = splitted.filter(function(value, index, obj) 
{
    return value.length > 4; 
});

// это словарь пока пустой
var d = {word : "", count : ""};

// это место хранения элемента словаря, который больше всего раз встречается в тексте
var max = {word : "", count : 0};

// бежим по словарю
for (var i = 0; i < C.length; i++) {
    // считаем сколько раз слово уже встретилось в тексте
    var res = addWord(d, C[i]);

    // если встретилось больше раз, чем мы раньше запомнили, сохраним обновленное значение
    if(res.count > max.count)
    {
        max.word = res.word; 
        max.count = res.count; 
    }
}

// выводим результат
document.write("<BR>");
document.write("<BR>");
document.write("<BR>");
document.write("Слово: [" + max.word + "]<BR>");
document.write("  Раз: [" + max.count + "]<BR>");
