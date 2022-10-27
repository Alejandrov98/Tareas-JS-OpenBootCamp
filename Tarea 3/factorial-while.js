// function factorialLukas(n){
//     let contador = 1
//     for(let i=1; i<=n; i++){
//         contador = contador * i;
//     }
//     return contador
// };

// console.log(factorialLukas(10))


function factorial_con_while(n){
    let i = 1;
    let cont = 1
    while (i <= n){
        cont *= i; 
        i++;
    }
    return cont
};

console.log(factorial_con_while(10));