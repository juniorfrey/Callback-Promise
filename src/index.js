//import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from './js/Promesas';
import { obtenerHeroesArr, obtenerHeroeAwait, heroeCiclo, heroeIfAwait } from './js/await';

//promesaLenta.then(console.log);
//promesaMedia.then(console.log);
//promesaRapida.then(console.log);

/*Promise.race([promesaLenta, promesaMedia, promesaRapida])
.then(console.log)
.catch(console.warn)*/

/*buscarHeroe('capi2')
    .then(  heroe =>  console.log(heroe))
    .catch(console.war)


buscarHeroeAsync('iron2')
    .then( heroe =>  console.log(heroe))
    .catch(console.war)*/

    //console.time('await');
   /*obtenerHeroesArr().then( heroes => {
       console.table(heroes);
       console.timeEnd('await');
    });*/


    /*obtenerHeroeAwait('capi2')
        .then( heroes => {
            console.log(heroes);
            console.timeEnd('await');
        })
        .catch(console.warn)*/
    

        heroeCiclo();
        heroeIfAwait('iron');


