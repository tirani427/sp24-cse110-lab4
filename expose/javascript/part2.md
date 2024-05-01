## Lab 4 - Part 2 Answers

**Question 12:**  
A. Accessing value of name property: `student.name`  
B. Accessing value of Grad Year property: `student["Grad Year"]`  
C. Calling the function for greeting property: `student.greeting()`  
D. Accessing name property of object in Favorite Teacher property:  
`student["Favorite Teacher"].name`  
E. Access index 0 of array of courseLoad property: `student.courseLoad[0]`

**Question 13:**  
A. `'3' + 2` = `'32'` because integers map to their exact string representation, so `2` turns into its string representation and the `+` becomes concatenation.  
B. `'3' - 2`= `1` because integers map to their exact string representation. So the use of `-` makes it so that the `'3'` is treated as a number instead of a string, thus resulting in a basic subtraction operation.  
C. `3 + null` = `3` because `null` translates to the value of numerical value of `0` so the operation turns into `3 + 0 = 3.`  
D. `'3' + null` = `3null` because `'3'` is a string representation of the number 3. So, the `+` makes the statement a concatenation instead of a basic addition and thus concatenates the string `'3'` and the string `'null'`.  
E. `true + 3` = `4` because the value of `true` translates to a numerical value of 1, so the operation `true + 3` turns into `1 + 3 = 4`.  
F. `false + null` = `0` because the boolean value `false` is numerically represented by `0`, and so is the value of `null`. So the statement turns into `0 + 0 = 0`.  
G. `'3' + undefined` = `3undefined` because the value of `'3'` is a string representation and so `+` turns into concatenation of `'3'` and `undefined`.  
H. `'3' - undefined` = `NaN` because the value of `undefined` doesn't translate into a strict numerical value, and instead into a special numeric value of `NaN`. So, since the operation is `-`, the numerical values of the two objects are being subtracted from each other. This returns `NaN`. 

**Question 14:**  
A. `'2' > 1` = `true` because integers map to their exact string representation, so the value of `'2'` translated to the numerical value of `2` and `2 > 1` is `true`.  
B. `'2' < '12'` = `false` because the first character in the string `'2'` is greater than the first character in the string `'12'`.  
C. `2 == '2'` = `true` because the integer maps onto their exact string representation, so the two values are equal.  
D. `2 === '2'` = `false` because the type of the two objects isn't the same.  
E. `true == 2` = `false` because the numerical value for `true` is `1`.  
F. `true === Boolean(2)` = `true` because the types of the two values are now both booleans.

**Question 15:**  
The `==` operator checks to see if the two values are equal, and since it uses type conversion as well, then two objects that aren't the same type could be equal. The `===` operator is much stricter as it does not use type conversion and thus, if two objects are different types, then the operator would return `false`.

**Question 16:** *found in part2-question16.js file*

**Question 17:**  
The result of calling `modifyArray([1,2,3], doSomething)` would be the array of `[2,4,6]`. This is the result because the function `modifyArray` uses a `for loop` to access each individual element of the array inputted as the parameter. It then feeds that specific value to the `doSomething` function, in which the value returned is `2 * value_inputted`. That value is pushed into the return value `newArr`, so the modified array has elements that are twice as large as the original array. 

**Question 18:** *found in part2-question18.js file*

**Question 19:**  
The output of the code snippet given is:
```
1
4
3
2
```
