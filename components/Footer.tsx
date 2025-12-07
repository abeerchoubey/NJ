import React from 'react';
import { Gem } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 relative mt-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-4">
          <Gem className="text-gold" size={24} />
          <h2 className="text-2xl font-serif text-white">Nayak Jewellery</h2>
        </div>
        
        <p className="text-gray-400 max-w-md mb-8">
          Adorning you with the brilliance of gold at prices that make you smile. 
          Every piece tells a story of elegance and affordability.
        </p>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mb-8 opacity-50"></div>

        <p className="text-sm text-gray-500 font-light tracking-wider">
          Website created by <span className="text-gold font-medium">Abeer Choubey</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;