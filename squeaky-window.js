//https://www.codewars.com/kata/55f8b5b09ec923860200000f
//15 Februari 2024

function sliding(nums, k) {
  const maxes = [];
  const deque = [];
  for (let i = 0; i < nums.length; i++) {
    // Remove indices that are out of the current window range
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove indices of smaller elements as they cannot be maximum
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i); // Add current index to deque

    if (i >= k - 1) {
      // If window size is reached
      maxes.push(nums[deque[0]]); // First element in deque is the maximum for current window
    }
  }

  return maxes;
}

console.log(sliding([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(sliding([-7, -8, 7, 5, 7, 1, 6, 0], 4));
console.log(sliding([7, 2, 4], 2));
console.log(sliding([9, 11, 12], 1));
