export function percentDifference(a, b) {
  return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2)
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}
