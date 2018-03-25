var v = new Vue({
    el: "#app",
    data: {
        b: 0,
        c: 0
    },
});

var b_123 = "1";
var c_123 = "1";
var func = "x^2 + (1) * x + (-2)";

functionPlot(
    {
        target: "#plot", 
        data: [{
            fn: func,
            sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
            graphType: 'polyline'            
        }],
        grid: true
    }
);

v.$watch(
    function () 
    {
        b_123 = this.b; 
        c_123 = this.c;
        fnc = "x^2 + " + b_123 + " * x + " + c_123;
        document.title = fnc;
        return;
    },
)