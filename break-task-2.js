/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     if (sum == 100) {
//         sum = sum + i;
//         break:
//     }
//     console.log(sum);
//     i++;
// }


let i = 1;
let sum = 0;

while (i <= 100) {
    console.log(sum);
    i++;
    sum = sum + i;
    if (sum > 100) {
        break;
    }
}
