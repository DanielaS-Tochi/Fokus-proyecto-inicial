const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')

//Esto sería una versión larga y repetitiva, por eso vamos a crear una función.
// botonCorto.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-corto')
//     banner.setAttribute('src', './imagenes/descanso-corto.png')
// })

// botonEnfoque.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'enfoque')
//     banner.setAttribute('src', './imagenes/enfoque.png')
// })


// botonLargo.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-largo')
//     banner.setAttribute('src', './imagenes/descanso-largo.png')
// })


//Aquí hacemos la versión corta con una función:

botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto')
})

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
})


botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo')
})

function cambiarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagenes/${contexto}.png`)
} 