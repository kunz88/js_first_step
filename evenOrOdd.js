const evenOrOdd = (arr) => {
    let e = 0;
    let o = 0;

    arr.forEach((element) => {
        if (element % 2 === 0 ) {
            e += 1;
        }
        else o += 1;
    });

    return "Even: " + e + ", Odds: " + o;
}

const myArr = [1, 4, 2, 7, 6, 9, 3, 3, 8];

console.log(evenOrOdd(myArr));