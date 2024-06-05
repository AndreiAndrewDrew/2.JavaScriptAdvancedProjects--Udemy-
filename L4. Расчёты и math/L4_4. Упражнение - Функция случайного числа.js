'use strict'
/**
 * De creat o functie care primeste ntervalul min max, si 
 * intorce cifrele intimpoatore dintre ele inclusive si ele
 */

function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    //1.(max-min+1) se inmultsets cu numarul acesta sa scpam de 
    //diapazonul lui random de la 0-1,
    //2. + min sa fie inclus corect inceaputl diapazonului se inceapa de la min 
    //3. se rotunjeste la valoare de jos respectiv astfl se include si min si max
}

console.log(myRandom(1, 2))
console.log(myRandom(1, 3))
console.log(myRandom(98, 100))
console.log(myRandom(998, 1001))
console.log(myRandom(1, 6))
