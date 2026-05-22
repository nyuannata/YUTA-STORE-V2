import { MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export function FooterCTA() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/628973860060?text=Halo%20Admin%20Yuta%20Store,%20saya%20ingin%20bertanya/order.',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-lg border-t border-slate-900 shadow-[0_-10px_35px_rgba(0,0,0,0.6)] select-none">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        
        {/* Contact CTA */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-3 hover:scale-102 transition-transform duration-300 w-full md:w-auto justify-center group cursor-pointer"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-[6px] opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-tr from-green-600 to-emerald-500 rounded-xl p-2 sm:p-2.5 shadow-lg border border-green-400/20">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white shrink-0" />
            </div>
          </div>
          <div className="text-left shrink-0">
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-extrabold tracking-widest uppercase">
              ORDER / TANYA ADMIN
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl font-black tracking-widest flex items-center gap-1.5 group-hover:text-green-400 transition-colors">
              0897 3860 060
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-ping" />
            </p>
          </div>
        </button>

        {/* Payment Methods with High Fidelity Visuals */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-1">
          <p className="text-[8px] sm:text-[9px] text-gray-500 font-extrabold tracking-widest uppercase hidden sm:block">
            METODE PEMBAYARAN INSTAN
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#020617]/80 p-1 sm:p-1.5 px-2.5 sm:px-3 rounded-xl border border-slate-900 shadow-inner">
            
            {/* ShopeePay Badge */}
            <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 sm:py-1 rounded-lg">
              <div className="w-3.5 h-3.5 bg-orange-600 text-white rounded-md grid place-items-center text-[9px] font-black">S</div>
              <span className="text-[9px] font-black text-orange-500 tracking-tight">Pay</span>
            </div>
            
            {/* GoPay Badge */}
            <div className="flex items-center gap-1 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 sm:py-1 rounded-lg">
              <span className="text-[9px] font-black text-sky-400 tracking-tighter">gopay</span>
            </div>

            {/* OVO Badge */}
            <div className="flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 sm:py-1 rounded-lg">
              <span className="text-[9px] font-black text-indigo-400 tracking-widest uppercase">ovo</span>
            </div>

            {/* DANA Badge */}
            <div className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 sm:py-1 rounded-lg">
              <span className="text-[9px] font-black text-blue-400 tracking-tight uppercase">dana</span>
            </div>

            {/* QRIS Badge */}
            <div className="flex items-center bg-gradient-to-r from-red-500/10 to-sky-500/10 border border-white/10 px-2 py-0.5 sm:py-1 rounded-lg">
              <span className="text-[9px] font-extrabold tracking-widest italic text-red-500">QR</span>
              <span className="text-[9px] font-extrabold tracking-widest italic text-sky-400">IS</span>
            </div>

          </div>
        </div>
      </div>
      
      {/* Bottom Trust Bar with Modern Separator: Hidden on Mobile */}
      <div className="hidden sm:flex bg-slate-950 border-t border-slate-900/60 py-2 justify-center items-center gap-6 text-[9px] sm:text-[10px] text-gray-500 font-extrabold tracking-widest uppercase px-4 text-center">
        <span className="flex items-center gap-1.5 text-blue-400/80">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Terpercaya sejak 2023
        </span>
        <span className="hidden sm:inline text-slate-800">•</span>
        <span className="flex items-center gap-1.5 text-green-400/80">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          Proses Instan 5 Menit
        </span>
        <span className="hidden sm:inline text-slate-800">•</span>
        <span className="flex items-center gap-1.5 text-red-400/80">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          Garansi Uang Kembali
        </span>
      </div>
    </div>
  );
}

