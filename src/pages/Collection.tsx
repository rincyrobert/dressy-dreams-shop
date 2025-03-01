
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Filter, ChevronDown, Heart } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-amber-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-medium tracking-tight text-rose-800 font-serif">
              Dressy Dreams
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/collection" className="text-sm font-medium text-rose-700 hover:text-rose-900 transition-colors">
                Collection
              </Link>
              <Link to="/about" className="text-sm font-medium text-rose-700 hover:text-rose-900 transition-colors">
                About
              </Link>
              <Link to="/cart" className="relative">
                <ShoppingBag size={20} className="text-rose-700" />
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-rose-100 to-amber-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-rose-800 font-serif">Bridal Collection</h1>
          <p className="text-rose-700 max-w-3xl mx-auto font-light text-lg">
            Discover our exquisite collection of traditional and contemporary Indian wedding attire. 
            Each piece is meticulously crafted with premium fabrics and intricate embroidery to make your special day unforgettable.
          </p>
          <div className="mt-8 relative overflow-hidden h-60 md:h-80 rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Bridal Collection" 
              className="w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-800/50 to-transparent"></div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="text-white text-xl font-medium px-6 py-2 rounded-full bg-rose-700/70 backdrop-blur-sm">
                Elegance for Your Special Day
              </span>
            </div>
          </div>
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
              className={`transition-all duration-300 ${selectedCategory === null ? 'bg-rose-700 hover:bg-rose-800' : 'text-rose-700 border-rose-200 hover:bg-rose-50'}`}
            >
              All
            </Button>
            {indianCategories.map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${selectedCategory === category ? 'bg-rose-700 hover:bg-rose-800' : 'text-rose-700 border-rose-200 hover:bg-rose-50'}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-rose-700" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center border-rose-200 text-rose-700">
                  Sort by: {sortOptions.find(option => option.value === sortBy)?.label}
                  <ChevronDown size={16} className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-50 bg-white/95 backdrop-blur-md border-rose-100">
                {sortOptions.map(option => (
                  <DropdownMenuItem 
                    key={option.value} 
                    onClick={() => setSortBy(option.value)}
                    className="cursor-pointer hover:bg-rose-50 text-rose-700"
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
              className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={18} className="text-rose-500" />
                </div>
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-3 py-1 rounded-full">
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-rose-800">{product.name}</h3>
                <p className="text-rose-600 mt-1 font-bold">₹{product.price.toLocaleString()}</p>
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
                <div className="mt-3 pt-3 border-t border-rose-100">
                  <Button variant="outline" size="sm" className="w-full bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-rose-50 to-amber-50 border-t border-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-rose-800 font-serif">Dressy Dreams</h3>
              <p className="text-rose-700 mb-4">
                Elegance in every stitch, tradition in every detail.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-rose-800 font-serif">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/collection" className="text-rose-700 hover:text-rose-900 transition-colors">Collection</Link></li>
                <li><Link to="/new-arrivals" className="text-rose-700 hover:text-rose-900 transition-colors">New Arrivals</Link></li>
                <li><Link to="/bestsellers" className="text-rose-700 hover:text-rose-900 transition-colors">Bestsellers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-rose-800 font-serif">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-rose-700 hover:text-rose-900 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-rose-700 hover:text-rose-900 transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="text-rose-700 hover:text-rose-900 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-rose-800 font-serif">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-rose-700 hover:text-rose-900 transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="text-rose-700 hover:text-rose-900 transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/privacy" className="text-rose-700 hover:text-rose-900 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-amber-100 text-center text-rose-700">
            <p>&copy; {new Date().getFullYear()} Dressy Dreams. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sample data with Indian wedding categories and products
const indianCategories = ["Bridal Lehenga", "Saree", "Groom Sherwani", "Indo-Western", "Reception"];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const products = [
  {
    id: 1,
    name: "Royal Red Bridal Lehenga",
    price: 89999,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    category: "Bridal Lehenga",
    colors: ["#a10000", "#8B0000", "#8B0000"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Silk Banarasi Saree",
    price: 45999,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "Saree",
    colors: ["#FFD700", "#B8860B", "#CD5C5C"],
    sizes: ["Free Size"],
    tag: "New"
  },
  {
    id: 3,
    name: "Designer Reception Gown",
    price: 65999,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Reception",
    colors: ["#8A2BE2", "#4B0082", "#800080"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Classic Maroon Sherwani",
    price: 75999,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    category: "Groom Sherwani",
    colors: ["#800000", "#8B4513", "#000000"],
    sizes: ["38", "40", "42", "44"],
    tag: "Premium"
  },
  {
    id: 5,
    name: "Designer Anarkali Suit",
    price: 54999,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Indo-Western",
    colors: ["#E6E6FA", "#D8BFD8", "#DDA0DD"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Embroidered Lehenga Choli",
    price: 78999,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "Bridal Lehenga",
    colors: ["#FF4500", "#FF6347", "#FF7F50"],
    sizes: ["S", "M", "L"],
    tag: "Trending"
  },
  {
    id: 7,
    name: "Zari Work Kanjivaram Saree",
    price: 59999,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Saree",
    colors: ["#FFD700", "#DAA520", "#B8860B"],
    sizes: ["Free Size"],
  },
  {
    id: 8,
    name: "Indo-Western Fusion Dress",
    price: 42999,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    category: "Indo-Western",
    colors: ["#9932CC", "#8B008B", "#800080"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tag: "Limited"
  },
];

export default Collection;
