/**
 * @param {*} min 
 * @param {*} max 
 * @returns a random integer between min and max (inclusive)
 */
function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}