
import React from 'react';
import { Icons } from '../components/Icons';

interface AboutProps {
    onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0f172a] py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" alt="Office" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">About Watt Utilities</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                  We are a team of energy experts dedicated to bringing transparency and fairness to the UK business utility market.
              </p>
          </div>
      </section>

      {/* Mission */}
      <section className="py-24">
          <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="w-full md:w-1/2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-6">
                          <Icons.Target size={14} /> Our Purpose
                      </div>
                      <h2 className="text-4xl font-bold text-watt-dark mb-6 leading-tight">Rewriting the rules of <br/><span className="text-watt-accent">Business Energy.</span></h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          Established in 2015, Watt Utilities was born from a frustration with the opaque nature of the business energy sector. Many brokers were hiding commissions and placing clients in unsuitable contracts.
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          We set out to change that. Our mission is simple: <strong>To provide honest, transparent, and data-driven utility solutions.</strong> We believe every business, regardless of size, deserves access to the same wholesale rates as large corporations.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-5 bg-white shadow-lg rounded-xl border border-gray-100 hover:border-gray-200 transition-colors group">
                              <div className="w-10 h-10 rounded-lg bg-gray-100 text-watt-dark flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                  <Icons.Search size={20}/>
                              </div>
                              <h3 className="font-bold text-watt-dark mb-1">Transparency</h3>
                              <p className="text-sm text-gray-600">Clear pricing structures with no hidden fees.</p>
                          </div>
                          <div className="p-5 bg-white shadow-lg rounded-xl border border-gray-100 hover:border-green-200 transition-colors group">
                              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                  <Icons.Leaf size={20}/>
                              </div>
                              <h3 className="font-bold text-watt-dark mb-1">Sustainability</h3>
                              <p className="text-sm text-gray-600">Helping businesses transition to Net Zero.</p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-all duration-500 group">
                          <div className="absolute inset-0 bg-gradient-to-t from-watt-dark/90 via-transparent to-transparent z-10"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                            alt="Our Team" 
                            className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                              <div className="flex text-watt-accent mb-3">
                                  {[1,2,3,4,5].map(i => <Icons.Star key={i} size={18} fill="currentColor" className="drop-shadow-md"/>)}
                              </div>
                              <p className="text-white font-medium italic text-lg mb-4 leading-relaxed">"Watt Utilities saved us £4,500 on our first renewal. Their team is exceptional."</p>
                              <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">SJ</div>
                                  <div>
                                      <p className="text-white font-bold text-sm">Sarah Jenkins</p>
                                      <p className="text-gray-300 text-xs">MD at TechFlow</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-watt-dark text-white overflow-hidden relative">
          <div className="absolute inset-0">
              <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80" 
                  alt="Wind Farm" 
                  className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-watt-dark via-watt-dark/90 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-watt-accent text-xs font-bold uppercase tracking-wider mb-6">
                      <Icons.Leaf size={14} /> Environmental Commitment
                  </div>
                  <h2 className="text-4xl font-bold mb-6">Committed to a <span className="text-watt-accent">Greener Future.</span></h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      We don't just find the cheapest rates; we help you find the cleanest energy. 
                      Our team specializes in procuring 100% renewable electricity contracts and green gas, 
                      helping your business reduce its carbon footprint while saving money.
                  </p>
                   <div className="grid grid-cols-2 gap-6">
                       <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group aspect-video">
                            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" alt="Solar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                       </div>
                       <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group aspect-video mt-8">
                            <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80" alt="Wind" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                       </div>
                   </div>
              </div>
          </div>
      </section>

      {/* Redesigned Stats Section */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16 relative overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-watt-accent/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl"></div>

                  <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                      <div className="group">
                          <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-watt-dark to-gray-600 mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">£12M+</div>
                          <div className="h-1 w-12 bg-watt-accent mx-auto mb-3 rounded-full"></div>
                          <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Client Savings</div>
                      </div>
                      <div className="group">
                          <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-watt-dark to-gray-600 mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">15k+</div>
                          <div className="h-1 w-12 bg-watt-accent mx-auto mb-3 rounded-full"></div>
                          <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Happy Customers</div>
                      </div>
                      <div className="group">
                          <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-watt-dark to-gray-600 mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">20+</div>
                          <div className="h-1 w-12 bg-watt-accent mx-auto mb-3 rounded-full"></div>
                          <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Energy Partners</div>
                      </div>
                      <div className="group">
                          <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-watt-dark to-gray-600 mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
                          <div className="h-1 w-12 bg-watt-accent mx-auto mb-3 rounded-full"></div>
                          <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Independent</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Premium CTA Section - Redesigned based on user request */}
      <section className="py-24 bg-white mt-12">
          <div className="container mx-auto px-4">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-watt-dark px-6 py-20 text-center shadow-2xl isolate">
                  {/* Advanced Background */}
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
                    alt="Background" 
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-watt-dark via-watt-dark/95 to-gray-900/90"></div>
                  
                  {/* Glowing Orbs */}
                  <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-watt-accent/20 rounded-full blur-[120px] -z-10"></div>

                  <div className="max-w-3xl mx-auto">
                      <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                         Join thousands of <br/>
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-watt-accent to-emerald-400">UK businesses.</span>
                      </h2>
                      
                      <p className="text-xl text-gray-300 mb-10 font-light">
                          Start your saving journey today. It takes less than 2 minutes to get a quote and see how much you could save.
                      </p>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                          <a 
                            href="https://app.watt.co.uk/company"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-watt-dark bg-white rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                          >
                              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                              <span className="relative flex items-center gap-3">
                                  Start Your Saving Journey <Icons.ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                              </span>
                          </a>
                          
                          <button 
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-5 text-lg font-bold text-white border border-white/20 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                          >
                              Contact Sales
                          </button>
                      </div>
                      
                      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400">
                          <Icons.Lock size={14} /> 
                          <span>No obligation quotes. 100% Free service.</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};