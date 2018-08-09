/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [5, 2, 2, 2, 7, 5, 3, 7, 4, 5, 4],
    target = 7;
let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.includes(target - nums[i])) {
            return [i, nums.indexOf(target - nums[i])];
        }
    }
}
console.log(twoSum(nums, target));