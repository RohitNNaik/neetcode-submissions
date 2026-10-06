class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        const result = []
        for (let i = 0; i < nums.length; i++) {
                freq[nums[i]] = (freq[nums[i]] || 0) + 1;
        }
        const sorted = Object.entries(freq)
sorted.sort((a, b) => b[1] - a[1]);
console.log(sorted)
for(let j =0; j < k; j++){
result.push(sorted[j][0])
}
return result
    }
}
