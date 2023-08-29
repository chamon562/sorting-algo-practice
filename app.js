/*
You are given two integer arrays nums1 and nums2, sorted 
in non-decreasing order, and two integers m and n,
 representing the number of elements in nums1 and nums2 
 respectively.

Merge nums1 and nums2 into a single array sorted in 
non-decreasing order.

The final sorted array should not be returned by the 
function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where
 the first m elements denote the elements that should be
  merged, and the last n elements are set to 0 and
   should be ignored. nums2 has a length of n.

   Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], 
n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] 
and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the
 underlined elements coming from nums1.

Given
2 arrays nums 1 and nums 2 
m and n are the length of each array

TODO
merge num1 and num 2 into a single array sorted in 
non-decreasing order. meaning ascending order

tools:
.splice(m) to remove zeros after the length of the array 
cant use .contact() because it returns a new array when its
needed to return the same array so use .push(...nums2)
.sort((a,b) => a-b);
end return the sorted array.  
*/

let m = 3;
let n = 3;
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
console.log(...nums2);
nums1.push(nums2);
console.log(nums1);
function mergSortedArray(nums1, m, nums2, n) {
  // goal is to give back a modified nums1
  // deal with m and n to be used for .slice(0, m being the length)
  nums1.splice(m);

  // push nums2 into nums1
  //   but nums2 needs to be pushed in by the spread operator
  // because if we just push nums2 it would push in 
//   another array inside for example: (7) [1, 2, 3, 0, 0, 0, Array(3)]
//  and we only need the elements added
// to the first array so we spread operator to break those elements out
// of the 2nd array and place them in first array
  nums1.push(...nums2.slice(0, n));

  // Sort the merged array in ascending order
  nums1.sort((a, b) => a - b);
}
// mergSortedArray(nums1, m, nums2, n);
// nums1.length
// nums1.slice(0, m);
// console.log(nums1);
// nums2.slice(0, n);

// let num1TotalLength = m + n;
// console.log(num1TotalLength);
// const combinedArray = nums1.concat(nums2);
// console.log(combinedArray);
// if (num1TotalLength === combinedArray.length) {
//   console.log(nums1.concat(nums2));
// }

// trying to use selection sort that i learned
// console.log(nums1);
// console.log(nums1.length);
// nums1.push(...nums2);
// console.log(nums1);
// console.log(filterOutZeros);
// const sortMethod = filterOutZeros.sort((a, b) => a-b);
// console.log(sortMethod)
// const filterOutZeros = nums1.concat(nums2).filter((element) => element !== 0);
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // minIndex = i
    let minIndex = i; // 0
    // inner loop
    for (let j = i + 1; j < array.length; j++) {
      //j =1 array[1] = 2, array[0] = 1 2< 1
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // do the swap
      // temp to hold the current value to swap
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  console.log(array);
}

// selectionSort(filterOutZeros);
