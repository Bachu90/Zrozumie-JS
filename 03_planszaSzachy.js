console.log("\n-->Plansza do gry w szachy<<--\n");

var size = 8;

function chessTable(size) {
    var chessTable = "";

    for (var i = 0; i < size; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < size; j++) {
                if (j % 2 == 0) {
                    chessTable += " ";
                } else {
                    chessTable += "#";
                }
            }
        } else {
            for (var j = 0; j < size; j++) {
                if (j % 2 == 0) {
                    chessTable += "#";
                } else {
                    chessTable += " ";
                }
            }
        }
        chessTable += "\n";
    }

    return chessTable;
}

console.log(chessTable(size));
