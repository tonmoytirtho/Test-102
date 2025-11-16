
import React from 'react';

const FeatureChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-full text-sm font-semibold border border-white/20">
        {children}
    </div>
);

const QualityManufacturing: React.FC = () => {
    return (
        <section className="py-24 bg-soft-grey">
            <div className="mx-auto max-w-[1600px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                    <img src="https://picsum.photos/800/1000?random=50" alt="Tyre testing machine" className="w-full h-full object-cover"/>
                </div>
                <div className="relative p-8 md:p-12">
                    <div className="absolute inset-0 lg:-inset-x-16 bg-charcoal-text text-white rounded-lg shadow-2xl -z-10 transform lg:skew-x-[-3deg]"></div>
                    <div className="relative z-10 text-white">
                        <h2 className="text-4xl font-bold mb-6">Uncompromising Quality, State-of-the-Art Manufacturing</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Every ZESS tyre is a product of relentless innovation and meticulous craftsmanship. Our advanced R&D labs and automated manufacturing lines ensure that each tyre surpasses global quality standards, delivering superior performance and safety you can trust.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <FeatureChip>Advanced R&D</FeatureChip>
                            <FeatureChip>Rigorous Testing</FeatureChip>
                            <FeatureChip>Global Certifications</FeatureChip>
                            <FeatureChip>Comprehensive Warranty</FeatureChip>
                        </div>
                        <a href="#" className="inline-block bg-zess-orange text-white font-bold py-3 px-8 rounded-md hover:bg-orange-700 transition-all text-lg">
                            Discover Our Process
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityManufacturing;
