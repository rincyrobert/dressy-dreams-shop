
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
  );
};

export default Footer;
