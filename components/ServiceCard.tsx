import React from 'react';
import { Icons } from './Icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="group h-full flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
      <div className={`mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-transform duration-300 ${color.replace('bg-', 'text-')}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-watt-blue mb-3 group-hover:text-watt-primary transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <button className="text-watt-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto">
        Learn More <Icons.ArrowRight size={16} />
      </button>
    </div>
  );
};