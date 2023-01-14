//Nivell 1 ex 1 y 2
const zlib = require('zlib')
const gzip = zlib.createGzip()
const fs = require('fs')

const nombreArchivo = 'archivo'
const texto = "Nivell 1 ex 2: Este es el texto creado";

const crearTexto = () => {
    fs.writeFile('./archivo/texto.txt', texto, (err) => {
        if (err) {
            console.log('Algo salio mal en writeFile')
        } else {
            console.log('Nivell 1 ex 1: Archivo y texto creado')

        }
    })
}
const crearArchivo = () => {
    fs.mkdir(`./${nombreArchivo}`, (err) => {
        if (err) {
            console.log('Algo salio mal en mkdir')
        }
    })
}
// crearArchivo()
// crearTexto()

const leerArchivo = () => {
    setTimeout(() => {
        console.log(fs.readFileSync("./archivo/texto.txt", "utf8"))
    }, [2000])

}
// leerArchivo()

// Nivell 1 exercici 3
//Al ejecutar comprimir() desaparece la informacion de text.txt y aparece un mensaje de error en consola, no obstante comprime el archivo.

// const input = fs.createWriteStream('./archivo/texto.txt')
// const output = fs.createWriteStream('./archivo/texto.txt.gz')

const comprimir = () => {
    input.pipe(gzip).pipe(output)
}
// comprimir()

//Nivell 2 ex 1
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const imprimirLista = (z) => {
    setTimeout(() => {
        if (z > lista.length - 1) {
            return console.log(lista[z])
        }
        console.log(lista[z])
        return imprimirLista(z + 1)
    }, [1000])

}
imprimirLista(0)