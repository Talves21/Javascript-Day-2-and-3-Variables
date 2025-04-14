let price1 = 40;

let price2 = 13;

let price3 = 27.50;

let discountThreshold = 65;

let discount = 5.50;

let total = price1 + price2 + price3;
    
if (total >= discountThreshold){
   difference = total - discount;
};

console.log(difference);

let finalMessage = 'The original total of items was ' + total + ', but once the discount was applied, it became ' + difference + '.';

console.log(finalMessage);



