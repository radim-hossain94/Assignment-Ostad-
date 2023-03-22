function multiplicationTable(num){
    for (let iteration = 1; iteration <= 10; iteration++) {
        product = num * iteration;
        console.log(iteration+" X "+num+" = "+product);
        
    }
}


multiplicationTable(2); //passing 2 inside function as input 