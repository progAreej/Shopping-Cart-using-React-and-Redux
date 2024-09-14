import React, { useState } from 'react';
import { Menu, X ,ShoppingCart} from 'lucide-react'; // Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-white text-xl font-bold">
          <img
            src="https://image.similarpng.com/very-thumbnail/2021/09/Online-shopping-logo-design-template-on-transparent-background-PNG.png"
            alt="Logo"
            className="h-8 inline mr-2"
          />
        
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
          Products
          </a>
          <a href="/cart" className="text-gray-300 hover:text-white">
          <ShoppingCart className="h-5 w-5 ml-1" />
          </a>
        
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-gray-300 hover:text-white">
          Products
          </a>
          <a href="/cart" className="block px-4 py-2 text-gray-300 hover:text-white">
          <ShoppingCart className="h-5 w-5 ml-1" />
          </a>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
