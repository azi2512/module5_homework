let arr = [5, 5, '5'];
let same = true;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[0]) {
    same = false;
    break;
  }
}

console.log(same)