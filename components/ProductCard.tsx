import React from 'react';
import { Product } from '../types';
import { SELLER_PHONE } from '../constants';
import { MessageCircle, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuy = () => {
    const message = `sent here by website, interested product ${product.name}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SELLER_PHONE}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="glass-card rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] group relative overflow-hidden flex flex-col h-full">
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none z-10"></div>

      <div className="relative aspect-square overflow-hidden rounded-xl mb-4 bg-black/40">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 glass-card px-2 py-1 rounded-md text-xs font-semibold text-gold">
          {product.category}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-semibold text-white mb-1 tracking-wide group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gold drop-shadow-sm">
            ₹{product.price}
          </span>
          
          <button 
            onClick={handleBuy}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-[#25D366]/40 transform active:scale-95 z-20"
          >
            <MessageCircle size={18} />
            <span>Buy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;