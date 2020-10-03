
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;
  let minValue = array[0];
  let currentValue = 0;
  for (let i = 0; i < array.length; i++) {
    currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
    }
  }
  return minValue;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  let maxValue = array[0];
  let currentValue = 0;
  for (let i = 0; i < array.length; i++) {
    currentValue = array[i];
    if (currentValue > maxValue) {
      maxValue = currentValue;
    }
  }
  return maxValue;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}
