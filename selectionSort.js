const array = [3, 5, 4, 8, 2];

function selectionStart(arr) {
  // Outter Loop
  for (let i = 0; i < arr.length - 1; i++) {
    // assume the current index has the minimum value
    minIndex = i;
    console.log(`minIndex ${minIndex} from outside loop`);
    console.log(`outside array [${arr}]`);
    // Inner Loop start
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`inside array [${arr}]`);
      console.log({ j });
      console.log(arr[j]);

      console.log(
        `if arr[j]: ${arr[j]} < arr[minIndex]: ${arr[minIndex]} and minIndex is:${minIndex}`
      );
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        console.log(`inner loop minIndex set to j is now ${minIndex}`);
      }
    }

    // Swap the minimum element with the first elmement of the unsorted part
    console.log(`if minIndex: ${minIndex} does not equal i: ${i}`);
    if (minIndex !== i) {
      let temp = arr[i];
      console.log({ temp });
      arr[i] = arr[minIndex];
      console.log(`the outer loop put after the inner loop arr[i]: ${arr[i]}`);
      arr[minIndex] = temp;
      console.log(`arr[minIndex]: ${arr[minIndex]}`);
    }
    console.log(`Pass ${i + 1}: ${arr}`);
  }
}

selectionStart(array);

function selectSort(array) {
  // outter loop
  for (let i = 0; i < array.length - 1; i++) {
    // Initialize minIndex with the current index i. This will be used to track the index of the minimum element in the unsorted portion.
    let minIndex = i;

    // inner loop to start at j = i +1
    // Start the inner loop (j) to search for the minimum element from i+1 to the end of the array. The idea is to compare elements starting from the next element after i.
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the minimum element with the element at index i

    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}
