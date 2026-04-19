import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Booking() {
  return (
    <>
      <NavBar />
      <main className="pt-32 min-h-[calc(100vh-100px)] flex flex-col items-center justify-center relative overflow-hidden bg-surface-container-lowest pb-20">
        {/* Abstract Background Shape */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-surface-container-highest blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4"></div>
        </div>

        {/* Booking Modal Overlay */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row bg-surface shadow-[0px_40px_100px_rgba(0,0,0,0.8)]">
          {/* Left Side: Visual Anchor (Colorful Cinematic Sunset) */}
          <div className="md:w-5/12 relative overflow-hidden bg-surface-container-lowest">
            <img alt="luxury modern architectural villa interior with dark charcoal marble walls, warm golden accent lighting, and floor-to-ceiling windows overlooking a vivid cinematic sunset sky with purple and orange hues" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO9IKbsEXN7A9r1Q3xA8qxPIW2hyTo8Cbv4OPdhu_P1yY6VFL8vpKz04FsgzG8n_hLUyGLLcQ0sW2HSzyo274_wcGC4GrJuTK9j3tCrpdGGagSVNuwcfpFI0ldoZZnQ90SzhsEwa0kj6V90JvYwK0AXesZNeTSdd6LaMiQZeNVPCe8JkVZVGAcpdrVDulIRgWElSxuKYGtqYe3iwR60zaIojvs5xxHIcq1upNxJDSSfs9o8KgUm7W4YRnuDlnOyMkDz9Z5MYnr0Uw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full">
              <span className="text-primary font-label text-xs tracking-[0.2em] uppercase mb-4 block">Selected Residence</span>
              <h2 className="font-headline text-4xl text-white mb-2 leading-none">The Obsidian Penthouse</h2>
              <p className="text-tertiary/70 text-sm font-light tracking-wide">Floor 84 | Unit 12A</p>
              
              <div className="mt-8 pt-8 border-t border-outline-variant/20 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-outline text-[10px] uppercase tracking-[0.15em] block mb-1">Area</span>
                  <span className="text-white font-medium">4,250 SQ. FT.</span>
                </div>
                <div>
                  <span className="text-outline text-[10px] uppercase tracking-[0.15em] block mb-1">Configuration</span>
                  <span className="text-white font-medium">4 BR / 5 BA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Interface (Gilt/Champagne) */}
          <div className="md:w-7/12 bg-tertiary p-12 md:p-16 text-on-tertiary">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="font-headline text-3xl mb-2">Schedule Private Viewing</h3>
                <p className="font-body text-sm text-on-tertiary/60 uppercase tracking-widest">Experience the monolith in person</p>
              </div>
              <button className="text-on-tertiary/40 hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            <form className="space-y-10">
              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="block font-headline text-xs uppercase tracking-[0.1em] text-on-tertiary/50 mb-3">Preferred Date</label>
                  <div className="flex items-center border-b-2 border-on-tertiary/20 focus-within:border-on-tertiary transition-all py-3">
                    <span className="material-symbols-outlined mr-3 text-on-tertiary/60">calendar_today</span>
                    <input className="bg-transparent border-none focus:ring-0 p-0 w-full font-body font-bold text-sm tracking-widest placeholder:text-on-tertiary/30 outline-none" placeholder="OCTOBER 24, 2024" type="text"/>
                  </div>
                </div>
                <div className="relative">
                  <label className="block font-headline text-xs uppercase tracking-[0.1em] text-on-tertiary/50 mb-3">Preferred Time</label>
                  <div className="flex items-center border-b-2 border-on-tertiary/20 focus-within:border-on-tertiary transition-all py-3">
                    <span className="material-symbols-outlined mr-3 text-on-tertiary/60">schedule</span>
                    <input className="bg-transparent border-none focus:ring-0 p-0 w-full font-body font-bold text-sm tracking-widest placeholder:text-on-tertiary/30 outline-none" placeholder="11:00 AM" type="text"/>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-8">
                <div className="relative">
                  <label className="block font-headline text-xs uppercase tracking-[0.1em] text-on-tertiary/50 mb-3">Full Legal Name</label>
                  <input className="bg-transparent border-b-2 border-on-tertiary/20 focus:border-on-tertiary focus:ring-0 w-full py-3 font-body font-bold text-sm tracking-widest placeholder:text-on-tertiary/30 outline-none" placeholder="ALEXANDER VANCE" type="text"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label className="block font-headline text-xs uppercase tracking-[0.1em] text-on-tertiary/50 mb-3">Email Address</label>
                    <input className="bg-transparent border-b-2 border-on-tertiary/20 focus:border-on-tertiary focus:ring-0 w-full py-3 font-body font-bold text-sm tracking-widest placeholder:text-on-tertiary/30 outline-none" placeholder="VANCE@MONOLITH.COM" type="email"/>
                  </div>
                  <div className="relative">
                    <label className="block font-headline text-xs uppercase tracking-[0.1em] text-on-tertiary/50 mb-3">Mobile Contact</label>
                    <input className="bg-transparent border-b-2 border-on-tertiary/20 focus:border-on-tertiary focus:ring-0 w-full py-3 font-body font-bold text-sm tracking-widest placeholder:text-on-tertiary/30 outline-none" placeholder="+1 (555) 000-0000" type="tel"/>
                  </div>
                </div>
              </div>

              {/* Additional Context */}
              <div className="relative">
                <label className="block font-headline text-xs uppercase tracking-[0.1em] text-on-tertiary/50 mb-3">Special Requirements</label>
                <textarea className="bg-transparent border-b-2 border-on-tertiary/20 focus:border-on-tertiary focus:ring-0 w-full py-3 font-body font-bold text-sm tracking-widest placeholder:text-on-tertiary/30 resize-none outline-none" placeholder="ADDITIONAL REQUESTS OR CONCIERGE NEEDS..." rows={2}></textarea>
              </div>

              {/* Submit Action */}
              <div className="pt-6 flex flex-col md:flex-row items-center gap-8">
                <button className="w-full md:w-auto bg-surface-container-lowest text-primary px-16 py-5 font-label font-extrabold uppercase tracking-[0.2em] text-xs hover:bg-surface-bright transition-all active:scale-[0.98] duration-300" type="button">
                  Confirm Appointment
                </button>
                <p className="text-[10px] text-on-tertiary/40 uppercase tracking-[0.1em] max-w-[200px] leading-relaxed">
                  Our concierge will contact you within 2 hours to verify security clearance.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Background Property Preview Hint */}
        <div className="mt-12 text-center opacity-40">
          <p className="font-headline text-sm tracking-[0.5em] uppercase text-outline">Excellence by Default</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
