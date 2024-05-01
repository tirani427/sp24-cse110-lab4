## Lab 4: Part 2 - Devtools Debugging Answers

**Question 1:**  
The bug in the code is that the `result` is set to the concatenation of `num1` and `num2` since technically they're inputted as strings.

**Question 2:**  
I would fix it by adding a conversion so the value of num1 and num2 are set to integers instead of strings.
I ended up using `parseInt()` on `num1` and `num2` within the function.
