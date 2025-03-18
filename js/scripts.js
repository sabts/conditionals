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
    if (number > 8) {return 'Salimos al amanecer'} if (number >=5){return 'Entras en la reserva'} if(number <=4){return 'Estás Fuera'}
}
console.log (abbyrecruitmentTest (3))
console.log (abbyrecruitmentTest (6))
console.log (abbyrecruitmentTest (9))