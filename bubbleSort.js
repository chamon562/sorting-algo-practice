/*
Pass 1:

Compare 5 and 3, swap them → [3, 5, 8, 4, 2]
Compare 5 and 8, no swap → [3, 5, 8, 4, 2]
Compare 8 and 4, swap them → [3, 5, 4, 8, 2]
Compare 8 and 2, swap them → [3, 5, 4, 2, 8]
Pass 2:

Compare 3 and 5, no swap → [3, 5, 4, 2, 8]
Compare 5 and 4, swap them → [3, 4, 5, 2, 8]
Compare 5 and 2, swap them → [3, 4, 2, 5, 8]
Pass 3:

Compare 3 and 4, no swap → [3, 4, 2, 5, 8]
Compare 4 and 2, swap them → [3, 2, 4, 5, 8]
Pass 4:

Compare 3 and 2, swap them → [2, 3, 4, 5, 8]
The sorted array is [2, 3, 4, 5, 8].

Practice Question:
Given an unsorted array [7, 2, 4, 1, 5], perform a step-by-step Bubble Sort to sort the array. After each pass, write down the intermediate state of the array.

*/

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

myBubSort(array);

/*
sort name in alphabetical order
["Alice", "Bob", "Eve", "David", "Carol"]
*/

const namesArr = ["Alice", "Bob", "Eve", "David", "Carol"];

function sortNames(arr) {
  // outer loop
  for (let i = 0; i < arr.length - 1; i++) {
    // inner loop to compare the names
    console.log(`outter current ${arr[i]} and the array [${arr}]`)
    for (let p = 0; p < arr.length - i - 1; p++) {
      console.log(`inner current ${arr[p]} and next number ${arr[p+1]} and the array [${arr}]`)
      console.log(`comparing the unicode value of names ${arr[p]} > ${arr[p+1]} `)
      if (arr[p] > arr[p + 1]) {
        let temp = arr[p];

        // swapping current with greater and the next with the temp
        arr[p] = arr[p + 1];
        arr[p + 1] = temp;
      }
    }
  }
  console.log({ arr });
}

// sortNames(namesArr);
