function getSumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

myArray = [22, 33, 44, 55, 66, 77, 88, 99, 100, 200];

console.log("My sum is equal to:", getSumArray(myArray));