import React, { useState } from 'react';
import { Icons } from './Icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, image }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group h-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 relative overflow-hidden">
      {image && !imgError ? (
        <div className="h-48 overflow-hidden relative bg-gray-100">
             <img 
                src={image} 
                alt={title} 
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`} 
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
             <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm z-10`}>
                {icon}
             </div>
        </div>
      ) : (
        <div className={`absolute top-0 left-0 w-full h-2 ${color}`}></div>
      )}
      
      <div className="p-8 flex flex-col flex-grow">
          {(!image || imgError) && (
             <div className={`mb-6 p-4 rounded-2xl w-16 h-16 flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-transform duration-300 ${color.replace('bg-', 'text-')}`}>
                {icon}
             </div>
          )}
          <h3 className="text-xl font-bold text-watt-blue mb-3 group-hover:text-watt-primary transition-colors">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
            {description}
          </p>
          <button className="text-watt-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto uppercase tracking-wide">
            Learn More <Icons.ArrowRight size={16} />
          </button>
      </div>
    </div>
  );
};