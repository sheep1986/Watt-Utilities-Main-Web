
import React, { useState } from 'react';
import { Icons } from '../components/Icons';

interface FAQProps {
  onNavigate: (page: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who are Watt Utilities?",
      answer: "We are a premier UK business utility consultancy. We specialize in reducing overheads for businesses of all sizes by procuring competitive rates for electricity, gas, and water. Our team of experts monitors the wholesale market daily to secure the best possible contracts for our clients."
    },
    {
      question: "How much does your service cost?",
      answer: "Our procurement service is completely free for our clients. We operate on a commission basis, receiving a fee from the supplier if you choose to proceed with a contract we secure. This cost is included in the unit rate. Because of our bulk buying power, the rates we secure are often cheaper than going direct to the supplier."
    },
    {
      question: "What is a Letter of Authority (LOA)?",
      answer: "A Letter of Authority (LOA) is a standard industry document that authorizes us to speak to energy suppliers on your behalf. It allows us to request your historical usage data, meter technical details, and contract end dates. Crucially, it does NOT allow us to sign contracts or switch your supply without your explicit further permission."
    },
    {
      question: "Can you help if I am already in a contract?",
      answer: "Yes! We can review your current arrangement to ensure you aren't being overcharged. More importantly, we can secure your next contract up to 12 months in advance. This allows you to 'lock in' today's rates, protecting your business from future market volatility and price hikes."
    },
    {
      question: "Do you handle Water services?",
      answer: "Yes. Since the deregulation of the English water market in 2017, businesses can switch their water retailer. We perform comprehensive water audits to identify leaks, validate bills, and switch you to a cheaper tariff."
    },
    {
      question: "How does the switching process work?",
      answer: "It's simple. 1) You provide a recent bill. 2) We analyze the market and present you with a comparison report. 3) You select your preferred option. 4) We handle all the paperwork and liaise with the new supplier. There is zero interruption to your supply—the pipes and wires stay the same, only the bill payer changes."
    },
    {
      question: "What about Green Energy?",
      answer: "Sustainability is a core part of our offering. We can source 100% REGO-backed renewable electricity and Green Gas contracts. We can also advise on carbon offsetting and EV charging infrastructure to help your business meet its Net Zero targets."
    },
    {
      question: "I have multiple sites. Can you help?",
      answer: "Absolutely. Multi-site portfolio management is our specialty. We can consolidate your billing, align your contract end dates (making them coterminous), and leverage your total group volume to negotiate a bespoke wholesale price."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-watt-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute -top-[40%] -right-[10%] w-[800px] h-[800px] bg-watt-accent/30 rounded-full blur-[120px]"></div>
           <div className="absolute -bottom-[40%] -left-[10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 text-watt-accent backdrop-blur-sm border border-white/10">
               <Icons.HelpCircle size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
               Everything you need to know about switching your business utilities.
            </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
         <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
               <div key={index} className="border-b border-gray-100 last:border-0">
                  <button 
                     onClick={() => toggleFAQ(index)}
                     className={`w-full text-left px-8 py-6 flex items-center justify-between transition-colors hover:bg-gray-50 group ${openIndex === index ? 'bg-gray-50' : ''}`}
                  >
                     <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-watt-primary' : 'text-watt-dark group-hover:text-watt-primary'}`}>
                        {faq.question}
                     </span>
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-watt-primary text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                        <Icons.ChevronDown size={20} />
                     </div>
                  </button>
                  <div 
                     className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                     <div className="px-8 pb-8 pt-2 text-gray-600 leading-relaxed">
                        {faq.answer}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Still have questions CTA */}
         <div className="max-w-4xl mx-auto mt-12 bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-watt-primary shadow-sm shrink-0">
                  <Icons.MessageCircle size={28} />
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-watt-dark mb-2">Still have questions?</h3>
                  <p className="text-gray-600">Our UK-based support team is available Mon-Fri, 9am-5pm.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <button onClick={() => onNavigate('contact')} className="bg-watt-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                  Contact Us
               </button>
               <a href="tel:01234567890" className="bg-white text-watt-dark font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200">
                  01234 567 890
               </a>
            </div>
         </div>
      </div>
    </div>
  );
};
