const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Please enter the number you would like to FizzBuzz up to: ",(answer)=>{
    for (let i = 1; i <= answer; i++) {
        if((i%3 === 0) && (i%5 === 0)){
          console.log("FizzBuzz");
        }else if(i%5 === 0){
          console.log("Buzz");
        }else if(i%3 === 0){
          console.log("Fizz")
        }else{
          console.log(i);
        }
      }
      r1.close();
});
