import React, { useState } from 'react';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { Search } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD700] selection:text-black">
      <CustomCursor />
      
      <Hero />
      
      <main id="products" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Our Collection
            </h2>
            <p className="text-gold/80 mt-2 font-light">Exquisite designs under ₹400</p>
          </div>

          <div className="relative group w-full md:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#AA771C] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center">
              <input 
                type="text"
                placeholder="Search jewellery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 bg-black/80 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <Search className="absolute left-4 text-gold/70 w-5 h-5" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 glass-card rounded-2xl">
            <p className="text-gray-400 text-xl">No precious items found matching your search.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-gold hover:underline cursor-none"
            >
              View all collection
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;