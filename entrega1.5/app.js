//Nivell 1 ex 1 y 2
const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");
const { setPriority } = require("os");

const nombreArchivo = "archivo";
const texto = "Nivell 1 ex 2: Este es el texto creado";

const crearTexto = () => {
  fs.writeFile("./archivo/texto.txt", texto, (err) => {
    if (err) {
      console.log("Algo salio mal en writeFile");
    } else {
      console.log("Nivell 1 ex 1: Archivo y texto creado");
    }
  });
};
const crearArchivo = () => {
  fs.mkdir(`./${nombreArchivo}`, (err) => {
    if (err) {
      console.log("Algo salio mal en mkdir");
    }
  });
};
// crearArchivo();
// crearTexto();

const leerArchivo = () => {
  setTimeout(() => {
    console.log(fs.readFileSync("./archivo/texto.txt", "utf8"));
  }, [2000]);
};
// leerArchivo()

// Nivell 1 exercici 3
//Al ejecutar comprimir() desaparece la informacion de text.txt y aparece un mensaje de error en consola, no obstante comprime el archivo.

// const input = fs.createWriteStream('./archivo/texto.txt')
// const output = fs.createWriteStream('./archivo/texto.txt.gz')

const comprimir = () => {
  input.pipe(gzip).pipe(output);
};
// comprimir()

//Nivell 2 ex 1
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const imprimirLista = (z) => {
  setTimeout(() => {
    if (z >= lista.length - 1) {
      return console.log(lista[z]);
    }
    console.log(lista[z]);
    return imprimirLista(z + 1);
  }, [1000]);
};
// imprimirLista(0)

//Nivell 2 ex 2
const fork = require("child_process").fork;
const sp1 = fork("nivell2exercici2.js");

const nivellDos = () => {
  fs.readdir("../../../../../mimot", (err, files) => {
    console.log("nivell 2 ex 2:");
    files.forEach((file) => {
      sp1.send(file);
    });
  });
};
// nivellDos();

//NIVELL 3

//Paso 1 - Codificar archivo
const input1 = fs.readdir("./archivo", (err, files) => {
  files = files.toString();
  console.log(files);
  let codificado = Buffer.from(files).toString("base64");
  console.log("Base64: ", codificado);
  return files;
});
console.log(input1);
// let codificado = Buffer.from(input1).toString("base64");
// const output1 = fs.createWriteStream(`../${codificado}.hex`);
// console.log("hexadecimal", codificado);

// let buff = new Buffer.from(input1);
// let base64data = buff.toString("base64");

// console.log(
//   '"' + archivoAcodificar + '" converted to Base64 is "' + base64data + '"'
// );

//Paso 2  - Encriptar con algoritmo
let crypto = require("crypto");

// let key = "14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd";
// let cipher = crypto.createCipher("aes-256-cbc", key);
// let input = fs.createReadStream("./archivo");
// let output = fs.createWriteStream("./archivo.enc");

// input.pipe(cipher).pipe(output);

// output.on("finish", function () {
//   console.log("Encrypted file written to disk!");
// });
