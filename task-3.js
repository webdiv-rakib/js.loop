/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let odd = 81;
let sum = 0;
while (odd <= 131) {
    // console.log(odd);
    sum = sum + odd;
    if (odd % 2 != 0) {
        console.log("Sum of Odd numbers: ", sum);
    }
    odd++;
}


let even = 206;
let total = 0;
while (even <= 311){
    total = total + even;
    if(even % 2 == 0){
        console.log("Sum of Even numbers: ",total);
    }
    even++;
}