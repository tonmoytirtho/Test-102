
import React from 'react';

interface TypeCardProps {
  title: string;
  imageUrl: string;
}

const TypeCard: React.FC<TypeCardProps> = ({ title, imageUrl }) => (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
    </div>
);

const BrowseByType: React.FC = () => {
  return (
    <section className="py-16 bg-charcoal-text/90">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TypeCard title="On-Road" imageUrl="https://picsum.photos/600/400?random=20&grayscale" />
            <TypeCard title="Off-Road" imageUrl="https://picsum.photos/600/400?random=21&grayscale" />
            <TypeCard title="Tubeless" imageUrl="https://picsum.photos/600/400?random=22&grayscale" />
            <TypeCard title="Tube-Type" imageUrl="https://picsum.photos/600/400?random=23&grayscale" />
        </div>
      </div>
    </section>
  );
};

export default BrowseByType;
