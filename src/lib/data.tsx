import {
  FaCarrot,
  FaAppleAlt,
  FaCheese,
  FaDrumstickBite,
  FaFish,
  FaBreadSlice,
  FaCoffee,
  FaCookie,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Category",
    path: "/",
  },

  {
    name: "Products",
    path: "/",
  },

  {
    name: "Blogs",
    path: "/",
  },

  {
    name: "Elements",
    path: "/",
  },
];

export const phoneNumber = "+123 ( 456 ) ( 7890 )";

export const categoryData = [
  {
    name: "Vegetables",
    icon: <FaCarrot />,
  },
  {
    name: "Fruits",
    icon: <FaAppleAlt />,
  },
  {
    name: "Dairy",
    icon: <FaCheese />,
  },
  {
    name: "Meat",
    icon: <FaDrumstickBite />,
  },
  {
    name: "Seafood",
    icon: <FaFish />,
  },
  {
    name: "Bakery",
    icon: <FaBreadSlice />,
  },
  {
    name: "Beverages",
    icon: <FaCoffee />,
  },
  {
    name: "Snacks",
    icon: <FaCookie />,
  },
];

export const customerFavoriteData = [
  {
    title: "Main Dish",
    image: "/customerFavorites/main-dish.png",
    quantity: 86,
  },
  {
    title: "Break Fast",
    image: "/customerFavorites/break-fast.png",
    quantity: 12,
  },
  {
    title: "Dessert",
    image: "/customerFavorites/dessert.png",
    quantity: 48,
  },
  {
    title: "Browse All",
    image: "/customerFavorites/browse-all.png",
    quantity: 255,
  },

  {
    title: "Breakfast Food",
    image: "/customerFavorites/breakfast-food.png",
    quantity: 205,
  },
];

export const dailyBestSellsData = [
  {
    title: "All Natural Italian-Style Chicken Meatballs",
    stars: 4,
    price: "245.8",
    priceAfterDiscount: "238.85",
    stock: 120,
    sold: 90,
    seller: "Hodo Foods",
    tag: "Save 35%",
    tagColor: "#3BB77E", // Direct color value
    image: "/dailyBestSells/1.png",
    category: "Featured", // Random category
  },
  {
    title: "Organic Hass Avocados",
    stars: 5,
    price: "120.5",
    priceAfterDiscount: "99.99",
    stock: 80,
    sold: 65,
    seller: "Fresh Farms",
    tag: "Save 20%",
    tagColor: "#67BCEE", // Direct color value
    image: "/dailyBestSells/2.png",
    category: "Popular", // Random category
  },
  {
    title: "Fresh Atlantic Salmon Fillet",
    stars: 4,
    price: "350.0",
    priceAfterDiscount: "299.99",
    stock: 50,
    sold: 30,
    seller: "Ocean Delight",
    tag: "Limited Stock",
    tagColor: "#F59758", // Direct color value
    image: "/dailyBestSells/3.png",
    category: "Newly Added", // Random category
  },
  {
    title: "Crunchy Almond Butter",
    stars: 5,
    price: "185.9",
    priceAfterDiscount: "169.49",
    stock: 100,
    sold: 80,
    seller: "NutriChoice",
    tag: "Save 10%",
    tagColor: "#F74B81", // Direct color value
    image: "/dailyBestSells/4.png",
    category: "Featured", // Random category
  },
  {
    title: "Organic Mixed Berries",
    stars: 4,
    price: "275.0",
    priceAfterDiscount: "249.99",
    stock: 70,
    sold: 55,
    seller: "Berry Bliss",
    tag: "Fresh Arrival",
    tagColor: "#3BB77E", // Direct color value
    image: "/dailyBestSells/1.png",
    category: "Popular", // Random category
  },
  {
    title: "Grass-Fed Beef Ribeye Steak",
    stars: 5,
    price: "500.0",
    priceAfterDiscount: "449.99",
    stock: 40,
    sold: 25,
    seller: "Prime Cuts",
    tag: "Save 10%",
    tagColor: "#67BCEE", // Direct color value
    image: "/dailyBestSells/2.png",
    category: "Newly Added", // Random category
  },
  {
    title: "Cold-Pressed Extra Virgin Olive Oil",
    stars: 4,
    price: "320.0",
    priceAfterDiscount: "289.99",
    stock: 60,
    sold: 45,
    seller: "Olive Garden",
    tag: "Best Seller",
    tagColor: "#F59758", // Direct color value
    image: "/dailyBestSells/3.png",
    category: "Popular", // Random category
  },
  {
    title: "Gluten-Free Oatmeal Cookies",
    stars: 5,
    price: "150.0",
    priceAfterDiscount: "129.99",
    stock: 90,
    sold: 70,
    seller: "Healthy Bites",
    tag: "Top Rated",
    tagColor: "#F74B81", // Direct color value
    image: "/dailyBestSells/4.png",
    category: "Featured", // Random category
  },
  // Additional 8 items
  {
    title: "Keto Chocolate Chip Cookies",
    stars: 5,
    price: "180.0",
    priceAfterDiscount: "159.99",
    stock: 120,
    sold: 90,
    seller: "Sugar-Free Delights",
    tag: "Best Seller",
    tagColor: "#FF7043", // Direct color value
    image: "/dailyBestSells/1.png",
    category: "Newly Added", // Random category
  },
  {
    title: "Organic Grass-Fed Butter",
    stars: 4,
    price: "225.0",
    priceAfterDiscount: "199.99",
    stock: 50,
    sold: 30,
    seller: "Green Farms",
    tag: "Save 15%",
    tagColor: "#FFEB3B", // Direct color value
    image: "/dailyBestSells/2.png",
    category: "Popular", // Random category
  },
  {
    title: "Wild-Caught Shrimp",
    stars: 5,
    price: "320.0",
    priceAfterDiscount: "299.99",
    stock: 70,
    sold: 50,
    seller: "Seafood Delight",
    tag: "Fresh Arrival",
    tagColor: "#FFC107", // Direct color value
    image: "/dailyBestSells/3.png",
    category: "Featured", // Random category
  },
  {
    title: "Spicy Organic Salsa",
    stars: 4,
    price: "99.99",
    priceAfterDiscount: "85.99",
    stock: 150,
    sold: 120,
    seller: "Hot & Spicy",
    tag: "Top Rated",
    tagColor: "#FF5722", // Direct color value
    image: "/dailyBestSells/4.png",
    category: "Popular", // Random category
  },
  {
    title: "Premium Aged Balsamic Vinegar",
    stars: 5,
    price: "400.0",
    priceAfterDiscount: "349.99",
    stock: 30,
    sold: 20,
    seller: "Italian Delights",
    tag: "Limited Stock",
    tagColor: "#9C27B0", // Direct color value
    image: "/dailyBestSells/1.png",
    category: "Newly Added", // Random category
  },
  {
    title: "Almond Flour Pancake Mix",
    stars: 4,
    price: "150.0",
    priceAfterDiscount: "129.99",
    stock: 100,
    sold: 85,
    seller: "Purely Healthy",
    tag: "Save 25%",
    tagColor: "#FF9800", // Direct color value
    image: "/dailyBestSells/2.png",
    category: "Featured", // Random category
  },
  {
    title: "Organic Coconut Water",
    stars: 5,
    price: "120.0",
    priceAfterDiscount: "109.99",
    stock: 80,
    sold: 65,
    seller: "Nature's Best",
    tag: "Best Seller",
    tagColor: "#4CAF50", // Direct color value
    image: "/dailyBestSells/3.png",
    category: "Popular", // Random category
  },
  {
    title: "Vegan Protein Powder",
    stars: 4,
    price: "250.0",
    priceAfterDiscount: "229.99",
    stock: 60,
    sold: 45,
    seller: "Protein Labs",
    tag: "Fresh Arrival",
    tagColor: "#8BC34A", // Direct color value
    image: "/dailyBestSells/4.png",
    category: "Featured", // Random category
  },
  {
    title: "Chia Seed Pudding",
    stars: 5,
    price: "135.0",
    priceAfterDiscount: "119.99",
    stock: 90,
    sold: 75,
    seller: "Healthy Bites",
    tag: "Top Rated",
    tagColor: "#9E9E9E", // Direct color value
    image: "/dailyBestSells/1.png",
    category: "Newly Added", // Random category
  },
  {
    title: "Superfood Smoothie Mix",
    stars: 4,
    price: "280.0",
    priceAfterDiscount: "249.99",
    stock: 110,
    sold: 95,
    seller: "Smoothie Bliss",
    tag: "Best Seller",
    tagColor: "#607D8B", // Direct color value
    image: "/dailyBestSells/2.png",
    category: "Popular", // Random category
  },
  {
    title: "Gluten-Free Pizza Crust",
    stars: 5,
    price: "175.0",
    priceAfterDiscount: "159.99",
    stock: 130,
    sold: 110,
    seller: "Baker's Delight",
    tag: "Save 30%",
    tagColor: "#FFC107", // Direct color value
    image: "/dailyBestSells/3.png",
    category: "Featured", // Random category
  },
];

export const dailyBestSellsCategory: (
  | "featured"
  | "popular"
  | "newly added"
)[] = ["featured", "popular", "newly added"];

export const specialDishesData = [
  {
    title: "Fattoush salad",
    subtitle: "Description of the item",
    isFavorite: true,
    image: "/specialDishes/1.png",
  },
  {
    title: "Grilled Chicken Shawarma",
    subtitle: "Juicy grilled chicken with spices",
    isFavorite: false,
    image: "/specialDishes/2.png",
  },
  {
    title: "Falafel Plate",
    subtitle: "Crispy chickpea fritters with tahini",
    isFavorite: false,
    image: "/specialDishes/3.png",
  },
  {
    title: "Hummus with Pita",
    subtitle: "Smooth hummus served with warm pita bread",
    isFavorite: false,
    image: "/specialDishes/1.png",
  },
  {
    title: "Stuffed Grape Leaves",
    subtitle: "Grape leaves filled with rice and herbs",
    isFavorite: false,
    image: "/specialDishes/2.png",
  },
  {
    title: "Lamb Kofta",
    subtitle: "Spiced ground lamb skewers grilled to perfection",
    isFavorite: false,
    image: "/specialDishes/3.png",
  },
  {
    title: "Mujadara",
    subtitle: "Rice and lentils topped with crispy onions",
    isFavorite: false,
    image: "/specialDishes/1.png",
  },
  {
    title: "Tabbouleh Salad",
    subtitle: "Fresh parsley, tomato, and bulgur salad",
    isFavorite: false,
    image: "/specialDishes/2.png",
  },
  {
    title: "Baklava",
    subtitle: "Sweet, flaky pastry filled with nuts and honey",
    isFavorite: true,
    image: "/specialDishes/3.png",
  },
  {
    title: "Shish Tawook",
    subtitle: "Grilled chicken skewers marinated with yogurt and spices",
    isFavorite: false,
    image: "/specialDishes/1.png",
  },
];

export const dealsOfTheDayData = [
  {
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    seller: "NestFood",
    price: 33.8,
    priceAfterDiscount: 32.85,
    image: "/DealsOfTheDay/1.png",
    stars: 4,
  },
  {
    title: "Perdue Simply Smart Organics Gluten Free",
    seller: "Old El Paso",
    price: 26.8,
    priceAfterDiscount: 24.85,
    image: "/DealsOfTheDay/2.png",
    stars: 5,
  },
  {
    title: "Signature Wood-Fired Mushroom and Caramelized",
    seller: "Progresso",
    price: 13.8,
    priceAfterDiscount: 12.85,
    image: "/DealsOfTheDay/3.png",
    stars: 3,
  },
  {
    title: "Simply Lemonade with Raspberry Juice",
    seller: "Yoplait",
    price: 16.8,
    priceAfterDiscount: 15.85,
    image: "/DealsOfTheDay/4.png",
    stars: 5,
  },
];

export const faqData = [
  {
    title: "Convenient and Reliable",
    describe:
      "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
    image: "/WhyPeopleChooseUs/convenient.png",
  },
  {
    title: "Variety of Options",
    describe:
      "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
    image: "/WhyPeopleChooseUs/variety.png",
  },
  {
    title: "Eat Burger",
    describe:
      "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
    image: "/WhyPeopleChooseUs/eat-burger.png",
  },
];

export const services = [
  {
    title: "Best prices & offers",
    subTitle: "Orders $50 or more",
    image: "/services/1.png",
  },
  {
    title: "Free delivery",
    subTitle: "24/7 amazing services",
    image: "/services/2.png",
  },
  {
    title: "Great daily deal",
    subTitle: "When you sign up",
    image: "/services/3.png",
  },
  {
    title: "Wide assortment",
    subTitle: "Mega Discounts",
    image: "/services/4.png",
  },
  {
    title: "Easy returns",
    subTitle: "Within 30 days",
    image: "/services/5.png",
  },
];

export const footerData = {
  description:
    "FoodTrove is the biggest market of grocery products. Get your daily needs from our store.",
  location:
    "51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.",
  email: "example@email.com",
  phone: "+91 123 4567890",

  company: [
    {
      name: "About Us",
      path: "/",
    },
    {
      name: "Delivery Information",
      path: "/",
    },
    {
      name: "Privacy Policy",
      path: "/",
    },
    {
      name: "Terms & Conditions",
      path: "/",
    },
    {
      name: "contact Us",
      path: "/",
    },
    {
      name: "Support Center",
      path: "/",
    },
  ],

  category: [
    {
      name: "Dairy & Bakery",
      path: "/",
    },
    {
      name: "Fruits & Vegetable",
      path: "/",
    },
    {
      name: "Snack & Spice",
      path: "/",
    },
    {
      name: "Juice & Drinks",
      path: "/",
    },
    {
      name: "Chicken & Meat",
      path: "/",
    },
    {
      name: "Fast Food",
      path: "/",
    },
  ],

  socialmedia: [
    {
      logo: <RiFacebookLine />,
      path: "/",
    },
    {
      logo: <FaXTwitter />,
      path: "/",
    },
    {
      logo: <IoBasketballOutline />,
      path: "/",
    },
    {
      logo: <FaInstagram />,
      path: "/",
    },
  ],

  images: [
    "/footer/1.png",
    "/footer/2.png",
    "/footer/3.png",
    "/footer/4.png",
    "/footer/5.png",
  ],
};
