var maxProfit = prices => {
    var profit=0
    for(let i=0;i< prices.length;i++){
        const[today, yesterday]= [prices[i],prices[i-1]]
        if(today>yesterday) profit+=today-yesterday
    }
    return profit
}