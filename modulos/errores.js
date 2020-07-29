function otraFuncion() {
    return seRompe()
}

function seRompe() {
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z
        } catch (error) {
            console.error('Error en mi función asíncrona')
            cb(error)
        }
    })
}

try {
    // seRompe()
    // otraFuncion()
    seRompeAsincrona(function(error) {
        console.log(error.message)
    })
} catch (err) {
    console.error('Vaya, algo se ha roto...')
    console.error(err.message)
    console.log('Pero no pasa nada, lo hemos capturado')
}

console.log('Esto de aquí está al final')