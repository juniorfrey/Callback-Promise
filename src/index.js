import { buscarHeroe } from './js/callaback'
import './style.css';
const heoreId1 = 'capi';
const heoreId2 = 'spider';


buscarHeroe(heoreId1, (err, heroe1) => {
    if(err){console.error(err);}

    buscarHeroe(heoreId2, (err, heroe2) => {
        if(err){console.error(err);}
        console.log(`Enviamdo a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    })
});