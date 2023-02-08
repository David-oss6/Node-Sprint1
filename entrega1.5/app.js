//Nivell 1 ex 1 y 2
const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");
const crypto = require("crypto");

const crearArchivo = (nombreArchivo, textoArchivo) => {
  fs.mkdir(`./files`, (err) => {
    if (err) {
      console.log(
        `la carpeta files ya existe, procediendo a crear ${nombreArchivo}.txt`
      );
      fs.writeFile(`./files/${nombreArchivo}.txt`, textoArchivo, (err) => {
        if (err) {
          console.log("Algo salio mal en writeFile");
        } else {
          console.log(
            `Nivell 1 ex 1: ${nombreArchivo} y ${textoArchivo} creado`
          );
        }
      });
    } else {
      fs.writeFile(`./files/${nombreArchivo}.txt`, textoArchivo, (err) => {
        if (err) {
          console.log("Algo salio mal en writeFile");
        } else {
          console.log("Nivell 1 ex 1: Archivo y texto creado");
        }
      });
    }
  });
};
// let archivo = "archivoDavid";
// let texto = "Nivell 1 ex 2: Este es el texto creado";
// crearArchivo(archivo, texto);

const leerArchivo = (archivo) => {
  setTimeout(() => {
    console.log(fs.readFileSync(`./files/${archivo}.txt`, "utf8"));
  }, [2000]);
};
// leerArchivo(archivo);
// Nivell 1 exercici 3

const comprimir = (nombreArchivo) => {
  try {
    const inp = fs.createReadStream(`./files/${nombreArchivo}.txt`);
    const out = fs.createWriteStream(`./${nombreArchivo}.gz`, (err) => {
      console.log("algo salio mal en n1ex3");
    });
    inp.pipe(gzip).pipe(out);
  } catch {
    console.log("algo salio mal en n1ex3");
  }
};
// comprimir(archivo);

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
const sp1 = fork("./nivell2exercici2.js");
const { spawn, execFile } = require("child_process");
const { exec } = require("child_process");
const os = require("os");

const homedir = os.homedir();
console.log(homedir);
exec(`cd ${homedir} | ls`);

const nivellDos = () => {
  exec(`ls ${homedir} `, (err, stdout, stderr) => {
    if (err) {
      console.error(` error: ${err}`);
      return;
    }
    console.log(`Nivel 2 con exec() ${stdout}`);
  });
  fs.readdir(`${homedir}`, (err, files) => {
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
//escribimos archivo encriptado
const writeEncrypted = (encrypted, fileName) => {
  fs.writeFile(`./${fileName}`, encrypted, (err) => {
    if (err) console.log(`error al crear archivo ${fileName} encryptado`);
  });
};
// BORRAR ARCHIVOS HEX Y BASE64 DESPUES DE CODIFICAR  <---- No funciona
function removeOld(ruta) {
  try {
    fs.unlink(`./${ruta}.hex`);
  } catch {
    // Tml2ZWxsIDEgZXggMjogRXN0ZSBlcyBlbCB0ZXh0byBjcmVhZG8=.hex
    console.log(`no se pudo borrar la ruta ${ruta}.hex`);
  }
  try {
    // 4e6976656c6c203120657820323a204573746520657320656c20746578746f2063726561646f.base
    fs.unlink(`./${ruta}.base64`);
  } catch {
    console.log(`no se pudo borrar la ruta ${ruta}.base64`);
  }
}
// NIVEL 3 PASO 4
function decrypt(text, tipoArchivo) {
  let iv = Buffer.from(text.iv, `${tipoArchivo}`);
  let encryptedText = Buffer.from(text.encryptedData, `${tipoArchivo}`);
  let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  fs.writeFile(`./decrypted${tipoArchivo}`, decrypted.toString(), (err) => {
    if (err) {
      console.log(`fallo al desencriptar ${tipoArchivo}`);
    }
  });
}

//NIVEL 3 Paso 1 - Codificar archivo

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

      // encriptamos hexFile
      let outputHex = encriptar(hexFile);
      encryptedHex = outputHex.encryptedData;
      writeEncrypted(encryptedHex, "hex-aes-192-cbc");
      // encriptamos  bas64File
      let outputBase64 = encriptar(base64File);
      encryptedBase64 = outputBase64.encryptedData;
      writeEncrypted(encryptedBase64, "base64-aes-192-cbc");
      removeOld(hexFile); // no funciona
      // removeOld(base64File);   no funciona
      decrypt(outputHex, "hex");
      // decrypt(outputBase64, "base64");  <-- no funciona
    }
  });
};
// hexBase();

//Funcions per executar el esxercicis

// let archivo = "archivoDavid";
// let texto = "Nivell 1 ex 2: Este es el texto creado";

// crearArchivo(archivo, texto);
// leerArchivo(archivo);
// comprimir(archivo);
// imprimirLista(0);
// nivellDos();
// hexBase(); // genera los archivos hex y base64. Posteriormente hace el codificado aes-192-cbc
// los desencripta y escribe (no funciona con base64)
