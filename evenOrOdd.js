const evenOrOdd = (arr) => {
    let e = 0;
    let o = 0;
    for (let x = 0; x < arr.length; x++) {
        
        if (arr[x] % 2 === 0 ) {
            e += 1;
        }
        else o += 1;
    }

    return "Even: " + e + ", Odds: " + o;
}

const myArr = [1, 4, 2, 7, 6, 9];

console.log(evenOrOdd(myArr));