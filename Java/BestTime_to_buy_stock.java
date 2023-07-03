/**
 * BestTime_to_buy_stock
 */
public class BestTime_to_buy_stock {
    public int maxProfit(int[] prices){
        int profit = 0; 
        int buy = prices[0]; 

        for(int sell = 0; sell<prices.length; sell++){
            buy = Math.min(buy, prices[sell]); 

            profit = Math.max(profit, prices[sell] - buy); 
        }


        return profit;
    }
}