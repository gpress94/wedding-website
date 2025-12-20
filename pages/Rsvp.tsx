import React, { useState } from 'react';

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState({
    guestNames: '',
    email: '',
    attend: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.attend) {
      alert("Please indicate if you will be attending.");
      return;
    }

    setStatus('submitting');

    // Google Form Action URL (using /formResponse for background submission)
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe8TcAzzOfc1vZOrPOKDBYKocQ2n4XVq6AM_XDhlfBlNuJgBQ/formResponse";
    
    // Create params for submission
    const submissionData = new URLSearchParams();
    
    // Map local fields to Google Form Entry IDs
    submissionData.append("entry.1498135098", formData.guestNames);
    submissionData.append("entry.1054628779", formData.email);
    
    // Map Attendance to "Yes" or "No"
    const attendanceValue = formData.attend === 'accepts' ? "Yes" : "No";
    submissionData.append("entry.877086558", attendanceValue);

    try {
      // Use no-cors mode to submit to Google Forms without browser blocking
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: submissionData.toString(),
      });

      // Because of no-cors, we can't read the response status, 
      // but if no network error occurred, we assume it went through.
      setStatus('success');
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-24 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="bg-white p-12 shadow-xl border border-theme-text/5 relative animate-fade-in-up">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-theme-text/30"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-theme-text/30"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-theme-text/30"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-theme-text/30"></div>
            
            <h2 className="font-script text-4xl mb-6 text-theme-text">Thank You!</h2>
            <p className="font-serif text-lg text-theme-text/80 mb-6">
              Your response has been received. We look forward to celebrating with you!
            </p>
            
            <button 
               onClick={() => {
                 setStatus('idle');
                 setFormData({ guestNames: '', email: '', attend: '' });
               }}
               className="text-xs font-sans uppercase tracking-[0.2em] text-theme-accent hover:text-theme-text underline underline-offset-4"
             >
               Submit another response
             </button>
          </div>
        </div>
      </section>
    );
  }

  if (status === 'error') {
     return (
       <section className="py-24 min-h-[60vh] flex items-center justify-center">
         <div className="max-w-xl mx-auto px-6 text-center">
           <div className="bg-white p-12 shadow-xl border border-red-200 relative">
             <h2 className="font-serif text-2xl mb-4 text-theme-text">Something went wrong</h2>
             <p className="font-sans text-sm text-theme-text/80 mb-6">
               We couldn't submit your RSVP. Please try again or contact us directly.
             </p>
             <button 
               onClick={() => setStatus('idle')}
               className="bg-theme-text text-white py-3 px-8 font-sans text-xs uppercase tracking-[0.2em]"
             >
               Try Again
             </button>
           </div>
         </div>
       </section>
     );
  }

  return (
    <section className="py-24 min-h-[60vh]">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-script text-5xl mb-8 text-theme-text">Rsvp</h2>
        <p className="font-sans text-sm tracking-widest mb-12 text-theme-text/80 uppercase">Please respond by September 1st</p>
        
        <div className="bg-white p-8 md:p-12 shadow-xl border border-theme-text/5 relative">
           {/* Decoration */}
           <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-theme-text/30"></div>
           <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-theme-text/30"></div>
           <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-theme-text/30"></div>
           <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-theme-text/30"></div>

           <form 
             className="space-y-6 text-left" 
             onSubmit={handleSubmit}
           >
             <div>
               <label htmlFor="guestNames" className="block text-xs font-sans uppercase tracking-widest text-theme-text/60 mb-2">Guest Name(s)</label>
               <input 
                 type="text" 
                 name="guestNames"
                 id="guestNames"
                 value={formData.guestNames}
                 onChange={handleChange}
                 required
                 placeholder="Jane & John Doe"
                 className="w-full bg-theme-bg/30 border-b border-theme-text/20 p-2 focus:outline-none focus:border-theme-text transition-colors font-serif text-lg placeholder:text-theme-text/20" 
               />
             </div>
             <div>
               <label htmlFor="email" className="block text-xs font-sans uppercase tracking-widest text-theme-text/60 mb-2">Email</label>
               <input 
                 type="email" 
                 name="email"
                 id="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 placeholder="jane@example.com"
                 className="w-full bg-theme-bg/30 border-b border-theme-text/20 p-2 focus:outline-none focus:border-theme-text transition-colors font-serif text-lg placeholder:text-theme-text/20" 
               />
             </div>
             <div>
               <label className="block text-xs font-sans uppercase tracking-widest text-theme-text/60 mb-2">Will you be attending?</label>
               <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="attend" 
                      value="accepts"
                      checked={formData.attend === 'accepts'}
                      onChange={handleChange}
                      className="accent-theme-text cursor-pointer" 
                    />
                    <span className="font-serif group-hover:text-theme-accent transition-colors">Joyfully Accepts</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="attend" 
                      value="declines"
                      checked={formData.attend === 'declines'}
                      onChange={handleChange}
                      className="accent-theme-text cursor-pointer" 
                    />
                    <span className="font-serif group-hover:text-theme-accent transition-colors">Regretfully Declines</span>
                  </label>
               </div>
             </div>
             
             <button 
               type="submit"
               disabled={status === 'submitting'}
               className="w-full bg-theme-text text-white py-4 mt-8 font-sans text-xs uppercase tracking-[0.2em] hover:bg-theme-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
             >
               {status === 'submitting' ? 'Submitting...' : 'Submit RSVP'}
             </button>
           </form>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;