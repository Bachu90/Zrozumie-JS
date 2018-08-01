function play() {
        var number = 1;

        while (number <= 100) {
            if (number % 3 == 0 && number % 5 == 0) {
                console.log("FizzBuzz\n");
            } else if (number % 3 == 0 && number % 5 != 0) {
                console.log("Fizz\n");
            } else if (number % 3 != 0 && number % 5 == 0) {
                console.log("Buzz\n");
            } else {
                console.log(number + "\n");
            };
            number++;
        }
    }

    play();