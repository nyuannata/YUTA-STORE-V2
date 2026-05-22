import { Product } from './types';

export const products: Product[] = [
  // --- PAGE 1 ---
  {
    id: 'netflix',
    name: 'NETFLIX',
    logoText: 'N',
    logoColor: 'bg-red-600 text-white',
    variants: [
      {
        name: '1P1U',
        items: [
          { duration: '1 Hari', price: '5k' },
          { duration: '3 Hari', price: '10k' },
          { duration: '7 Hari', price: '17k' },
          { duration: '1 Bln', price: '45k' },
        ],
      },
      {
        name: '1P2U',
        items: [
          { duration: '1 Hari', price: '3k' },
          { duration: '3 Hari', price: '7k' },
          { duration: '7 Hari', price: '12k' },
          { duration: '1 Bln', price: '25k' },
        ],
      },
      {
        name: 'SEMIPRIVATE',
        items: [{ duration: '1 Bln', price: '55k' }],
      },
    ],
  },
  {
    id: 'capcut',
    name: 'CAPCUT',
    logoText: 'C',
    logoColor: 'bg-slate-800 text-white',
    variants: [
      {
        name: 'Sharing 2U',
        items: [{ duration: '1 Bln', price: '20k' }],
      },
      {
        name: 'Sharing 3U',
        items: [{ duration: '1 Bln', price: '30k' }],
      },
      {
        name: 'Private',
        items: [
          { duration: '7 Hari', price: '15k' },
          { duration: '1 Bln', price: '30k' },
        ],
      },
    ],
  },
  {
    id: 'canva',
    name: 'CANVA',
    logoText: 'C',
    logoColor: 'bg-indigo-400 text-white',
    variants: [
      {
        name: 'Member',
        items: [
          { duration: '1 hari', price: '1k' },
          { duration: '3 hari', price: '2k' },
          { duration: '7 hari', price: '4k' },
          { duration: '1 bulan', price: '7k' },
          { duration: '2 bulan', price: '9k' },
          { duration: '3 bulan', price: '10k' },
          { duration: '4 bulan', price: '11k' },
          { duration: '5 bulan', price: '12k' },
          { duration: '6 bulan', price: '13k' },
        ],
      },
      {
        name: 'Lifetime',
        items: [{ duration: 'Designer', price: '25k (+1k)' }],
      },
      {
        name: 'Paket Lain (Page 2)',
        items: [
          { duration: '1 Hari', price: '2k' },
          { duration: '3 Hari', price: '4k' },
          { duration: '7 Hari', price: '6k' },
          { duration: '1 Bln', price: '10k' },
          { duration: '3 Bln', price: '10k' },
          { duration: '1 Thn', price: '30k' },
          { duration: 'Garansi 6B', price: '30k' },
        ],
      },
    ],
  },
  {
    id: 'meitu',
    name: 'MEITU',
    logoText: 'M',
    logoColor: 'bg-pink-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bln', price: '20k' },
          { duration: '1 Bln (P2)', price: '25k' },
        ],
      },
      {
        name: 'Private',
        items: [
          { duration: '7H', price: '10k' },
          { duration: '7 Hari (P2)', price: '15k' },
          { duration: '1B', price: '30k' },
          { duration: '1 Bln (P2)', price: '35k' },
        ],
      },
    ],
  },
  {
    id: 'chatgpt',
    name: 'CHATGPT',
    logoText: 'G',
    logoColor: 'bg-emerald-500 text-white',
    variants: [
      {
        name: 'Standard',
        items: [
          { duration: '7 Hari', price: '15k' },
          { duration: '1 Bulan', price: '20k' },
        ],
      },
      {
        name: 'Pro Sharing',
        items: [
          { duration: '1 Hari', price: '6k' },
          { duration: '7 Hari', price: '18k' },
          { duration: '1 Bln', price: '35k' },
        ],
      },
    ],
  },
  {
    id: 'dramabox',
    name: 'DRAMABOX',
    logoText: 'D',
    logoColor: 'bg-red-600 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bulan', price: '20k' },
          { duration: '1 Bln (P2)', price: '25k' },
        ],
      },
    ],
  },
  {
    id: 'youtube',
    name: 'YOUTUBE',
    logoText: 'Y',
    logoColor: 'bg-red-500 text-white',
    variants: [
      {
        name: 'Famplan',
        items: [
          { duration: '1B', price: '10k' },
          { duration: '1 Bln (P2)', price: '12k' },
          { duration: '2 Bln (P2)', price: '17k' },
          { duration: '3B', price: '25k' },
        ],
      },
      {
        name: 'Indplan',
        items: [
          { duration: '1B', price: '15k' },
          { duration: '1 Bln (P2)', price: '17k' },
          { duration: '3 Bln (P2)', price: '30k' },
          { duration: '3B', price: '35k' },
        ],
      },
    ],
  },
  {
    id: 'getcontact',
    name: 'GET CONTACT',
    logoText: 'G',
    logoColor: 'bg-blue-500 text-white',
    variants: [
      {
        items: [{ duration: '1 Bulan', price: '20k' }],
      },
    ],
  },
  {
    id: 'wetv',
    name: 'WETV',
    logoText: 'W',
    logoColor: 'bg-blue-600 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Hari', price: '3k' },
          { duration: '3 Hari', price: '6k' },
          { duration: '7 Hari', price: '10k' },
          { duration: '1 Bln', price: '25k' },
        ],
      },
      {
        name: 'Privim',
        items: [
          { duration: '1 Hari', price: '10k' },
          { duration: '7 Hari', price: '20k' },
          { duration: '3 Bln', price: '25k' },
          { duration: '1 Bln', price: '37k' },
        ],
      },
    ],
  },
  {
    id: 'youku',
    name: 'YOUKU',
    logoText: 'Y',
    logoColor: 'bg-red-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Hari', price: '4k' },
          { duration: '3 Hari', price: '7k' },
          { duration: '7 Hari', price: '10k' },
          { duration: '1 Bln', price: '20k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '25k' }],
      },
    ],
  },
  {
    id: 'spotify',
    name: 'SPOTIFY',
    logoText: 'S',
    logoColor: 'bg-green-500 text-white',
    variants: [
      {
        name: 'Indplan',
        items: [
          { duration: '1 Bln', price: '25k' },
          { duration: '2 Bln', price: '30k' },
          { duration: '3 Bln', price: '40k' },
        ],
      },
      {
        name: 'Famplan',
        items: [
          { duration: '1 Bln', price: '16k' },
          { duration: '2 Bln', price: '20k' },
          { duration: '3 Bln', price: '30k' },
        ],
      },
    ],
  },
  {
    id: 'alightmotion',
    name: 'ALIGHT MOTION',
    logoText: 'A',
    logoColor: 'bg-green-600 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bln', price: '15k' },
          { duration: '1 Thn', price: '30k' },
        ],
      },
      {
        name: 'Private',
        items: [
          { duration: '1 Bln', price: '35k' },
          { duration: '1 Thn', price: '45k' },
        ],
      },
    ],
  },
  {
    id: 'disneyplus',
    name: 'Disney+',
    logoText: 'D+',
    logoColor: 'bg-[#1a388b] text-white',
    variants: [
      {
        name: 'Basic Plan 6U',
        items: [
          { duration: '1 Hari', price: '5k' },
          { duration: '3 Hari', price: '10k' },
          { duration: '7 Hari', price: '18k' },
          { duration: '1 Bln', price: '35k' },
        ],
      },
      {
        name: 'Premium Plan 3U',
        items: [
          { duration: '1 Hari', price: '7k' },
          { duration: '3 Hari', price: '12k' },
          { duration: '7 Hari', price: '20k' },
          { duration: '1 Bulan', price: '50k' },
        ],
      },
    ],
  },
  {
    id: 'iqiyi',
    name: 'IQIYI',
    logoText: 'iQ',
    logoColor: 'bg-green-400 text-black',
    variants: [
      {
        name: 'Sharing (STD)',
        items: [
          { duration: '1 Hari', price: '4k' },
          { duration: '3 Hari', price: '7k' },
          { duration: '7 Hari', price: '10k' },
          { duration: '1 Bln', price: '18k' },
        ],
      },
      {
        name: 'Anim',
        items: [{ duration: '1 Bln', price: '25k' }],
      },
      {
        name: 'Private STD',
        items: [{ duration: '1 Bln', price: '40k' }],
      },
    ],
  },
  {
    id: 'vidio',
    name: 'Vidio PLATINUM',
    logoText: 'V',
    logoColor: 'bg-red-600 text-white',
    fullWidth: true,
    variants: [
      {
        name: '2U All Device',
        items: [
          { duration: '1 Hari', price: '5k' },
          { duration: '3 Hari', price: '10k' },
          { duration: '7 Hari', price: '15k' },
          { duration: '1 Bln', price: '30k' },
        ],
      },
      {
        name: 'Private All Device',
        items: [
          { duration: '1 Hari', price: '8k' },
          { duration: '3 Hari', price: '15k' },
          { duration: '7 Hari', price: '20k' },
          { duration: '1 Bln', price: '40k' },
        ],
      },
      {
        name: 'Mobile Sharing 2U',
        items: [{ duration: '1 Bln', price: '20k' }],
      },
      {
        name: 'Private & TV',
        items: [
          { duration: '1 Bln Private', price: '30k' },
          { duration: '1 Bln TV Only', price: '28k' },
        ],
      },
    ],
  },

  // --- PAGE 2 ---
  {
    id: 'amazonprime',
    name: 'Amazon Prime',
    logoText: 'P',
    logoColor: 'bg-blue-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Hari', price: '4k' },
          { duration: '3 Hari', price: '7k' },
          { duration: '7 Hari', price: '10k' },
          { duration: '1 Bln', price: '17k' },
          { duration: '1 Bln 5U', price: '20k' },
          { duration: '1 Bln 3U', price: '20k' },
          { duration: '1 Bln 2U', price: '25k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '35k' }],
      },
    ],
  },
  {
    id: 'hbomax',
    name: 'HBO MAX',
    logoText: 'H',
    logoColor: 'bg-purple-700 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Hari', price: '4k' },
          { duration: '3 Hari', price: '7k' },
          { duration: '7 Hari', price: '10k' },
          { duration: '1 Bln', price: '20k' },
          { duration: '1 Bulan 5U', price: '20k' },
          { duration: 'Login TV', price: '30k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '60k' }],
      },
    ],
  },
  {
    id: 'viu',
    name: 'VIU',
    logoText: 'V',
    logoColor: 'bg-yellow-500 text-white',
    variants: [
      {
        name: 'Private Biasa',
        items: [
          { duration: '1 Bln', price: '5k' },
          { duration: '3 Bln', price: '18k' },
          { duration: '6 Bln', price: '28k' },
          { duration: '1 Thn', price: '36k' },
        ],
      },
      {
        name: 'Private Anim',
        items: [
          { duration: '1 Bln', price: '15k' },
          { duration: '3 Bln', price: '25k' },
          { duration: '6 Bln', price: '38k' },
          { duration: '1 Thn', price: '45k' },
        ],
      },
    ],
  },
  {
    id: 'iflix',
    name: 'IFLIX',
    logoText: 'i',
    logoColor: 'bg-red-600 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Hari', price: '12k' },
          { duration: '3 Hari', price: '20k' },
          { duration: '1 Thn', price: '35k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '40k' }],
      },
    ],
  },
  {
    id: 'bstation',
    name: 'BSTATION',
    logoText: 'B',
    logoColor: 'bg-blue-400 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Hari', price: '3k' },
          { duration: '3 Hari', price: '5k' },
          { duration: '7 Hari', price: '8k' },
          { duration: '1 Bln', price: '15k' },
          { duration: '3 Bln', price: '25k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '40k' }],
      },
    ],
  },
  {
    id: 'crunchyroll',
    name: 'CRUNCHYROLL',
    logoText: 'C',
    logoColor: 'bg-orange-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bln', price: '24k' },
          { duration: '1 Thn', price: '38k' },
        ],
      },
    ],
  },
  {
    id: 'drakorid',
    name: 'DRAKOR ID',
    logoText: 'D',
    logoColor: 'bg-pink-600 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bln', price: '12k' },
          { duration: '1 Thn (6b)', price: '30k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '25k' }],
      },
    ],
  },
  {
    id: 'gagaolala',
    name: 'GAGAO LALA',
    logoText: 'G',
    logoColor: 'bg-red-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [{ duration: '1 Bulan', price: '20k' }],
      },
    ],
  },
  {
    id: 'catchplay',
    name: 'CATCHPLAY+',
    logoText: 'C+',
    logoColor: 'bg-orange-600 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bln', price: '15k' },
          { duration: '1 Thn', price: '38k' },
        ],
      },
    ],
  },
  {
    id: 'loklok',
    name: 'LOKLOK',
    logoText: 'L',
    logoColor: 'bg-purple-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bln', price: '13k' },
          { duration: '2 Bln', price: '20k' },
          { duration: '3 Bln', price: '28k' },
          { duration: '1 Thn', price: '36k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '45k' }],
      },
    ],
  },
  {
    id: 'rctiplus',
    name: 'RCTI+',
    logoText: 'R+',
    logoColor: 'bg-blue-600 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [{ duration: '1 Bln', price: '20k' }],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '30k' }],
      },
    ],
  },
  {
    id: 'sushiroll',
    name: 'SUSHIROLL',
    logoText: 'S',
    logoColor: 'bg-orange-400 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [{ duration: '1 Bln', price: '15k' }],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '32k' }],
      },
    ],
  },
  {
    id: 'moviebox',
    name: 'MOVIEBOX',
    logoText: 'M',
    logoColor: 'bg-blue-800 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [{ duration: '1 Bln', price: '20k' }],
      },
    ],
  },
  {
    id: 'applemusic',
    name: 'APPLE MUSIC',
    logoText: 'A',
    logoColor: 'bg-red-400 text-white',
    variants: [
      {
        items: [{ duration: '1 Bln', price: '25k' }],
      },
    ],
  },
  {
    id: 'reminiweb',
    name: 'REMINI WEB',
    logoText: 'R',
    logoColor: 'bg-red-500 text-white',
    variants: [
      {
        items: [{ duration: '1 Bln', price: '20k' }],
      },
    ],
  },

  // AI & Productivity Tools
  {
    id: 'grokai',
    name: 'GROK AI',
    logoText: 'X',
    logoColor: 'bg-black text-white',
    variants: [
      { items: [{ duration: '1 Bln', price: '40k' }] },
    ],
  },
  {
    id: 'leonardoai',
    name: 'LEONARDO AI',
    logoText: 'L',
    logoColor: 'bg-[#a37946] text-white',
    variants: [
      { items: [{ duration: '1 Bln', price: '25k' }] },
    ],
  },
  {
    id: 'perplexityai',
    name: 'PERPLEXITY AI',
    logoText: 'P',
    logoColor: 'bg-cyan-600 text-white',
    variants: [
      { items: [{ duration: '7 Hari', price: '12k' }] },
    ],
  },
  {
    id: 'claudeai',
    name: 'CLAUDE AI',
    logoText: 'C',
    logoColor: 'bg-amber-700 text-white',
    variants: [
      { items: [{ duration: '7 Hari', price: '45k' }] },
    ],
  },
  {
    id: 'duolingo',
    name: 'DUOLINGO',
    logoText: 'D',
    logoColor: 'bg-green-500 text-white',
    variants: [
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '25k' }],
      },
    ],
  },
  {
    id: 'pixving',
    name: 'PIXVING',
    logoText: 'P',
    logoColor: 'bg-red-600 text-white',
    variants: [
      { items: [{ duration: '1 Bln', price: '25k' }] },
    ],
  },
  {
    id: 'prv16e',
    name: 'PRV16E',
    logoText: 'P',
    logoColor: 'bg-purple-600 text-white',
    variants: [
      { items: [{ duration: '1 Bln', price: '25k' }] },
    ],
  },
  {
    id: 'ms365',
    name: 'MS 365',
    logoText: 'M',
    logoColor: 'bg-blue-600 text-white',
    variants: [
      { items: [{ duration: '1 Bln', price: '25k' }] },
    ],
  },
  {
    id: 'scribd',
    name: 'SCRIBD',
    logoText: 'S',
    logoColor: 'bg-teal-600 text-white',
    variants: [
      {
        items: [
          { duration: '1 Bln', price: '20k' },
          { duration: '1 Bln', price: '16k' },
          { duration: '1 Bln', price: '35k' },
        ],
      },
    ],
  },

  // Utilities / Bottom Row
  {
    id: 'ibispaint',
    name: 'IBIS PAINT',
    logoText: 'i',
    logoColor: 'bg-blue-400 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [{ duration: '1 Thn', price: '30k' }],
      },
    ],
  },
  {
    id: 'picsart',
    name: 'PICSART',
    logoText: 'P',
    logoColor: 'bg-purple-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [{ duration: '1 Bln', price: '10k' }],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '20k' }],
      },
    ],
  },
  {
    id: 'procreate',
    name: 'PROCREATE',
    logoText: 'P',
    logoColor: 'bg-gray-800 text-white',
    variants: [
      {
        name: 'Lifetime Sharing',
        items: [{ duration: '1 Bln', price: '30k' }],
      },
    ],
  },
  {
    id: 'wattpad',
    name: 'WATTPAD',
    logoText: 'W',
    logoColor: 'bg-orange-500 text-white',
    variants: [
      {
        name: 'Sharing',
        items: [
          { duration: '1 Bln', price: '15k' },
          { duration: '6 Bln', price: '25k' },
        ],
      },
      {
        name: 'Private',
        items: [{ duration: '1 Bln', price: '35k' }],
      },
    ],
  },
  {
    id: 'vpnexpress',
    name: 'VPN EXPRESS',
    logoText: 'V',
    logoColor: 'bg-red-600 text-white',
    variants: [
      { items: [{ duration: '1 Bln', price: '15k' }] },
    ],
  },
  {
    id: 'vpnhma',
    name: 'VPN HMA',
    logoText: 'H',
    logoColor: 'bg-blue-500 text-white',
    variants: [
      { items: [{ duration: '1 Bln', price: '15k' }] },
    ],
  },
  {
    id: 'vpnsurfshark',
    name: 'VPN SURFSHARK',
    logoText: 'S',
    logoColor: 'bg-teal-500 text-white',
    variants: [
      { items: [{ duration: '2 Bln', price: '40k' }] },
    ],
  },
  {
    id: 'zoom',
    name: 'ZOOM +',
    logoText: 'Z',
    logoColor: 'bg-blue-500 text-white',
    fullWidth: true,
    variants: [
      {
        name: 'Sewa 100P',
        items: [
          { duration: '1 Jam', price: '5k' },
          { duration: '1 Hari', price: '15k' },
          { duration: '7 Hari', price: '45k' },
        ],
      },
      {
        name: 'Sewa 300P',
        items: [
          { duration: '1 Jam', price: '25k' },
          { duration: '1 Hari', price: '35k' },
          { duration: '7 Hari', price: '100k' },
        ],
      },
      {
        name: 'Upgrade Zoom 1B',
        items: [
          { duration: '100P', price: '75k' },
          { duration: '300P', price: '185k' },
          { duration: '500P', price: '350k' },
          { duration: '1000P', price: '500k' },
        ],
      },
    ],
  },
];
