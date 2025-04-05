import Architect from './Architect.jpg';
import BDFurniture from './BD Furnitur.jpg';
import Englander from './Englanderline.jpg';
import Luxury from './Luxury.jpg';
import SuperSoftSofa from './upholstered-sofa.jpg';
import Valyout from './valyou.webp';
import Velvet from './velvet.webp';

let Livingroom_product = [
    {
        id: 1,
        name: "Architect",
        description: "Modern and sleek sofa with a minimalist design.",
        image: Architect,
        new_price: 600000,
        old_price: 1100000,
        discount: Math.round(((1100000 - 600000) / 1100000) * 100), // 45%
    },
    {
        id: 2,
        name: "BD Furniture",
        description: "Classic wooden sofa set with premium finish.",
        image: BDFurniture,
        new_price: 350000,
        old_price: 700000,
        discount: Math.round(((700000 - 350000) / 700000) * 100), // 50%
    },
    {
        id: 3,
        name: "Englander",
        description: "Elegant European-style sofa with soft upholstery.",
        image: Englander,
        new_price: 580000,
        old_price: 900000,
        discount: Math.round(((900000 - 580000) / 900000) * 100), // 36%
    },
    {
        id: 4,
        name: "Luxury",
        description: "Luxurious velvet sofa with gold-plated legs.",
        image: Luxury,
        new_price: 720000,
        old_price: 1150000,
        discount: Math.round(((1150000 - 720000) / 1150000) * 100), // 37%
    },
    {
        id: 5,
        name: "Super Soft Sofa",
        description: "Ultra-soft, high-comfort sofa for a cozy living space.",
        image: SuperSoftSofa,
        new_price: 490000,
        old_price: 880000,
        discount: Math.round(((880000 - 490000) / 880000) * 100), // 44%
    },
    {
        id: 6,
        name: "Valyout",
        description: "Contemporary sofa with a stylish and durable build.",
        image: Valyout,
        new_price: 520000,
        old_price: 820000,
        discount: Math.round(((820000 - 520000) / 820000) * 100), // 37%
    },
    {
        id: 7,
        name: "Velvet",
        description: "Premium velvet-touch sofa for a luxurious feel.",
        image: Velvet,
        new_price: 610000,
        old_price: 980000,
        discount: Math.round(((980000 - 610000) / 980000) * 100), // 38%
    },
];

export default Livingroom_product;
