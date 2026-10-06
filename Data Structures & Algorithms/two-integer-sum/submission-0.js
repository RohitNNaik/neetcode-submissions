class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}

        for(let i = 0; i<nums.length; i++){
            let remainder = target - nums[i];
            if(map.hasOwnProperty(remainder)){
                return [map[remainder], i]
            }
            map[nums[i]] = i
        }
    }
}
