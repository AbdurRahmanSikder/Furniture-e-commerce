import Camelia from './Camelia.webp';
import Hatim from './Hatim.png';
import HiTouch from './Hibiscus.jpg';
import REGAL from './REGAL.jpg';
import ROSEMARY from './ROSEMARY.jpg';
import Talsma from './Talsma.webp';
import kitout from './KitOut.jpg';

let Diningroom_product = [
    {
        id: 7,
        name: "Camelia",
        description: "Elegant dining chair with a modern touch.",
        image: Camelia,
        new_price: 650000,
        old_price: 1150000,
        discount: Math.round(((1150000 - 650000) / 1150000) * 100), // 43%
    },
    {
        id: 8,
        name: "Hatim",
        description: "Classic wooden chair for a vintage feel.",
        image: Hatim,
        new_price: 370000,
        old_price: 720000,
        discount: Math.round(((720000 - 370000) / 720000) * 100), // 49%
    },
    {
        id: 9,
        name: "HiTouch",
        description: "Premium leather dining chair for ultimate comfort.",
        image: HiTouch,
        new_price: 500000,
        old_price: 890000,
        discount: Math.round(((890000 - 500000) / 890000) * 100), // 44%
    },
    {
        id: 10,
        name: "REGAL",
        description: "Minimalist chair with a sophisticated look.",
        image: REGAL,
        new_price: 620000,
        old_price: 960000,
        discount: Math.round(((960000 - 620000) / 960000) * 100), // 35%
    },
    {
        id: 11,
        name: "ROSEMARY",
        description: "Handcrafted wooden chair with a rustic design.",
        image: ROSEMARY,
        new_price: 450000,
        old_price: 850000,
        discount: Math.round(((850000 - 450000) / 850000) * 100), // 47%
    },
    {
        id: 12,
        name: "Talsma",
        description: "Durable and stylish chair for everyday use.",
        image: Talsma,
        new_price: 490000,
        old_price: 770000,
        discount: Math.round(((770000 - 490000) / 770000) * 100), // 36%
    },
    {
        id: 13,
        name: "Kitout",
        description: "Compact and modern dining chair for small spaces.",
        image: kitout,
        new_price: 190000,
        old_price: 270000,
        discount: Math.round(((270000 - 190000) / 270000) * 100), // 30%
    },
];

export default Diningroom_product;
