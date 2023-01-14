const fs = require('fs')
const nombreArchivo = 'archivo'
const texto = 'loooooooooorem';
const archivo = () => {
    fs.mkdir(`./${nombreArchivo}`, (err) => {
        if (err) {
            console.log('Algo salio mal en mkdir')
        } else {
            console.log('Archivo creado')
            fs.writeFile('./archivo/texto.txt', "Este es el texto", (err) => {
                if (err) {
                    console.log('Algo salio mal en writeFile')
                } else { console.log('Texto creado') }
            })
        }
    })
}


archivo()
