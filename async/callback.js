function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre)
        miCallback(nombre)
    }, 1500)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ' + nombre)
        otroCallback()
    }, 1000)
}

// Con asincronía
console.log('Iniciando proceso...')
hola('Israel', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...')
    })
})

// Sin asincronía
// hola('Carlos', function() {})
// adios('Carlos', function() {})