const numerosPares = [];
let i2 = 0;
    for (let i = 10; i <= 50; i++) {
        if (i %2 === 0) {
            numerosPares[i2] = i;
            i2++;
        }
    }

    for (i = 0; i < numerosPares.length; i++) {
        console.log(numerosPares[i]);
    }