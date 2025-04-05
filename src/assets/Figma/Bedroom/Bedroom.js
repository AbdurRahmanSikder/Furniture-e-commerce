import Cafe from './Cafe.jpg';
import Modish from './Modish.jpg';
import Nikamal from './Nikamal.webp';
import Nobili from './Nobili.webp';
import Queen from './Queen.jpg';
import SMMBD from './SMMBD.jpg';
import stdBed from './std-bed.jpg';
import Walla from './Walla.jpg';

let Bedroom_product = [
    {
        id: 1,
        name: "Cafe",
        description: "Modern and elegant bed frame with a sleek design.",
        image: Cafe,
        new_price: 500000,
        old_price: 1000000,
        discount: Math.round(((1000000 - 500000) / 1000000) * 100), // 50%
    },
    {
        id: 2,
        name: "Modish",
        description: "Minimalist and stylish bed for a contemporary bedroom.",
        image: Modish,
        new_price: 200000,
        old_price: 3000000,
        discount: Math.round(((3000000 - 200000) / 3000000) * 100), // 93%
    },
    {
        id: 3,
        name: "Nikamal",
        description: "Compact and durable bed, perfect for small spaces.",
        image: Nikamal,
        new_price: 650000,
        old_price: 670000,
        discount: Math.round(((670000 - 650000) / 670000) * 100), // 3%
    },
    {
        id: 4,
        name: "Nobili",
        description: "Luxurious wooden bed with a classic touch.",
        image: Nobili,
        new_price: 450000,
        old_price: 870000,
        discount: Math.round(((870000 - 450000) / 870000) * 100), // 48%
    },
    {
        id: 5,
        name: "Queen",
        description: "Queen-sized bed with high-quality materials for comfort.",
        image: Queen,
        new_price: 580000,
        old_price: 590000,
        discount: Math.round(((590000 - 580000) / 590000) * 100), // 2%
    },
    {
        id: 6,
        name: "SMMBD",
        description: "Premium bed with soft cushioning for a cozy sleep.",
        image: SMMBD,
        new_price: 890000,
        old_price: 990000,
        discount: Math.round(((990000 - 890000) / 990000) * 100), // 10%
    },
    {
        id: 7,
        name: "Stdbed",
        description: "Standard bed with durable wooden construction.",
        image: stdBed,
        new_price: 890000,
        old_price: 900000,
        discount: Math.round(((900000 - 890000) / 900000) * 100), // 1%
    },
    {
        id: 8,
        name: "Walla",
        description: "Luxury king-sized bed with a sophisticated design.",
        image: Walla,
        new_price: 5680000,
        old_price: 6880000,
        discount: Math.round(((6880000 - 5680000) / 6880000) * 100), // 17%
    },
];

export default Bedroom_product;
