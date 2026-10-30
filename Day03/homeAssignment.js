var number=-5;

if (number==0){
    console.log("The number is Zero");
}
else if (number>0 && number%2==0){
     console.log("The number is Positive Even Number");
}
else if (number>0 && number%2!=0){
     console.log("The number is Positive Odd Number");
}
else if (number<0 && number%2==0){
     console.log("The number is Negative Even Number");
}
else {
     console.log("The number is Negative Odd Number");
}