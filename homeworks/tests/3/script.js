function Machine() {
    var arg = arguments;
    this.number = (arguments.length > 0) ? arguments[0] : 0;
    this.add = (arguments.length > 1) ? arguments[1] : function () {return(this)};
    this.sub = (arguments.length > 2) ? arguments[2] : function () {return(this)};
}

var fn1 = function () {
    ++this.number;
    return(this);
}

var fn2 = function () {
    --this.number;
    return(this);
}

var m = new Machine(0, fn1, fn2);

document.write("[" + m.add().add().sub().add().number + "]<BR>");



