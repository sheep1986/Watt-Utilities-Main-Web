
import React from 'react';
import { Icons } from './Icons';

export const Reviews: React.FC = () => {
  // Realistic reviews based on provided screenshots
  const reviews = [
    {
      title: "Very good communication",
      content: "The communication was very good in that they called to update me on the progression of the transfer. They were also able to advise us on the best course of action. All correspondence including emails were prompt and easy completing/signing of documents due to their software.",
      author: "Laura",
      date: "Aug 22, 2025",
      stars: 5,
      verified: true
    },
    {
      title: "Liam Cook was absolutely fantastic",
      content: "Liam Cook was absolutely fantastic! He really helped us deal with issues we have had in the past from previous suppliers. Liam assists still and I will continue to be using Liam to sort out energy accounts.",
      author: "benjamin hopkins",
      date: "Sep 16, 2025",
      stars: 5,
      verified: true
    },
    {
      title: "Sammie has been brilliant",
      content: "Sammie has been brilliant in supporting us through our energy switch. He was patient, knowledgeable and always on the right side of being in touch at the right time while not being too pushy at all. He was a pleasure to deal with and I cannot recommend him or Watt Utilities highly enough.",
      author: "Paul Newton",
      date: "Sep 30, 2025",
      stars: 5,
      verified: true
    },
    {
      title: "The team were highly professional",
      content: "The team were highly professional and for once I didn't need to chase to get things done. I strongly recommend working with this company. Excellent job!!",
      author: "abdul kalam",
      date: "Sep 29, 2025",
      stars: 5,
      verified: true
    },
    {
      title: "Great service & experience",
      content: "Claire Bird was really informative and helpful. She was very efficient and helped me secure a deal and change my Direct Debit, she was very professional and very human. A really good experience.",
      author: "Dee",
      date: "Sep 10, 2025",
      stars: 5,
      verified: true
    }
  ];

  return (
    <section className="py-24 bg-gray-50 font-sans border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* Trustpilot Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-black text-gray-900 mb-2">Rated Excellent</h2>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                         <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className="w-10 h-10 bg-[#00b67a] flex items-center justify-center">
                                    <Icons.Star size={24} fill="white" className="text-white" />
                                </div>
                            ))}
                         </div>
                         <span className="font-bold text-2xl text-gray-900">4.9/5</span>
                    </div>
                </div>
                <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
                <div>
                     <p className="text-gray-500 text-sm mb-1">Based on <span className="font-bold text-gray-900 underline">1,240 reviews</span></p>
                     <a 
                        href="https://www.trustpilot.com/review/watt.co.uk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 justify-center md:justify-start hover:opacity-80"
                     >
                        <Icons.Star size={20} fill="#00b67a" className="text-[#00b67a]" />
                        <span className="font-bold text-xl text-gray-900">Trustpilot</span>
                     </a>
                </div>
            </div>

            <a 
                href="https://www.trustpilot.com/review/watt.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-200 rounded-full font-bold text-gray-700 hover:border-[#00b67a] hover:text-[#00b67a] transition-colors flex items-center gap-2"
            >
                Read all reviews <Icons.ExternalLink size={16}/>
            </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                        {[...Array(review.stars)].map((_, j) => (
                            <div key={j} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
                                <Icons.Star size={14} fill="white" className="text-white" />
                            </div>
                        ))}
                    </div>

                    <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">{review.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-5 flex-grow">
                        "{review.content}"
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-gray-900 text-sm">{review.author}</span>
                            <span className="text-gray-400 text-xs">{review.date}</span>
                        </div>
                        {review.verified && (
                            <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs">
                                <div className="p-0.5 rounded-full border border-gray-400">
                                   <Icons.CheckCircle size={8} className="text-gray-500" /> 
                                </div>
                                <span>Verified Customer</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
