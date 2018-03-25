
function text1(words, text) {
    for (var i = 0; i < words.length; i++) {
        var res = text.indexOf(words[i]);
        if (res < 0) {
            return(false);
        }
    } 
    return(true);
}


document.write("<BR>");
document.write("<BR>");
document.write("<BR>");
document.write("[" + text1(["ab", "ca"], "abacaba") + "]<BR>");
document.write("[" + text1(["ab", "cd"], "abacaba") + "]<BR>");


