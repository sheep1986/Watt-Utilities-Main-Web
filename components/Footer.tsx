
import React from 'react';
import { Icons } from './Icons';

interface FooterProps {
    onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-watt-dark text-white pt-24 pb-12 border-t-4 border-watt-accent relative overflow-hidden font-sans">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div 
                className="cursor-pointer"
                onClick={() => onNavigate('home')}
            >
               <img 
                 src="https://i.ibb.co/QFC17wnx/watt-utilities-white-logo-1-500-x-200-px-500-x-100-px-4.png" 
                 alt="Watt Utilities" 
                 className="h-14 w-auto object-contain mb-6"
               />
            </div>
            <p className="text-gray-400 text-sm leading-7 pr-4">
              We simplify utility procurement for UK businesses. Our mission is to provide transparent, competitive pricing for electricity, gas, and water.
            </p>
            <a 
              href="https://www.trustpilot.com/review/watt.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity inline-flex"
            >
               <div className="bg-[#00b67a] p-1.5 rounded">
                   <Icons.Star size={16} className="text-white fill-white" />
               </div>
               <span className="font-bold text-sm">Excellent 4.9/5</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white flex items-center gap-3">
                Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => onNavigate('home')} className="hover:text-watt-accent transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-watt-accent transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-watt-accent transition-colors">FAQ</button></li>
              <li><a href="https://app.watt.co.uk/company" target="_blank" rel="noopener noreferrer" className="hover:text-watt-accent transition-colors">Get a Quote</a></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-watt-accent transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('loa')} className="hover:text-watt-accent transition-colors">Letter of Authority</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">
                Our Services
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => onNavigate('services/electricity')} className="hover:text-watt-accent transition-colors">Business Electricity</button></li>
              <li><button onClick={() => onNavigate('services/gas')} className="hover:text-watt-accent transition-colors">Commercial Gas</button></li>
              <li><button onClick={() => onNavigate('services/water')} className="hover:text-watt-accent transition-colors">Water Audits</button></li>
              <li><button onClick={() => onNavigate('services/multisite')} className="hover:text-watt-accent transition-colors">Multi-Site Metering</button></li>
              <li><button onClick={() => onNavigate('services/green-energy')} className="hover:text-watt-accent transition-colors">Green Energy</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">
                Get in Touch
            </h3>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-center gap-4">
                <Icons.Phone size={20} className="text-watt-accent shrink-0" />
                <span className="font-bold text-white text-lg hover:text-watt-accent transition-colors cursor-pointer">0161 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Icons.Mail size={20} className="text-watt-accent shrink-0" />
                <a href="mailto:hello@wattutilities.co.uk" className="hover:text-white">info@wattutilities.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs mb-2">
                © {new Date().getFullYear()} Watt Utilities Ltd. Registered in England & Wales.
              </p>
              <div className="flex gap-4 text-xs text-gray-600 justify-center md:justify-start mb-4">
                <button onClick={() => onNavigate('privacy')} className="hover:text-white">Privacy Policy</button>
                <button onClick={() => onNavigate('terms')} className="hover:text-white">Terms</button>
                <button onClick={() => onNavigate('sitemap')} className="hover:text-white">Sitemap</button>
              </div>
              
              <div className="flex items-center gap-4 justify-center md:justify-start">
                  <a 
                    href="https://www.investorsinpeople.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <img src="https://i.ibb.co/DgDXHDm1/investors-people-watt-001.png" alt="Investors in People" className="h-8 w-auto" />
                  </a>
                  <a 
                    href="https://ico.org.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <img src="https://i.ibb.co/4nzmkKMY/ICO-001-Watt.png" alt="ICO Registered" className="h-8 w-auto" />
                  </a>
              </div>
          </div>
          
          <div className="flex gap-3">
             <a 
                href="https://www.linkedin.com/company/watt-utilities-ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-white transition-all duration-300 group"
             >
                <span className="sr-only">LinkedIn</span>
                <Icons.Linkedin size={18} className="group-hover:scale-110 transition-transform" />
             </a>
             <a 
                href="https://twitter.com/wattutilities" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center text-white transition-all duration-300 group"
             >
                <span className="sr-only">Twitter</span>
                <Icons.Twitter size={18} className="group-hover:scale-110 transition-transform" />
             </a>
             <a 
                href="https://www.facebook.com/WattUtilities/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-white transition-all duration-300 group"
             >
                <span className="sr-only">Facebook</span>
                <Icons.Facebook size={18} className="group-hover:scale-110 transition-transform" />
             </a>
             <a 
                href="https://www.instagram.com/wattutilities/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E4405F] hover:text-white flex items-center justify-center text-white transition-all duration-300 group"
             >
                <span className="sr-only">Instagram</span>
                <Icons.Instagram size={18} className="group-hover:scale-110 transition-transform" />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
