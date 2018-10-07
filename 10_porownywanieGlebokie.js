console.log("\n-->PORONYWANIE GLEBOKIE<--\n");

var zmienna1 = {
        "value": 1,
        "rest": 0
    },
    zmienna2 = {
        "value": 1,
        "rest": 0
    };

var deepEqual = function (x, y) {
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;

        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            } else
                return false;
        }

        return true;
    } else if (x !== y)
        return false;
    else
        return true;
}

console.log(deepEqual(zmienna1, zmienna2));
