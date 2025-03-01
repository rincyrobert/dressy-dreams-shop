import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ShoppingBag, ChevronLeft, Check } from "lucide-react";

// Define the Product interface to include the optional description property
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  description?: string; // Make description optional with the ? operator
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the product by ID
  const product = products.find(p => p.id === Number(id));
  
  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium mb-4">Product not found</h1>
        <Button onClick={() => navigate("/collection")}>
          Return to Collection
        </Button>
      </div>
    );
  }
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} - ${selectedSize}, ${quantity} item(s)`,
    });
    // In a real app, you would dispatch to your cart state/context here
  };

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate("/collection")}
          className="flex items-center text-gray-600 hover:text-black"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Collection
        </Button>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
            
            <div className="space-y-6">
              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="flex space-x-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                        selectedColor === color ? 'border-black border-2' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === color && (
                        <Check size={14} className={`text-${color === '#ffffff' ? 'black' : 'white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium">Size</h3>
                  <button className="text-xs underline">Size Guide</button>
                </div>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <div key={size} className="flex items-center">
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="hidden"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className={`px-4 py-2 border cursor-pointer transition-all duration-200 ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              {/* Quantity Selection */}
              <div>
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex">
                  <button 
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                  >
                    -
                  </button>
                  <div className="w-14 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart} 
                className="w-full h-12 bg-black hover:bg-gray-800 text-white transition-all duration-300"
              >
                Add to Cart
              </Button>
              
              {/* Product Description */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-medium mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || `The ${product.name} is crafted with premium materials for comfort and style. 
                  This versatile piece features a flattering silhouette that can be dressed up or down for any occasion.
                  The attention to detail in the stitching and design ensures both durability and elegance.`}
                </p>
              </div>
              
              {/* Product Details */}
              <div>
                <h3 className="text-lg font-medium mb-3">Details</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Premium quality fabric</li>
                  <li>Comfortable fit</li>
                  <li>Machine washable</li>
                  <li>Imported</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-white py-16 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link 
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`} 
                  className="group"
                >
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium">{relatedProduct.name}</h3>
                  <p className="text-gray-600">${relatedProduct.price.toFixed(2)}</p>
                </Link>
              ))}
          </div>
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
const products: Product[] = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    category: "Evening",
    colors: ["#000000", "#a10000", "#1e40af"],
    sizes: ["XS", "S", "M", "L", "XL"],
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

export default ProductDetail;
