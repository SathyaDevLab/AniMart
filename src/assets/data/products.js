import productImg01 from "../images/double-sofa-01.png";
import productImg02 from "../images/double-sofa-02.png";
import productImg03 from "../images/double-sofa-03.png";

import productImg04 from "../images/single-sofa-01.jpg";
import productImg05 from "../images/single-sofa-02.jpg";
import productImg06 from "../images/single-sofa-03.jpg";
import productImg007 from "../images/single-sofa-04.png";

import productImg07 from "../images/arm-chair-01.jpg";
import productImg08 from "../images/arm-chair-02.jpg";
import productImg09 from "../images/arm-chair-03.jpg";
import productImg10 from "../images/arm-chair-01.jpg";

import productImg13 from "../images/phone-01.jpg";
import productImg14 from "../images/phone-02.jpg";
import productImg15 from "../images/phone-03.png";
import productImg16 from "../images/phone-04.jpg";
import productImg17 from "../images/phone-05.jpg";
import productImg18 from "../images/phone-06.jpg";

import productImg19 from "../images/watch-01.jpg";
import productImg20 from "../images/watch-02.jpg";
import productImg21 from "../images/watch-03.jpg";
import productImg22 from "../images/watch-04.jpg";

import productImg23 from "../images/wireless-01.png";

import productImg25 from "../images/wireless-03.png";

const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview Sofa",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    shortDesc: "Comfortable and stylish sofa with plush cushions.",
    description:
      "The Stone and Beam Westview Sofa offers a contemporary design with deep seats and luxurious cushioning. Made with high-quality materials, it provides both comfort and durability, making it a perfect addition to any modern living space.",
    reviews: [
      {
        rating: 4.7,
        text: "Great sofa with a modern look. Comfortable and well-built.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc: "Sleek, mid-century modern sofa with elegant lines.",
    description:
      "The Rivet Bigelow Modern Sofa features a sleek mid-century design with clean lines and a minimalist aesthetic. Its plush cushions provide superior comfort, making it an ideal choice for stylish and functional living spaces.",
    reviews: [
      {
        rating: 4.8,
        text: "Stylish and very comfortable. The perfect fit for my living room.",
      },
      {
        rating: 4.8,
        text: "Excellent quality and design. Worth the price.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc: "Affordable modern sofa with a sleek design.",
    description:
      "This Amazon Brand Modern Sofa combines affordability with style. Its clean lines and contemporary design make it a great addition to any home. The high-density foam cushions ensure comfort and support for everyday use.",
    reviews: [
      {
        rating: 4.6,
        text: "Great value for the price. Looks good and feels comfortable.",
      },
      {
        rating: 4.9,
        text: "Exceeded my expectations in both comfort and design.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc: "Sleek, mid-century modern sofa with elegant lines.",
    description:
      "The Rivet Bigelow Modern Sofa features a sleek mid-century design with clean lines and a minimalist aesthetic. Its plush cushions provide superior comfort, making it an ideal choice for stylish and functional living spaces.",
    reviews: [
      {
        rating: 4.8,
        text: "Stylish and very comfortable. The perfect fit for my living room.",
      },
      {
        rating: 4.8,
        text: "Excellent quality and design. Worth the price.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc: "Cozy sofa with a plush, sheep-like texture.",
    description:
      "The Fllufy Sheep Sofa brings a touch of whimsy to your living space with its plush, sheep-like texture. It’s designed for ultimate comfort, making it a perfect spot to relax and unwind after a long day.",
    reviews: [
      {
        rating: 4.6,
        text: "Super soft and cozy. Adds a fun element to my living room.",
      },
      {
        rating: 4.9,
        text: "Absolutely love the texture and comfort. Highly recommend.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc: "Luxurious velvet sofa with a rich texture.",
    description:
      "The Faux Velvet Sofa offers a touch of luxury with its rich velvet texture. Designed to enhance any living room, it provides both elegance and comfort with its plush seating and stylish appearance.",
    reviews: [
      {
        rating: 4.6,
        text: "Gorgeous sofa with a soft, velvet feel. Very elegant.",
      },
      {
        rating: 4.9,
        text: "Love the luxurious feel and look. Great addition to my home.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 163,
    shortDesc: "Cozy sofa with a plush, sheep-like texture.",
    description:
      "The Fllufy Sheep Sofa brings a touch of whimsy to your living space with its plush, sheep-like texture. It’s designed for ultimate comfort, making it a perfect spot to relax and unwind after a long day.",
    reviews: [
      {
        rating: 4.6,
        text: "Super soft and cozy. Adds a fun element to my living room.",
      },
      {
        rating: 4.9,
        text: "Absolutely love the texture and comfort. Highly recommend.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc: "Elegant armchair with a classic design.",
    description:
      "The Sakarias Armchair offers a classic design with elegant details. Its comfortable seating and timeless style make it a great addition to any room, providing both comfort and sophistication.",
    reviews: [
      {
        rating: 4.6,
        text: "Comfortable and stylish. A great choice for any room.",
      },
      {
        rating: 4.9,
        text: "Love the classic design. Fits perfectly in my living space.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc: "Contemporary arm sofa with a modern design.",
    description:
      "The Modern Arm Sofa features a contemporary design with clean lines and modern appeal. Its comfortable cushions and stylish look make it an excellent choice for updating your living area.",
    reviews: [
      {
        rating: 4.6,
        text: "Stylish and comfortable. Great for modern interiors.",
      },
      {
        rating: 4.9,
        text: "Perfect blend of comfort and design. Highly recommended.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc: "Stylish chair with a modern design.",
    description:
      "The Baltsar Chair features a stylish, modern design that complements various decor styles. Its sleek appearance and comfortable seating make it a versatile addition to any space.",
    reviews: [
      {
        rating: 4.6,
        text: "Great design and very comfortable. A good value for the price.",
      },
      {
        rating: 4.9,
        text: "Adds a modern touch to my room. Love it!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 79,
    shortDesc: "Affordable and stylish chair for any room.",
    description:
      "The Helmar Chair combines affordability with style. Its simple design and comfortable seating make it a practical choice for any room in your home.",
    reviews: [
      {
        rating: 4.5,
        text: "Affordable and stylish. Perfect for my home office.",
      },
      {
        rating: 4.7,
        text: "Great value for the price. Comfortable and looks good.",
      },
    ],
    avgRating: 4.6,
  },

  {
    id: "10",
    productName: "Loke Chair",
    imgUrl: productImg10,
    category: "chair",
    price: 109,
    shortDesc: "Comfortable chair with a modern design.",
    description:
      "The Loke Chair offers a comfortable seating experience with its modern design. Ideal for any contemporary setting, it provides both functionality and style.",
    reviews: [
      {
        rating: 4.6,
        text: "Comfortable and looks great. Perfect for my living room.",
      },
      {
        rating: 4.8,
        text: "Very pleased with the design and comfort. Highly recommend.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "11",
    productName: "Apple iPhone 13",
    imgUrl: productImg13,
    category: "mobile",
    price: 699,
    shortDesc: "Latest iPhone with advanced features.",
    description:
      "The Apple iPhone 13 offers cutting-edge technology with its powerful A15 Bionic chip, improved camera system, and stunning Super Retina XDR display. Experience the latest in mobile innovation with this high-performance device.",
    reviews: [
      {
        rating: 4.8,
        text: "Fantastic phone with excellent performance and camera quality.",
      },
      {
        rating: 4.9,
        text: "Love the new features and design. Worth every penny.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Samsung Galaxy S22",
    imgUrl: productImg14,
    category: "mobile",
    price: 799,
    shortDesc: "High-end smartphone with powerful specs.",
    description:
      "The Samsung Galaxy S22 boasts a powerful processor, stunning AMOLED display, and versatile camera system. It’s designed to deliver top-notch performance and an exceptional user experience.",
    reviews: [
      {
        rating: 4.7,
        text: "Impressive performance and camera quality. Highly recommend.",
      },
      {
        rating: 4.8,
        text: "Excellent smartphone with great features and build quality.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "13",
    productName: "Google Pixel 6",
    imgUrl: productImg15,
    category: "mobile",
    price: 599,
    shortDesc: "Smartphone with Google’s latest technology.",
    description:
      "The Google Pixel 6 features Google's Tensor chip, an advanced camera system, and a clean Android experience. It’s designed to provide seamless performance and exceptional photo quality.",
    reviews: [
      {
        rating: 4.8,
        text: "Great phone with a smooth Android experience and fantastic camera.",
      },
      {
        rating: 4.9,
        text: "Love the integration with Google services and overall performance.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: productImg17,
    category: "mobile",
    price: 899,
    shortDesc: "Premium iPhone with Pro features and performance.",
    description:
      "The Apple iPhone 13 Pro offers a ProMotion display with 120Hz refresh rate, A15 Bionic chip, and an enhanced camera system for professional-grade photos and videos.",
    reviews: [
      {
        rating: 4.8,
        text: "Amazing performance and display quality. The best iPhone yet.",
      },
      {
        rating: 4.9,
        text: "Incredible features and build quality. Worth every dollar.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S21",
    imgUrl: productImg18,
    category: "mobile",
    price: 699,
    shortDesc: "Flagship Samsung phone with high performance.",
    description:
      "The Samsung Galaxy S21 offers a powerful processor, vibrant display, and advanced camera features. It’s designed to provide a premium experience with top-of-the-line specifications.",
    reviews: [
      {
        rating: 4.7,
        text: "Great flagship phone with excellent performance and camera.",
      },
      {
        rating: 4.8,
        text: "Highly recommend for anyone looking for a high-end smartphone.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "16",
    productName: "Casio G-Shock",
    imgUrl: productImg19,
    category: "watch",
    price: 149,
    shortDesc: "Durable watch with shock resistance.",
    description:
      "The Casio G-Shock is known for its durability and shock resistance. It’s designed for tough environments and features a robust build with various functions suitable for any adventure.",
    reviews: [
      {
        rating: 4.5,
        text: "Tough and reliable watch. Perfect for outdoor activities.",
      },
      {
        rating: 4.6,
        text: "Very durable and has useful features. Great value.",
      },
    ],
    avgRating: 4.6,
  },

  {
    id: "17",
    productName: "Rolex Submariner",
    imgUrl: productImg20,
    category: "watch",
    price: 7499,
    shortDesc: "Iconic luxury watch with diving capabilities.",
    description:
      "The Rolex Submariner is a luxury watch renowned for its precision and durability. It features a classic design with diving capabilities, making it a prestigious choice for watch enthusiasts.",
    reviews: [
      {
        rating: 4.9,
        text: "A timeless piece with exceptional quality. Worth the investment.",
      },
      {
        rating: 5.0,
        text: "Incredible craftsmanship and design. The best luxury watch.",
      },
    ],
    avgRating: 4.9,
  },

  {
    id: "18",
    productName: "Omega Seamaster",
    imgUrl: productImg21,
    category: "watch",
    price: 5699,
    shortDesc: "Elegant watch with a sophisticated design.",
    description:
      "The Omega Seamaster is known for its elegant design and precision. It combines style with functionality, making it a great choice for both formal and casual occasions.",
    reviews: [
      {
        rating: 4.8,
        text: "Beautiful watch with a sophisticated design. Very pleased.",
      },
      {
        rating: 4.9,
        text: "Excellent quality and performance. Highly recommend.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Tissot PRX",
    imgUrl: productImg22,
    category: "watch",
    price: 299,
    shortDesc: "Stylish watch with a modern look.",
    description:
      "The Tissot PRX features a modern design with a sleek appearance. It combines style and functionality, making it a versatile watch suitable for any occasion.",
    reviews: [
      {
        rating: 4.7,
        text: "Great design and comfort. Perfect for everyday wear.",
      },
      {
        rating: 4.8,
        text: "Stylish and accurate. Very satisfied with the purchase.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "20",
    productName: "Bose QuietComfort 35 II",
    imgUrl: productImg23,
    category: "accessory",
    price: 299,
    shortDesc: "Noise-cancelling headphones with excellent sound quality.",
    description:
      "The Bose QuietComfort 35 II headphones offer industry-leading noise cancellation and superior sound quality. They’re designed for comfortable extended wear and deliver an immersive listening experience.",
    reviews: [
      {
        rating: 4.9,
        text: "Outstanding noise cancellation and sound quality. Worth the price.",
      },
      {
        rating: 5.0,
        text: "The best headphones I’ve owned. Excellent comfort and performance.",
      },
    ],
    avgRating: 4.9,
  },

  {
    id: "21",
    productName: "Sony WH-1000XM4",
    imgUrl: productImg25,
    category: "accessory",
    price: 349,
    shortDesc: "Top-of-the-line wireless headphones with noise cancellation.",
    description:
      "The Sony WH-1000XM4 are premium wireless headphones with advanced noise-cancelling technology. They provide exceptional sound quality and comfort, ideal for both casual listening and professional use.",
    reviews: [
      {
        rating: 4.8,
        text: "Exceptional sound quality and noise cancellation. Highly recommended.",
      },
      {
        rating: 4.9,
        text: "Best headphones I’ve used. Comfortable and great performance.",
      },
    ],
    avgRating: 4.8,
  },
];

export default products