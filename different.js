for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        // console.log(i);
    }
}

// give me tha list numbers between 1 - 30 dividable with 5

for (let i = 1; i <= 30; i++) {
    if (i % 5 == 0) {
        // console.log(i);
    }
}


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}

// give me the sum of numbers from 1 to 20 that divisiable by 3
let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        sum = sum + i;
        console.log(sum);
    }
}
console.log("Sum of numbers: ", sum);