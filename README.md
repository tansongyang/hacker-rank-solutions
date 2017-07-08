# hacker-rank-solutions

Annotated solutions for selected [HackerRank](https://www.hackerrank.com/) challenges. [My profile](https://www.hackerrank.com/tansongyang).

## Utilities

If you ever see a function that isn't defined, it's probably one of these utilities that I often reuse.

### readLine

```ES6
/** @type {Number} The index of the next newline. */
_eol = -1;
/**
 * Get the next line from the global `_input` variable.
 * @return {String} The line, not including the newline at the end, or `null` if there is no more input.
 */
function readLine() {
  if (_input == null || _eol === _input.length) {
    return null;
  }
  const start = _eol + 1;
  _eol = _input.indexOf('\n', start);
  if (_eol === -1) {
    _eol = _input.length;
  }
  return _input.slice(start, _eol);
}

```
