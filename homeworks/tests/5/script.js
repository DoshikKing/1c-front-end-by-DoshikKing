function getUnique(C) {
    // это словарь пока пустой
    var d = {};

    // бежим по словарю
    var unique = 0;
    for (var i = 0; i < C.length; i++) {
        if (!("" + C[i] in d)) {
            d["" + C[i]] = 0;
            ++unique;
        }
    }

    return unique;
}

// выводим результат
document.write("[" + getUnique([1, -1, -1, 1]) + "]<BR><BR><BR>");
document.write("[" + getUnique(["word", 0, true]) + "]<BR>");
