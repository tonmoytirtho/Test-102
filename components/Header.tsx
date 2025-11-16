
import React from 'react';
import { SearchIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
        <div className="text-2xl font-black text-charcoal-text">
          ZESS <span className="text-zess-orange">TYRE</span>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-charcoal-text font-semibold hover:text-zess-orange transition-colors">Find Your Tyre</a>
          <a href="#" className="text-charcoal-text font-semibold hover:text-zess-orange transition-colors">Products</a>
          <a href="#" className="text-charcoal-text font-semibold hover:text-zess-orange transition-colors">For Business</a>
          <a href="#" className="text-charcoal-text font-semibold hover:text-zess-orange transition-colors">Support</a>
          <a href="#" className="text-charcoal-text font-semibold hover:text-zess-orange transition-colors">About</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-charcoal-text hover:text-zess-orange transition-colors">
            <SearchIcon className="h-6 w-6" />
          </button>
          <div className="hidden md:block text-sm font-semibold">
            <a href="#" className="text-charcoal-text hover:text-zess-orange">EN</a>
            <span className="mx-1 text-gray-300">/</span>
            <a href="#" className="text-gray-400 hover:text-zess-orange">BN</a>
          </div>
          <a href="#" className="hidden sm:inline-block px-4 py-2 text-sm font-bold text-zess-orange border-2 border-zess-orange rounded-md hover:bg-zess-orange hover:text-white transition-all">Enquire Now</a>
          <a href="#" className="hidden sm:inline-block px-4 py-2 text-sm font-bold text-white bg-zess-orange rounded-md hover:bg-orange-700 transition-all">Find a Dealer</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
