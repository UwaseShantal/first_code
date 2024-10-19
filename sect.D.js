//printing out call rates based on user network selection
let networkCode = 3;
switch (networkCode){
  case 1:
    console.log("MTN: 40 UGX/minute");
    break;
  case 2:
    console.log("Airtel: 100 UGX/minute");
    break;
  case 3:
    console.log("Africell: 190 UGX/minute");
    break;
  default:
    console.log("Invalid network code");
}