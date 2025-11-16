
import React from 'react';

interface SmallSupportCardProps {
    title: string;
    imageUrl: string;
    icon: React.ReactNode;
}

const SmallSupportCard: React.FC<SmallSupportCardProps> = ({ title, imageUrl, icon }) => (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover"/>
        <div className="p-4 flex items-center space-x-4">
            <div className="flex-shrink-0 text-zess-orange">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-charcoal-text">{title}</h4>
            </div>
        </div>
    </div>
);

const SupportSection: React.FC = () => {
  return (
    <section className="py-24 bg-soft-grey">
      <div className="mx-auto max-w-[1600px] px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Dealer Locator Card */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full md:w-1/2 h-64 md:h-auto">
                 <img src="https://picsum.photos/800/800?random=30" alt="Tyre fitment workshop" className="w-full h-full object-cover"/>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-charcoal-text mb-4">Find A Dealer</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Get expert advice and professional service at your nearest authorized ZESS TYRE dealer.
                </p>
                <a href="#" className="inline-block bg-zess-orange text-white font-bold py-4 px-8 rounded-md hover:bg-orange-700 transition-all text-center text-lg shadow-lg w-full sm:w-auto">
                    Open Dealer Locator
                </a>
            </div>
        </div>
        
        {/* Grid of smaller support cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <SmallSupportCard 
                title="Tyre Care & Safety"
                imageUrl="https://picsum.photos/400/200?random=31"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
             <SmallSupportCard 
                title="Fitment & Rotation"
                imageUrl="https://picsum.photos/400/200?random=32"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            />
             <SmallSupportCard 
                title="Warranty & Claims"
                imageUrl="https://picsum.photos/400/200?random=33"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            />
             <SmallSupportCard 
                title="FAQs"
                imageUrl="https://picsum.photos/400/200?random=34"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
