
function Animal(name, say) {
   this.name = name;
   this.voice = say;
   this.say = function () {
       return(this.voice);
   }
}

var cat = new Animal("Василий", "Мяу!");

document.write("[" + cat.name + "]<BR>");
document.write("[" + cat.say() + "]<BR>");


