export function add(f, s) {
    return f + s
}

export function sub(f, s) {
    return f - s
}

console.log('a - se afisheaza din calc.js') //se afisheaza primul

// setTimeout(() => {
//     add = function (f, s) {
//         return f * s
//     }
// }, 1500) 

async function getProduct() {
    const resultat = await fetch('https://dummyjson.com/products')
    return resultat.json()
}

export const res = await getProduct()

