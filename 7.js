let arr = [5, 2, 5, 0, true, 'hj'];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    zeroCount += 1;
    continue;
  }
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] % 2 == 0) {
      evenCount += 1;
      continue;
    } else {
      oddCount += 1;
      continue;
    }  
  }
}

console.log('evenCount:', evenCount);
console.log('oddCount:', oddCount);
console.log('zeroCount:', zeroCount);
