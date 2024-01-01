let a = prompt('Введите значение');
let b = +a;
if (typeof b === 'number' && !isNaN(b)) {
  if (b % 2 == 0) {
    alert('Чётное')
  } else {
    alert('Нечетное')
  }  
} else {
  alert('Упс, кажется, вы ошиблись')
}