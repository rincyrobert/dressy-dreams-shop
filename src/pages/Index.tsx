
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight, Star } from "lucide-react";

const Index = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
              <Link to="/new-arrivals" className="text-sm font-medium text-rose-700 hover:text-rose-900 transition-colors">
                New Arrivals
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

      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div 
          className={`w-full h-full bg-cover bg-center transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg ml-0 md:ml-12 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-rose-100 text-rose-800 rounded-full mb-4">
                Wedding Season Collection
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
                Elegance in Every Thread
              </h1>
              <p className="text-rose-700 mb-8">
                Discover our exclusive collection of handcrafted wedding attire, where tradition meets contemporary designs to create your perfect wedding look.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button asChild className="bg-rose-700 hover:bg-rose-800 text-white transition-all duration-300">
                  <Link to="/collection" className="flex items-center">
                    Browse Collection
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-rose-300 text-rose-700 hover:bg-rose-50 transition-all duration-300">
                  <Link to="/new-arrivals">
                    New Arrivals
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium font-serif text-rose-800 mb-4">
              Exquisite Wedding Collections
            </h2>
            <p className="text-rose-700 max-w-3xl mx-auto">
              From traditional bridal lehengas to contemporary reception outfits, discover attire for every occasion in your wedding journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.title} to={category.link} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 shadow-md">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-medium text-white mb-2 font-serif">{category.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{category.description}</p>
                      <span className="inline-flex items-center text-amber-300 text-sm group-hover:translate-x-1 transition-transform">
                        Explore Collection <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-medium font-serif text-rose-800">Bestselling Designs</h2>
            <Link to="/collection" className="group flex items-center text-sm font-medium text-rose-700">
              View All
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.rating && (
                    <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                      <Star size={14} className="text-amber-400 mr-1" fill="#FBBF24" />
                      <span className="text-xs font-medium text-rose-800">{product.rating}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-rose-800 font-serif">{product.name}</h3>
                  <p className="text-rose-700 font-bold">₹{product.price.toLocaleString()}</p>
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
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium font-serif text-rose-800 mb-4">What Our Customers Say</h2>
            <p className="text-rose-700 max-w-3xl mx-auto">
              Stories from brides who found their dream wedding attire with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-r from-rose-50 to-amber-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < testimonial.stars ? 'text-amber-400' : 'text-gray-300'}`}
                      fill={i < testimonial.stars ? '#FBBF24' : '#D1D5DB'}
                    />
                  ))}
                </div>
                <p className="text-rose-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center mr-3">
                    <span className="text-rose-700 font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-800">{testimonial.name}</h4>
                    <p className="text-sm text-rose-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-rose-100 to-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium font-serif text-rose-800 mb-4">Stay Connected</h2>
            <p className="text-rose-700 mb-8">
              Subscribe to receive updates on new collections, special offers, and bridal styling tips.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-none sm:rounded-l-lg border border-rose-200 focus:ring-0 focus:border-rose-400 mb-2 sm:mb-0"
              />
              <Button type="submit" className="rounded-r-none sm:rounded-none sm:rounded-r-lg bg-rose-700 hover:bg-rose-800 text-white transition-all duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium font-serif mb-4 text-rose-800">Dressy Dreams</h3>
              <p className="text-rose-700 mb-4">
                Elegance in every stitch, tradition in every detail.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium font-serif mb-4 text-rose-800">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/collection" className="text-rose-700 hover:text-rose-900 transition-colors">Collection</Link></li>
                <li><Link to="/new-arrivals" className="text-rose-700 hover:text-rose-900 transition-colors">New Arrivals</Link></li>
                <li><Link to="/bestsellers" className="text-rose-700 hover:text-rose-900 transition-colors">Bestsellers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium font-serif mb-4 text-rose-800">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-rose-700 hover:text-rose-900 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-rose-700 hover:text-rose-900 transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="text-rose-700 hover:text-rose-900 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium font-serif mb-4 text-rose-800">Customer Service</h3>
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

// Sample data
const categories = [
  {
    title: "Bridal Lehengas",
    description: "Traditional and contemporary designs for your special day",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    link: "/collection"
  },
  {
    title: "Designer Sarees",
    description: "Elegant silks and embellished designs for all occasions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "/collection"
  },
  {
    title: "Groom Collection",
    description: "Sherwanis and Indo-western outfits for the perfect groom",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link: "/collection"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Royal Maharani Lehenga",
    price: 125000,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    rating: 4.9
  },
  {
    id: 2,
    name: "Zari Work Banarasi Saree",
    price: 85000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    rating: 4.7
  },
  {
    id: 3,
    name: "Designer Anarkali Gown",
    price: 68000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    rating: 4.8
  },
  {
    id: 4,
    name: "Classic Sherwani Set",
    price: 95000,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    rating: 4.9
  }
];

const testimonials = [
  {
    stars: 5,
    text: "My bridal lehenga was everything I dreamed of and more. The craftsmanship and attention to detail was exceptional.",
    name: "Priya Sharma",
    location: "Delhi"
  },
  {
    stars: 5,
    text: "The team went above and beyond to help me find the perfect outfit for my reception. I felt like royalty on my special day!",
    name: "Anjali Patel",
    location: "Mumbai"
  },
  {
    stars: 5,
    text: "My husband's sherwani matched perfectly with my lehenga. The customization options are incredible and the quality is outstanding.",
    name: "Meera Reddy",
    location: "Hyderabad"
  }
];

export default Index;
