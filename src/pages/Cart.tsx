
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Trash2, ShoppingBag, Minus, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // In a real app, you would get cart items from a context/store
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      productId: 2,
      name: "Floral Summer Dress",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      color: "#ffb6c1",
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      productId: 4,
      name: "Business Pencil Dress",
      price: 219.99,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
      color: "#000000",
      size: "S",
      quantity: 2,
    },
  ]);
  
  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;
  
  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Remove item
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  // Proceed to checkout
  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Proceeding to checkout...",
    });
    
    // In a real app, you would navigate to a checkout page
    // or open a checkout modal
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
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-medium mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag size={64} className="mx-auto mb-6 text-gray-300" />
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button asChild className="bg-black hover:bg-gray-800 text-white transition-all duration-300">
              <Link to="/collection">
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-medium mb-6">Items ({cartItems.length})</h2>
                  
                  <div className="space-y-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <Link to={`/product/${item.productId}`} className="block w-full sm:w-24 h-24 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </Link>
                        
                        {/* Product Info */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div>
                              <Link to={`/product/${item.productId}`} className="font-medium hover:underline">
                                {item.name}
                              </Link>
                              <div className="text-gray-600 text-sm mt-1">
                                Size: {item.size} | Color: 
                                <span 
                                  className="inline-block w-3 h-3 rounded-full ml-1" 
                                  style={{ backgroundColor: item.color }}
                                ></span>
                              </div>
                            </div>
                            <div className="font-medium mt-2 sm:mt-0">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            
                            {/* Remove Button */}
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 hover:text-black transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout}
                    className="w-full mt-6 bg-black hover:bg-gray-800 text-white h-12 transition-all duration-300"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      asChild
                      className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <Link to="/collection">
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="font-medium mb-4">We Accept</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span>Visa</span>
                    <span>•</span>
                    <span>Mastercard</span>
                    <span>•</span>
                    <span>PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100 mt-12">
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

// Types
interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export default Cart;
