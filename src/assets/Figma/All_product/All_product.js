import Bedroom_product from '../Bedroom/Bedroom.js';
import Livingroom_product from '../Living room/Living.js';
import Diningroom_product from '../Dining room/Dining.js';

// Combine all products into a single array
let All_product = [...Bedroom_product, ...Livingroom_product, ...Diningroom_product];


export default All_product;
