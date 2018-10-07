console.log("\n-->countChar<<--\n");

var counter = 0;

function countChar(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            counter++;
        }
    }
    return counter;
}

console.log(countChar("golGota gregoriańska", "g"));
