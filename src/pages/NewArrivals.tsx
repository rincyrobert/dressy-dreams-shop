
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NewArrivals = () => {
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

      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 to-amber-500/30 mix-blend-overlay z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
          alt="New Arrivals Collection" 
          className="w-full h-[40vh] object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-md mb-4 animate-fade-in">
              New Arrivals
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto font-light drop-shadow-md animate-slide-up">
              Discover our latest collection of exquisite bridal wear, featuring stunning embroidery and premium fabrics
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium text-rose-800 mb-4 font-serif">The Latest in Bridal Elegance</h2>
          <p className="text-rose-700">
            Our newest collection celebrates the union of traditional craftsmanship with contemporary designs. 
            Each piece is meticulously crafted to bring you the perfect blend of heritage and modern aesthetics.
          </p>
        </div>

        {/* Featured New Arrivals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full p-4 flex justify-between">
                  <Badge className="bg-rose-600 hover:bg-rose-700">New</Badge>
                  <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={18} className="text-rose-500" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm" asChild className="bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Link to={`/product/${product.id}`} className="flex items-center space-x-2">
                      <Eye size={16} />
                      <span>Quick View</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-rose-800 font-serif">{product.name}</h3>
                <p className="text-rose-600 mt-1 font-bold">₹{product.price.toLocaleString()}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {product.colors.map(color => (
                    <div 
                      key={color} 
                      className="w-4 h-4 rounded-full border border-gray-200" 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-rose-100">
                  <Button variant="outline" size="sm" asChild className="w-full bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100">
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal Highlight */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-rose-50 rounded-lg overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-medium text-rose-800 mb-4 font-serif">Monsoon Wedding Collection</h2>
              <p className="text-rose-700 mb-6">
                Designed especially for the monsoon wedding season, our new collection features breathable fabrics, 
                intricate embroidery, and vibrant colors that shine even on cloudy days.
              </p>
              <Button asChild className="bg-rose-700 hover:bg-rose-800 text-white max-w-xs">
                <Link to="/collection">Explore the Collection</Link>
              </Button>
            </div>
            <div className="aspect-square md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Monsoon Wedding Collection" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium text-rose-800 mb-8 text-center font-serif">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoon.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                  <item.icon className="text-rose-700" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2 text-rose-800 font-serif">{item.title}</h3>
                <p className="text-rose-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 py-12 px-6 bg-gradient-to-r from-rose-100 to-amber-100 rounded-lg text-center">
          <h2 className="text-2xl font-medium text-rose-800 mb-4 font-serif">Stay Updated</h2>
          <p className="text-rose-700 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to be the first to know about new collections, exclusive offers, and styling tips.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-md border border-rose-200 flex-grow focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <Button className="bg-rose-700 hover:bg-rose-800 text-white">
              Subscribe
            </Button>
          </div>
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

// Sample data for new arrivals
const newArrivals = [
  {
    id: 101,
    name: "Embellished Bridal Lehenga",
    price: 125000,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    colors: ["#D4AF37", "#B22222", "#8B0000"],
    category: "Bridal Lehenga"
  },
  {
    id: 102,
    name: "Zardozi Work Saree",
    price: 78000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    colors: ["#FFD700", "#FF4500", "#800080"],
    category: "Saree"
  },
  {
    id: 103,
    name: "Contemporary Anarkali Suit",
    price: 56000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    colors: ["#00008B", "#006400", "#800000"],
    category: "Indo-Western"
  },
  {
    id: 104,
    name: "Designer Reception Gown",
    price: 89000,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    colors: ["#4B0082", "#800080", "#C71585"],
    category: "Reception"
  },
  {
    id: 105,
    name: "Handcrafted Groom Sherwani",
    price: 95000,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    colors: ["#DAA520", "#CD853F", "#000000"],
    category: "Groom Sherwani"
  },
  {
    id: 106,
    name: "Bandhani Silk Lehenga",
    price: 65000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    colors: ["#FF0000", "#FF8C00", "#FFD700"],
    category: "Bridal Lehenga"
  }
];

// Coming soon features
import { Calendar, Gift, Sparkles } from "lucide-react";

const comingSoon = [
  {
    title: "Festival Collection",
    description: "Special designs for Diwali, Holi, and other festivals coming next month",
    icon: Sparkles
  },
  {
    title: "Customization Service",
    description: "Create your dream outfit with our expert designers",
    icon: Gift
  },
  {
    title: "Bridal Appointment Booking",
    description: "Schedule personal shopping sessions with our stylists",
    icon: Calendar
  }
];

export default NewArrivals;
