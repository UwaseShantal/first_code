function calculateprofit(sellingprice,costprice,numberofunitssold){
    return  sellingprice - costprice;
}

let numberofunitssold = 100;
let sellingprice = 50000;
let costprice = 40000;
let profit =calculateprofit (sellingprice,costprice)
console.log("profit is:",profit)