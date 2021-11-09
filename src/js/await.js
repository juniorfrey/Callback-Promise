import { buscarHeroeAsync } from "./Promesas";


const heroesIds = ['capi','iron','spider'];

export const obtenerHeroesArr = async() => {

    const heroeArr = [];


    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroeArr.push(heroe);
        
    }

    return heroeArr;
}