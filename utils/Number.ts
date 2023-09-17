/**
 * Generate a random number between min and max included
 * @param min Min integer (included)
 * @param max Max integer (included)
 * @returns A random number between min and max
 */
export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Return a random value selected in an array
 * @param array An array of values
 * @returns A random value in `array`
 */
export function randomValue(array: any[]) {
  return array[random(0, array.length)];
}

/**
 * Restrict a value between min and max
 * @param value The value to restrict
 * @param min Min integer (included)
 * @param max Max integer (included)
 * @returns A value between min and max
 */
export function minmax(value: number, min: number, max: number) {
  return Math.min(Math.max(value || 0, min), max);
}
