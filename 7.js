let arr = [5, 2, 5, 0, true, 'hj', 0, '0', 0, '6', NaN];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {  
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] == 0) {
      zeroCount += 1;
    } else if (arr[i] % 2 == 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }  
  }
}

console.log('evenCount:', evenCount);
console.log('oddCount:', oddCount);
console.log('zeroCount:', zeroCount);