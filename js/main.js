function isNum (value) {
  return typeof value === "number"
}

function isPositive (value) {
  return Math.sign(value)
}

function getRandomInt (min, max) {
  if (!isNum(min) || !isNum(max)) {
    return null
  }
  if (isPositive(min) !== 1) {
    min = Math.abs(min);
  }
  if (isPositive(max) !== 1) {
    max = Math.abs(max);
  }
  // хочется как-то объединить два if с проверками на положительное число. Но как это сделать? Как понять, какое именно отрицательное число пришло, min или max, и какое нужно модифицировать? Может, просто в начале функции насильно их абсолютить?
  if (min === max) {
    return min
  }
  if (max < min) {
    let maxNum = min;
    let minNum = max;
    return Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

getRandomInt(1, 8);

function getRandomFloatPoint (min, max, round) {
  if (!isNum(min) || !isNum(max)) {
    return null
  }
  min = Math.abs(min);
  max = Math.abs(max);
  // примерно как здесь, я в самом начале избавляюсь от возможных отрицательных чисел
  if (min === max) {
    return min
  }
  if (max < min) {
    let maxNum = min;
    let minNum = max;
    return Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum
  }
  const num = Math.random() * (max - min + 1) + min;
  return +(num.toFixed(round))
}

getRandomFloatPoint(9, 1, 3);
