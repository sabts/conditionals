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
    if (number % 7 === 0){return 'El número es multiplo de 7 '} else {return 'No es multiplo de 7'}
}
console.log (multipleOfSeven(40))
console.log (multipleOfSeven(70))

const abbyrecruitmentTest = (number) =>{
    if (number >= 0 && number<= 4) {return 'Estás Fuera'} else if (number >=5 && number<= 7){ return 'Entras en la reserva'} else { return 'Salimos al amanecer'}
}
console.log (abbyrecruitmentTest (3))
console.log (abbyrecruitmentTest (6))
console.log (abbyrecruitmentTest (9))

const macarenaHeaviestDog = (dog1, dog2, dog3) =>{
    if (dog1> dog2 && dog1> dog3) {return 'el perro uno es el más pesado'} else if(dog2> dog1 && dog2> dog3){return 'el perro dos es el más pesado'} else {return 'el perro tres es el más pesado'}
}
console.log (macarenaHeaviestDog(35,20,40))
console.log (macarenaHeaviestDog(15,20,10))
console.log (macarenaHeaviestDog(15,20,40))

const camilaPrizeNumber = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {return 'Felicidades! ganaste un regalo y un descuento en tu próxima compra'} else if (number % 5 === 0) {return'Felicidades! ganaste un regalo'} else if(number % 3 === 0) {return 'Felicidades! ganaste un un descuento en tu próxima compra'} else {return 'Buena suerte la próxma vez'};
}
console.log (camilaPrizeNumber(30))
console.log (camilaPrizeNumber(50))
console.log (camilaPrizeNumber(6))
console.log (camilaPrizeNumber(8))

const begoSharingCandies = (number) => {
    if  (number % 2===0){return 'Esta cantidad es par'} else {return 'Esta cantidad es impar, será un duelo a muerte con cuchillos'}
}
console.log (begoSharingCandies(80))
console.log (begoSharingCandies(83))

const planningLeapYearTravel = (year) =>{
    if (year % 4 === 0 && year % 100 !== 0 || year / 400 === 0)  {return 'Es un año bisiesto'} else {return 'No es un año bisiesto'}} 
console.log (planningLeapYearTravel(2025))
console.log (planningLeapYearTravel(2036))

const accessHackingArea = (code) =>{
    if(code % 2 === 0 && code > 50 || code % 7 === 0 && code > 50 ) {return 'Acceso concedido'} else {return 'Acceso denegado'}
}
console.log (accessHackingArea(60))
console.log (accessHackingArea(77))
console.log (accessHackingArea(14))

