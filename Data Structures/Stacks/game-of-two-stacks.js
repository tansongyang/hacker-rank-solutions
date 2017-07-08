/**
 * Solve [Game of Two Stacks](https://www.hackerrank.com/challenges/game-of-two-stacks).
 * @param  {Number[]} a An array of non-negative integers representing a stack. Index 0 is the top.
 * @param  {Number[]} b An array of non-negative integers representing a stack. Index 0 is the top.
 * @param  {Number}   x The number which the running sum of all popped elements must not exceed.
 * @return {Number}   The maximum possible score.
 */
function solve(a, b, x) {
  // The main idea is to try all valid combinations of popped values from stacks A and B.
  // We won't actually call `push` or `pop` because the arrays are backwards.

  /** @type {Number} The index of the top of stack A. */
  let topA = 0;
  /** @type {Number} The index of the top of stack B. */
  let topB = 0;
  /** @type {Number} The running sum of all "popped" elements. */
  let sum = 0;
  /** @type {Number} The current best score. */
  let score = 0;

  // Starting point: keep popping from A while valid.
  while (topA < a.length && sum + a[topA] <= x) {
    sum += a[topA];
    topA++;
    score = topA;
  }

  // Try combinations involving B.
  // If adding the top of B would exceed the sum, try again after "pushing" back an element from A.
  while (topB < b.length && (sum + b[topB] <= x || topA > 0)) {
    const nextSum = sum + b[topB];
    if (nextSum <= x) {
      topB++;
      sum = nextSum;
      score = Math.max(score, topA + topB);
    } else {
      topA--;
      sum -= a[topA];
    }
  }

  return score;
}
