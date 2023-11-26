


/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/984936962/
 * @param {number[]} prices
 * @returns {number} profit
 */

const maxProfit = (prices) => {
    let profit = 0; 
    let buy = prices[0]; //from the starting index

    for(let sell = 0; sell<prices.length; sell++){

        buy = Math.min(buy, prices[sell]); //7, 5 => 5
        //console.log('buy', buy); 

        profit = Math.max(profit, prices[sell] - buy); //0, 1-7 => 0, -6 0
        //0, 5-1 => 4, 0, 4
        console.log('profit', profit)
    }


    return profit; 
}; 


maxProfit([7, 6, 4, 3, 1]);