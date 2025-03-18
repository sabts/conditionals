const minimumHeightRollarcoaster = (minimumHeight) =>{
    if (minimumHeight >= 150) {
        return 'Camila se puede montar en la atracción'} else { return 'Camila no puede subir a la atracción'}; }
        
console.log (minimumHeightRollarcoaster(170))
console.log (minimumHeightRollarcoaster(147))

const begoFreeShipping = (freeShipping) =>{
    if (freeShipping <= 50) {return 'Bego tendrá que pagar el shipping'} else { return 'El envio de Bego es gratis'};
}
console.log (begoFreeShipping(55))
console.log (begoFreeShipping(45))

const multipleOfSeven = (number) =>{
    if (number % 7 === 0){return 'El número es multiplo de 7 '} else {return 'No es multiplo de 7'
    }
}
console.log (multipleOfSeven(40))
console.log (multipleOfSeven(70))

const abbyrecruitmentTest = (number) =>{
    if (number >= 0 && number<= 4) {return 'Estás Fuera'} if (number >=5 && number<= 7){ return 'Entras en la reserva'} else { return 'Salimos al amanecer'}
}
console.log (abbyrecruitmentTest (3))
console.log (abbyrecruitmentTest (6))
console.log (abbyrecruitmentTest (9))

const macarenaHeaviestDog = (dog1, dog2, dog3) =>{
    if (dog1> dog2, dog3){return 'el perro uno es el más pesado'} if(dog2> dog1, dog3){return 'el perro dos es el más pesado'} if (dog3> dog1, dog2) {return 'el perro tres es el más pesado'}
}
console.log (macarenaHeaviestDog(35,20,40))
console.log (macarenaHeaviestDog(20,30,15))
console.log (macarenaHeaviestDog(15,20,30))
