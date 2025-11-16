
import React from 'react';
import { ArrowRightIcon } from './icons';

interface BusinessCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ title, description, imageUrl }) => (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden transform hover:-translate-y-2">
        <div className="md:w-1/3 w-full h-56 md:h-auto">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-charcoal-text mb-3">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{description}</p>
            <a href="#" className="font-semibold text-zess-orange flex items-center space-x-2 self-start group-hover:translate-x-1 transition-transform">
                <span>Learn More</span>
                <ArrowRightIcon className="w-5 h-5" />
            </a>
        </div>
    </div>
);

const BusinessSolutions: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Solutions for Every Business</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From large-scale fleets to global distribution, we provide robust and reliable tyre solutions tailored to your business needs.
            </p>
        </div>
        <div className="space-y-8">
            <BusinessCard 
                title="Fleet Operators"
                description="Maximize uptime and efficiency with our durable, high-mileage commercial tyres. We offer tailored solutions for fleets of all sizes."
                imageUrl="https://picsum.photos/800/600?random=40"
            />
            <BusinessCard 
                title="Distributors & Export"
                description="Partner with us to expand your portfolio. We provide extensive support and a seamless supply chain for our global distributor network."
                imageUrl="https://picsum.photos/800/600?random=41"
            />
            <BusinessCard 
                title="OEM Partnerships"
                description="We collaborate with leading vehicle manufacturers to engineer tyres that meet the exact specifications and performance demands of new vehicles."
                imageUrl="https://picsum.photos/800/600?random=42"
            />
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
