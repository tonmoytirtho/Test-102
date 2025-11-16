
import React from 'react';
import { ChevronDownIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/2560/1440?random=1&grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 w-full max-w-[1600px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            Find the Perfect Tyre for Your Journey
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Engineered for performance, safety, and durability. ZESS TYRE delivers unparalleled quality from factory to road, ensuring every drive is a masterpiece of precision.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end">
          <div className="bg-white text-charcoal-text rounded-lg shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Your Tyre</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                <div className="relative mt-1">
                  <select id="vehicle-type" className="w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-zess-orange focus:border-zess-orange sm:text-sm rounded-md appearance-none bg-gray-50 border">
                    <option>Motorcycle</option>
                    <option>3-Wheeler</option>
                    <option>Electric Vehicle</option>
                    <option>LCV</option>
                  </select>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="tyre-position" className="block text-sm font-medium text-gray-700">Tyre Position</label>
                 <div className="relative mt-1">
                  <select id="tyre-position" className="w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-zess-orange focus:border-zess-orange sm:text-sm rounded-md appearance-none bg-gray-50 border">
                    <option>Front</option>
                    <option>Rear</option>
                    <option>Both</option>
                  </select>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="tyre-size" className="block text-sm font-medium text-gray-700">Tyre Size</label>
                <div className="relative mt-1">
                  <select id="tyre-size" className="w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-zess-orange focus:border-zess-orange sm:text-sm rounded-md appearance-none bg-gray-50 border">
                    <option>Select Size</option>
                    <option>90/90-12</option>
                    <option>100/80-17</option>
                    <option>120/70-17</option>
                  </select>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-zess-orange text-white font-bold py-4 px-4 rounded-md hover:bg-orange-700 transition-all text-lg shadow-lg">
                Search Tyres
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
