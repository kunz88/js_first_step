const result =(values) => {

    // 0 = paper, 1 = scissors, 2 = rock
    const x=Math.floor(Math.random() * 3);
    
        if (x==0 && values == "paper"){
            return 0;
        }
        else if(x==0 && values =="scissors"){
            return 1;
        }
        else return -1;


        if (x==1 && values == "paper"){
            return -1;
        }
        else if(x==1 && values =="rock"){
            return 1;
        }
        else return 0;

        if (x==2 && values == "scissors"){
            return -1;
        }
        else if(x==2 && values =="rock"){
            return 0;
        }
        else return 1;


}

console.log(result("paper"));