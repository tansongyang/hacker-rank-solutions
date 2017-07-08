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
  let top_a = 0;
  /** @type {Number} The index of the top of stack B. */
  let top_b = 0;
  /** @type {Number} The running sum of all "popped" elements. */
  let sum = 0;
  /** @type {Number} The current best score. */
  let score = 0;

  // Starting point: keep popping from A while valid.
  while (top_a < a.length && sum + a[top_a] <= x) {
    sum += a[top_a];
    top_a++;
    score = top_a;
  }

  // Try combinations involving B.
  // If adding the top of B would exceed the sum, try again after "pushing" back an element from A.
  while (top_b < b.length && (sum + b[top_b] <= x || top_a > 0)) {
    const next_sum = sum + b[top_b];
    if (next_sum <= x) {
      top_b++;
      sum = next_sum;
      score = Math.max(score, top_a + top_b);
    } else {
      top_a--;
      sum -= a[top_a];
    }
  }

  return score;
}
