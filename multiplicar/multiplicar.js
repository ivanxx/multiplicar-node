// requireds
const fs = require('fs');


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`El valor introducido para base: ${ base } o limite: ${ limite } no son números`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-limite-${ limite }.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }-limite-${ limite }.txt`);
        });
    });
}


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`El valor introducido para base: ${ base } o limite: ${ limite } no son números`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}