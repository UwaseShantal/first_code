// a function that returns the Fibonacci sequence up to a given number.
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  }
  
  console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
  
  