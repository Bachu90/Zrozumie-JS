function play() {
    var dimension = 8;
    var map = "";

    for (var y = 0; y < dimension; y++) {
        for (var x = 0; x < dimension; x++) {
            if ((x % 2 != 0 && y % 2 != 0) || (x % 2 == 0 && y % 2 == 0)) {
                map += "#";
            } else if ((x % 2 != 0 && y % 2 == 0) || (x % 2 == 0 && y % 2 != 0)) {
                map += " ";
            }
        }
        map += "\n";
    }

    console.log(map);
}

play();
