function getRandomPositiveInt (a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1) + min)
}

getRandomPositiveInt(1, 8);

function getRandomPositiveFloat (a, b, precision) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const num = Math.random() * (max - min + 1) + min;
  return +num.toFixed(precision)
}

getRandomPositiveFloat(9, 1, 3);
