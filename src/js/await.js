import { buscarHeroeAsync, buscarHeroe } from "./Promesas";


const heroesIds = ['capi','iron','spider'];

export const obtenerHeroesArr = async() => {

    //const heroeArr = [];


    /*for (const id of heroesIds) {
        const heroe = await buscarHeroe(id);
        heroeArr.push(heroe);
        
    }*/

    /*for (const id of heroesIds) {
        heroeArr.push(buscarHeroe(id));
    }*/

    //return await Promise.all(heroeArr);
    return await Promise.all( heroesIds.map(buscarHeroe));
}

// export const obtenerHeroesArr = async() => return await Promise.all( heroesIds.map(buscarHeroe));

export const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('catch');
        //throw err;
        return {
            nombre: 'Sin nombre',
            poder:  'Sin poder'
        }
    }

    
}   