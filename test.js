    console.log("-->POWER<<--\n");

    function power(base, exponent) {
        if (exponent == 0) {
            return 1;
        } else {
            return base * power(base, exponent - 1);
        }
    }

    console.log(power(2, 8));

    console.log("-->MULTIPLIER<<--\n");

    function multiplier(factor) {
        return function (number) {
            return number * factor;
        }
    }

    var twice = multiplier(2);
    console.log(twice(18));

    console.log("-->OBJECT<<--\n");

    var obj = {
        value1: "x",
        value2: "y",
        value3: "z"
    }

    console.log(Object.keys(obj).length);

    for (var x in obj) {
        console.log(x);
    }
