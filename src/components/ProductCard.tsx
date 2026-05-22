import React, { useState } from 'react';
import { Product, ProductVariant, PriceItem } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [selected, setSelected] = useState<{ variant?: ProductVariant; item?: PriceItem } | null>(null);

  const toggleSelect = (variant: ProductVariant, item: PriceItem) => {
    setSelected((prev) => (prev?.variant === variant && prev?.item === item ? null : { variant, item }));
  };

  const handleOrder = () => {
    if (!selected || !selected.item) return;

    let text = `Halo Admin Yuta Store,\nsaya ingin order *${product.name}*`;
    if (selected.variant && selected.variant.name) {
      text += ` varian *${selected.variant.name}*`;
    }
    if (selected.item.duration) {
      text += ` untuk *${selected.item.duration}*`;
    }
    text += `.\n\nMohon info ketersediaan dan saya akan kirimkan bukti pembayaran.`;
    window.open(`https://wa.me/628973860060?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Helper to determine hover glowing shadows based on logoColor
  const getGlowColor = (logoColor: string) => {
    const col = logoColor.toLowerCase();
    if (col.includes('red')) return 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group-hover:border-red-500/40';
    if (col.includes('green')) return 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group-hover:border-green-500/40';
    if (col.includes('emerald')) return 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/40';
    if (col.includes('blue')) return 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-blue-500/40';
    if (col.includes('indigo')) return 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:border-indigo-500/40';
    if (col.includes('pink')) return 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group-hover:border-pink-500/40';
    if (col.includes('purple')) return 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:border-purple-500/40';
    if (col.includes('orange')) return 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group-hover:border-orange-500/40';
    if (col.includes('yellow')) return 'group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] group-hover:border-yellow-500/40';
    if (col.includes('teal')) return 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] group-hover:border-teal-500/40';
    if (col.includes('cyan')) return 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:border-cyan-500/40';
    return 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] group-hover:border-blue-500/30';
  };

  // Helper to determine subtle inner background brand color
  const getBrandBgGlow = (logoColor: string) => {
    const col = logoColor.toLowerCase();
    if (col.includes('red')) return 'bg-red-500/2';
    if (col.includes('green')) return 'bg-green-500/2';
    if (col.includes('emerald')) return 'bg-emerald-500/2';
    if (col.includes('blue')) return 'bg-blue-500/2';
    if (col.includes('indigo')) return 'bg-indigo-500/2';
    if (col.includes('pink')) return 'bg-pink-500/2';
    if (col.includes('purple')) return 'bg-purple-500/2';
    if (col.includes('orange')) return 'bg-orange-500/2';
    if (col.includes('yellow')) return 'bg-yellow-500/2';
    if (col.includes('teal')) return 'bg-teal-500/2';
    if (col.includes('cyan')) return 'bg-cyan-500/2';
    return 'bg-blue-500/2';
  };

  // Helper to determine brand gradient for Order button
  const getBrandGradient = (logoColor: string) => {
    const col = logoColor.toLowerCase();
    if (col.includes('red')) return 'from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)] text-white';
    if (col.includes('green')) return 'from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-white';
    if (col.includes('emerald')) return 'from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] text-white';
    if (col.includes('indigo')) return 'from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] text-white';
    if (col.includes('pink')) return 'from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)] text-white';
    if (col.includes('purple')) return 'from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] text-white';
    if (col.includes('orange')) return 'from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.3)] text-white';
    if (col.includes('yellow')) return 'from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)] text-black';
    if (col.includes('teal')) return 'from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.3)] text-white';
    if (col.includes('cyan')) return 'from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] text-black';
    return 'from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white';
  };

  const hasMultipleVariants = product.variants.length > 1;

  return (
    <div
      className={`group relative bg-slate-950/40 backdrop-blur-sm border border-slate-900 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 overflow-hidden min-h-[300px] h-full ${getGlowColor(
        product.logoColor
      )}`}
    >
      {/* Brand Specific Bg Glow Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100 pointer-events-none ${getBrandBgGlow(
          product.logoColor
        )}`}
      />

      <div>
        {/* Card Header (Logo & Name) */}
        <div className="flex items-center gap-3.5 mb-5 flex-shrink-0 relative z-10">
          <div
            className={`shrink-0 w-10 h-10 rounded-xl grid place-items-center font-extrabold text-lg shadow-lg border border-white/10 select-none group-hover:scale-110 transition-transform duration-300 ${product.logoColor}`}
          >
            {product.logoText}
          </div>
          <div className="flex flex-col text-left overflow-hidden">
            <h3 className="text-gray-100 font-extrabold uppercase tracking-wider text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
              {product.name}
            </h3>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">
              Premium Account
            </span>
          </div>
        </div>

        {/* Variants Container */}
        <div className="relative z-10 flex flex-col gap-4 mb-6">
          {product.variants.map((variant, vIdx) => (
            <div key={vIdx} className="flex flex-col">
              {/* Variant Label if any */}
              {variant.name && (
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                    {variant.name}
                  </span>
                  <div className="h-[1px] bg-slate-800/80 grow" />
                </div>
              )}

              {/* Price Items Pills Selection Grid */}
              <div
                className={`grid gap-2 ${
                  !variant.name && !product.fullWidth
                    ? 'grid-cols-2'
                    : variant.items.length > 2
                    ? 'grid-cols-2'
                    : 'grid-cols-1'
                }`}
              >
                {variant.items.map((item, iIdx) => {
                  const isSelected = selected?.variant === variant && selected?.item === item;
                  return (
                    <div
                      key={iIdx}
                      onClick={() => toggleSelect(variant, item)}
                      className={`flex items-center justify-between text-xs cursor-pointer px-3 py-2.5 rounded-xl border transition-all duration-300 select-none ${
                        isSelected
                          ? 'bg-blue-500/20 border-blue-500/80 shadow-[0_0_12px_rgba(59,130,246,0.15)] text-white'
                          : 'bg-[#0f172a]/50 border-slate-900 hover:bg-slate-800/30 hover:border-slate-800 text-gray-400'
                      }`}
                    >
                      <span
                        className={`transition-colors whitespace-nowrap overflow-hidden text-ellipsis mr-2 font-semibold text-[11px] sm:text-xs ${
                          isSelected ? 'text-blue-100' : 'text-gray-400'
                        }`}
                      >
                        {item.duration}
                      </span>
                      <span
                        className={`font-mono font-bold text-[11px] sm:text-xs ${
                          isSelected ? 'text-blue-300' : 'text-gray-300'
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Button at absolute bottom section */}
      <div className="relative z-10 w-full mt-auto">
        <button
          onClick={handleOrder}
          disabled={!selected}
          className={`w-full py-3 px-4 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 border select-none ${
            selected
              ? `${getBrandGradient(
                  product.logoColor
                )} border-transparent active:scale-95 animate-pulse-subtle`
              : 'bg-slate-900/40 text-slate-600 cursor-not-allowed border-slate-900/60'
          }`}
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>{selected ? `ORDER (${selected.item?.price})` : 'PILIH PAKET'}</span>
        </button>
      </div>
    </div>
  );
}

