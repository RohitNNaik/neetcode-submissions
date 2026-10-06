class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = {}
        for (let i = 0; i < strs.length; i++) {
            if (!group[strs[i].split('').sort().join('')]) {
                group[strs[i].split('').sort().join('')]=[]
                }
               group[strs[i].split('').sort().join('')] =[...group[strs[i].split('').sort().join('')], strs[i]] 
        }
        return Object.values(group)
    }
}
