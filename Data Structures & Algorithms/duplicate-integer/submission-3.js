class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dub = {}

        for(let i =0; i < nums.length;i++){
            if(dub[nums[i]] !== undefined){
                return true
            }else {
                dub[nums[i]]= nums[i]
            }
        }
        return false;
    }
}
