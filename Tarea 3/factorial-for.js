function factorialLukas(n){
    let contador = 1
    for(let i=1; i<=n; i++){
        contador = contador * i;
    }
    return contador
};

console.log(factorialLukas(10))