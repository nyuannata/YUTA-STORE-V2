import { Sparkles, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <div className="relative pt-16 pb-12 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 opacity-30 pointer-events-none flex justify-center items-center">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
          Premium Store Terpercaya
        </div>

        {/* Main Title with Premium Gradient */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight mb-2 select-none"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0px 4px 12px rgba(59,130,246,0.3))',
          }}
        >
          YUTA STORE
        </h1>

        <p className="text-gray-400 text-sm sm:text-base max-w-lg mt-2 font-medium tracking-wide">
          Penyedia Layanan Akun & Aplikasi Premium Murah, Cepat, Legal, dan Bergaransi Penuh.
        </p>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-3xl w-full">
          <div className="flex items-center gap-2.5 px-4 py-3 bg-[#0b1329]/60 backdrop-blur-md border border-blue-900/30 rounded-xl">
            <Zap className="w-5 h-5 text-yellow-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Proses Cepat</p>
              <p className="text-xs sm:text-sm text-gray-200 font-bold">⚡ 5 Menit Aktif</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-3 bg-[#0b1329]/60 backdrop-blur-md border border-blue-900/30 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Keamanan</p>
              <p className="text-xs sm:text-sm text-gray-200 font-bold">🛡️ 100% Legal & Aman</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-3 bg-[#0b1329]/60 backdrop-blur-md border border-blue-900/30 rounded-xl">
            <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Kualitas</p>
              <p className="text-xs sm:text-sm text-gray-200 font-bold">💎 Garansi Full</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-3 bg-[#0b1329]/60 backdrop-blur-md border border-blue-900/30 rounded-xl">
            <MessageCircle className="w-5 h-5 text-cyan-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Layanan</p>
              <p className="text-xs sm:text-sm text-gray-200 font-bold">💬 Support 24/7</p>
            </div>
          </div>
        </div>

        {/* Divider Ribbon */}
        <div className="relative inline-flex items-center justify-center px-12 py-2.5 bg-gradient-to-r from-blue-900/80 via-blue-950/80 to-blue-900/80 border border-blue-500/20 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] mt-10">
          <span className="text-blue-300 font-extrabold tracking-[0.2em] text-xs sm:text-sm uppercase">
            ★ DAFTAR HARGA APLIKASI ★
          </span>
        </div>
      </div>
    </div>
  );
}

