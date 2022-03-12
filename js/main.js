function random (min, max) {
  if (max <= min) {
    return "random error!"
  } else {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  }
}

random(1, 8)

function coord (min, max, round) {
  if (max <= min) {
    return "round error!"
  } else {
    min = Math.abs(min);
    max = Math.abs(max);
    const num = Math.random() * (max - min + 1) + min;
    return num.toFixed(round)
  }
}

coord(-1.1, 8.22, 3)
