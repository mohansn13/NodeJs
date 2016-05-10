Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

----------------------------------------------------------------------

## HINTS

You can access command-line arguments via the global `process` object.
Inform yourself about the `process` object.

To get started, write a program e.q. that simply contains:

```js
console.log(process)
```

----------------------------------------------------------------------


var add = 0

for (var i = 2; i < process.argv.length; i++)
add += Number(process.argv[i])

console.log(add)
