/*
Recursion: Merge Sort uses recursion to repeatedly divide the array into smaller subarrays until they are trivially sorted (single element or empty).

Divide and Conquer: This is the main strategy of Merge Sort. It involves dividing the problem into smaller subproblems, solving them, and then combining their solutions to solve the original problem.

Arrays: The input array is divided into smaller subarrays for sorting. Subarrays are created using array slicing.

Merging: After sorting the subarrays, they need to be merged back together while maintaining the sorted order. This involves comparing elements from different subarrays and building a merged result.

Looping: The merging step involves iterating through both subarrays, comparing elements, and merging them. You'll use loops to achieve this.

Comparisons: You'll need comparisons to determine the order of elements when merging the subarrays. This is typically done using conditional statements like if.

Indices: Keeping track of indices is crucial when merging. You'll use indices to traverse the subarrays and determine which element to pick next.

Concatenation: To merge the remaining elements of subarrays, you'll use concatenation to combine the merged elements with the remaining elements in a subarray.

Mathematical Operations: You'll use mathematical operations to calculate the middle index when dividing the array into subarrays.

Base Case: The recursion needs a base case to stop. Typically, when the length of the array is 1 or 0, you can consider it sorted.f

*/
const arr = [34, 64, 25, 12, 22, 11, 90];

function mergeSort(array) {
  const length = array.length;

  // Base case: if the array has 1 or fewer elements, its already sorted
  if (length <= 1) {
    return array;
  }

  // find the middle index of the array
  const middle = Math.floor(length / 2);

  // Divide array into two halves, left & right
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // recursively sort the left and right halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // initialize variables to track the current index in each sorted subarray
  let leftIndex = 0;
  let rightIndex = 0;

  //   array to store the merged result
  const merged = [];
  //   compare elements from sortedLeft and sortedRight, merge them in order
  for (let i = 0; i < length; i++) {
    // if there are elments in both sub arrays, compare and add the smaller element
    if (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
      if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
        merged.push(sortedLeft[leftIndex]);
        leftIndex++;
      } else {
        merged.push(sortedRight[rightIndex]);
        rightIndex++;
      }
    } else if (leftIndex < sortedLeft.length) {
      // if only elements in sortedLeft, and remaining elements
      merged.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      // if only elements in sortedRight, add remaining elements
      merged.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }
  return merged;
}

const unsortedArray = [10, 2, 50, 4, 8, 28, 20, 11, 6];
// const unsortedArray = [7, 2, 4, 1, 5];
console.log(mergeSort(unsortedArray));

// function mergeSort(arr) {
//     const length = arr.length;

//     // Base case: if the array has 1 or fewer elements, it's already sorted
//     if (length <= 1) {
//       return arr;
//     }

//     // Find the middle index of the array
//     const mid = Math.floor(length / 2);

//     // Divide the array into two halves: left and right
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);

//     // Recursively sort the left and right halves
//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);

//     // Initialize variables to track the current index in each sorted subarray
//     let leftIndex = 0;
//     let rightIndex = 0;

//     // Array to store the merged result
//     const merged = [];

//     // Compare elements from sortedLeft and sortedRight, merge them in sorted order
//     for (let i = 0; i < length; i++) {
//       // If there are elements in both subarrays, compare and add the smaller element
//       if (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
//         if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
//           merged.push(sortedLeft[leftIndex]);
//           leftIndex++;
//         } else {
//           merged.push(sortedRight[rightIndex]);
//           rightIndex++;
//         }
//       } else if (leftIndex < sortedLeft.length) {
//         // If only elements in sortedLeft, add remaining elements
//         merged.push(sortedLeft[leftIndex]);
//         leftIndex++;
//       } else {
//         // If only elements in sortedRight, add remaining elements
//         merged.push(sortedRight[rightIndex]);
//         rightIndex++;
//       }
//     }

//     return merged;
//   }

//   const unsortedArray = [7, 2, 4, 1, 5];
//   const sortedArray = mergeSort(unsortedArray);
//   console.log(sortedArray); // Output: [1, 2, 4, 5, 7]
