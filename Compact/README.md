Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

### Example

```
compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```