
import React from 'react';
import { Icons } from '../components/Icons';

interface SitemapProps {
  onNavigate: (page: string) => void;
}

export const Sitemap: React.FC<SitemapProps> = ({ onNavigate }) => {
  
  const siteStructure = [
    {
      category: "Main",
      icon: Icons.Home,
      links: [
        { label: "Home", route: "home" },
        { label: "About Us", route: "about" },
        { label: "FAQ", route: "faq" },
        { label: "Contact", route: "contact" },
        { label: "Get a Quote", external: "https://app.watt.co.uk/company" }
      ]
    },
    {
      category: "Services",
      icon: Icons.Zap,
      links: [
        { label: "All Services", route: "services" },
        { label: "Business Electricity", route: "services/electricity" },
        { label: "Business Gas", route: "services/gas" },
        { label: "Water Services", route: "services/water" },
        { label: "Telecoms", route: "services/telecoms" },
        { label: "Green Energy", route: "services/green-energy" },
        { label: "New Connections", route: "services/connections" }
      ]
    },
    {
      category: "Legal",
      icon: Icons.Scale, // Using ShieldCheck as fallback if Scale not available or ShieldCheck
      customIcon: <Icons.ShieldCheck size={24} />,
      links: [
        { label: "Privacy Policy", route: "privacy" },
        { label: "Terms & Conditions", route: "terms" },
        { label: "Letter of Authority", route: "loa" },
        { label: "Sitemap", route: "sitemap" }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-16">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-watt-dark mb-4">Sitemap</h1>
            <p className="text-gray-500 text-lg">Overview of our website structure.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteStructure.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-watt-light text-watt-primary flex items-center justify-center">
                       {section.customIcon ? section.customIcon : <section.icon size={24} />}
                    </div>
                    <h2 className="text-xl font-bold text-watt-blue">{section.category}</h2>
                 </div>
                 
                 <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        {link.external ? (
                          <a 
                            href={link.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between group text-gray-600 hover:text-watt-primary transition-colors p-2 rounded-lg hover:bg-gray-50"
                          >
                             <span className="font-medium">{link.label}</span>
                             <Icons.ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <button 
                            onClick={() => onNavigate(link.route!)}
                            className="flex items-center justify-between w-full group text-gray-600 hover:text-watt-primary transition-colors p-2 rounded-lg hover:bg-gray-50"
                          >
                             <span className="font-medium">{link.label}</span>
                             <Icons.ChevronRight size={16} className="text-gray-300 group-hover:text-watt-primary transition-colors" />
                          </button>
                        )}
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
         </div>

         {/* Quick Contact Strip */}
         <div className="mt-16 bg-watt-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white max-w-6xl mx-auto shadow-2xl">
            <div className="flex items-center gap-6">
               <div className="hidden md:flex w-16 h-16 rounded-full bg-white/10 items-center justify-center text-watt-accent">
                  <Icons.HelpCircle size={32} />
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h3>
                  <p className="text-gray-400">Our support team is available to guide you.</p>
               </div>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-watt-dark font-bold py-3 px-8 rounded-xl hover:bg-watt-accent transition-colors"
            >
               Contact Support
            </button>
         </div>
      </div>
    </div>
  );
};
