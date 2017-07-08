// [Algorithmic Crush](https://www.hackerrank.com/challenges/crush).

function processData(input) {
  /** @type {Number} The size of the array. */
  const n = +readLine().split(' ')[0];

  // Throughout, we will refer to an array `arr` that we will never actually create.
  // To solve this problem, it is faster to take a different approach.

  /**
   * An array of deltas between elements of `arr`.
   * Given an index `i`, `deltas[i] === arr[i] - (arr[i-1] || 0)`.
   * @type {Number[]}
   */
  const deltas = new Array(n);

  let line = null;
  while (line = readLine()) {
    const operation = line.split(' ');
    /** @type {Number} The beginning of the range (inclusive). */
    const a = +operation[0];
    /** @type {Number} The end of the range (inclusive). */
    const b = +operation[1];
    /** @type {Number} The value to add to all elements of `arr` in the range. */
    const k = +operation[2];
    // Actually adding `k` to every element of `arr` from `a` to `b` is slow because of iteration.
    // Tracking the delta takes constant time; we only need to perform one operation at the
    // beginning of the range and one at the end.
    deltas[a-1] = (deltas[a-1] || 0) + k;
    if (b < n) {
      deltas[b] = (deltas[b] || 0) - k;
    }
  }

  /** @type {Number} The running sum of the deltas. */
  let sumDeltas = 0;
  /** @type {Number} The largest value in the range. */
  let max = Number.MIN_VALUE;
  // The max of `sumDeltas` is the largest value in `arr`. */
  deltas.forEach(r => {
    sumDeltas += (r || 0);
    max = Math.max(max, sumDeltas);
  });

  console.log(max);
} 
