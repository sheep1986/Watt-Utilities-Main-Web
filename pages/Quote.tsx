
import React, { useState } from 'react';
import { Icons } from '../components/Icons';

export const Quote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would post data to an endpoint
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md border-t-4 border-watt-accent">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.ShieldCheck size={32} />
            </div>
            <h2 className="text-2xl font-bold text-watt-dark mb-2">Request Received!</h2>
            <p className="text-gray-600 mb-6">
                One of our energy experts will analyze your requirements and call you within 15 minutes (Mon-Fri 9-5).
            </p>
            <button 
                onClick={() => setSubmitted(false)} 
                className="text-watt-dark font-bold underline hover:text-black"
            >
                Submit another quote
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-watt-light min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Sidebar Info */}
            <div className="bg-watt-dark text-white p-8 md:w-1/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Start Saving Today</h2>
                    <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                        Our service is 100% free. We receive a commission from suppliers, so you pay the same or less than going direct.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Icons.Zap size={16}/></div>
                            <span className="text-sm font-medium">Instant Comparison</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Icons.ShieldCheck size={16}/></div>
                            <span className="text-sm font-medium">Hassle-free Switching</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Icons.TrendingUp size={16}/></div>
                            <span className="text-sm font-medium">Bill Validation</span>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-xs text-gray-400">Trusted by 15,000+ UK businesses</p>
                </div>
            </div>

            {/* Form */}
            <div className="p-8 md:w-2/3">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Get Your Free Quote</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-watt-dark focus:border-transparent outline-none" placeholder="e.g. Watt Utilities Ltd" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                            <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-watt-dark focus:border-transparent outline-none" placeholder="e.g. John Smith" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-watt-dark focus:border-transparent outline-none" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-watt-dark focus:border-transparent outline-none" placeholder="07123 456 789" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-watt-dark focus:border-transparent outline-none">
                            <option>Electricity & Gas</option>
                            <option>Electricity Only</option>
                            <option>Gas Only</option>
                            <option>Water</option>
                            <option>Telecoms</option>
                        </select>
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full bg-watt-dark hover:bg-black text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
                            Compare Prices Now
                        </button>
                        <p className="text-xs text-gray-400 text-center mt-3">
                            By submitting this form, you agree to our privacy policy. We do not share your data with unauthorized third parties.
                        </p>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};