
# Exercise 1: Six Broken JavaScript Snippets

## Snippet 1: Greeting

**Error type:** ReferenceError

**Broken code:**
```javascript
const studentName = "Aline";
console.log("Welcome, " + studentname);
```

**What it means:** JavaScript is case-sensitive. The variable was declared as `studentName`, but the code uses `studentname`. These are two different names, so `studentname` is not defined.

**Fix:**
```javascript
const studentName = "Aline";
console.log("Welcome, " + studentName);
```

**How to find it:** I would read the ReferenceError in the Console, click its line link, and compare the variable name used with the variable declaration in the Sources panel.

## Snippet 2: Shouting

**Error type:** TypeError

**Broken code:**
```javascript
const city = "Kigali";
console.log(city.toUppercase());
```

**What it means:** JavaScript string methods are case-sensitive. The correct method is `toUpperCase()`, not `toUppercase()`. The incorrect method is undefined, so it cannot be called as a function.

**Fix:**
```javascript
const city = "Kigali";
console.log(city.toUpperCase());
```

**How to find it:** I would click the TypeError's line link in the Console and inspect the method name in Sources. The correct output is `KIGALI`.

## Snippet 3: Page title

**Error type:** TypeError

**Broken code:**
```javascript
const title = document.querySelector("#page-titel");
title.textContent = "My Tasks";
```

**What it means:** The selector contains a spelling mistake. The actual heading has the ID `page-title`, but the code searches for `page-titel`. Therefore, `querySelector()` returns `null`, and JavaScript cannot set `textContent` on `null`.

**Fix:**
```javascript
const title = document.querySelector("#page-title");
title.textContent = "My Tasks";
```

**How to find it:** I would inspect the error line and check the value of `title` in the Console or Scope panel. Seeing `null` would show that the selector did not find the heading.

## Snippet 4: Score counter

**Error type:** TypeError

**Broken code:**
```javascript
const score = 0;
score = score + 10;
console.log(score);
```

**What it means:** A variable declared with `const` cannot be reassigned. The code attempts to give `score` a new value, causing an assignment-to-constant error.

**Fix:**
```javascript
let score = 0;
score = score + 10;
console.log(score);
```

**How to find it:** I would read the Console error and inspect the assignment line. Since the score needs to change, `let` is appropriate.

## Snippet 5: Shopping list

**Error type:** SyntaxError

**Broken code:**
```javascript
const fruits = ["mango", "avocado" "banana"];
console.log(fruits.length);
```

**What it means:** A comma is missing between `"avocado"` and `"banana"`. JavaScript cannot correctly parse the array because the items are not separated.

**Fix:**
```javascript
const fruits = ["mango", "avocado", "banana"];
console.log(fruits.length);
```

**How to find it:** I would read the SyntaxError in the Console and inspect the array in Sources. Checking the separators between array items reveals the missing comma. The corrected array length is `3`.

## Snippet 6: Countdown

**Error type:** Runtime error — stack overflow (commonly reported as `RangeError: Maximum call stack size exceeded`)

**Broken code:**
```javascript
function countdown(n) {
    console.log(n);
    countdown(n - 1);
}
countdown(5);
```

**What it means:** The function calls itself repeatedly but has no stopping condition. It continues with negative numbers until the call stack limit is reached.

**Fix:**
```javascript
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(5);
```

**How to find it:** I would inspect the stack-overflow message and use a breakpoint inside `countdown()` to step through repeated calls. The Scope panel would show `n` decreasing, revealing that the function has no base case.

