//Nivell 1 ex 1 y 2
const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");
const crypto = require("crypto");

const nombreArchivo = "archivo";
const texto = "Nivell 1 ex 2: Este es el texto creado";

const crearArchivo = () => {
  fs.mkdir(`./${nombreArchivo}`, (err) => {
    if (err) {
      console.log("Algo salio mal en mkdir");
    } else {
      fs.writeFile("./archivo/texto.txt", texto, (err) => {
        if (err) {
          console.log("Algo salio mal en writeFile");
        } else {
          console.log("Nivell 1 ex 1: Archivo y texto creado");
        }
      });
    }
  });
};
// crearArchivo();

const leerArchivo = () => {
  setTimeout(() => {
    console.log(fs.readFileSync("./archivo/texto.txt", "utf8"));
  }, [2000]);
};
//leerArchivo()
// Nivell 1 exercici 3

const comprimir = () => {
  try {
    const inp = fs.createReadStream("./archivo/texto.txt");
    const out = fs.createWriteStream("./texto.gz", (err) => {
      console.log("algo salio mal en n1ex3");
    });
    inp.pipe(gzip).pipe(out);
  } catch {
    console.log("algo salio mal en n1ex3");
  }
};
// comprimir();

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
// imprimirLista(0);

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
// NIVEL 3 PASO 2 **************

const key = crypto.randomBytes(32); // set random encryption key
const iv = crypto.randomBytes(16); // set random initialisation vector
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

const encriptar = (textoAencriptar) => {
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(textoAencriptar);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted.toString("hex"),
  };
};
// BORRAR ARCHIVOS HEX Y BASE64 DESPUES DE CODIFICAR
function removeOld(ruta) {
  try {
    fs.unlinkSync(`./${ruta}.hex`);
  } catch {
    // Tml2ZWxsIDEgZXggMjogRXN0ZSBlcyBlbCB0ZXh0byBjcmVhZG8=.hex
    console.log(`no se pudo borrar la ruta ${ruta}.hex`);
  }
  try {
    // 4e6976656c6c203120657820323a204573746520657320656c20746578746f2063726561646f.base
    fs.unlinkSync(`./${ruta}.base64`);
  } catch {
    console.log(`no se pudo borrar la ruta ${ruta}.base64`);
  }
}

//Paso 1 - Codificar archivo

const hexBase = () => {
  // codificamos a hex y base64
  const input1 = fs.readFile("./archivo/texto.txt", (err, data) => {
    if (err) {
      console.log("algo salio mal n3 paso 1");
    } else {
      const hexFile = Buffer.from(data).toString("hex");
      const base64File = Buffer.from(data).toString("base64");
      fs.createWriteStream(`./${hexFile}.hex`);
      fs.createWriteStream(`./${base64File}.base64`);

      // encriptamos hexFile y bas64File
      let output = encriptar(hexFile);
      encrypted = output.encryptedData;
      const writeEncrypted = (encrypted, fileName) => {
        fs.writeFile(`./${fileName}`, encrypted, (err) => {
          if (err) console.log(`error al crear archivo ${fileName} encryptado`);
        });
      };
      writeEncrypted(encrypted, "hex-aes-192-cbc");
      // encriptamos hexFile y bas64File
      output = encriptar(base64File);
      encrypted = output.encryptedData;
      writeEncrypted(encrypted, "base64-aes-192-cbc");
      removeOld(hexFile);
      removeOld(base64File);
    }
  });
};
// hexBase();

//Funcions per executar el esxercicis

// crearArchivo();
// leerArchivo();
// comprimir();
// imprimirLista(0);
// nivellDos(); // <------- Cal introduir manualment la direcció del directori a la linia 67
// hexBase();     // genera los archivos hex y base64. Posteriormente hace el codificado aes-192-cbc
// removeOld()    // elimina archivo hex y base64
