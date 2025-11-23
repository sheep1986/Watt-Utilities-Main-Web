import React, { useEffect } from 'react';
import { Icons } from '../components/Icons';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesProps {
    onNavigate: (page: string) => void;
    subPage?: string;
}

interface ServiceDetail {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
    longDescription: string[];
    benefits: string[];
    icon: React.ElementType;
    color: string;
    colorHex: string;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, subPage }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subPage]);

  const serviceData: Record<string, ServiceDetail> = {
    'electricity': {
        id: 'electricity',
        title: 'Business Electricity',
        subtitle: 'Powering your business for less.',
        // High quality High-Voltage conceptual image
        heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80',
        description: 'We procure electricity contracts for businesses of all sizes. Whether you need a simple fixed-rate plan to protect against price hikes or a flexible pass-through contract for large half-hourly meters, we have the expertise.',
        longDescription: [
            "The electricity market changes hourly. Securing the right contract at the right time can save your business thousands. We work with the 'Big Six' and over 20 independent suppliers to find the perfect fit for your usage profile.",
            "For high-consumption businesses (Half-Hourly meters), we offer bespoke procurement strategies, including flexible purchasing and basket deals to leverage group buying power."
        ],
        benefits: ['Fixed Term Contracts (1-5 Years)', 'Green/Renewable Options', 'Half-Hourly (HH) Metering', 'Multi-site consolidation', 'KVA Capacity Analysis'],
        icon: Icons.Zap,
        color: 'text-yellow-500',
        colorHex: '#eab308'
    },
    'gas': {
        id: 'gas',
        title: 'Business Gas',
        subtitle: 'Strategic procurement for a volatile market.',
        // Blue Flame Close up
        heroImage: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=2000&q=80', 
        description: 'Gas markets are volatile. We monitor wholesale trends daily to advise you on the optimal time to purchase. We handle new connections and upgrades to supply capacity for industrial usage.',
        longDescription: [
             "Commercial gas prices are heavily influenced by global events and storage levels. Our analysts track the wholesale therm price daily, alerting you when the market dips so you can lock in a low rate.",
             "We also assist with complex site works, including new gas connections, meter upgrades, and disconnections for demolition."
        ],
        benefits: ['Price locking strategies', 'Automated Bill Validation', 'New Meter Installation', 'AMR (Smart) Metering', 'Gas Siteworks Management'],
        icon: Icons.Flame,
        color: 'text-orange-500',
        colorHex: '#f97316'
    },
    'water': {
        id: 'water',
        title: 'Water Services',
        subtitle: 'Liquid assets managed efficiently.',
        // Clear Blue Water Splash
        heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80',
        description: 'Water deregulation allows you to switch your retailer. We conduct comprehensive audits to identify leaks, overcharges, and opportunities to switch to cheaper tariffs.',
        longDescription: [
            "Since the English water market deregulated in 2017, businesses can now choose their retailer. However, the savings aren't just in the rates—they are in the usage.",
            "Our team performs historical bill audits to recover overcharges (going back up to 6 years) and installs data loggers to detect underground leaks that could be costing you a fortune."
        ],
        benefits: ['Leak detection & repair', 'Bill auditing (historic recovery)', 'Surface water drainage claims', 'Consolidated billing', 'Trade Effluent Consents'],
        icon: Icons.Droplets,
        color: 'text-blue-500',
        colorHex: '#3b82f6'
    },
    'multisite': {
        id: 'multisite',
        title: 'Multi-Site Metering',
        subtitle: 'Unified utility management for complex portfolios.',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
        description: 'Streamline your administration with consolidated billing and coterminous contracts. We simplify the management of large, multi-site portfolios.',
        longDescription: [
             "Managing utilities across multiple locations can be an administrative burden. Different contract end dates, multiple suppliers, and stacks of paper bills make it difficult to track spend.",
             "We consolidate your portfolio. By aligning your contract end dates (making them coterminous) and moving sites to a single supplier where possible, we reduce your admin time and leverage your total volume to negotiate better rates."
        ],
        benefits: ['Consolidated Billing', 'Coterminous Contracts', 'Group Purchasing Power', 'Dedicated Key Account Manager', 'Portfolio Analysis'],
        icon: Icons.Building2,
        color: 'text-indigo-600',
        colorHex: '#4f46e5'
    },
    'telecoms': {
        id: 'telecoms',
        title: 'Business Telecoms',
        subtitle: 'High-speed connectivity for the modern office.',
        // Abstract Network/Cyber Connectivity
        heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80',
        description: 'Connectivity is the backbone of modern business. We source high-speed broadband, VoIP systems, and mobile fleets to keep your team connected.',
        longDescription: [
            "As the UK switches off the PSTN (traditional copper) network in 2025, every business needs to migrate to digital voice solutions. We make this transition seamless.",
            "We partner with tier-1 carriers to provide ultra-fast Leased Lines, FTTP broadband, and cloud-hosted telephone systems (VoIP) that allow your team to work from anywhere."
        ],
        benefits: ['Leased Lines (1Gbps+)', 'VoIP & Cloud PBX', 'Business Mobile SIMs', '5G Solutions', 'PSTN Switch-off preparation'],
        icon: Icons.Wifi,
        color: 'text-purple-500',
        colorHex: '#a855f7'
    },
    'green-energy': {
        id: 'green-energy',
        title: 'Green Energy',
        subtitle: 'Sustainable power for a net-zero future.',
        // Solar Panels / Wind Farm Mix
        heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80', 
        description: 'Reduce your carbon footprint with 100% renewable electricity and green gas. We help you achieve your sustainability goals without breaking the bank.',
        longDescription: [
            "Consumers are increasingly conscious of the environmental impact of the businesses they buy from. Switching to a green energy tariff is the easiest way to boost your CSR credentials.",
            "We can source REGO-backed electricity (Renewable Energy Guarantees of Origin) and Green Gas certificates, allowing you to market your business as carbon-neutral."
        ],
        benefits: ['100% Renewable Electricity', 'Green Gas', 'Carbon Offsetting', 'Corporate PPA (Power Purchase Agreements)', 'EV Charging Points'],
        icon: Icons.Leaf,
        color: 'text-green-600',
        colorHex: '#16a34a'
    },
    'connections': {
        id: 'connections',
        title: 'New Connections',
        subtitle: 'Getting you connected, faster.',
        // Infrastructure / Construction
        heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80', 
        description: 'Full project management for new meter installs and site works. From MPAN creation to final meter fit, we manage the complex logistics.',
        longDescription: [
            "Setting up utilities for a new build or commercial development can be a bureaucratic nightmare. Dealing with Distribution Network Operators (DNOs) requires patience and technical knowledge.",
            "We act as your project manager, coordinating the infrastructure providers, suppliers, and meter operators to ensure your site has power and water exactly when you need it."
        ],
        benefits: ['MPAN/MPRN Generation', 'Meter Installation', 'Upgrades & Downgrades', 'Temporary Builders Supplies', 'Disconnections'],
        icon: Icons.Plug,
        color: 'text-red-500',
        colorHex: '#ef4444'
    }
  };

  // RENDER INDIVIDUAL SERVICE PAGE
  if (subPage && serviceData[subPage]) {
    const service = serviceData[subPage];
    return (
        <div className="bg-white min-h-screen">
            {/* Specific Hero */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-watt-dark">
                <div className="absolute inset-0 z-0">
                    <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-watt-dark via-watt-dark/50 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-widest mb-6`}>
                        <service.icon size={18} className={service.color} />
                        {service.title}
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">{service.title}</h1>
                    <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto font-light">{service.subtitle}</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Main Content */}
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl font-bold text-watt-blue mb-8">Overview</h2>
                        <div className="prose prose-lg text-gray-600 mb-12">
                            {service.longDescription.map((para, idx) => (
                                <p key={idx} className="mb-6 leading-relaxed">{para}</p>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold text-watt-blue mb-6">Key Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-watt-accent/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-watt-accent shrink-0">
                                        <Icons.CheckCircle size={20} />
                                    </div>
                                    <span className="font-semibold text-gray-800">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Box */}
                        <div className="bg-watt-dark text-white p-10 rounded-3xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-watt-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                             <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Ready to secure your {service.title.toLowerCase()}?</h3>
                                <p className="text-gray-300 mb-8">Upload your latest bill and let our team find you the best rates on the market.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="https://app.watt.co.uk/company" target="_blank" rel="noopener noreferrer" className="bg-watt-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-watt-dark transition-colors inline-block text-center">Get a Quote</a>
                                    <button onClick={() => onNavigate('contact')} className="border border-white/30 text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-watt-dark transition-colors">Speak to Expert</button>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                            <h4 className="font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Other Services</h4>
                            <div className="space-y-2">
                                {Object.values(serviceData).filter(s => s.id !== subPage).map(s => (
                                    <button 
                                        key={s.id}
                                        onClick={() => onNavigate(`services/${s.id}`)}
                                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-left group transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <s.icon size={18} className="text-gray-400 group-hover:text-watt-primary" />
                                            <span className="text-gray-600 group-hover:text-gray-900 font-medium">{s.title}</span>
                                        </div>
                                        <Icons.ChevronRight size={16} className="text-gray-300 group-hover:text-watt-accent" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-watt-primary shadow-sm">
                                    <Icons.PhoneCall size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-800 uppercase">Need Help?</p>
                                    <p className="text-lg font-bold text-gray-900">0161 123 4567</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">Our Manchester-based team is available Mon-Fri, 9am-5pm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  // DEFAULT OVERVIEW PAGE (If no subPage or invalid subPage)
  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="bg-watt-blue text-white py-24 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Corporate Office" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-watt-blue/80"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored utility management solutions designed to reduce consumption, cost, and carbon footprint.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(serviceData).map((service) => (
                <div key={service.id} onClick={() => onNavigate(`services/${service.id}`)} className="cursor-pointer">
                    <ServiceCard 
                        title={service.title}
                        description={service.description}
                        icon={<service.icon size={28} />}
                        color={`bg-${service.colorHex === '#eab308' ? 'yellow-500' : service.color.split('-')[1] + '-' + service.color.split('-')[2]}`} // Simplified color mapping for Card
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};