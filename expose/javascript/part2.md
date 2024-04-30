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
