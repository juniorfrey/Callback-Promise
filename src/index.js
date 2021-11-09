import { buscarHeroe } from './js/callaback'
import './style.css';
const heoreId = 'iron';


buscarHeroe(heoreId, (heroe) => {
    console.log(heroe);
});