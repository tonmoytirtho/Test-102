
import React from 'react';

interface StatProps {
    value: string;
    label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl md:text-6xl font-black text-white">{value}</p>
        <p className="text-sm md:text-base font-semibold text-zess-orange uppercase tracking-widest">{label}</p>
    </div>
);

const CompanySnapshot: React.FC = () => {
  return (
    <section className="py-20 bg-dark-footer">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <Stat value="5000+" label="Dealers" />
            <Stat value="1000+" label="Distributors" />
            <Stat value="30+" label="Years" />
            <Stat value="Millions" label="Produced Annually" />
        </div>
        <div className="flex justify-center items-center space-x-6 md:space-x-10">
            <a href="#" className="text-gray-300 font-semibold hover:text-white transition-colors">About Us</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-300 font-semibold hover:text-white transition-colors">Leadership</a>
             <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-300 font-semibold hover:text-white transition-colors">Careers</a>
        </div>
      </div>
    </section>
  );
};

export default CompanySnapshot;
