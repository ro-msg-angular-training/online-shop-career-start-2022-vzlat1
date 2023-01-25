export interface Product {
    id: number;
    title: string;
    description: string;
    filename: string;
    height: string;
    width: string;
    price: string;
    rating: string;
}

export const products = [
    {
        id: 1,
        title: "Brown eggs",
        type: "dairy",
        description: "Raw organic brown eggs in a basket",
        filename: "1.jpg",
        height: 600,
        width: 400,
        price: 28.1,
        rating: 4
    }, 
    {
        id: 2,
        title: "Sweet fresh stawberry",
        type: "fruit",
        description: "Sweet fresh stawberry on the wooden table",
        filename: "2.jpg",
        height: 450,
        width: 299,
        price: 29.45,
        rating: 4
    }, 
    {
        id: 3,
        title: "Asparagus",
        type: "vegetable",
        description: "Asparagus with ham on the wooden table",
        filename: "3.jpg",
        height: 450,
        width: 299,
        price: 18.95,
        rating: 3
    }, 
    {
        id: 4,
        title: "Green smoothie",
        type: "dairy",
        description: "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
        filename: "4.jpg",
        height: 600,
        width: 399,
        price: 17.68,
        rating: 4
    }, 
    {
        id: 5,
        title: "Raw legums",
        type: "vegetable",
        description: "Raw legums on the wooden table",
        filename: "5.jpg",
        height: 450,
        width: 299,
        price: 17.11,
        rating: 2
    },
    {
        id: 6,
        title: "Pesto with basil",
        type: "vegetable",
        description: "Italian traditional pesto with basil, chesse and oil",
        filename: "6.jpg",
        height: 450,
        width: 299,
        price: 18.19,
        rating: 2
    }, 
    {
        id: 7,
        title: "Hazelnut in black ceramic bowl",
        type: "vegetable",
        description: "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
        filename: "7.jpg",
        height: 450,
        width: 301,
        price: 27.35,
        rating: 0
    }, 
    {
        id: 8,
        title: "Lemon and salt",
        type: "fruit",
        description: "Rosemary, lemon and salt on the table",
        filename: "8.jpg",
        height: 450,
        width: 299,
        price: 15.79,
        rating: 5
    }, 
    {
        id: 9,
        title: "Homemade bread",
        type: "bakery",
        description: "Homemade bread",
        filename: "9.jpg",
        height: 450,
        width: 301,
        price: 17.48,
        rating: 3
    }, 
    {
        id: 10,
        title: "Legums",
        type: "vegetable",
        description: "Cooked legums on the wooden table",
        filename: "10.jpg",
        height: 600,
        width: 399,
        price: 14.77,
        rating: 0
    }
]