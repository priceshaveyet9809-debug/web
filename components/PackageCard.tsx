import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PackageItem } from '../types';

const PackageCard: React.FC<{ pkg: PackageItem }> = ({ pkg }) => {
  const isDark = pkg.highlight;

  return (
    <div className={`relative flex flex-col h-full rounded-[48px] p-8 pt-12 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group hover:-translate-y-4 ${
      isDark ? 'bg-[#0f172a] text-white' : 'bg-white text-[#0f172a]'
    }`}>
      {/* Most Requested Tag */}
      {isDark && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2 animate-pulse">
            Most Requested
          </div>
        </div>
      )}

      {/* Package Image Showcase */}
      {pkg.image && (
        <div className="relative w-full h-48 mb-8 rounded-3xl overflow-hidden shadow-lg border-4 border-white/5">
          <img 
            src={pkg.image} 
            alt={pkg.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-3xl font-black mb-1">{pkg.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">{pkg.price}</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest opacity-40`}>Fixed Price</span>
          </div>
        </div>

        <p className={`text-base leading-relaxed mb-8 font-medium ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
          {pkg.description}
        </p>

        <div className={`h-[1px] w-full mb-8 ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}></div>

        <div className="space-y-4 mb-10 flex-grow">
          {pkg.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-orange-500 shrink-0" size={20} strokeWidth={2.5} />
              <span className={`text-sm font-bold ${isDark ? 'text-white/90' : 'text-[#0f172a]'}`}>{feat}</span>
            </div>
          ))}
        </div>

        <button 
          className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 ${
            isDark 
            ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:shadow-orange-500/20' 
            : 'bg-[#0f172a] text-white hover:bg-orange-600'
          }`}
        >
          Select {pkg.name} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PackageCard;