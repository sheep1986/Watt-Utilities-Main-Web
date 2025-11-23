import React, { useState } from 'react';
import { Icons } from '../components/Icons';

export const LOA: React.FC = () => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    signature: '',
    position: '',
    printName: '',
    email: '',
    phone: '',
    date: new Date().toLocaleDateString('en-GB'),
    extra: ''
  });
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignatureClick = () => {
    setShowSignatureModal(true);
  };

  const confirmSignature = () => {
    setFormData(prev => ({ ...prev, signature: prev.printName || 'Signed' }));
    setIsSigned(true);
    setShowSignatureModal(false);
  };

  // Specific styling constants from the provided HTML analysis
  // Image Source: https://docs-cdn.signable.co.uk/large/24a0f813f0585e3e24ff63f6ea5fbc9d-0.jpg
  
  return (
    <div className="bg-[#f4f4f4] min-h-screen font-sans text-[#333] relative">
      
      {/* SIGNABLE HEADER */}
      <header className="bg-white shadow-sm border-b border-gray-200 h-16 fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
           {/* Logo from the HTML */}
           <img src="https://assets-cdn.signable.co.uk/company-logo/32386-1659620213.png" alt="Logo" className="h-8 lg:h-10" />
        </div>
        <div className="text-center hidden md:block">
           <h2 className="font-bold text-lg text-gray-700">NEW LOA 2025</h2>
        </div>
        <div className="flex items-center gap-4">
           <button className="text-gray-500 hover:text-gray-700">
              <Icons.HelpCircle size={20} />
           </button>
        </div>
      </header>

      <div className="pt-16 flex h-[calc(100vh-0px)]">
         
         {/* SIDEBAR */}
         <aside className="hidden lg:flex w-72 bg-[#2c3e50] flex-col text-white overflow-y-auto z-30">
            <div className="p-4 border-b border-gray-600">
               <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Contracts</h3>
               <div className="bg-[#34495e] p-2 rounded border border-[#2563eb] cursor-pointer">
                  <div className="relative aspect-[0.7] w-full bg-white mb-2 overflow-hidden">
                     <img 
                        src="https://docs-cdn.signable.co.uk/large/24a0f813f0585e3e24ff63f6ea5fbc9d-0.jpg" 
                        className="w-full h-full object-cover opacity-80"
                        alt="Thumbnail"
                     />
                  </div>
                  <div className="text-xs">
                     <b className="block text-white">NEW LOA 2025</b>
                     <span className="text-gray-400">1 page.</span>
                  </div>
               </div>
            </div>
            <div className="mt-auto p-4 border-t border-gray-600">
                <div className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                    <Icons.HelpCircle size={16} /> Help
                </div>
            </div>
         </aside>

         {/* MAIN CONTENT AREA */}
         <main className="flex-1 relative overflow-y-auto bg-[#f4f4f4] p-4 lg:p-8 flex justify-center pb-32">
            
            <div className="w-full max-w-[900px] relative">
               {/* PROGRESS BAR */}
               <div className="mb-6 bg-white rounded-full h-6 w-full flex items-center px-1 shadow-sm relative overflow-hidden">
                   <div className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-500" style={{ width: isSigned ? '100%' : '10%' }}></div>
                   <span className="relative z-10 text-xs font-bold ml-2 text-gray-600">{isSigned ? '100%' : '0%'} complete</span>
               </div>

               <div className="bg-white shadow-lg relative" style={{ aspectRatio: '0.707' }}> {/* A4 Aspect Ratio Approx */}
                   {/* DOCUMENT IMAGE */}
                   <img 
                      src="https://docs-cdn.signable.co.uk/large/24a0f813f0585e3e24ff63f6ea5fbc9d-0.jpg" 
                      className="w-full h-full object-contain pointer-events-none select-none"
                      alt="Document"
                   />

                   {/* ---------------- OVERLAY FIELDS (Percentages from source HTML) ---------------- */}

                   {/* Field 1: Company Name - top: 17.0286%; left: 20.3407%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '17.0286%', left: '20.3407%', width: '22.963%', height: '2.97%' }}
                   >
                      <input 
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full h-full bg-yellow-100/30 hover:bg-yellow-100/50 focus:bg-white border border-transparent focus:border-blue-500 outline-none px-2 text-sm transition-colors rounded"
                        placeholder="Company Name"
                      />
                   </div>

                   {/* Field 2: Address - top: 20.2286%; left: 20.3467%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '20.2286%', left: '20.3467%', width: '76%', height: '2.97%' }}
                   >
                      <input 
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full h-full bg-yellow-100/30 hover:bg-yellow-100/50 focus:bg-white border border-transparent focus:border-blue-500 outline-none px-2 text-sm transition-colors rounded"
                        placeholder="Registered Address"
                      />
                   </div>

                   {/* Field 3: Signature - top: 76.2286%; left: 24.2933%; */}
                   <div 
                     className="absolute cursor-pointer" 
                     style={{ top: '76.2286%', left: '24.2933%', width: '22.963%', height: '1.94%' }}
                     onClick={handleSignatureClick}
                   >
                      <div className={`w-full h-full flex items-center px-2 text-sm rounded border transition-colors ${isSigned ? 'bg-transparent border-transparent' : 'bg-yellow-100/50 border-blue-400 hover:bg-yellow-200/50'}`}>
                         {formData.signature ? (
                             <span className="font-[cursive] text-lg">{formData.signature}</span>
                         ) : (
                             <span className="text-blue-600 opacity-70 text-xs">Click to Sign</span>
                         )}
                      </div>
                   </div>

                   {/* Field 4: Position Dropdown - top: 76.8%; left: 74.6237%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '76.8%', left: '74.6237%', width: '22.963%', height: '2.17%' }}
                   >
                      <select 
                        name="position"
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        className="w-full h-full bg-yellow-100/30 hover:bg-yellow-100/50 focus:bg-white border border-transparent focus:border-blue-500 outline-none px-1 text-xs transition-colors rounded appearance-none"
                      >
                         <option value="">Select Position</option>
                         <option value="Director">Director</option>
                         <option value="Partner">Partner</option>
                         <option value="Sole Trader">Sole Trader</option>
                         <option value="Manager">Manager</option>
                      </select>
                   </div>

                   {/* Field 5: Print Name - top: 78.9714%; left: 24.2993%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '78.9714%', left: '24.2993%', width: '22.963%', height: '2.28%' }}
                   >
                      <input 
                        type="text"
                        name="printName"
                        value={formData.printName}
                        onChange={handleInputChange}
                        className="w-full h-full bg-yellow-100/30 hover:bg-yellow-100/50 focus:bg-white border border-transparent focus:border-blue-500 outline-none px-2 text-sm transition-colors rounded"
                        placeholder="Print Name"
                      />
                   </div>

                   {/* Field 6: Position (Text) - top: 79.3143%; left: 74.6563%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '79.3143%', left: '74.6563%', width: '22.963%', height: '2.17%' }}
                   >
                      <input 
                        type="text"
                        value={formData.position}
                        readOnly
                        className="w-full h-full bg-transparent border-none outline-none px-2 text-sm text-gray-600"
                      />
                   </div>

                   {/* Field 7: Email/Phone? - top: 81.7143%; left: 24.317%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '81.7143%', left: '24.317%', width: '22.963%', height: '2.17%' }}
                   >
                       <input 
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-full bg-yellow-100/30 hover:bg-yellow-100/50 focus:bg-white border border-transparent focus:border-blue-500 outline-none px-2 text-sm transition-colors rounded"
                        placeholder="Email Address"
                      />
                   </div>

                   {/* Field 8: Phone - top: 81.7143%; left: 74.6667%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '81.7143%', left: '74.6667%', width: '22.963%', height: '2.17%' }}
                   >
                      <input 
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-full bg-yellow-100/30 hover:bg-yellow-100/50 focus:bg-white border border-transparent focus:border-blue-500 outline-none px-2 text-sm transition-colors rounded"
                        placeholder="Phone Number"
                      />
                   </div>

                   {/* Field 9: Big Text Area - top: 84.1143%; left: 32.1956%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '84.1143%', left: '32.1956%', width: '65.33%', height: '2.74%' }}
                   >
                       <input 
                        type="text"
                        name="extra"
                        value={formData.extra}
                        onChange={handleInputChange}
                        className="w-full h-full bg-yellow-100/30 hover:bg-yellow-100/50 focus:bg-white border border-transparent focus:border-blue-500 outline-none px-2 text-sm transition-colors rounded"
                      />
                   </div>

                   {/* Field 10: Date - top: 87.3143%; left: 24.157%; */}
                   <div 
                     className="absolute" 
                     style={{ top: '87.3143%', left: '24.157%', width: '22.963%', height: '2.05%' }}
                   >
                      <input 
                        type="text"
                        name="date"
                        value={formData.date}
                        readOnly
                        className="w-full h-full bg-transparent border-none outline-none px-2 text-sm text-gray-800 font-bold"
                      />
                   </div>
               </div>
            </div>
         </main>
      </div>

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="text-sm text-gray-500 font-medium">
             9 required fields to complete
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-3 rounded bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-colors">
                Next: On behalf of:
             </button>
             <button 
                disabled={!isSigned}
                onClick={() => alert("LOA Submitted Successfully!")}
                className="px-6 py-3 rounded bg-[#2563eb] text-white font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
             >
                Submit
             </button>
          </div>
      </footer>

      {/* SIGNATURE MODAL */}
      {showSignatureModal && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
               <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-800">Verify Your Signature</h2>
                  <button onClick={() => setShowSignatureModal(false)} className="text-gray-400 hover:text-gray-600"><Icons.X size={20}/></button>
               </div>
               <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                     Please confirm your name below to digitally sign this document.
                  </p>
                  <div className="space-y-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                        <input 
                           type="text" 
                           value={formData.printName}
                           onChange={(e) => setFormData({...formData, printName: e.target.value})}
                           className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                     </div>
                     <div className="h-24 border-2 border-dashed border-gray-300 rounded bg-gray-50 flex items-center justify-center">
                        {formData.printName ? (
                           <span className="font-[cursive] text-2xl text-blue-800">{formData.printName}</span>
                        ) : (
                           <span className="text-gray-400 text-sm">Preview</span>
                        )}
                     </div>
                     <p className="text-xs text-gray-400">
                        By clicking Confirm, you agree to be legally bound by this electronic signature.
                     </p>
                  </div>
               </div>
               <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                  <button 
                     onClick={confirmSignature}
                     className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
                  >
                     Confirm Signature
                  </button>
               </div>
            </div>
         </div>
      )}

    </div>
  );
};