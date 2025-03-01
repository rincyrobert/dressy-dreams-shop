
import { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@/components/ui/use-toast";

export interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  addItem: (item: Omit<CartItem, "id">) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  subtotal: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  
  // Calculate the total number of items
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  
  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Calculate total (with shipping)
  const shipping = items.length > 0 ? 15 : 0;
  const total = subtotal + shipping;
  
  // Add an item to the cart
  const addItem = (item: Omit<CartItem, "id">) => {
    setItems(prevItems => {
      // Check if item already exists
      const existingItem = prevItems.find(
        i => i.productId === item.productId && i.color === item.color && i.size === item.size
      );
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(i => 
          i.id === existingItem.id 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      } else {
        // Add new item with a unique id
        const newId = prevItems.length > 0 
          ? Math.max(...prevItems.map(i => i.id)) + 1 
          : 1;
        return [...prevItems, { ...item, id: newId }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  // Update item quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  // Remove item from cart
  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  // Clear the cart
  const clearCart = () => {
    setItems([]);
    
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };
  
  return (
    <CartContext.Provider value={{
      items,
      itemCount,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      subtotal,
      total,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
