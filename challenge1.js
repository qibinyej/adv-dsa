/**
 Challenge 1:
 You are climbing a staircase. It takes n steps to reach the top.
 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to
 the top?

 Example 1:
    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps
 Example 2:
    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step
 */ 

/**
* @param {number} n
* @return {number}
*/
//brule force??
var climbStairs = function(n) {
    //base case
    const memo = [undefined, 1, 1]
    //first check if the fib(n) we want already exist in our memo, if so, return it
    if(memo[n]) return memo[n]
    

};

/**
 * input: n = 1
 * output: 1
 * 1. 1 step
 * 
 * 
 * input: n = 2
 * output: 2
 * 1. 1 step + 1 step
   2. 2 steps

   input: n = 3
   output: 3
   1. 1 step + 1 step + 1 step
   2. 1 step + 2 steps
   3. 2 steps + 1 step

   input: n = 4 
   output: 5
   1. 1 step x 4
   2. 1 step + 1 step + 2 steps
   3. 1 step + 2 steps + 1 steps
   4. 2 steps + 1 step + 1 step
   5. 2 steps + 2 steps

 */