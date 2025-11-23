import React from 'react';
import { Icons } from '../components/Icons';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-watt-blue mb-4">Contact Us</h1>
            <p className="text-gray-600">Have a question about your bill? Need a complex multi-site quote? Our Manchester-based team is ready to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-watt-primary mb-4">
                        <Icons.Phone size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-500 text-sm mb-4">Mon-Fri from 9am to 5pm.</p>
                    <a href="tel:01234567890" className="text-xl font-bold text-watt-blue hover:text-watt-primary transition-colors">01234 567 890</a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-watt-primary mb-4">
                        <Icons.Mail size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-500 text-sm mb-4">We'll get back to you within 24 hours.</p>
                    <a href="mailto:hello@wattutilities.co.uk" className="text-lg font-bold text-watt-blue hover:text-watt-primary transition-colors">hello@wattutilities.co.uk</a>
                </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-watt-blue mb-6">Send us a message</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watt-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watt-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watt-primary focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watt-primary focus:border-transparent outline-none transition-all">
                            <option>General Enquiry</option>
                            <option>New Quote</option>
                            <option>Existing Application</option>
                            <option>Partner/Affiliate</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watt-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                    </div>

                    <button type="button" className="w-full bg-watt-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};