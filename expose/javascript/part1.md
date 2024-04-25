## Lab 4 - Part 1 Answers

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
