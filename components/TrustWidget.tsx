
import React from 'react';
import { Icons } from './Icons';

export const TrustWidget: React.FC = () => {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2">
           <span className="font-bold text-xl text-gray-800">Excellent</span>
           <div className="flex bg-green-500 px-2 py-1 rounded-sm">
             {[1,2,3,4,5].map(i => <Icons.Star key={i} size={20} fill="white" className="text-white" />)}
           </div>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-1">
            Based on <span className="font-bold underline">1,240 reviews</span> on 
            <a 
              href="https://www.trustpilot.com/review/watt.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-black flex items-center ml-1 gap-1 hover:text-[#00b67a] transition-colors"
            >
                <Icons.Star size={14} fill="#00b67a" className="text-[#00b67a]" /> Trustpilot
            </a>
        </div>
      </div>
    </div>
  );
};
