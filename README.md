# hacker-rank-solutions

Annotated solutions for selected [HackerRank](https://www.hackerrank.com/) challenges. [My profile](https://www.hackerrank.com/tansongyang).

## Utilities

These are referenced in some solutions, but they are not defined in the solution file because they are defined here.

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
