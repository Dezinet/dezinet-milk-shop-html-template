const allProducts = [
  { 
    id: 1, 
    name: "Fresh Cow Milk (A2)", 
    category: "Dairy & Milk", 
    price: 65, 
    priceLabel: "/ Litre",
    weightMin: "5 Litres", 
    image: "product_images/fresh_milk_premium_1775389059980.png",
    description: "Sourced from our prize-winning pure-bred cows. Our A2 milk is carefully tested for the presence of A1 protein, ensuring only the most digestible and heart-healthy milk reaches you. This is milk as nature intended: rich, creamy, and completely unprocessed beyond standard temperature control.",
    benefits: [
      "Naturally rich in A2 Beta-Casein protein",
      "Easier on the stomach compared to A1 milk",
      "Collected from free-grazing, stress-free cows",
      "No antibiotics or hormones used - Guaranteed"
    ],
    nutrients: { 
      "Total Fat": "4.5g", 
      "Protein": "3.4g", 
      "Calcium": "120mg",
      "Vitamin B12": "0.4µg",
      "Magnesium": "11mg"
    },
    farmSource: "Green Valley Farm, Unit 4",
    shelfLife: "2 Days (Keep refrigerated below 4°C)",
    deliveryDetail: "Delivered within 5 hours of milking to ensure peak freshness.",
    faq: [
      { q: "Is it pasteurized?", a: "To maintain the raw enzyme profile, we use flash heating (mild pasteurization) which kills pathogens but keeps the nutrients alive." },
      { q: "Can I boil this milk?", a: "Yes, you can boil it. We recommend boiling on low heat and letting it cool naturally for the best flavor." }
    ],
    reviews: [
      { name: "Arjun Verma", date: "April 02, 2026", rating: 5, comment: "I've been looking for authentic A2 milk for years. This is the real deal - you can taste the difference in the first sip!" },
      { name: "Priya Sharma", date: "March 30, 2026", rating: 5, comment: "The thickness is amazing. My kids who usually hate milk are asking for more." }
    ]
  },
  { 
    id: 2, 
    name: "Pure Buffalo Milk", 
    category: "Dairy & Milk", 
    price: 80, 
    priceLabel: "/ Litre",
    weightMin: "5 Litres", 
    image: "product_images/fresh_milk_premium_1775389059980.png",
    description: "Thick, creamy, and perfect for making desserts. Our buffalo milk is sourced from prime Murrah breed buffaloes. With a higher fat content than cow milk, it is a favorite for those who love richer flavor and heavy cream yield.",
    benefits: [
      "Naturally high in fat and minerals",
      "Perfect for making thick curd & kheer",
      "Sourced from the best Murrah buffaloes",
      "Rich in calcium and energy"
    ],
    nutrients: { 
      "Total Fat": "7.5g", 
      "Protein": "4.2g", 
      "Calcium": "180mg",
      "Energy": "110 kcal"
    },
    farmSource: "Buffalo Unit 1, Green Valley",
    shelfLife: "2 Days (Must be refrigerated)",
    deliveryDetail: "Delivered chilled within 4 hours of collection.",
    faq: [
      { q: "Is the taste different?", a: "Yes, buffalo milk is slightly sweeter and much thicker than cow milk." },
      { q: "Can I use it for tea?", a: "Most certainly! It makes the richest cup of Indian masala chai." }
    ],
    reviews: [
      { name: "Pankaj Jain", date: "April 01, 2026", rating: 5, comment: "Most authentic buffalo milk in the NCR region." }
    ]
  },
  { 
    id: 3, 
    name: "Pure Bilona Desi Ghee", 
    category: "Ghee & Oils", 
    price: 650, 
    priceLabel: "/ KG",
    weightMin: "2 KG", 
    image: "product_images/desi_ghee_jar_1775389078798.png",
    description: "Our Ghee is crafted using the ancient 'Bilona' method: milk is boiled, curdled, churned by hand, and then the butter is slow-cooked until only the pure, aromatic oil remains. This process preserves the vital fat-soluble vitamins and medicine-like properties that mass-produced ghee lacks.",
    benefits: [
      "Made from A2 curd (not cream)",
      "Traditional Bilona process (Vedic method)",
      "Lactose and Casein free - Great for Keto",
      "Enhances digestion and brain health"
    ],
    nutrients: { 
      "Energy": "897 kcal", 
      "Saturated Fat": "65g", 
      "Vitamin A": "850 IU",
      "Moisture": "Max 0.3%"
    },
    farmSource: "Traditional Unit, Delhi FarmHub",
    shelfLife: "9 Months (Store in a cool, dry place)",
    deliveryDetail: "Small-batch production ensures each jar is fresh and aromatic.",
    faq: [
      { q: "Why is the color yellowish?", a: "Bilona ghee from Desi cows contains Beta-Carotene, which gives it a natural gold-yellow color." },
      { q: "Is the jar plastic?", a: "No, we only package our premium ghee in high-quality food-grade glass jars." }
    ],
    reviews: [
      { name: "Vikram Singh", date: "April 04, 2026", rating: 5, comment: "The aroma takes me back to my childhood in the village. This ghee is pure Liquid Gold." },
      { name: "Suman Kapur", date: "March 25, 2026", rating: 5, comment: "Using it for my daily puja and cooking. The texture is perfect and granular." }
    ]
  },
  { 
    id: 4, 
    name: "Fresh Hand-Crafted Paneer", 
    category: "Fresh Cheese", 
    price: 450, 
    priceLabel: "/ KG",
    weightMin: "2 KG", 
    image: "product_images/fresh_paneer_cubes_1775389099140.png",
    description: "Experience the true softness of farm-fresh paneer. Unlike factory-made versions, our paneer is hand-pressed every morning. We use only fresh lemon and pure milk to curdle it, resulting in a product that is exceptionally soft and ready to soak up the flavors of your favorite dishes.",
    benefits: [
      "Zero Starch or Adulterants",
      "Made fresh every morning at 4 AM",
      "Extremely soft 'Malai' texture",
      "Rich in high-quality dairy protein"
    ],
    nutrients: { 
      "Protein": "18.3g", 
      "Fat": "22g", 
      "Carbohydrates": "2g",
      "Calcium": "480mg"
    },
    farmSource: "Dairy Kitchen @ Green Valley",
    shelfLife: "3 Days (Always keep refrigerated)",
    deliveryDetail: "Always delivered fresh, never frozen.",
    faq: [
      { q: "Can I freeze the paneer?", a: "While you can freeze it, we recommend using it fresh for the best soft texture." },
      { q: "Is it safe for pregnant women?", a: "Yes, it is fully pasteurized and made under strict hygiene conditions." }
    ],
    reviews: [
      { name: "Rishi Raj", date: "April 01, 2026", rating: 5, comment: "It literally melts in the mouth. Best paneer I've found in the city so far." }
    ]
  },
  { 
    id: 5, 
    name: "Royal Saffron Gulab Jamun", 
    category: "Indian Sweets", 
    price: 320, 
    priceLabel: "/ Box",
    weightMin: "1 KG", 
    image: "product_images/gulab_jamun_decorative_1775389115873.png",
    description: "Our Gulab Jamun is the standard of celebration. Made with 'Dhapp' Khoya and slow-cooked in pure ghee, each piece is then soaked in a saffron-infused sugar syrup. It’s balanced, aromatic, and perfectly soft.",
    benefits: [
      "Authentic Khoya (Milk Solids) base",
      "Fried in our own Pure Desi Ghee",
      "Saffron direct from Kashmir",
      "No artificial sweetners or colors"
    ],
    nutrients: { 
      "Energy": "320 kcal", 
      "Sugar": "Low-Moderate", 
      "Ghee Content": "High",
      "Piece Count": "12-14 per KG"
    },
    farmSource: "Sweet Shop @ Delhi FarmHub",
    shelfLife: "7 Days (Refrigeration recommended)",
    deliveryDetail: "Temperature controlled delivery to maintain softness.",
    faq: [
      { q: "Are they very sweet?", a: "We maintain a balanced sweetness to let the flavor of the khoya and saffron shine." }
    ],
    reviews: [
      { name: "Meera Das", date: "April 03, 2026", rating: 5, comment: "I ordered these for my daughter's birthday. They were a huge hit!" }
    ]
  }
];
