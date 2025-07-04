// Centralized product data for Kicks sneaker shop
// Each product has: name, images, description, price, isSweatshirt (optional), reviews (array), newArrival (boolean)
// also includes a review array for product page.

export const products = [
  {
    name: "Cali Blue Palm Kicks",
    images: ["assets/imgs/calibluelowtoppalm.png"],
    smallImage: "assets/imgs/compressed/calibluelowtoppalm_compressed.png",
    description: "Premium blue palm low-top sneakers inspired by California's coast.",
    price: 89.99,
    reviews: [],
    newArrival: false
  },
  {
    name: "Cali Mocha Fade Kicks",
    images: ["assets/imgs/browncalitransparent.png"],
    smallImage: "assets/imgs/compressed/browncalitransparent_compressed.png",
    description: "Mocha fade kicks with a smooth, versatile look for any outfit.",
    price: 89.99,
    reviews: [],
    newArrival: true,
  },
  {
    name: "Cali Whitewater Kicks",
    images: ["assets/imgs/caliwhiteblue.png"],
    smallImage: "assets/imgs/compressed/caliwhiteblue_compressed.png",
    description: "Whitewater-inspired kicks with blue accents for a fresh, clean style.",
    price: 89.99,
    reviews: [],
    newArrival: false   
  },
  {
    name: "Huntington Retro Kicks",
    images: ["assets/imgs/HBRetros.png"],
    smallImage: "assets/imgs/compressed/HBRetros_compressed.png",
    description: "Retro sneakers with Huntington Beach vibes and classic comfort.",
    price: 94.99,
    reviews: [],
    newArrival: false   
  },
  {
    name: "Retro Whiteout Kicks",
    images: ["assets/imgs/RetroWhiteVans.png"],
    smallImage: "assets/imgs/compressed/RetroWhiteVans_compressed.png",
    description: "All-white retro kicks for a timeless, clean look.",
    price: 89.99,
    reviews: [],
    newArrival: false   
  },
  {
    name: "Frogman Green Kicks",
    images: ["assets/imgs/frogvans.png"],
    smallImage: "assets/imgs/compressed/frogvans_compressed.png",
    description: "Green kicks with a bold, amphibious style for the adventurous.",
    price: 89.99,
    reviews: [],
    newArrival: false   
  },
  {
    name: "Cali Creme Logo Sweatshirt",
    images: ["assets/imgs/cremesweatshirt.png"],
    smallImage: "assets/imgs/compressed/cremesweatshirt_compressed.png",
    description: "Cozy creme sweatshirt with the Kicks logo. Perfect for cool evenings.",
    price: 54.99,
    isSweatshirt: true,
    reviews: [],
    newArrival: false   
  }
];

export const reviews = [
    {
        clientName: "Samantha",
        rating: 4,
        stars: "★★★★☆",
        statement: "Really love the look and feel. They go with almost everything I wear.",
        date: "11/12/2025"
    },
    {
        clientName: "Derek",
        rating: 5,
        stars: "★★★★★",
        statement: "Best shoes I’ve bought in a while. Super comfy right out of the box.",
        date: "01/07/2025"
    },
    {
        clientName: "Lena",
        rating: 3,
        stars: "★★★☆☆",
        statement: "They’re decent, but I expected a bit more support. Still wearable though.",
        date: "2024-02-15"
    },
    {
        clientName: "Marcus",
        rating: 5,
        stars: "★★★★★",
        statement: "The quality is top-notch. Wore them all day at work—no issues!",
        date: "03/03/2025"
    },
    {
        clientName: "Rachel",
        rating: 4,
        stars: "★★★★☆",
        statement: "Nice fit and good grip. Took them on a weekend trip and they held up great.",
        date: "04/21/2025"
    },
    {
        clientName: "Ethan",
        rating: 2,
        stars: "★★☆☆☆",
        statement: "Style is nice, but they felt tight and stiff after a few hours.",
        date: "05/09/2025"
    },
    {
        clientName: "Tina",
        rating: 5,
        stars: "★★★★★",
        statement: "These kicks are fire! Got compliments the first day I wore them.",
        date: "06/10/2025"
    },
    {
        clientName: "Noah",
        rating: 4,
        stars: "★★★★☆",
        statement: "Good everyday shoes. Comfortable and breathable.",
        date: "06/28/2025"
    },
    {
        clientName: "Ava",
        rating: 5,
        stars: "★★★★★",
        statement: "Exactly what I was looking for. Clean design and lightweight feel.",
        date: "07/01/2025"
    }
];