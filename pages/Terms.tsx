import React from 'react';
import { Icons } from '../components/Icons';

export const Terms: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

  const sections = [
    {
      title: "1. Definitions",
      content: "In these Terms and Conditions: 'We', 'Us', 'Our' refers to Watt Utilities Ltd. 'You', 'Your', 'Client' refers to the business or individual requesting services. 'Supplier' refers to the energy or utility provider."
    },
    {
      title: "2. Our Service",
      content: "Watt Utilities Ltd acts as an independent utility broker. We provide a price comparison service for business electricity, gas, and water. We act as an intermediary between you and the Supplier. Our service is free to you; we receive a commission from the Supplier if you choose to enter into a contract with them."
    },
    {
      title: "3. Letters of Authority (LOA)",
      content: "To request quotes on your behalf, we require a signed Letter of Authority. This document authorizes us to speak to suppliers, request usage data, and negotiate prices. It does not authorize us to sign contracts without your express permission unless specifically stated otherwise in a 'Level 2' authority."
    },
    {
      title: "4. Supplier Contracts",
      content: "The contract for the supply of energy is between you and the Supplier. We are not a party to that contract. You are responsible for reading the Supplier's terms and conditions before agreeing to a contract. We accept no liability for any loss arising from the contract between you and the Supplier."
    },
    {
      title: "5. Contract Termination",
      content: "It is your responsibility to ensure any existing contracts are terminated correctly within the notice period. While we may assist with this process, the ultimate liability remains with the Client."
    },
    {
      title: "6. Complaints",
      content: "We aim to provide a high standard of service. If you have a complaint, please contact us at complaints@wattutilities.co.uk. We will acknowledge your complaint within 2 working days and aim to resolve it within 10 working days."
    },
    {
      title: "7. Limitation of Liability",
      content: "We will exercise reasonable skill and care in providing our services. However, we do not guarantee that the prices we quote are the lowest available in the entire market, as we work with a selected panel of suppliers."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* Hero Header */}
      <div className="bg-watt-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 text-watt-accent">
              <Icons.FileText size={32} />
           </div>
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Business</h1>
           <p className="text-blue-200 max-w-2xl mx-auto text-lg">
             Transparency is at the core of what we do. Please read our terms of service carefully.
           </p>
           <p className="text-sm text-gray-400 mt-4 uppercase tracking-widest font-semibold">
             Last Updated: {lastUpdated}
           </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto">
           <div className="flex flex-col md:flex-row">
             
             {/* Sidebar Navigation (Desktop) */}
             <div className="hidden md:block w-1/4 bg-gray-50 p-8 border-r border-gray-100">
                <h3 className="font-bold text-watt-blue mb-6 uppercase text-xs tracking-wider">Contents</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                   {sections.map((sec, i) => (
                     <li key={i} className="hover:text-watt-primary cursor-pointer transition-colors">
                       {sec.title}
                     </li>
                   ))}
                </ul>
             </div>

             {/* Main Text */}
             <div className="w-full md:w-3/4 p-8 md:p-12">
                <div className="prose prose-blue max-w-none">
                  {sections.map((section, index) => (
                    <div key={index} className="mb-10 last:mb-0 border-b border-gray-100 last:border-0 pb-10 last:pb-0">
                      <h3 className="text-xl font-bold text-watt-dark mb-4 flex items-center gap-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4">
                   <Icons.AlertCircle className="text-blue-600 shrink-0 mt-1" size={24} />
                   <div>
                     <h4 className="font-bold text-blue-900 mb-1">Need Clarification?</h4>
                     <p className="text-sm text-blue-800">
                       If you are unsure about any part of these terms, please contact our compliance team at <a href="mailto:compliance@wattutilities.co.uk" className="underline hover:text-blue-600">compliance@wattutilities.co.uk</a> before proceeding.
                     </p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};