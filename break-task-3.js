/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let x = 4;
let multi = 0;
for (let i = 1; i <= 100; i++) {
    multi = x * i;
    console.log(multi);
    if (multi >= 32) {
        break;
    }
}