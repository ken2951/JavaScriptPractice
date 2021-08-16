let str = 'C';

if (str === 'A') {
  console.log('A');
} else if (str === 'B') {
  console.log('B');
} else {
  console.log('C');
}

switch (str) {
  default:
    console.log('C');
    break;
  case 'A':
    console.log('A');
    break;
  case 'B':
    console.log('B');
    break;
}