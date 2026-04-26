import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 border-b-2 border-industrialYellow backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full bg-white p-1 border border-industrialYellow" />
          <span className="font-black text-xl uppercase tracking-tighter text-white">Jack Of All Trades</span>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
          <a href="#services" className="hover:text-industrialYellow transition-colors">Services</a>
          <a href="#estimate" className="hover:text-industrialYellow transition-colors">Estimate</a>
          <a href="#about" className="hover:text-industrialYellow transition-colors">About</a>
          <a href="#booking" className="bg-industrialYellow text-black px-6 py-2 shadow-[3px_3px_0px_white]">Book Move</a>
        </div>
        <button className="lg:hidden text-industrialYellow" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-zinc-900 p-6 flex flex-col gap-4 font-black uppercase italic border-b border-industrialYellow">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#estimate" onClick={() => setIsOpen(false)}>Estimate</a>
          <a href="#booking" onClick={() => setIsOpen(false)} className="text-industrialYellow">Book Now</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;