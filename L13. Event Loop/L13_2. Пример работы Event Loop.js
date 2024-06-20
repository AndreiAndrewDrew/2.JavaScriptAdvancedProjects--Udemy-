'use strict'

console.log(1) //Se afisheaza primul

setTimeout(() => {
    console.log(2) //se afisheaza a patrulea
}, 0)

Promise.resolve(3).then(res => {
    console.log(res)
    for (let i = 0; i < 1000000000; i++) { //ciclu de incarcareaa a lui EventLoop

    }
}) //se afisheaza al treilea
//'promise' se afisheaza inaintea lui 'setTimeout'
//'primise' au prioritate!!!

console.log(4) //se afisheaza al doilea

for (let i = 0; i < 1000000000; i++) { //ciclu de incarcareaa a lui EventLoop

}

//Astfel demonstram cum lucreaza EventLoop in practica