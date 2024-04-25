## Lab 4 - Part 1 Answers

## Part 1
---

### var declaration
**Question 1:**  
Line 9 would print: ```values added: 20``` as the value of ```num1 + num2``` stored within ```result``` equals ```10 + 10```.

**Question 2:**  
Line 13 would print: ```final result: 20``` as the value of ```num1 + num2``` stored within ```result``` equals ```10 + 10```.

---
### let declaration
**Question 3:**  
Line 9 would print: ```values added: 20``` as the statement ```result = num1 + num2``` equals ```result = 10 + 10```.

**Question 4:**  
Line 13 would return an error because the variable ```result``` was declared with ```let``` within the if-block of the if-else statement. So, the scope of that variable ends once the if-statement is finished executing. If ```result``` was declared outside of the if-else statement, then the scope would span over the entire function and it could've been used within the else portion of the if-else statement. 

---
### const declaration
**Question 5:**  
Line 9 would result in an error because ```result``` was defined as a ```const``` variable, so it can't be reassigned. So, the statement on line 8: ```result = num1 + num2``` would result in an error.

**Question 6:**  
Line 13 would also result in an error because ```const result = 0;``` defines the variable within the scope of the if-block. So, the variable's scope ends when the if-statement ends and thus, trying to print the value inside ```result``` on line 13 would result in an error. 

---
## Part 2
---
### var declaration
**Question 1:**  
On Line 12, the value of the variable `i` will be outputted to the console. This would happen because `i` was declared as a `var,` which means that its scope is over the entire function `discountedPrices(prices, discount)` and not just in the `for` loop.

**Question 2:**  
On line 13, the final value for `discountedPrice` would be outputted to the console. This is because when a variable is defined as `var` within a `for` loop, it "redeclared" outside of the loop. So, once the `for` loop finishes all its iterations, the value for `discountedPrices` that would be returned is the value it was set to during the final iteration of the `for` loop. 

**Question 3:**  
For line 14 the final value set to `finalPrice` would be outputted to the console. This happens because the variable was declared with `var`, which means that its scope is for the entire function. And even after its value is changed in the `for` loop, it can be accessed from anywhere in the function. So, whatever was the last value that `finalPrice` was set to in the final iteration of the `for` loop is what is outputted to the console on line 14.

**Question 4:**  
This function would return the array `discounted` which equals `[50, 100, 150]`. The for loop within the function `discountedPrices(prices, discount)` changes every value in the `prices` array parameter by multiplying it by `1 - discount` and then by multiplying that value by 100 and rounding it to the nearest integer. So, with the discount being `0.5` and the original array of prices being `[100,200,300]`, the resulting array is `[{(100 * (1 - 0.5)) * 100}/100, {(200 * (1 - 0.5)) * 100}/100, {(300 * (1 - 0.5)) * 100}/100]` which equals `[50, 100, 150]`.

---
### let declaration
**Question 5:**  
At line 12, an error would be thrown because the variable `i` doesn't exist outside the scope of the `for` loop. So, when line 12 tries to output the value of `i` to the console, it would end up trying to access a variable that doesn't exist anymore.

**Question 6:**  
At line 13 an error would be thrown because the variable `discountedPrice` was declared within the scope of the `for` loop. So you can't access the value after the `for` loop finishes executing because the variable doesn't exist anymore.

**Question 7:**  
Line 14 would output the final value for the variable `finalPrice` to the console. This due to the fact that the variable was defined with `let` within the function but not specifically within the `for` loop. So, the variable can still be accessed outside of the for loop and thus the value outputted to the console would be the value set to `finalPrice` in the last iteration of the `for` loop.

**Question 8:**  
This function would return the array `discounted` which equals `[50, 100, 150]`. This value would be returned because the variable `discounted` is still being accessed within the scope of the function. The `for` loop within the code computes the new prices by multiplying the original price by `1 - discount` and then rounding that value after multiplying it by 100 and then dividing the rounded value by 100 again. So, with the discount being `0.5` and the original array of prices being `[100,200,300]`, the resulting array is `[{(100 * (1 - 0.5)) * 100}/100, {(200 * (1 - 0.5)) * 100}/100, {(300 * (1 - 0.5)) * 100}/100]` which equals `[50, 100, 150]`.

---

### const declaration
**Question 9:**  
Line 11 would throw an error because it's trying to access a variable which is out of scope. `i` was defined with `let` within the `for` loop, which means that its scope only spans the `for` loop. So once the `for` loop finishes its last iteration, `i` no longer exists.

**Question 10:**  
Line 12 would output the value of the variable `length` to the console, which was assigned to the length of the `prices` parameter.

**Question 11:**  
This function would return the array `discounted` which would equal `[50, 100, 150]`. Even though the variable was defined as `const`, the values inside the array can still be modified, so the `for` loop would still update the new prices in the array and return them properly.
