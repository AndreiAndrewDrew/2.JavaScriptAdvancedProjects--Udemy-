'use strict'

/*
Primises - aceste sunt niste containere de valori, 
care se vor intorce in viitor

avantaje:
- NU trebuie de folosit cllback
- Nu trebui de folosit "sobitie"
 */

const request = fetch('https://dummyjson.com/products/1')
console.log(request) //Primim 'Promise'

