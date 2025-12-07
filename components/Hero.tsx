import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C0C0C0] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse delay-1000"></div>

      <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl w-full text-center relative z-10 border-white/10">
        <div className="flex justify-center mb-6">
          <Sparkles className="text-gold w-12 h-12 animate-spin-slow" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FBF5B7] to-[#AA771C] drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
          Nayak Jewellery
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Elegance is not about being noticed, it's about being remembered. 
          Discover our premium collection of <span className="text-gold font-semibold">Artificial Gold Jewellery</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="glass-card px-6 py-3 rounded-full text-sm font-medium text-gold/80 border border-gold/20">
            Premium Quality
          </div>
          <div className="glass-card px-6 py-3 rounded-full text-sm font-medium text-gold/80 border border-gold/20">
            Affordable Prices
          </div>
          <div className="glass-card px-6 py-3 rounded-full text-sm font-medium text-gold/80 border border-gold/20">
            Under ₹400
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToProducts}
        className="absolute bottom-10 animate-bounce cursor-none"
        aria-label="Scroll down"
      >
        <div className="glass-card p-3 rounded-full hover:bg-white/10 transition-colors">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </button>
    </section>
  );
};

export default Hero;