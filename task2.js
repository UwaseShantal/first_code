// meals
function calculatefoodexpense(numberofmeals,costpermeal){
    return numberofmeals * costpermeal;
}

let numberofmeals = 15;
let costpermeal = 3000;

let totalfoodexpense= calculatefoodexpense(numberofmeals, costpermeal);
console.log(`Totalfoodexpense is UGX ${totalfoodexpense}`); 