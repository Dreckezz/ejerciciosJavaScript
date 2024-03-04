function valorMayor(a, b){
    return (a<b) ? b : a;
    /*
    if(a>b){
        return a;
    }
    else if(a<b){
        return b;
    }
    else{
        return (a+" es igual a "+b);
    }
    */
}

let mayor = valorMayor(10, 5);
console.log(mayor)