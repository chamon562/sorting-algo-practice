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

function mergeSort(array){
    const length = array.length;
    // Base case: if the array has 1 or fewer elements, its already sorted
    if( length <= 1){
        return array;
    }
}