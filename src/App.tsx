import { useState } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { FooterCTA } from './components/FooterCTA';
import { products } from './data';
import { Search, X, Sparkles, Tv, Paintbrush, Brain, Wrench, HelpCircle } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorizer helper to keep data.ts clean and untouched
  const getProductCategory = (id: string): 'streaming' | 'editing' | 'productivity' | 'utilities' => {
    const streamingIds = [
      'netflix', 'youtube', 'wetv', 'youku', 'spotify', 'disneyplus', 'iqiyi', 'vidio', 
      'amazonprime', 'hbomax', 'viu', 'iflix', 'bstation', 'crunchyroll', 'drakorid', 
      'gagaolala', 'catchplay', 'loklok', 'rctiplus', 'sushiroll', 'moviebox', 'applemusic',
      'dramabox'
    ];
    const editingIds = [
      'capcut', 'canva', 'meitu', 'alightmotion', 'reminiweb', 'ibispaint', 'picsart', 'procreate'
    ];
    const productivityIds = [
      'chatgpt', 'grokai', 'leonardoai', 'perplexityai', 'claudeai', 'duolingo', 'ms365', 'scribd', 'pixving', 'prv16e'
    ];
    
    if (streamingIds.includes(id)) return 'streaming';
    if (editingIds.includes(id)) return 'editing';
    if (productivityIds.includes(id)) return 'productivity';
    return 'utilities';
  };

  const categories = [
    { id: 'all', label: 'Semua Aplikasi', icon: Sparkles },
    { id: 'streaming', label: 'Streaming', icon: Tv },
    { id: 'editing', label: 'Design & Editing', icon: Paintbrush },
    { id: 'productivity', label: 'AI & Produktivitas', icon: Brain },
    { id: 'utilities', label: 'VPN & Utilities', icon: Wrench },
  ];

  // Filtering products based on both search query and active category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || getProductCategory(product.id) === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white pb-36">
      {/* Mesh Background Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[50%] bg-indigo-900/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-purple-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Header Hero Section */}
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          
          {/* Controls Bar: Search & Category Filter */}
          <div className="mb-10 space-y-6">
            
            {/* Search Input Container */}
            <div className="max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-[8px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative flex items-center bg-[#090f1d]/80 border border-slate-800/80 rounded-2xl px-4 py-3.5 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all duration-300">
                <Search className="w-5 h-5 text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Cari aplikasi premium favoritmu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-slate-100 text-sm placeholder-gray-500"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-gray-500 hover:text-slate-300 transition-colors p-0.5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Tabs Selection: Horizontal Swipeable on Mobile */}
            <div className="w-full max-w-4xl mx-auto overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 select-none">
              <div className="flex md:flex-wrap justify-start md:justify-center items-center gap-2 min-w-max md:min-w-0">
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                        isActive 
                          ? 'bg-blue-600 border-transparent text-white shadow-[0_4px_15px_rgba(59,130,246,0.35)] scale-102' 
                          : 'bg-[#090f1d]/40 border-slate-900/80 text-gray-400 hover:text-gray-200 hover:bg-slate-900/60 hover:border-slate-800'
                      }`}
                    >
                      <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>


          {/* Products Grid Section */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={product.fullWidth ? 'sm:col-span-2 md:col-span-2 lg:col-span-2' : ''}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            /* Empty Search/Filter State */
            <div className="text-center py-20 bg-slate-950/20 border border-slate-900/80 rounded-3xl p-8 max-w-md mx-auto relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-blue-500/2 opacity-25 pointer-events-none" />
              <HelpCircle className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-gray-200 font-extrabold text-base mb-2">Aplikasi Tidak Ditemukan</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Coba cari dengan kata kunci lain atau reset filter kategori. Anda juga bisa langsung chat WhatsApp Admin kami untuk menanyakan ketersediaan aplikasi yang dicari.
              </p>
            </div>
          )}
          
          {/* Visual Step-by-Step Order Guidelines */}
          <div className="mt-20 mb-10 pt-10 border-t border-slate-900/80 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617] px-6 text-center select-none">
              <span className="text-[10px] text-blue-500 font-extrabold tracking-[0.3em] uppercase">
                Alur Pemesanan
              </span>
            </div>

            <h3 className="text-center text-white font-black text-2xl tracking-wide mb-10 uppercase">
              ⚡ CARA ORDER INSTAN ⚡
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { 
                  step: '01', 
                  title: 'PILIH PAKET', 
                  desc: 'Pilih aplikasi premium dan durasi paket yang Anda inginkan dari pilihan kartu di atas.' 
                },
                { 
                  step: '02', 
                  title: 'KLIK ORDER WA', 
                  desc: 'Tekan tombol order di bawah paket pilihan untuk diarahkan otomatis ke chat WhatsApp Admin.' 
                },
                { 
                  step: '03', 
                  title: 'BAYAR MUDAH', 
                  desc: 'Lakukan pembayaran secara instan menggunakan QRIS, GoPay, ShopeePay, DANA, atau OVO.' 
                },
                { 
                  step: '04', 
                  title: 'AKTIVASI SEGERA', 
                  desc: 'Kirim bukti transfer ke WhatsApp admin kami, dan akun premium Anda akan langsung diaktifkan!' 
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative bg-slate-950/20 border border-slate-900 p-6 rounded-2xl group hover:border-blue-500/20 transition-all duration-300 text-left overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-3xl font-black text-blue-500/5 group-hover:text-blue-500/10 transition-colors select-none">
                    {item.step}
                  </div>
                  <h4 className="text-blue-400 font-bold text-xs tracking-wider mb-2 select-none">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* Floating Sticky Footer Payment Action */}
      <FooterCTA />
    </div>
  );
}

