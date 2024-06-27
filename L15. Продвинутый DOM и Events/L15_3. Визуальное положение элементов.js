'use strict'

function generate(event) {
    console.log(event.target.getBoundingClientRect()) //afloam totsi parametrii la buton

    console.log(`X offset: ${window.pageXOffset}`) //cordonatele userului pe pagina, (unde se uita userul)
    console.log(`Y offset: ${window.pageYOffset}`)
    console.log(`clientWidth: ${document.documentElement.clientWidth}`) //marimele ferestrei clientului
    console.log(`clientHeight: ${document.documentElement.clientHeight}`)

    const el = document.querySelector('.down')
    const rectDivDown = el.getBoundingClientRect()
    console.log(rectDivDown) //afisham totsi parametrile lui div "down"

    //executam scrooling pina la 'div down'
    window.scrollTo({
        left: window.pageXOffset + rectDivDown.left,
        top: window.pageYOffset + rectDivDown.top,
        behavior: "smooth" //tipa lent sa faca scrolliing
    })
}