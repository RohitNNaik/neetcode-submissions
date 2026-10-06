class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minValue = Infinity
        let maxProfite = 0;

        for(let value of prices){
            if(value < minValue){
                minValue = value
            } else{
                let Profite = value - minValue;
                console.log('Profite', Profite);
maxProfite = Math.max(maxProfite , Profite);
            }
        }
        return maxProfite
    }
}
