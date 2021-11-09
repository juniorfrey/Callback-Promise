const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'Picadura de araña'
    }
}

// Promesas
export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {

        if(heroe){
            setTimeout(() => {
                resolve(heroe);
            }, 1000);
        }else{
            reject(`No existe un héroe con el id ${id}`);
        }

    });
    
}


export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    //return new Promise( (resolve, reject) => {
        if(heroe){
           // resolve(heroe);
           return heroe;
        }else{
            //throw Error(`No existe un héroe con el id ${id}`);
            throw `No existe un héroe con el id ${id}`;
        }

   // });
    
}


const promesaLenta = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

export {
    promesaLenta, promesaMedia, promesaRapida
}