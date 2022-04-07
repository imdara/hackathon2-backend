const prods = [
  {
    name: "Nike Men's Air Zoom Pegasus 38 Running Shoe",
    category: "Footwear",
    rating: 4.4,
    price: 9695,
    image: "https://m.media-amazon.com/images/I/61WZDJNfOJL._UL1250_.jpg",
    id: "1",
  },
  {
    name: "Puma Men's Softride Rift Tech One8 Closed Shoe",
    category: "Footwear",
    rating: 3.8,
    price: 3299,
    image: "https://m.media-amazon.com/images/I/61XQS-Oz+FL._UL1200_.jpg",
    id: "2",
  },
  {
    name: "Puma Unisex Adult Blaze Peacoat White Running Shoe-7 Kids UK (19511001)",
    category: "Footwear",
    rating: 4.3,
    price: 1599,
    image: "https://m.media-amazon.com/images/I/61yPkBikX4L._UL1200_.jpg",
    id: "3",
  },
  {
    name: "Adidas Men's Response Super 2.0 Shoes",
    category: "Footwear",
    rating: 5,
    price: 5230,
    image: "https://m.media-amazon.com/images/I/61zkH0+ANvL._UL1500_.jpg",
    id: "4",
  },
  {
    name: "Woodland Men's G 40777cma Leather Sneaker",
    category: "Footwear",
    rating: 4.2,
    price: 3695,
    image: "https://m.media-amazon.com/images/I/61deZ+oW3yL._UL1258_.jpg",
    id: "5",
  },
  {
    name: "AMD Ryzen 7 3700X Desktop Processor 8 Cores up to 4.4GHz 36MB Cache AM4 Socket (100-100000071BOX)",
    category: "Computer Peripherals",
    rating: 4.5,
    price: 26500,
    image: "https://m.media-amazon.com/images/I/717Di3DGIbL._AC_UY218_.jpg",
    id: "6",
  },
  {
    name: "Seagate Barracuda 2 TB Internal Hard Drive HDD – 3.5 Inch SATA 6 Gb/s 5400 RPM 256 MB Cache for Computer Desktop PC (ST2000DM005)",
    category: "Computer Peripherals",
    rating: 4.3,
    price: 3980,
    image: "https://m.media-amazon.com/images/I/614rFGMUwTL._SL1500_.jpg",
    id: "7",
  },
  {
    name: "Ant Esports ICE-130AG Mid Tower Computer Case I Gaming Cabinet Supports ATX, Micro-ATX, Mini-ITX Motherboard with Transparent Side Panel 1 x 120 mm Rear Fan Preinstalled - Black",
    category: "Computer Peripherals",
    rating: 4.3,
    price: 2950,
    image: "https://m.media-amazon.com/images/I/61GodxYLinL._SL1080_.jpg",
    id: "8",
  },
  {
    name: "Corsair CV550, CV Series, 80 Plus Bronze Certified, 550 Watt Non-Modular Power Supply - Black",
    category: "Computer Peripherals",
    rating: 4.5,
    price: 4099,
    image: "https://m.media-amazon.com/images/I/61yZLAaNbwL._SL1200_.jpg",
    id: "9",
  },
  {
    name: "Neulife Lycan Wooden Baseball bat - Heavy Duty",
    category: "Sports and Fitness",
    rating: 4,
    price: 280,
    image: "",
    id: "10",
  },
  {
    name: "https://m.media-amazon.com/images/I/81g87b5bzLL._SL1500_.jpg",
    category: "Sports and Fitness",
    rating: 4,
    price: 504,
    image: "https://m.media-amazon.com/images/I/81g87b5bzLL._SL1500_.jpg",
    id: "11",
  },
  {
    name: "JJ Jonex Incline, Decline and Flat Bench for Multi-Functional Exercises, Gym and Home",
    category: "Sports and Fitness",
    rating: 3.8,
    price: 5899,
    image: "https://m.media-amazon.com/images/I/41f3eNsVHsL.jpg",
    id: "12",
  },
  {
    name: "Efit Imported Pro-Grip Seated Row, Chinning Bar",
    category: "Sports and Fitness",
    rating: 4.4,
    price: 585,
    image: "https://m.media-amazon.com/images/I/31Hkj4aNtbS.jpg",
    id: "13",
  },
  {
    name: "Epiphone ENPTVSNH1 Solid Body Electric Guitars Les Paul Studio LT, Vintage Sunburst",
    category: "Musical Instruments",
    rating: 4.5,
    price: 24103,
    image: "https://m.media-amazon.com/images/I/71J1UyRaTdL._SL1500_.jpg",
    id: "14",
  },
  {
    name: "Fender Bullet-SSS-BSB 0370001532 Right Handed Squier Bullet Strat with Tremolo (Brown Sunburst)",
    category: "Musical Instruments",
    rating: 4.4,
    price: 12800,
    image: "https://m.media-amazon.com/images/I/71T9SycvQ8L._SL1500_.jpg",
    id: "15",
  },
  {
    name: "Yamaha Remie PSS-E30 37-Key Portable Mini Keyboard, White",
    category: "Musical Instruments",
    rating: 4.4,
    price: 3350,
    image: "https://m.media-amazon.com/images/I/61IKWgG1FPS._SL1500_.jpg",
    id: "16",
  },
  {
    name: "Casio CT-S200 Casiotone 61-Key Portable Keyboard (Red)",
    category: "Musical Instruments",
    rating: 4.5,
    price: 7994,
    image: "https://m.media-amazon.com/images/I/611i09m4QUL._SL1101_.jpg",
    id: "17",
  },
  {
    name: "Safari Sonic Hard-Sided Polycarbonate Luggage Set of 3 Trolley Bags (55 & 65 & 77 cm) (Blue)",
    category: "Luggage & Bags",
    rating: 4.3,
    price: 8700,
    image: "https://m.media-amazon.com/images/I/A1lMFhyT2PL._SL1500_.jpg",
    id: "18",
  },
  {
    name: "Chernobyl",
    category: "TV Shows",
    rating: 4.8,
    price: 1999,
    image: "https://m.media-amazon.com/images/I/811s6Hk3xfL._SL1500_.jpg",
    id: "19",
  },
  {
    name: "True Detective - Season 1",
    category: "TV Shows",
    rating: 4.8,
    price: 1999,
    image: "https://m.media-amazon.com/images/I/814DXqF2bJL._SL1500_.jpg",
    id: "20",
  },
  {
    name: "Breaking Bad: The Fifth Season Part 1",
    category: "TV Shows",
    rating: 4.8,
    price: 1399,
    image: "https://m.media-amazon.com/images/I/51AByj8MttL.jpg",
    id: "21",
  },
  {
    name: "Rockstar (DVD)",
    category: "Movies",
    rating: 3.9,
    price: 299,
    image: "https://images-na.ssl-images-amazon.com/images/I/811a1DHT8OL.jpg",
    id: "22",
  },
  {
    name: "Spider-Man: No Way Home (4K UHD) (1-Disc)",
    category: "Movies",
    rating: 5,
    price: 2399,
    image: "https://m.media-amazon.com/images/I/91f+41WtJUL._SL1500_.jpg",
    id: "23",
  },
  {
    name: "HTML & CSS: Design and Build Websites + JavaScript & JQuery: Interactive Front-End Web Development (Set of 2 Volumes)",
    category: "Books",
    rating: 4.7,
    price: 3768,
    image: "https://images-na.ssl-images-amazon.com/images/I/811a1DHT8OL.jpg",
    id: "24",
  },
  {
    name: "Programming in ANSI C, 8/e Paperback – 25 March 2019",
    category: "Books",
    rating: 4.5,
    price: 525,
    image:
      "https://m.media-amazon.com/images/P/B07TSQN91S.01._SCLZZZZZZZ_SX500_.jpg",
    id: "25",
  },
  {
    name: "The Maverick Effect: The Inside Story of India's IT Revolution",
    category: "Books",
    rating: 5,
    price: 475.32,
    image:
      "https://m.media-amazon.com/images/P/B09QMWLZC8.01._SCLZZZZZZZ_SX500_.jpg",
    id: "26",
  },
  {
    name: "ERGOMATE Single Motor Sit & Stand Desk 1200x600mm | Width Adjustable Frame | Thermal & Overload Protected Motors | 3 Level Memory Preset | Child Lock | Anti Collision Feature - White Frame & White Tabletop",
    category: "Furniture",
    rating: 4.5,
    price: 28500,
    image: "https://m.media-amazon.com/images/I/51hmwEEAh6L._SL1500_.jpg",
    id: "27",
  },
  {
    name: "Sleepyhead RX5 - Single Seater Fabric Recliner (Turkish Brown)",
    category: "Furniture",
    rating: 4.7,
    price: 14999,
    image: "https://m.media-amazon.com/images/I/610hBxmybPL._SL1000_.jpg",
    id: "28",
  },
  {
    name: "Cello Novelty Big Plastic Shoe Rack with Lock(Brown)",
    category: "Furniture",
    rating: 4.3,
    price: 4399,
    image: "https://m.media-amazon.com/images/I/81Lhl6N9wBS._SL1500_.jpg",
    id: "29",
  },
  {
    name: "CELLBELL | DC Comics - Batman Gaming Chair/Ergonomic High Back Chair with Removable Neck Rest and Adjustable Back Cushion Chair for Gamers PU Leather [Grey-Black]",
    category: "Furniture",
    rating: 5,
    price: 20999,
    image: "https://m.media-amazon.com/images/I/51LbB5G+HeL._SL1000_.jpg",
    id: "30",
  },
];

module.exports = prods;