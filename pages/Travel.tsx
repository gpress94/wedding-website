
import React from 'react';
import { ACCOMMODATIONS } from '../constants';
import { MapPin } from 'lucide-react';
import IMAGES from '../images';

const Travel: React.FC = () => {
  return (
    <section className="py-24">
       <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-script text-5xl mb-12 text-theme-text">Accommodations</h2>
          
          {/* Main Travel Photo */}
          <div className="w-full mb-16 shadow-sm border border-white bg-theme-text/5 relative">
             <img 
               src={IMAGES.travel.hotel}
               alt="Hotel"
               className="w-full h-auto block"
               onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0.5";
               }}
             />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
             {ACCOMMODATIONS.map((hotel, idx) => (
               <div key={idx} className="bg-white p-8 border border-theme-text/10 shadow-md">
                  <h4 className="font-serif text-2xl mb-2">{hotel.name}</h4>
                  <p className="text-sm text-theme-text/70 mb-4">{hotel.address}</p>
                  {hotel.groupCode && (
                    <div className="inline-block bg-theme-bg px-4 py-2 rounded-full text-xs font-sans tracking-widest mb-4">
                      CODE: {hotel.groupCode}
                    </div>
                  )}
                  <p className="text-theme-text/80 italic text-sm">{hotel.note}</p>
               </div>
             ))}
          </div>

          <div className="bg-theme-text text-theme-bg p-8 md:p-12 text-left relative overflow-hidden">
             {/* Decorative Background Element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

             <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="font-script text-4xl mb-2">Getting Here</h3>
                  <div className="flex items-center justify-center gap-2 text-white/70 mb-4">
                    <MapPin size={16} />
                    <a href="https://share.google/ptgW1GpkmQHWO8dOb" target="_blank" rel="noopener noreferrer" className="font-sans text-sm tracking-wide hover:underline">The Foundation House, 124 Old Mill Road, Greenwich, CT 06831</a>
                  </div>
                  <p className="font-sans font-light text-sm opacity-90 leading-relaxed max-w-2xl mx-auto border-b border-white/20 pb-8">
                    We are so excited to celebrate with you! For those driving, the venue is located in the backcountry of Greenwich. 
                    For the smoothest journey, we recommend using the Merritt Parkway (CT-15) if you are driving a passenger car. 
                    <span className="block mt-2 italic text-xs opacity-75">(Note: Commercial vehicles, trucks, and buses are not permitted on the Merritt Parkway and must use I-95).</span>
                  </p>
                </div>
                
                <div className="grid gap-8 max-w-3xl mx-auto">
                  
                  {/* Westchester */}
                  <div className="border-l-2 border-theme-accent pl-6">
                    <h4 className="font-serif text-xl text-theme-accent mb-2">From Westchester County Airport (HPN)</h4>
                    <span className="text-xs uppercase tracking-widest opacity-60 block mb-3">Approx. 15 minutes</span>
                    <ul className="list-disc list-inside space-y-1 font-sans text-sm font-light opacity-90">
                      <li>Exit the airport and follow signs for Rye Lake Ave.</li>
                      <li>Turn Left onto King St (NY-120A).</li>
                      <li>Turn Right onto Cliffdale Rd and follow it for about 2 miles.</li>
                      <li>Turn Left onto Riversville Rd.</li>
                      <li>Take the first Right onto N Porchuck Rd.</li>
                      <li>Turn Left onto Old Mill Rd.</li>
                      <li>The entrance to The Foundation House will be on your Left.</li>
                    </ul>
                  </div>

                  {/* Upstate NY */}
                  <div className="border-l-2 border-theme-accent pl-6">
                    <h4 className="font-serif text-xl text-theme-accent mb-2">From Upstate NY / Rockland County</h4>
                    <span className="text-xs uppercase tracking-widest opacity-60 block mb-3">Via Mario M. Cuomo Bridge (Tappan Zee)</span>
                    <ul className="list-disc list-inside space-y-1 font-sans text-sm font-light opacity-90">
                      <li>Cross the bridge heading East on I-287.</li>
                      <li>Keep Left to continue on I-287 East toward White Plains/Rye.</li>
                      <li>Take Exit 9 for the Hutchinson River Parkway North.</li>
                      <li>Continue North into CT where it becomes the Merritt Parkway (CT-15).</li>
                      <li>Take Exit 28 (Round Hill Road) and turn Left off the exit.</li>
                      <li>Drive approx. 2 miles, then turn Right onto Old Mill Rd.</li>
                    </ul>
                  </div>

                  {/* Long Island */}
                  <div className="border-l-2 border-theme-accent pl-6">
                    <h4 className="font-serif text-xl text-theme-accent mb-2">From Long Island</h4>
                    <span className="text-xs uppercase tracking-widest opacity-60 block mb-3">Via Throgs Neck Bridge</span>
                    <ul className="list-disc list-inside space-y-1 font-sans text-sm font-light opacity-90">
                      <li>Take Throgs Neck Bridge to I-295 N, merge onto I-95 N.</li>
                      <li>In Rye, NY, take Exit 21 for I-287 West.</li>
                      <li>Keep right to take Exit 9N for the Hutchinson River Parkway North.</li>
                      <li>Continue North; it becomes the Merritt Parkway (CT-15) in CT.</li>
                      <li>Take Exit 28 (Round Hill Road) and turn Left off the exit.</li>
                      <li>Drive approx. 2 miles, then turn Right onto Old Mill Rd.</li>
                    </ul>
                  </div>

                  {/* NYC */}
                  <div className="border-l-2 border-theme-accent pl-6">
                    <h4 className="font-serif text-xl text-theme-accent mb-2">From New York City</h4>
                    <div className="space-y-4 font-sans text-sm font-light opacity-90">
                      <div>
                        <strong className="block font-medium mb-1">West Side Via Henry Hudson Pkwy:</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Henry Hudson Pkwy (NY-9A) N to Saw Mill River Pkwy N.</li>
                          <li>Exit 4 for Cross County Pkwy E, merge onto Hutchinson River Pkwy N.</li>
                          <li>Continue North into CT (Merritt Pkwy CT-15).</li>
                          <li>Take Exit 28 (Round Hill Rd), turn Left.</li>
                          <li>Drive 2 miles, Right on Old Mill Rd.</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="block font-medium mb-1">East Side Via FDR Drive:</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>FDR Drive N to RFK Bridge (Triborough).</li>
                          <li>Merge onto Hutchinson River Pkwy N.</li>
                          <li>Continue North into CT (Merritt Pkwy CT-15).</li>
                          <li>Take Exit 28 (Round Hill Rd), turn Left.</li>
                          <li>Drive 2 miles, Right on Old Mill Rd.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* New Jersey */}
                  <div className="border-l-2 border-theme-accent pl-6">
                    <h4 className="font-serif text-xl text-theme-accent mb-2">From New Jersey</h4>
                    <span className="text-xs uppercase tracking-widest opacity-60 block mb-3">Via George Washington Bridge</span>
                    <ul className="list-disc list-inside space-y-1 font-sans text-sm font-light opacity-90">
                      <li>Cross GWB (Upper Level suggested).</li>
                      <li>Follow signs for Cross Bronx Expy / I-95 N.</li>
                      <li>Take exit for Hutchinson River Pkwy N toward New England.</li>
                      <li>Continue North into CT (Merritt Pkwy CT-15).</li>
                      <li>Take Exit 28 (Round Hill Road) and turn Left off the exit.</li>
                      <li>Drive approx. 2 miles, then turn Right onto Old Mill Rd.</li>
                    </ul>
                  </div>

                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Travel;