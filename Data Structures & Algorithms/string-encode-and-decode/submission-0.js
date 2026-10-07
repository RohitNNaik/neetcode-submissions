class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res='';

        for (const s of strs) {
            res += `${s.length}#${s}`
        }
        console.log(res)
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
console.log(str.length)
        let i = 0
        while (i < str.length) {
            const pos = str.indexOf("#", i)
            console.log(pos)
            const len = str.slice(i, pos)
            console.log(len)
            i = pos + 1;
            console.log(i, i+len)
            let st = str.slice(i,Number(i)+Number(len))
            console.log(st)
            result.push(st)
            i+=Number(len)
        }
return result;
    }
}
