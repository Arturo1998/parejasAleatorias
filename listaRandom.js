import path from 'path';
import fs from 'fs';

let listaAlumnos = [];

class ObjetoPractica{
    constructor (fichero) {
        const input = fs
            .readFileSync(path.join('.', fichero), 'utf8');
        this.datos = input.split(",");
        listaAlumnos = this.datos;
    }
    get longitud () {
        return this.datos.length;
    }

    cargarParejas(listaAlumnos){
        do{
            
            const pareja1 = listaAlumnos[Math.floor(Math.random() * listaAlumnos.length)];
            listaAlumnos = listaAlumnos.filter((x)=> x!=pareja1);
            const pareja2 = listaAlumnos[Math.floor(Math.random() * listaAlumnos.length)];
            listaAlumnos = listaAlumnos.filter((x)=> x!=pareja2);
            console.log(pareja1,pareja2);

        }while(listaAlumnos.length>0)
    }  
}

const objeto = new ObjetoPractica('datos.txt');

objeto.cargarParejas(listaAlumnos);


