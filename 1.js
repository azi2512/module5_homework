let b = +prompt('Введите значение');

if (typeof b === 'number' && !isNaN(b)) {
  if (b % 2 == 0) {
    console.log('Чётное')
  } else {
    console.log('Нечетное')
  }  
} else {
  console.log('Упс, кажется, вы ошиблись')
}