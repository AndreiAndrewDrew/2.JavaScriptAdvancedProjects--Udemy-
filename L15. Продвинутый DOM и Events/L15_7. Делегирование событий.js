'use strict'

const wrapper = document.querySelector('.wrapper')

for (let i = 0; i < 100; i++) {
    const el = document.createElement('div')
    el.innerHTML = `userul cu id:${i}`
    el.setAttribute('data-id', i)
    // el.addEventListener('click', () => {
    //     console.log(`Deleted user: ${i}`)
    // }) //nu chair buna mode de stergere
    wrapper.append(el)
}

wrapper.addEventListener('click', (e) => {
    const userId = e.target.getAttribute('data-id')
    console.log(userId)
    console.log(`Deleted user: ${userId}`)
})