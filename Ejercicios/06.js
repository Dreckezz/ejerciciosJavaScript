let array = [2, 5, 7, 15, -5, -100, 55];
function cuantosPositivos(arr){
    let contador = 0;
    let arrayNueva = [];
    for(numero of arr){
        if(numero > 0){
            arrayNueva.push(numero);
            contador++;
        }
    }
    return ("hay un total de "+contador+" numeros positivos, los cuales son "+arrayNueva)
}

console.log(cuantosPositivos(array));