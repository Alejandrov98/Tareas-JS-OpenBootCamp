function factorial_con_while(n){
    let i = 1;
    let cont = 1
   
    while (i <= n){
        cont *= i; 
        i++;
    }
   
    return cont
};