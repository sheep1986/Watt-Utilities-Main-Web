
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { useMarketWatch } from '../hooks/useMarketWatch';

interface HeaderProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const marketData = useMarketWatch();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const serviceLinks = [
    { id: 'services/electricity', label: 'Business Electricity', icon: Icons.Zap },
    { id: 'services/gas', label: 'Business Gas', icon: Icons.Flame },
    { id: 'services/water', label: 'Water Services', icon: Icons.Droplets },
    { id: 'services/telecoms', label: 'Telecoms & VoIP', icon: Icons.Wifi },
    { id: 'services/green-energy', label: 'Green Energy', icon: Icons.Leaf },
    { id: 'services/connections', label: 'New Connections', icon: Icons.Plug },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Helper for Nav Links
  const NavLink = ({ id, label, icon: Icon, hasDropdown = false }: { id: string, label: string, icon: any, hasDropdown?: boolean }) => (
    <div className="relative group h-full flex items-center" onMouseEnter={() => hasDropdown && setActiveDropdown(id)}>
        <button
            onClick={() => !hasDropdown && handleNav(id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold tracking-wide
                ${activePage === id || (id === 'services' && activePage.startsWith('services'))
                    ? 'text-watt-primary bg-blue-50' 
                    : 'text-gray-600 hover:text-watt-dark hover:bg-gray-50'
                }`}
        >
            <Icon size={18} className={activePage === id ? 'text-watt-primary' : 'text-gray-400 group-hover:text-watt-accent transition-colors'} />
            {label}
            {hasDropdown && <Icons.ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === id ? 'rotate-180' : ''}`} />}
        </button>

        {/* Desktop Dropdown */}
        {hasDropdown && (
             <div 
                className={`absolute top-full left-0 w-72 pt-4 transition-all duration-200 transform origin-top-left 
                ${activeDropdown === id ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
                onMouseLeave={() => setActiveDropdown(null)}
             >
                <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                    <div className="p-2">
                        {serviceLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNav(link.id)}
                                className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center gap-3 group/item transition-colors"
                            >
                                <div className="w-9 h-9 rounded-full bg-watt-light flex items-center justify-center text-watt-blue group-hover/item:bg-watt-accent group-hover/item:text-white transition-colors shadow-sm">
                                    <link.icon size={16} />
                                </div>
                                <div>
                                    <span className="block text-sm font-bold text-gray-800 group-hover/item:text-watt-primary transition-colors">{link.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                        <button onClick={() => handleNav('services')} className="text-xs font-bold text-watt-primary hover:underline flex items-center justify-center gap-1">
                            View All Services <Icons.ArrowRight size={12} />
                        </button>
                    </div>
                </div>
             </div>
        )}
    </div>
  );

  return (
    <>
      {/* Top Bar - Corporate Info */}
      <div className="bg-watt-dark text-gray-300 text-[11px] py-2 px-4 hidden lg:flex justify-between items-center border-b border-white/10 relative z-[60]">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Icons.Phone size={12} className="text-watt-accent" /> 0161 123 4567
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Icons.Mail size={12} className="text-watt-accent" /> info@wattutilities.co.uk
          </span>
        </div>
        <div className="flex items-center gap-4">
           {/* Real-time Market Watch */}
           <div className="flex items-center gap-2 bg-white/5 px-3 py-0.5 rounded-full border border-white/10">
              <span className={`flex items-center gap-1.5 ${marketData.color} font-bold uppercase tracking-wider transition-colors duration-500`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-current ${marketData.trend === 'down' ? 'animate-pulse' : ''}`}></span> 
                  {marketData.status}
              </span>
              <span className="text-gray-500">|</span>
              <span className="font-mono text-white flex items-center gap-1">
                 {marketData.price}p/kWh
                 {marketData.trend === 'down' ? <Icons.TrendingDown size={12} className="text-emerald-400" /> : 
                  marketData.trend === 'up' ? <Icons.TrendingUp size={12} className="text-red-400" /> : 
                  <span className="text-blue-300">-</span>}
              </span>
           </div>

           <div className="h-3 w-px bg-white/20"></div>
           <a 
             href="https://www.trustpilot.com/review/watt.co.uk" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
           >
             <Icons.Star size={12} className="fill-[#00b67a] text-[#00b67a]" /> Trustpilot 4.9/5
           </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200 py-3' 
            : 'bg-white border-transparent py-4 lg:py-5'
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer z-50 relative" 
            onClick={() => handleNav('home')}
          >
            <img 
              src="https://i.ibb.co/8n10tw7L/watt-utilities-white-logo-1-500-x-200-px-500-x-100-px-6.png" 
              alt="Watt Utilities" 
              className="h-9 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavLink id="home" label="Home" icon={Icons.Home} />
            <NavLink id="services" label="Services" icon={Icons.Zap} hasDropdown />
            <NavLink id="loa" label="LOA" icon={Icons.FileSignature} />
            <NavLink id="about" label="About" icon={Icons.Users} />
            <NavLink id="faq" label="FAQ" icon={Icons.MessageCircle} />
            <NavLink id="contact" label="Contact" icon={Icons.Phone} />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-watt-accent hover:bg-watt-accentHover text-white font-extrabold py-3 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-lime-500/20 flex items-center gap-2 text-sm uppercase tracking-wide group"
            >
              Get Quote <Icons.ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden text-watt-dark p-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <Icons.X size={28} className="text-gray-600" /> : <Icons.Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Slide-Over Drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        
        {/* Backdrop with Blur */}
        <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div 
            className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* Drawer Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Menu</span>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-watt-accent hover:text-white transition-colors"
                >
                    <Icons.X size={18} />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-2">
                
                <button onClick={() => handleNav('home')} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-watt-primary flex items-center justify-center group-hover:bg-watt-primary group-hover:text-white transition-colors">
                        <Icons.Home size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">Home</span>
                </button>

                {/* Mobile Services Accordion */}
                <div className="rounded-xl overflow-hidden transition-all duration-300">
                    <button 
                        onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors text-left group ${activeDropdown === 'mobile-services' ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeDropdown === 'mobile-services' ? 'bg-watt-primary text-white' : 'bg-blue-50 text-watt-primary group-hover:bg-watt-primary group-hover:text-white'}`}>
                                <Icons.Zap size={20} />
                            </div>
                            <span className="font-bold text-gray-800 text-lg">Services</span>
                        </div>
                        <Icons.ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'mobile-services' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-gray-50/80 p-2 space-y-1 mt-1 rounded-b-xl border-l-2 border-watt-primary ml-8">
                             {serviceLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNav(link.id)}
                                    className="w-full text-left py-3 px-4 text-gray-600 font-medium flex items-center gap-3 hover:bg-white rounded-lg transition-colors"
                                >
                                    <link.icon size={16} className="text-watt-accent" />
                                    {link.label}
                                </button>
                            ))}
                             <button onClick={() => handleNav('services')} className="w-full text-left py-2 px-4 text-watt-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-2">
                                View Overview <Icons.ArrowRight size={12} />
                             </button>
                        </div>
                    </div>
                </div>

                <button onClick={() => handleNav('loa')} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-watt-primary flex items-center justify-center group-hover:bg-watt-primary group-hover:text-white transition-colors">
                        <Icons.FileSignature size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">Letter of Authority</span>
                </button>

                <button onClick={() => handleNav('about')} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-watt-primary flex items-center justify-center group-hover:bg-watt-primary group-hover:text-white transition-colors">
                        <Icons.Users size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">About Us</span>
                </button>

                <button onClick={() => handleNav('faq')} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-watt-primary flex items-center justify-center group-hover:bg-watt-primary group-hover:text-white transition-colors">
                        <Icons.MessageCircle size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">FAQ</span>
                </button>

                <button onClick={() => handleNav('contact')} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-watt-primary flex items-center justify-center group-hover:bg-watt-primary group-hover:text-white transition-colors">
                        <Icons.Phone size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">Contact</span>
                </button>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <a 
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-watt-accent hover:bg-watt-accentHover text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  Get Instant Quote <Icons.ArrowRight size={18}/>
                </a>
                
                <div className="flex justify-center gap-6 text-gray-400">
                    <a href="tel:01611234567" className="flex flex-col items-center gap-1 hover:text-watt-primary transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Icons.Phone size={14} />
                        </div>
                        <span className="text-[10px] font-bold uppercase">Call</span>
                    </a>
                    <a href="mailto:info@wattutilities.co.uk" className="flex flex-col items-center gap-1 hover:text-watt-primary transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Icons.Mail size={14} />
                        </div>
                        <span className="text-[10px] font-bold uppercase">Email</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
