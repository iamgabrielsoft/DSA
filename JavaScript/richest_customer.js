var maximumWealth = function (accounts) {
    let max = 0;
    let ourWealth = [];


    for (let i = 0; i < accounts.length; i++) {
        ourWealth.push(accounts[i].reduce((prev, curr) => prev + curr));
        //its would pack in an array []

        console.log(ourWealth);
        return Math.max(...ourWealth);
    }


    return ourWealth;

    //METHOD 1
    //     accounts.forEach((account) => {
    //         let combined = account.reduce((prev, curr) => prev + curr); 

    //         max = max < combined ? combined : max; 
    //         //when 0 < combined => combined  else max
    //     }); 


    //METHOD 2
    //     return max; 

    //     accounts.forEach((account) => {
    //         let sum = 0;

    //         //console.log(account); 

    //         account.forEach((entity) => {
    //             sum += entity; 

    //             //console.log(sum); 
    //         }); 


    //         if(sum > max){
    //             max = sum; 
    //         }
    //     })

    //return max; 
};