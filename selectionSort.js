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

// selectionStart(array);

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

const array2 = [64, 34, 25, 12, 22, 11, 90];

function sortySelection(array) {
  // first have outter loop that goes to array.length -1
  for (let i = 0; i < array.length - 1; i++) {
    // 2nd initialize a minIndex = i
    let minIndex = i;
    console.log({ minIndex });
    console.log`outter array [${array}]`;
    for (let j = i + 1; j < array.length; j++) {
      // 3nd have inner loop that starts at j= i+ 1 so that were to get the next number to be used to compare
      console.log(`if array[j]: ${array[j]} < array[minIndex]: ${array[minIndex]}`)
      console.log(`inner loop array moment [${array}]`)
      if (array[j] < array[minIndex]) {
        minIndex = j; // 1
        console.log(`inner loop minIndex: ${minIndex}`);
        // 4th inside inner loop condition that if (array[j] < array[minIndex]) assume that array[j] will be index 1 and value 34, because j = i:0 +1, j =1 and array[minIndex], is array[0] and the value is 64 because we have minIndex from the outter loop set to i, and the first iteration i would be 0. so it would look like if(34 < 64) then change the minIndex = to j and would be 1 so the index of the outer loop is set to 1 now
      }
      // swap logic
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  console.log(array);

  // lets do a run back after the first iteration that minIndex when from 0 to now 1 because of the condition that is true 34 < 64

  // after that we get out of the inner loop and into the outer loop and have a condition to swap

  // if(minIndex !== i) if(1 !== 0) then swap
  // give a temp variable to hold the array[i] temp = 64
  // then array[i] = array[minIndex] so array[i]  is now 34
  // and then the same array[minIndex] = equal to the temp 64
  // array now is [34, 64, 25, 12, 22, 11, 90];
}

sortySelection(array2);
