console.log("\n-->SUMA PRZEDZIAŁU LICZB<--\n");

function range(start, end, step) {
    var j, numbers = [];

    if (step) {
        j = step;
    } else {
        j = 1;
    };

    if (j > 0) {

        for (var i = start; i <= end; i += j) {
            numbers.push(i);
        }
    } else if (j < 0) {
        for (var i = start; i >= end; i += j) {
            numbers.push(i);
        }
    } else {
        return 0;
    }

    return numbers;
}

console.log(range(5, 2, -1));

function sum(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(sum(range(1, 10)));
