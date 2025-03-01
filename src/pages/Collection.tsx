
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Filter, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("newest");
  
  // Filter products by category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return b.id - a.id; // newest by default
  });

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-medium tracking-tight">
              Dressy Dreams
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/collection" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Collection
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
                About
              </Link>
              <Link to="/cart" className="relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Collection Header */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium tracking-tight mb-4">Collection</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover our timeless dresses crafted with premium fabrics and attention to detail. 
            From everyday essentials to statement pieces for special occasions.
          </p>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="transition-all duration-300"
            >
              All
            </Button>
            {categories.map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <Filter size={16} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  Sort by: {sortOptions.find(option => option.value === sortBy)?.label}
                  <ChevronDown size={16} className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-50 bg-white">
                {sortOptions.map(option => (
                  <DropdownMenuItem 
                    key={option.value} 
                    onClick={() => setSortBy(option.value)}
                    className="cursor-pointer"
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map(product => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {/* Display color variants */}
                  {product.colors.map(color => (
                    <div 
                      key={color} 
                      className="w-4 h-4 rounded-full border border-gray-200" 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Dressy Dreams</h3>
              <p className="text-gray-600 mb-4">
                Elegance in every stitch, quality in every detail.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/collection" className="text-gray-600 hover:text-black transition-colors">Collection</Link></li>
                <li><Link to="/new-arrivals" className="text-gray-600 hover:text-black transition-colors">New Arrivals</Link></li>
                <li><Link to="/bestsellers" className="text-gray-600 hover:text-black transition-colors">Bestsellers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-black transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-600 hover:text-black transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="text-gray-600 hover:text-black transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Dressy Dreams. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sample data
const categories = ["Evening", "Casual", "Summer", "Cocktail", "Business"];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    category: "Evening",
    colors: ["#000000", "#a10000", "#1e40af"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "Summer",
    colors: ["#ffffff", "#ffb6c1", "#87ceeb"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 3,
    name: "Classic Black Cocktail Dress",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Cocktail",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Business Pencil Dress",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    category: "Business",
    colors: ["#000000", "#808080", "#483d8b"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Casual Linen Dress",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Casual",
    colors: ["#f5f5dc", "#d3d3d3", "#faebd7"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Bohemian Maxi Dress",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "Casual",
    colors: ["#8b4513", "#deb887", "#a0522d"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 7,
    name: "Sequin Party Dress",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Cocktail",
    colors: ["#c0c0c0", "#ffd700", "#000000"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 8,
    name: "Sleeveless Summer Dress",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    category: "Summer",
    colors: ["#98fb98", "#afeeee", "#fafad2"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export default Collection;
