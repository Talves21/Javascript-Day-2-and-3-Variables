let item1 = 45;

let item2 = 30;

let item3 = 25;

let total = 0;

let discountThreshold = 100;

let discountAmount = 10;

total+= item1 + item2 + item3;

console.log(total);

let isGreaterOrEqual = (total >= discountThreshold);

if (total >= discountThreshold){
    total-=discountAmount;
};

console.log(total);


