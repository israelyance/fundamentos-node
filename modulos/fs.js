const fs = require('fs')


// Leer archivo
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString())
    })
}

// leer(__dirname + '/archivo.txt', console.log)

// Escribir archivo
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No he podido escribirlo', err)
        } else {
            console.log('Se ha escrito correctamente')
        }
    })
}

// escribir(__dirname + '/archivo1.txt',
//     'Soy un archivo nuevo',
//     console.log)


// Borrar archivo
function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

borrar(__dirname + '/archivo1.txt', console.log)