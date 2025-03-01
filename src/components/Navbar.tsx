
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

interface NavbarProps {
  cartItemCount?: number;
}

const Navbar = ({ cartItemCount = 0 }: NavbarProps) => {
  return (
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
                {cartItemCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
