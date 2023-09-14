function threeSum(arr, target) {
  let closestSum = Number.MAX_VALUE;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let s = arr[i] + arr[j] + arr[k];
        
        // Compare the absolute difference with the target
        if (Math.abs(s - target) < Math.abs(closestSum - target)) {
          closestSum = s;
        }
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
