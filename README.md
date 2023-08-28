# sorting-algo-practice

my basic journey of learning sorting algorithms

### word wrap

- alt z to toggle word wrapping to fit within view of your text editor when viewing everything

##  Bubble Sort

- it is not the most efficient
- im able to do it with an outer loop and an inner loop over the same array. Then the inner loop has a variable has the check for if the current number is greater than the next number. and if true then theres a temporary value (which is that current number arr[p]) to be held and used for swapping. the swapping is done on the next line where the current arr[p](p represents the inner loop variable) will be set to the next number arr[p+1]. then the next number arr[p+1] will be set to the temp

```js
// mission is to sort the array
// After each pass, write down the intermediate state of the array
// const array = [3, 5, 4, 8, 2];
const array = [3, 5, 4, 8, -2, -1, 1, 0];
function myBubSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`Outer loop ${arr[i]} and next number ${arr[i + 1]}`);
    // the inner loop used to compare
    console.log(
      ` j greater than arr.length:${arr.length} - i:${i} - 1:${1} = ${
        arr.length - i - 1
      }`
    );
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(`inner loop ${arr[j]} and next number ${arr[j + 1]}`);
      // the condition to compare if the current arr[i] number is greater than the next number arr[i+1]
      console.log(`is current number ${arr[j]} > ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        // create a temp variable if its true to hold the current number because if current 3 > 5 itll stay on its on and move on to current number 5 and if 5>4 then the temp should be set to hold the current number for swapping in here. temp = 5 then swapping the current number arr[j] is then set to = the next number arr[j+1] so array would 4 and will set the arr[j+1] to = the temp number which would be 5 and the array would look like [3, 4,5, 8, 2] on the 2nd iteration
        let temp = arr[j];
        console.log({ temp }); //temp to be the current number should be 4 on the 2nd iteration
        // the swapping here if current is greater than the next number set the current to the next number because if the current number is greater than the next then it shouldnt be there and should be swapped over the next number place
        arr[j] = arr[j + 1];
        console.log(` current ${arr[j]}`);
        // set the next number in the array to the temp number
        arr[j + 1] = temp;
        console.log(`next ${arr[j + 1]}`);
        console.log(arr);
      }
    }
  }
  console.log({ arr });
}
```
## Selection Sort