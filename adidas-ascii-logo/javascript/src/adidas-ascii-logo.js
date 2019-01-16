/**
 * Concats a string n times.
 * @param {number} n - Number of concatenations
 * @param {string} n - String to concatenate
 * @returns {string} Concatenated string
 */
const concatN = (n, str) => n > 0 ? Array(n).fill(str).join('') : null;

/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */

module.exports = function(width) {
  if (width < 2) throw new Error('Error, minimun width is 2'); 
  // The height of the smallest stripe 
  // is the rounded square root of the width
  const height = Math.round(Math.sqrt(width));
  //  maxHeight is the height of the largest stripe
  const maxHeight = height * 3; // three stripes
  const dash = concatN(width, '@');
  const gap = concatN(height, ' ');
  // Calculate the amount of left padding for each line
  const lpad = x => 
  // The first part is a periodic sequence that cycles
  // from 0 to height, this takes care of diagonality
    (x - 1) % height +
  // The second part is a declining sequence based on the
  // amount of stripes in the line, for the first line
  // which has only one stripe, it adds 2 * width spaces
  // for the last line which has 3 stripes it adds 0.
    Math.floor((maxHeight - x) / height) * width;

  // The number of stripes in each line
  const nStripes = x => Math.ceil(x / height);
  // Create a sequence from 1 to maxHeight
  // and iterate over it:
  return Array(maxHeight).fill(0).map( (x, idx) => 1 + idx).map(x => [
      // padding it accordingly on the left
      concatN(lpad(x), ' '),
      // and adding the corresponding amount of stripes of width w
      // separated by a gap
      Array(nStripes(x)).fill(dash).join(gap), 
  ].join('')).join('\n')
}
