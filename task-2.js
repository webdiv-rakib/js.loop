/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let num = 61;
while(num <=100){
    // console.log(num);
    if( num % 2 != 0){
        console.log("Odd numbers; ",num);
    }
    num++;
}

let num1 = 78;
while (num1 <= 98){
    if(num1 % 2 == 0){
        console.log("Even numbers: ",num1);
    }
    num1++;
}