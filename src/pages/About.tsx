
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const About = () => {
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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full mb-4">
              Our Story
            </span>
            <h1 className="text-4xl font-medium tracking-tight mb-6">
              Timeless Elegance, Modern Approach
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Founded in 2020, Dressy Dreams was born from a passion for creating thoughtfully designed dresses 
              that combine timeless elegance with modern sensibilities. We believe in the power of a well-crafted dress 
              to make you feel confident and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-medium mb-4">Quality Craftsmanship</h2>
              <p className="text-gray-600">
                We partner with skilled artisans who share our commitment to exceptional craftsmanship and attention to detail.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h2 className="text-xl font-medium mb-4">Timeless Design</h2>
              <p className="text-gray-600">
                Our designs focus on clean lines, flattering silhouettes, and thoughtful details that transcend trends.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-medium mb-4">Customer Experience</h2>
              <p className="text-gray-600">
                We're committed to creating a seamless shopping experience and building lasting relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight mb-4">Our Process</h2>
            <p className="text-gray-600">
              Each dress in our collection goes through a meticulous process from conception to creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium">01</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Design</h3>
              <p className="text-gray-600">
                Our designers draw inspiration from art, architecture, and nature to create timeless silhouettes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium">02</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Material Selection</h3>
              <p className="text-gray-600">
                We source premium fabrics that feel luxurious against the skin and drape beautifully.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium">03</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Craftsmanship</h3>
              <p className="text-gray-600">
                Skilled artisans bring our designs to life with meticulous attention to detail and finishing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-medium">04</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Quality Control</h3>
              <p className="text-gray-600">
                Each piece undergoes rigorous quality checks before making its way to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full mb-4">
                The Founder
              </span>
              <h2 className="text-3xl font-medium tracking-tight mb-6">
                Meet Sophia
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a background in fashion design and a passion for creating pieces that make women feel confident, 
                Sophia founded Dressy Dreams with a clear vision: to create beautiful, well-crafted dresses that stand the test of time.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Having worked in the fashion industry for over a decade, Sophia noticed a gap in the market for dresses 
                that combined timeless elegance with modern sensibilities. She set out to create a brand that would offer 
                women pieces they would treasure for years to come.
              </p>
              <p className="italic text-gray-700">
                "I believe that a well-designed dress can be transformative. It's not just about how you look, 
                but how you feel when wearing something created with care and intention."
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium tracking-tight mb-6">
              Experience the Dressy Dreams Difference
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our collection of thoughtfully designed dresses created for the modern woman.
            </p>
            <Button asChild className="bg-black hover:bg-gray-800 text-white transition-all duration-300">
              <Link to="/collection">
                Shop the Collection
              </Link>
            </Button>
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

export default About;
