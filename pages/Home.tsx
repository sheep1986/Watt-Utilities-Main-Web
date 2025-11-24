
import React, { useEffect, useState } from 'react';
import { Icons } from '../components/Icons';
import { ServiceCard } from '../components/ServiceCard';
import { Reviews } from '../components/Reviews';
import { useMarketWatch } from '../hooks/useMarketWatch';

interface HomeProps {
    onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeUtility, setActiveUtility] = useState('Energy');
  const [businessType, setBusinessType] = useState('Small Business (SME)');
  const [spend, setSpend] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const marketData = useMarketWatch();
  
  // Activate scroll animations when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleStartQuote = () => {
    setIsRedirecting(true);
    // Force redirection to external site
    setTimeout(() => {
        window.location.href = 'https://app.watt.co.uk/company';
        setTimeout(() => setIsRedirecting(false), 1000);
    }, 800);
  };

  // Using Clearbit Logo API for real supplier logos
  const suppliers = [
    { name: 'British Gas', domain: 'britishgas.co.uk' },
    { name: 'EDF Energy', domain: 'edfenergy.com' },
    { name: 'E.ON Next', domain: 'eonnext.com' },
    { name: 'ScottishPower', domain: 'scottishpower.co.uk' },
    { name: 'SSE', domain: 'sse.com' },
    { name: 'TotalEnergies', domain: 'totalenergies.uk' },
    { name: 'Octopus Energy', domain: 'octopus.energy' },
    { name: 'Shell Energy', domain: 'shell.co.uk' },
    { name: 'Npower', domain: 'npower.com' },
    { name: 'Opus Energy', domain: 'opusenergy.com' },
    { name: 'Corona Energy', domain: 'coronaenergy.co.uk' },
    { name: 'Drax', domain: 'drax.com' }
  ];

  const utilityOptions = [
      { id: 'Energy', icon: Icons.Zap },
      { id: 'Water', icon: Icons.Droplets },
      { id: 'Telecoms', icon: Icons.Wifi }
  ];

  return (
    <main className="overflow-hidden">
      
      {/* ULTRA HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-watt-dark overflow-hidden">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
            {/* Updated Image: More Corporate/Cityscape to match Watt Utilities Brand */}
            <img 
                src="https://images.unsplash.com/photo-1444653614773-995cb1ef902a?auto=format&fit=crop&w=2400&q=80" 
                alt="London Financial District Night" 
                className="w-full h-full object-cover opacity-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-watt-dark via-watt-dark/90 to-watt-dark/60"></div>
            
            {/* Clean ambient glow */}
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gray-900/50 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-watt-accent/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20 pb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Hero Content */}
            <div className="lg:w-1/2 max-w-2xl animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-lg transition-colors duration-500">
                    <span className={`${marketData.color} flex items-center gap-2`}>
                        <span className={`w-2 h-2 rounded-full bg-current ${marketData.trend === 'down' ? 'animate-pulse' : ''}`}></span> 
                        Live Market Watch: {marketData.status}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-white font-mono">{marketData.price} p/kWh ({marketData.diff})</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                  UK's #1 Business <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-watt-accent to-emerald-400">Energy Broker.</span>
                </h1>
                
                <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light border-l-4 border-watt-accent pl-6">
                  Searching for the <strong>cheapest energy supplier</strong>? We compare live rates from <strong>British Gas</strong>, <strong>Eon</strong>, <strong>Opus Energy</strong>, and 20+ others to secure your savings instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://app.watt.co.uk/company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-watt-accent hover:bg-watt-accentHover text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(140,198,63,0.5)] flex items-center justify-center gap-2 inline-flex"
                  >
                    Get Instant Quote <Icons.ArrowRight size={20} strokeWidth={3} />
                  </a>
                  <div className="flex items-center gap-4 px-6 py-3">
                      <div className="flex -space-x-2">
                          {[1,2,3].map(i => (
                              <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-watt-dark overflow-hidden">
                                  <img src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="Agent" className="w-full h-full object-cover"/>
                              </div>
                          ))}
                      </div>
                      <div className="text-sm text-gray-400">
                          <span className="block text-white font-bold">Expert Team</span>
                          Ready to help
                      </div>
                  </div>
                </div>
            </div>
            
            {/* Hero Interaction Card - Glassmorphism */}
            <div className="lg:w-[450px] w-full animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="glass-panel p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-watt-accent to-watt-dark"></div>
                    
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Quick Estimate</h3>
                            <p className="text-gray-400 text-sm">No obligation. 100% Free.</p>
                        </div>
                        <div className="w-12 h-12 bg-watt-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-lime-500/20">
                            {/* Filled Zap icon to match logo style */}
                            <Icons.Zap size={24} fill="currentColor" strokeWidth={0} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Business Type */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block flex items-center gap-2">
                                <Icons.Building2 size={14} /> Business Type
                            </label>
                            <div className="relative">
                                <select 
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl text-white px-4 py-3.5 appearance-none focus:ring-2 focus:ring-watt-accent focus:border-transparent outline-none transition-all hover:bg-white/10 cursor-pointer"
                                >
                                    <option className="bg-gray-800">Small Business (SME)</option>
                                    <option className="bg-gray-800">Large Corporate</option>
                                    <option className="bg-gray-800">Multi-Site</option>
                                </select>
                                <Icons.ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Utility Selector */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Utility Required</label>
                            <div className="grid grid-cols-3 gap-3">
                                {utilityOptions.map((item) => (
                                  <button 
                                    key={item.id}
                                    onClick={() => setActiveUtility(item.id)}
                                    className={`flex flex-col items-center justify-center gap-2 py-3 rounded-xl transition-all border ${
                                      activeUtility === item.id 
                                        ? 'bg-watt-accent text-white border-watt-accent shadow-lg shadow-lime-500/20 transform scale-[1.02]' 
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 border-white/10 hover:text-white'
                                    }`}
                                  >
                                    {/* Using fill for active state to make it pop */}
                                    <item.icon 
                                        size={22} 
                                        strokeWidth={activeUtility === item.id ? 2.5 : 2}
                                        fill={activeUtility === item.id ? "currentColor" : "none"}
                                        className={activeUtility === item.id ? "text-white" : ""}
                                    />
                                    <span className="text-xs font-bold">{item.id}</span>
                                  </button>
                                ))}
                            </div>
                        </div>

                        {/* Monthly Spend */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block flex items-center gap-2">
                                <Icons.Wallet size={14} /> Monthly Spend (Approx)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-lg">£</span>
                                <input 
                                    type="number" 
                                    value={spend}
                                    onChange={(e) => setSpend(e.target.value)}
                                    placeholder="500" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl text-white pl-9 pr-4 py-3.5 focus:ring-2 focus:ring-watt-accent outline-none transition-all placeholder-gray-600 font-medium" 
                                />
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartQuote} 
                        disabled={isRedirecting}
                        className="w-full mt-8 bg-watt-dark hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02] duration-200 disabled:opacity-80 disabled:cursor-wait border border-white/10"
                    >
                        {isRedirecting ? (
                            <>Processing...</>
                        ) : (
                            <>Start Comparison <Icons.ArrowRight size={18} /></>
                        )}
                    </button>
                    
                    <div className="mt-4 flex justify-center items-center gap-2 text-[10px] text-gray-500">
                        <Icons.Lock size={10} /> SSL Secured • GDPR Compliant
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLIER LOGO TICKER (Real Logos) */}
      <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
         <div className="container mx-auto px-4 mb-6 text-center">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Compare the Cheapest Business Energy Suppliers</h2>
            <p className="text-xs text-gray-400">
              We compare rates from <span className="font-bold text-gray-500">British Gas</span>, <span className="font-bold text-gray-500">Eon</span>, <span className="font-bold text-gray-500">Opus Energy</span>, and 20+ others to find you the best deal.
            </p>
         </div>
         
         <div className="relative w-full overflow-hidden">
             {/* Fade edges */}
             <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
             <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
             
             <div className="flex w-[200%] animate-scroll hover:pause">
                 {/* Duplicate the list for seamless loop */}
                 {[...suppliers, ...suppliers].map((s, i) => (
                     <div key={i} className="flex-shrink-0 w-[160px] flex items-center justify-center px-4">
                         {/* Using Clearbit Logo API for authentic branding */}
                         <img 
                            src={`https://logo.clearbit.com/${s.domain}?size=120`} 
                            alt={`${s.name} Business Energy`} 
                            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                                // Fallback if image fails
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).parentElement!.innerText = s.name;
                            }}
                         />
                     </div>
                 ))}
             </div>
         </div>
      </section>
      
      {/* REVIEWS SECTION */}
      <Reviews />

      {/* PROCESS SECTION - REDESIGNED WITH IMAGE */}
      <section className="py-24 bg-watt-light relative">
          <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  {/* Left: Image */}
                  <div className="lg:w-1/2 reveal">
                      <div className="relative">
                          <div className="absolute -inset-4 bg-watt-accent rounded-[2rem] rotate-3 opacity-20"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" 
                            alt="Easy Switching Process" 
                            className="relative rounded-[2rem] shadow-2xl border-4 border-white"
                          />
                          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                               <div className="flex items-center gap-3">
                                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                       <Icons.CheckCircle size={24} />
                                   </div>
                                   <div>
                                       <p className="font-bold text-gray-900">Switch Complete</p>
                                       <p className="text-xs text-gray-500">Average time: 5 mins</p>
                                   </div>
                               </div>
                          </div>
                      </div>
                  </div>

                  {/* Right: Process Steps */}
                  <div className="lg:w-1/2 reveal">
                      <h2 className="text-watt-accent font-bold uppercase tracking-widest text-sm mb-3">How It Works</h2>
                      <h3 className="text-4xl font-black text-watt-dark mb-6">Streamlined Utility Procurement.</h3>
                      <p className="text-gray-600 text-lg mb-10">We've stripped away the complexity. Our tech-enabled process is fast, secure, and transparent.</p>
                      
                      <div className="space-y-8">
                          {/* Step 1 */}
                          <div className="flex gap-6 group">
                              <div className="flex-shrink-0 relative">
                                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:border-watt-accent group-hover:bg-watt-accent group-hover:text-white transition-all duration-300">
                                      <Icons.FileText size={28} />
                                  </div>
                                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-watt-dark text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">1</div>
                              </div>
                              <div>
                                  <h4 className="font-bold text-xl text-watt-dark mb-2">Provide Details</h4>
                                  <p className="text-gray-500 leading-relaxed">Upload a recent bill or tell us about your usage. It takes less than 60 seconds.</p>
                              </div>
                          </div>

                          {/* Step 2 */}
                          <div className="flex gap-6 group">
                              <div className="flex-shrink-0 relative">
                                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:border-watt-accent group-hover:bg-watt-accent group-hover:text-white transition-all duration-300">
                                      <Icons.Search size={28} />
                                  </div>
                                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-watt-dark text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">2</div>
                              </div>
                              <div>
                                  <h4 className="font-bold text-xl text-watt-dark mb-2">We Compare Market</h4>
                                  <p className="text-gray-500 leading-relaxed">Our AI engine scans 20+ suppliers to find the best rates for your specific meter profile.</p>
                              </div>
                          </div>

                          {/* Step 3 */}
                          <div className="flex gap-6 group">
                              <div className="flex-shrink-0 relative">
                                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:border-watt-accent group-hover:bg-watt-accent group-hover:text-white transition-all duration-300">
                                      <Icons.Plug size={28} />
                                  </div>
                                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-watt-dark text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">3</div>
                              </div>
                              <div>
                                  <h4 className="font-bold text-xl text-watt-dark mb-2">Seamless Switch</h4>
                                  <p className="text-gray-500 leading-relaxed">We handle the paperwork and terminate your old contract. No interruption to supply.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SEO CONTENT SECTION - Boosts rankings for 'Cheapest Energy Supplier', 'British Gas', 'Eon', 'Opus' */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Left Column: SEO Text + Image */}
              <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-watt-dark text-xs font-bold uppercase tracking-wider mb-6">
                      <Icons.Search size={14} /> Market Analysis
                  </div>
                  <h2 className="text-4xl font-black text-watt-dark mb-6 leading-tight">
                    Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-watt-accent to-emerald-600">Cheapest Business Energy Supplier</span> in seconds.
                  </h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                      <p className="mb-4 leading-relaxed">
                        As a leading <strong>Energy Broker</strong>, Watt Utilities simplifies the complex market. We don't just look at one provider; we compare the entire market to ensure you never overpay.
                      </p>
                      <p className="mb-4 leading-relaxed">
                        Whether you prioritize the stability of <strong>British Gas</strong>, the renewable credentials of <strong>Eon</strong>, or the SME-focused flexibility of <strong>Opus Energy</strong>, our direct wholesale access secures you rates not available to the public.
                      </p>
                      <p className="leading-relaxed">
                        Stop overpaying for your <strong>Business Energy</strong>. Our comparison engine identifies the <strong>cheapest energy supplier</strong> for your specific usage profile, potentially saving you up to <strong>40%</strong> on your annual bill.
                      </p>
                  </div>
                  
                  {/* Added Image per request for more visuals */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mt-8 group">
                      <img 
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80" 
                        alt="Business Energy Analysis" 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                  </div>
              </div>

              {/* Right Column: Supplier Grid */}
              <div className="lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* British Gas Card */}
                      <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-300 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-gray-50 text-watt-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <Icons.Flame size={24} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">British Gas</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                              The UK's largest energy supplier. Best for long-term stability and national coverage reliability.
                          </p>
                      </div>

                      {/* Eon Card */}
                      <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <Icons.Leaf size={24} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">E.ON Next</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                              Leading the way in renewable power solutions. Ideal for businesses targeting Net Zero.
                          </p>
                      </div>

                      {/* Opus Card */}
                      <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-watt-accent transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-lime-50 text-watt-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <Icons.Zap size={24} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Opus Energy</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                              Specialist business supplier offering flexible contracts designed specifically for SMEs.
                          </p>
                      </div>

                      {/* View All Card - Link */}
                      <a 
                          href="https://app.watt.co.uk/company" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group bg-watt-dark p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center text-center cursor-pointer relative overflow-hidden"
                      >
                          {/* Background Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-watt-dark to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
                          
                          <div className="relative z-10">
                              <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-3 mx-auto group-hover:bg-watt-accent group-hover:text-watt-dark transition-colors">
                                  <Icons.ArrowRight size={24} />
                              </div>
                              <h3 className="text-lg font-bold text-white mb-1">View All Suppliers</h3>
                              <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">Compare 20+ Providers Now</p>
                          </div>
                      </a>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* SERVICES GRID - REVERTED TO ICON ONLY WITH DISTINCT COLORS */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8 reveal">
            <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-watt-dark mb-4">Complete Utility Management.</h2>
                <p className="text-gray-600 text-lg">
                   We don't just find cheap rates. We provide end-to-end infrastructure support.
                </p>
            </div>
            <button onClick={() => onNavigate('services')} className="hidden md:flex items-center gap-2 text-watt-dark font-bold hover:text-watt-accent transition-colors">
                View All Services <Icons.ArrowRight size={20}/>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={() => onNavigate('services/electricity')} className="cursor-pointer">
                <ServiceCard 
                    title="Business Electricity"
                    description="Access wholesale rates from the Big Six and independent challengers."
                    icon={<Icons.Zap size={28} />}
                    color="bg-amber-500"
                />
            </div>
            <div onClick={() => onNavigate('services/gas')} className="cursor-pointer">
                <ServiceCard 
                    title="Business Gas"
                    description="Fixed and flexible procurement strategies to mitigate market volatility."
                    icon={<Icons.Flame size={28} />}
                    color="bg-orange-500"
                />
            </div>
            <div onClick={() => onNavigate('services/water')} className="cursor-pointer">
                <ServiceCard 
                    title="Water Audit"
                    description="Reduce costs by up to 30% through leak detection and tariff optimization."
                    icon={<Icons.Droplets size={28} />}
                    color="bg-cyan-500"
                />
            </div>
            <div onClick={() => onNavigate('services/green-energy')} className="cursor-pointer">
                <ServiceCard 
                    title="Green Energy"
                    description="100% renewable sources to help your business hit Net Zero targets."
                    icon={<Icons.Leaf size={28} />}
                    color="bg-emerald-500"
                />
            </div>
            <div onClick={() => onNavigate('services/telecoms')} className="cursor-pointer">
                <ServiceCard 
                    title="Telecoms & VoIP"
                    description="High-speed broadband and unified comms for the modern workplace."
                    icon={<Icons.Wifi size={28} />}
                    color="bg-violet-500"
                />
            </div>
            <div onClick={() => onNavigate('services/connections')} className="cursor-pointer">
                <ServiceCard 
                    title="New Connections"
                    description="Full project management for new meter installs and site works."
                    icon={<Icons.Plug size={28} />}
                    color="bg-rose-500"
                />
            </div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <button onClick={() => onNavigate('services')} className="bg-watt-dark text-white px-8 py-4 rounded-xl font-bold w-full">All Services</button>
          </div>
        </div>
      </section>

      {/* EXPERT CONTENT BLOCK */}
      <section className="py-24 bg-watt-dark text-white overflow-hidden relative">
          {/* Decorative BG */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>

          <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2 reveal">
                      <div className="flex items-center gap-2 text-watt-accent font-bold uppercase tracking-widest mb-4">
                          <Icons.ShieldCheck size={20} />
                          <span>Why Choose Us</span>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                          We fight for the <br/> <span className="text-watt-accent">Best Prices.</span>
                      </h2>
                      <div className="space-y-8">
                          <div className="flex gap-5">
                              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-watt-accent">
                                  <Icons.Activity size={24} />
                              </div>
                              <div>
                                  <h4 className="text-xl font-bold mb-2">Daily Market Tracking</h4>
                                  <p className="text-gray-400 leading-relaxed">Energy prices change hourly. Our systems track the wholesale market to identify the perfect window to lock in your contract.</p>
                              </div>
                          </div>
                          <div className="flex gap-5">
                              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-watt-accent">
                                  <Icons.Users size={24} />
                              </div>
                              <div>
                                  <h4 className="text-xl font-bold mb-2">Dedicated Account Manager</h4>
                                  <p className="text-gray-400 leading-relaxed">No call centers. You get a direct line to a UK-based expert who knows your business inside out.</p>
                              </div>
                          </div>
                      </div>
                      
                      <button onClick={() => onNavigate('about')} className="mt-12 text-white border-b border-watt-accent pb-1 hover:text-watt-accent transition-colors">
                          Read more about our story
                      </button>
                  </div>
                  
                  <div className="lg:w-1/2 reveal">
                      <div className="relative">
                          <div className="absolute -inset-4 bg-watt-accent rounded-3xl rotate-6 opacity-20 blur-lg"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Watt Utilities Office Team" 
                            className="relative rounded-3xl shadow-2xl border-4 border-white/10"
                          />
                          
                          {/* Floating Stat */}
                          <div className="absolute -bottom-6 -left-6 bg-white text-watt-dark p-6 rounded-xl shadow-xl hidden md:block">
                              <div className="text-4xl font-black text-watt-dark mb-1">£12m+</div>
                              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Client Savings Secured</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* FINAL CTA - REDESIGNED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="relative bg-watt-dark rounded-[3rem] overflow-hidden shadow-2xl">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-watt-accent/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-600/30 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 lg:p-20 gap-12">
                    <div className="md:w-3/5 text-left">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1 text-watt-accent font-bold text-xs uppercase tracking-widest mb-6">
                            <Icons.Star size={12} className="fill-current" /> 
                            Trusted by 15,000+ UK Businesses
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Ready to cut your <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-watt-accent to-white">Business Costs?</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
                            Upload your bill today and receive a free, no-obligation comparison within 24 hours. Our experts handle the switch from start to finish.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="https://app.watt.co.uk/company"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-watt-accent hover:bg-white hover:text-watt-dark text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-[0_4px_20px_rgba(140,198,63,0.4)] hover:shadow-white/20 transform hover:-translate-y-1 inline-block text-center"
                            >
                                Get Your Free Quote
                            </a>
                            <button 
                                onClick={() => onNavigate('contact')}
                                className="bg-transparent border-2 border-white/20 text-white font-bold py-4 px-10 rounded-xl text-lg hover:bg-white hover:text-watt-dark transition-all"
                            >
                                Speak to an Expert
                            </button>
                        </div>
                    </div>
                    
                    <div className="md:w-2/5 flex justify-center">
                         <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl w-full max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                             <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                                 <div className="w-14 h-14 rounded-full bg-watt-accent flex items-center justify-center text-white shadow-lg">
                                     <Icons.PhoneCall size={28} />
                                 </div>
                                 <div>
                                     <p className="text-gray-400 text-xs uppercase tracking-wider">Direct Line</p>
                                     <p className="text-white font-bold text-xl">0161 123 4567</p>
                                 </div>
                             </div>
                             <div className="space-y-4">
                                 <div className="flex items-center gap-3">
                                     <Icons.CheckCircle className="text-watt-accent" size={20} />
                                     <span className="text-gray-200 font-medium">No call centers</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <Icons.CheckCircle className="text-watt-accent" size={20} />
                                     <span className="text-gray-200 font-medium">Dedicated account manager</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <Icons.CheckCircle className="text-watt-accent" size={20} />
                                     <span className="text-gray-200 font-medium">Average savings of 20%</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};
