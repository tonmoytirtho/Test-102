
import React from 'react';
import { ArrowRightIcon } from './icons';

interface VehicleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ title, description, imageUrl, className }) => (
    <div className={`group relative overflow-hidden rounded-lg shadow-soft-lg transform hover:-translate-y-2 transition-transform duration-300 ${className}`}>
        <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-4 opacity-90">{description}</p>
            <a href="#" className="font-semibold text-zess-orange flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                <span>Explore</span>
                <ArrowRightIcon className="w-5 h-5" />
            </a>
        </div>
    </div>
);

const BrowseByVehicle: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Browse by Vehicle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VehicleCard 
                title="Motorcycle Tyres" 
                description="High-performance tyres for every ride."
                imageUrl="https://picsum.photos/800/600?random=10"
                className="h-96"
            />
            <VehicleCard 
                title="3-Wheeler Tyres" 
                description="Durability for commercial and passenger use."
                imageUrl="https://picsum.photos/800/600?random=11"
                className="h-96"

            />
            <VehicleCard 
                title="EV Tyres" 
                description="Optimized for range and low noise."
                imageUrl="https://picsum.photos/800/600?random=12"
                className="h-96"
            />
             <VehicleCard 
                title="LCV Tyres" 
                description="Reliable performance for light commercial vehicles."
                imageUrl="https://picsum.photos/800/600?random=13"
                className="h-96 lg:col-span-2"
            />
             <VehicleCard 
                title="Farm/Tiller Tyres" 
                description="Robust tyres for agricultural applications."
                imageUrl="https://picsum.photos/800/600?random=14"
                className="h-96"

            />
             <VehicleCard 
                title="Inner Tubes / HCV/LTB" 
                description="Comprehensive range for heavy and light transport."
                imageUrl="https://picsum.photos/800/600?random=15"
                className="h-96 md:col-span-2 lg:col-span-3"
            />
        </div>
      </div>
    </section>
  );
};

export default BrowseByVehicle;
