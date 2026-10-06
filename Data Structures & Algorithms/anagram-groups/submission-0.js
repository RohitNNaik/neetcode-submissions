class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map ={}

        for(let str of strs){
            let sorted = str.split('').sort().join('');

            if(!map[sorted]){
                map[sorted]= []
            }
            map[sorted].push(str);
        }
        return Object.values(map);
    }


}
