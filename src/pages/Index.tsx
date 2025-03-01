
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight } from "lucide-react";

const Index = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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

      {/* Hero Section */}
      <section className="relative">
        <div 
          className={`w-full h-[80vh] bg-cover bg-center transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')` 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Hero background" 
            className="hidden" 
            onLoad={() => setIsImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full mb-4">
                New Collection
              </span>
              <h1 className="text-4xl font-medium tracking-tight mb-4">
                Elegance in Every Detail
              </h1>
              <p className="text-gray-600 mb-6">
                Discover our curated collection of timeless dresses designed for the modern woman.
              </p>
              <div className="flex space-x-4">
                <Button asChild className="bg-black hover:bg-gray-800 text-white transition-all duration-300">
                  <Link to="/collection">
                    Shop Now
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                  <Link to="/about">
                    Our Story
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight">Featured Collection</h2>
            <Link to="/collection" className="group flex items-center text-sm font-medium">
              View All
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium tracking-tight mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates on new arrivals, special offers, and styling tips.
            </p>
            <form className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 focus:ring-0 focus:border-black"
              />
              <Button type="submit" className="rounded-l-none bg-black hover:bg-gray-800 text-white transition-all duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

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
const featuredProducts = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Classic Black Cocktail Dress",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  },
];

export default Index;
