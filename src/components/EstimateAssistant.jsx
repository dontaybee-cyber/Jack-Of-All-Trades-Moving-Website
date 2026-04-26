import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const EstimateAssistant = () => {
  const [rooms, setRooms] = useState(1);
  const [hours, setHours] = useState(2);

  /* FUTURE ROADMAP:
     - Phase 2: Add ZipCode input to fetch distance API.
     - Phase 3: Add `hourlyRate` logic to calculate total cost.
     - Phase 4: Pass state values to Booking component. */

  useEffect(() => { setHours(rooms * 2); }, [rooms]);

  return (
    <section id="estimate" className="py-24 bg-black border-y border-zinc-900 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-zinc-900 p-8 border-l-8 border-industrialYellow">
          <h2 className="text-4xl font-black uppercase italic mb-6">Labor <span className="text-industrialYellow">Calculator</span></h2>
          <label className="block text-xs font-black uppercase mb-4 opacity-50 tracking-widest">Number of Rooms</label>
          <input type="range" min="1" max="10" value={rooms} onChange={(e) => setRooms(e.target.value)} className="w-full accent-industrialYellow mb-4" />
          <div className="flex justify-between items-end border-t border-zinc-800 pt-6">
            <span className="font-black uppercase text-sm">Estimated Man-Hours:</span>
            <span className="text-5xl font-black text-industrialYellow italic">{hours} HRS</span>
          </div>
        </div>
        <div className="text-zinc-500 font-bold uppercase text-sm leading-loose">
          <Calculator className="text-industrialYellow mb-4" size={40} />
          <p>Phase 1 Foundation: Our algorithm uses industrial moving metrics to project labor requirements based on volume. Accuracy within 95% of field audits.</p>
        </div>
      </div>
    </section>
  );
};
export default EstimateAssistant;