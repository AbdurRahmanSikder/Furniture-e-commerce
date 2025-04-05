import Bedroom_product from '../Bedroom/Bedroom.js';
import Livingroom_product from '../Living room/Living.js';
import Diningroom_product from '../Dining room/Dining.js';

// Combine all products into a single array
let all_products = [...Bedroom_product, ...Livingroom_product, ...Diningroom_product];

// Shuffle function to randomize product selection
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the products and select the first 12
shuffleArray(all_products);
let BestProduct = all_products.slice(0, 12);

export default BestProduct;
