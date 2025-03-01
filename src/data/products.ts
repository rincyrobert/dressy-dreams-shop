
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  description?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    category: "Evening",
    colors: ["#000000", "#a10000", "#1e40af"],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    description: "A stunning silk evening gown with a flattering silhouette. Made from premium silk that drapes beautifully, this gown features elegant detailing and is perfect for formal events and special occasions."
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "Summer",
    colors: ["#ffffff", "#ffb6c1", "#87ceeb"],
    sizes: ["XS", "S", "M", "L"],
    featured: true,
    description: "A lightweight and breezy summer dress adorned with a beautiful floral pattern. Made from breathable fabric that keeps you cool on warm days, this dress is perfect for summer outings and casual events."
  },
  {
    id: 3,
    name: "Classic Black Cocktail Dress",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Cocktail",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    description: "A timeless black cocktail dress that belongs in every wardrobe. This versatile piece features a classic design that flatters the figure and can be dressed up or down depending on the occasion."
  },
  {
    id: 4,
    name: "Business Pencil Dress",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    category: "Business",
    colors: ["#000000", "#808080", "#483d8b"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A sophisticated pencil dress designed for the professional woman. With its tailored fit and polished look, this dress is perfect for the office or business meetings where you want to make a confident impression."
  },
  {
    id: 5,
    name: "Casual Linen Dress",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Casual",
    colors: ["#f5f5dc", "#d3d3d3", "#faebd7"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A relaxed linen dress perfect for everyday wear. Made from high-quality linen that gets softer with each wash, this dress offers both comfort and style for casual outings and relaxed gatherings."
  },
  {
    id: 6,
    name: "Bohemian Maxi Dress",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "Casual",
    colors: ["#8b4513", "#deb887", "#a0522d"],
    sizes: ["S", "M", "L"],
    description: "A free-spirited bohemian maxi dress with intricate patterns and flowing design. This dress embodies bohemian chic with its relaxed fit and artistic details, perfect for those who appreciate unique, expressive fashion."
  },
  {
    id: 7,
    name: "Sequin Party Dress",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Cocktail",
    colors: ["#c0c0c0", "#ffd700", "#000000"],
    sizes: ["XS", "S", "M", "L"],
    description: "Make a statement with this eye-catching sequin party dress. Designed to stand out, this dress features shimmering sequins that catch the light with every movement, making it the perfect choice for parties and celebrations."
  },
  {
    id: 8,
    name: "Sleeveless Summer Dress",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    category: "Summer",
    colors: ["#98fb98", "#afeeee", "#fafad2"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A cool and comfortable sleeveless dress for hot summer days. Made from lightweight, breathable fabric, this dress keeps you feeling fresh while looking effortlessly stylish during the warmest months of the year."
  },
];

export const getFeaturedProducts = () => products.filter(product => product.featured);

export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);

export const getRelatedProducts = (productId: number, limit = 4) => {
  const currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === currentProduct.category)
    .slice(0, limit);
};
