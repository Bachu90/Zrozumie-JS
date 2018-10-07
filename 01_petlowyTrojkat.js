console.log("\n-->PETLOWY TROJKAT<<--\n");

function triangle() {
    var figure = "",
        line = "";

    for (var i = 0; i < 8; i++) {
        line += "#";
        figure += line + "\n";
    }

    console.log(figure);
}

triangle();
