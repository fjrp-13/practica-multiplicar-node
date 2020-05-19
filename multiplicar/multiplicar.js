const fs = require('fs');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido (${base}) no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
}; // listarTabla

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido (${base}) no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`)
        });

    });
}; // crearArchivo

// module es un objeto global de NodeJS
module.exports = {
    crearArchivo, // crearArchivo: crearArchivo
    listarTabla
}