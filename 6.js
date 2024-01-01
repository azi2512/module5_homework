let arr = [5, 5, 5];
let el = arr[0];
let same = true;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] != el) {
    same = false;
    break;
  }
}

console.log(same)