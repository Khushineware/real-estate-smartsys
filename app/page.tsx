import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" data-alt="vibrant luxury modern mansion at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNDt7oOREXZAOLkI1bCce6MNlR4NnnQPR5MLaB08Kw_q4TMmF97xgLK91zo3_-kWEsjm4w6SqF8lNaVZ6AqXiy_a6SsY2eH_urH8Oi_S9LGur3Eo2AzzLXZ4QNfd_eRHXjA3ArzNR1CzE_eEhVdYTiAIKJxb-C331izbC3GjpE9dpoCXGW8vavmcWFKUkO7FVkBfWJ6s98RAP-Djbtj1kj3gqQwdgoxu1mvL8p4jmwOMRmNLwRkScfxgFVNLfxduRJ2kWTUr7yjg0" />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1920px] mx-auto px-12 grid grid-cols-12 gap-16 items-center">
            <div className="col-span-12 lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <span className="text-primary font-label uppercase tracking-[0.4em] text-xs font-bold block">The Pinnacle of Living</span>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-headline font-bold leading-none tracking-tighter text-on-background">Redefining <br /> <span className="text-tertiary italic">Luxury Living</span></h1>
                <p className="text-on-surface-variant max-w-xl text-xl leading-relaxed opacity-90">Experience an architectural masterpiece where the emerald canopy of nature meets the precision of contemporary monolithic design.</p>
              </div>
              <div className="flex flex-wrap gap-6">
                <button className="gold-shimmer px-12 py-5 text-on-primary font-bold uppercase tracking-[0.2em] text-xs hover:brightness-110 transition-all">Book Site Visit</button>
                <button className="border border-primary text-primary px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary/10 transition-all">Explore Details</button>
              </div>
            </div>
            {/* Floating Enquiry Form */}
            <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
              <div className="bg-surface-container-low/90 p-10 backdrop-blur-md border border-outline-variant/10">
                <h3 className="font-headline text-2xl mb-8 text-primary uppercase tracking-wider">Priority Registration</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2">Full Name</label>
                    <input className="w-full bg-surface-container-highest border-b border-outline focus:border-primary px-0 py-3 text-on-surface focus:ring-0 transition-colors placeholder:text-outline-variant/40" placeholder="e.g. Julian Vane" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2">Electronic Mail</label>
                    <input className="w-full bg-surface-container-highest border-b border-outline focus:border-primary px-0 py-3 text-on-surface focus:ring-0 transition-colors" placeholder="julian@example.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2">Interest</label>
                    <select className="w-full bg-surface-container-highest border-b border-outline focus:border-primary px-0 py-3 text-on-surface focus:ring-0 transition-colors appearance-none">
                      <option className="bg-surface">Select Configuration</option>
                      <option className="bg-surface">3 BHK Premium</option>
                      <option className="bg-surface">4 BHK Duplex</option>
                      <option className="bg-surface">5 BHK Penthouse</option>
                    </select>
                  </div>
                  <button className="w-full gold-shimmer text-on-primary py-5 font-bold uppercase tracking-[0.2em] text-xs mt-4">Request Portfolio</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1920px] mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-y border-outline-variant/15 py-20">
              <div className="space-y-2">
                <span className="text-outline font-label text-[10px] tracking-[0.2em] uppercase">Acres of Greens</span>
                <h4 className="font-headline text-4xl text-primary">12+ <span className="text-lg font-body uppercase tracking-tighter text-on-surface-variant">Acres</span></h4>
              </div>
              <div className="space-y-2">
                <span className="text-outline font-label text-[10px] tracking-[0.2em] uppercase">Exclusive Units</span>
                <h4 className="font-headline text-4xl text-primary">420 <span className="text-lg font-body uppercase tracking-tighter text-on-surface-variant">Homes</span></h4>
              </div>
              <div className="space-y-2">
                <span className="text-outline font-label text-[10px] tracking-[0.2em] uppercase">Possession Date</span>
                <h4 className="font-headline text-4xl text-primary">Q4 2026</h4>
              </div>
              <div className="space-y-2">
                <span className="text-outline font-label text-[10px] tracking-[0.2em] uppercase">Open Spaces</span>
                <h4 className="font-headline text-4xl text-primary">85%</h4>
              </div>
            </div>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-6 space-y-8">
                <span className="text-primary font-label uppercase tracking-[0.3em] text-xs font-bold">Curated Excellence</span>
                <h2 className="text-6xl font-headline font-bold leading-tight">An Observatory of <br /><span className="text-tertiary italic">Refined Aesthetics</span></h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-on-surface-variant text-xl leading-relaxed opacity-90 font-light">The Emerald Observatory is more than a residence; it's a testament to the art of fine living. Nestled within 12 acres of curated landscapes, each unit is designed to maximize panoramic views and natural light, creating a seamless connection between the interior and the horizon.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-32 bg-surface-container-lowest">
          <div className="max-w-[1920px] mx-auto px-12">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-6xl font-bold text-on-background leading-tight">THE SIGNATURE <br /><span className="text-primary italic">TOUCH</span></h2>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed opacity-80">Unrivaled features designed by world-renowned visionaries, blending raw strength with minimalist tranquility.</p>
              </div>
              <div className="hidden lg:block border-l border-outline-variant/30 pl-12 pb-2">
                <span className="text-primary font-label text-6xl font-bold opacity-10 uppercase">H01</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-outline-variant/15">
              <div className="p-12 border-r border-outline-variant/15 space-y-6 group hover:bg-surface-container-low transition-colors duration-500">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <h3 className="font-headline text-2xl text-on-background">Brutalist Zen</h3>
                <p className="text-on-surface-variant leading-relaxed opacity-70 text-sm">A fusion of raw architectural strength and minimalist tranquility, designed for longevity.</p>
              </div>
              <div className="p-12 border-r border-outline-variant/15 space-y-6 group hover:bg-surface-container-low transition-colors duration-500">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span>
                <h3 className="font-headline text-2xl text-on-background">Eco-Elite Tech</h3>
                <p className="text-on-surface-variant leading-relaxed opacity-70 text-sm">Smart energy harvesting and biological filtration systems integrated into the structure.</p>
              </div>
              <div className="p-12 border-r border-outline-variant/15 space-y-6 group hover:bg-surface-container-low transition-colors duration-500">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <h3 className="font-headline text-2xl text-on-background">Bio-Metric Shield</h3>
                <p className="text-on-surface-variant leading-relaxed opacity-70 text-sm">Seven-tier security protocols utilizing non-intrusive biometrics for ultimate peace.</p>
              </div>
              <div className="p-12 space-y-6 group hover:bg-surface-container-low transition-colors duration-500">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
                <h3 className="font-headline text-2xl text-on-background">Wellness Core</h3>
                <p className="text-on-surface-variant leading-relaxed opacity-70 text-sm">Private concierge spa services and thermal pools reserved exclusively for residents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration Section */}
        <section className="py-32 bg-tertiary">
          <div className="max-w-[1920px] mx-auto px-12">
            <div className="text-center mb-24">
              <h2 className="font-headline text-5xl font-bold text-on-tertiary uppercase tracking-tighter mb-4">Living Configurations</h2>
              <div className="w-24 h-1 bg-on-tertiary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* 3BHK */}
              <div className="bg-surface-container-lowest p-10 flex flex-col space-y-8">
                <div className="aspect-[16/10] overflow-hidden">
                  <img className="w-full h-full object-cover hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAca3C89UpBQmmz29gQhxEJnQjWDEu8wJRDJ8qBRSylDCSeokk09d8lQZSkD38dmUdCq-Zyz42_kO-mg6RbEGRaaQr9a8JNs7z423zlhjDzKbscVuC963iSorOgbSqwYdZm9Y1TWGvCJLFJL5gtjqA8-0durRnyx1CnUxJ6-RL0SSgopfZirI2blGTuwFAV8Bu7DzCeAgQ1JM2yh9vsD_sPyfQdcZPZTfkjJE7WD9d167CVaOOmsKZCrYxyzE8IPWFMt3_2DK991aA" />
                </div>
                <div className="space-y-6">
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary-container font-label text-[10px] uppercase tracking-widest font-bold">The Premier</span>
                  <div className="flex justify-between items-center">
                    <h4 className="font-headline text-3xl text-on-background">3 BHK Premium</h4>
                    <span className="text-primary font-bold text-xs">2,450 SQ.FT</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/30 pt-6">Spacious living areas with expansive glass facades and a signature wrap-around terrace.</p>
                  <button className="w-full border border-primary text-primary py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-all duration-300">View Floorplan</button>
                </div>
              </div>
              {/* 4BHK */}
              <div className="bg-surface-container-lowest p-10 flex flex-col space-y-8">
                <div className="aspect-[16/10] overflow-hidden">
                  <img className="w-full h-full object-cover hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKCvVYR4UxsowBpMB4L2Nff23sy2KUkGPfNERqQLgN3ZW_nsqijLo4o_2FsTjg-6v5anb6nCKsvKgCS9pCrAHyXfYI6K7SX8oeR1Fq-tDbKsM3kZBYWiHDUyIctqtlojiU8PkDx8PevtAsI2TIi8K612vNeSuNzqzryAHSMpGN6YRaONtsRhmzimUmqI5xY3vJ9iEYErKCMCVTK_ExIlXBI-ayxxhcRq2a4FqaLK8ndGmF21JXLsoVMnksLd-WqykR37LECivGsl0" />
                </div>
                <div className="space-y-6">
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary-container font-label text-[10px] uppercase tracking-widest font-bold">The Duplex</span>
                  <div className="flex justify-between items-center">
                    <h4 className="font-headline text-3xl text-on-background">4 BHK Duplex</h4>
                    <span className="text-primary font-bold text-xs">3,800 SQ.FT</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/30 pt-6">Two-level residence with internal staircase, double-height ceiling, and executive study.</p>
                  <button className="w-full border border-primary text-primary py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-all duration-300">View Floorplan</button>
                </div>
              </div>
              {/* 5BHK */}
              <div className="bg-surface-container-lowest p-10 flex flex-col space-y-8">
                <div className="aspect-[16/10] overflow-hidden">
                  <img className="w-full h-full object-cover hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnCS-MrkcQyBdn94QCu-A1HNj_3fEQRMYwh0wH-IfzLu1r6Kb5PLFV7hJM4UFMJvcyZs1Q9i0QiAPgEgKbkAJDmS8lU2WhfkPyw1rLqLcN5bgUWOK1f2Oo6bobx7uUDUE_R0g0TwfwyxLkesaVNyhJF_B24j0_paOYSftdXR2ZZmP4-uYxsMbWzdCcxRRo5oNxqrRPQyzvvOKJy_KgmfTYxs9oNHcXNMg72mRFV-ah8HC0J8MAzF2_kHQyRe3mC57SNYFQ8tc7s-Y" />
                </div>
                <div className="space-y-6">
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary-container font-label text-[10px] uppercase tracking-widest font-bold">The Penthouse</span>
                  <div className="flex justify-between items-center">
                    <h4 className="font-headline text-3xl text-on-background">Sky Penthouse</h4>
                    <span className="text-primary font-bold text-xs">5,200 SQ.FT</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/30 pt-6">The crown jewel with private plunge pool, wrap-around deck, and 360-degree views.</p>
                  <button className="w-full border border-primary text-primary py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-all duration-300">View Floorplan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-32 bg-surface-container-lowest">
          <div className="max-w-[1920px] mx-auto px-12">
            <div className="text-center mb-24 space-y-4">
              <span className="text-primary font-label uppercase tracking-widest text-xs font-bold">World-Class Facilities</span>
              <h2 className="text-5xl font-headline font-bold text-on-background uppercase tracking-tighter">Life Above the Ordinary</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto lg:h-[800px]">
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" data-alt="vibrant infinity edge swimming pool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi075jupFa9v3kYXo8tadIFdFxQpSf9PIc1kfD2vaXOHjVaAWg5gDH25OwOgNMKcX2z-xGCmIvpcM8rUnne29gLgEAgE8ohk5FV5ZPxa_0BH_OoM5WFefcmWP2RZofLnO1zm4daB9NpZqGkxk1BQgFmY36B3MlndUMOWY1oYMLjMvLeW36IgBmv2NymSNy3jrIYstLL7mn-Ry4C3KO9JxWLrFIMME4VhL8ik-LeOZCP3gHm7-OtEF1PpjEO0xLlHsR5A7gjMRW2WI" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="material-symbols-outlined text-4xl mb-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>pool</span>
                  <h4 className="text-3xl font-headline font-bold italic">Horizon Infinity Pool</h4>
                </div>
              </div>
              <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" data-alt="vibrant luxury home gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWcXgB2yVD2FyPHZQb2ZY1NkoNndm1VN-5SYRXOCLD38SprLaEItcvy0pfC3YrutSWZJSpm8NjSU4YCP-hQ-ck3G18fzpyQgrCJls_epYWjOUAyHUB7iNplB2IXAi5_0sOVQgH_YeTzD1CmCFDYxY0_jkBfHaCnG9jIXhDN4c-L8Zl6ayLvjzI7Jv-8IuxAHsJOR87ZYwejXrlI80JM6jG-vfLjNgKX6brjUNcWh3awOTBrNYDx57DR_E80WQ3B28VFguUUkuj088" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="material-symbols-outlined text-2xl mb-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
                  <h4 className="text-xl font-headline font-bold italic">TechnoGym Studio</h4>
                </div>
              </div>
              <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" data-alt="elegant residents lounge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLVBjpJrFjDENRLHW78O0J_Wimnqb_0tofQKGD9f__6q70-8zeXE4N7xZxd36nkeEDXqe5VaQdFFvCx_S3Lhyom4bbfyPbM_QmdAKXpcwtvNlQD5S95prbxhDN8qQjed8t57odv1fNjKQex-LFr2861Ni04Zw5ihLaOPQ47aE09BCWHMu2C8qiZcdkPD90hT7l-pcjly2kiMJjvAM7E9j99WF5j63UpKIu3EYnph9b2IP35AjBpkY-M6T2h8NU-79ls2xPfPEHLk" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="material-symbols-outlined text-2xl mb-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_cafe</span>
                  <h4 className="text-xl font-headline font-bold italic">Sky Lounge & Cafe</h4>
                </div>
              </div>
              <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" data-alt="private cinema room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPn0rBT65aM0k2qHnqETz2f55pn24h7rVa_7K4XCjOAm6SJ2VfA-mXs7WUDKjeOBsRCiSQGfy-qveT5SmEDtQ5t4vF4NwfgpJiiYWlR-KSXxLsL67Wyw7Ol9alFwIayWScUqzZV8KAKqBKeSjnvYee2gUyYddbXHqvES5bVfGj-8ztwtbeEKC-gL4-RiHM_O5-a5hlDkLY1B1IQXy-A6M2LQLwLAIs6URIpoMtomPzaVlKyx_rqnOX-i1NaD3rB-H3A4iOsDsDbVM" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="material-symbols-outlined text-3xl mb-3 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>movie</span>
                  <h4 className="text-2xl font-headline font-bold italic">Private Dolby Cinema</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1920px] mx-auto px-12">
            <div className="mb-16 space-y-4">
              <span className="text-primary font-label uppercase tracking-widest text-xs font-bold">Visual Journey</span>
              <h2 className="text-5xl font-headline font-bold text-on-background uppercase tracking-tighter">The Gallery</h2>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              <div className="overflow-hidden group">
                <img className="w-full transition-all duration-700 cursor-pointer hover:scale-105" data-alt="architectural close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrA499cEqt8J7NXVIypwMR6mDQWzIkcBbmPdrk9NEgw7xBp-ampzGHT3leykY6iPTHFMr5rPpX0dt69L446hYQYqH0onC5D0wwArlvk-ydl5Cu1cxGwY7i-2DcImJ9byFJaqebVvyyi8jaiWngA4lYpnO8543fFLQIRi2YD8EyKGSFeqU9FwDwJol1Bb9WY06OTRK_erZbjBON6CeNXgXRC21V5FdKaCG-0o0S4hUYNcbeO3pzuhGpHnoJMJka6Uwl4NvniVGXTw4" />
              </div>
              <div className="overflow-hidden group">
                <img className="w-full transition-all duration-700 cursor-pointer hover:scale-105" data-alt="luxury bathroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl1GGOo3sV-3D3Nx6v8ShtBt53LrRinUSISrVGIK-q4m9mNoFWOLWFloL3odljIs-FYW79VAuRLJ55YQZ30OfnN8pnMWBqOAqPOPZCi0MEUWGHN4UuHP0Dj7Rq3HX-D3rvWT86nyC9kINRvOb_EoLAeeaZDq2EaaPEHYgrNLriNnpicXFJatt3ba4aH7NOkri3FBoUxEawW7n_YPIDiYzVcgdPjeO4Fq3gO6-cm6QupLxC5wepH-FaSNqcc8uA8YrNYL48KWdnaVE" />
              </div>
              <div className="overflow-hidden group">
                <img className="w-full transition-all duration-700 cursor-pointer hover:scale-105" data-alt="minimalist dining area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO-dtLp_0VywInN8qxfzJbeRX3ZiFXd5YmfSkKFdUmHxMHiUqSKZ-2-dZrmbFpR2jorS3pTnJV8ejoXsJ3eSm4iM7lt_1r8e7zqKdKUd7yyMn9A0FmhRcKgQfpfsaH38GlOgVdHu-17etbJdwW8A_BiMoHCIncmy-3biS2O_f8boVKDhntVgU-B_2DShEPV9ES0C02uRU5UrAIsR5A1Y_Lu8L3elxFHFlbS182KD9VMpHWGUYQt4LgzM4Z5KRTy0wk7_OBIqfkklE" />
              </div>
              <div className="overflow-hidden group">
                <img className="w-full transition-all duration-700 cursor-pointer hover:scale-105" data-alt="grand entrance lobby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaDm0XMVJ1RVIleANr0CdzePPiXJYbhn93p8cDl_trlRBu0tMthADNgtp_deNjXnBQMFLBkatIPwoQnQi3GrLSOe3MAUKSwOlFI5RZS7Hhkg2oyfdTyZlRfFqAXOSNtJi1QS3OuUHa1v30vCep8tWhSVv0TjXE7vBzfe7wzQnUCpo8eMX-jnoA20kyLrmvmqo9S1R0CmdhQSjr4r49cmEBoD_DQGnmwGCnz25rtdIfzj5NTudNehlBdZuFAN3-QAgHdQ4FTvHnmKo" />
              </div>
              <div className="overflow-hidden group">
                <img className="w-full transition-all duration-700 cursor-pointer hover:scale-105" data-alt="aerial drone view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT31hIQqHZ5PMV5lJbgTNqtjVsUGhx6etGnwM-Mi3fPrDaf0NFVT8ylNQoTbipBlkUXoXPm8wNHWRk3P8de7PdRX30jYQHd1DCTDP7ofVK-JXOPQMFSeAOWWS0Npwo_TJjTcKZETWFdGj48LCAoWlq1Yb9LVboMEYjvR9TxX_TyhpQT8CtYnAlFFVMhi74r0xbd15Dl5l70-gJD1OuZCQRcX9RV6o3guWFSZM65j_9i8H-AWsu9mKk7FR4xpzrJQV7VPVbmGpQZiw" />
              </div>
              <div className="overflow-hidden group">
                <img className="w-full transition-all duration-700 cursor-pointer hover:scale-105" data-alt="night tennis court" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeEv8OXYlyGPSiIR9j2lrWz9SBcDrb4x4zG_x6a64xZ08orErHUbHqx9t6Davh4NoTxhCpENAbZN0waDcFUX7CGvBmgQYs7O9d3IftV0cvRV0UjOsGTEFKKXz7ZgsPCvc5nb66NVflAxR8Vh3bI1rPXa0pXOs5w2Z0XWimCv3uqe0d3jbQHj5bBRlji4oLcFkT5EonSZOWk-z7KmqUH4bUDh64wOJuptBhJtGwNGGeVjSk5HwTpB2n7sJ1kTTTqQh3wU9BQIO9-0c" />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-surface py-32 border-t border-outline-variant/10">
          <div className="max-w-[1920px] mx-auto px-12 grid grid-cols-12 gap-16 items-center">
            <div className="col-span-12 lg:col-span-4 space-y-12">
              <div className="space-y-4">
                <span className="text-primary font-label text-xs tracking-[0.4em] uppercase font-bold">The District</span>
                <h2 className="font-headline text-6xl font-bold text-on-background leading-[0.9] tracking-tighter">EPICENTER OF <br /><span className="text-tertiary italic">INFLUENCE</span></h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-6 border-b border-outline-variant/15 pb-8">
                  <span className="text-primary font-headline text-2xl font-bold">01</span>
                  <div>
                    <h5 className="text-on-background font-bold uppercase tracking-widest text-xs mb-1">Financial Quarter</h5>
                    <p className="text-on-surface-variant text-sm">4 minutes transit</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 border-b border-outline-variant/15 pb-8">
                  <span className="text-primary font-headline text-2xl font-bold">02</span>
                  <div>
                    <h5 className="text-on-background font-bold uppercase tracking-widest text-xs mb-1">Royal Botanic Gardens</h5>
                    <p className="text-on-surface-variant text-sm">6 minutes walk</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 border-b border-outline-variant/15 pb-8">
                  <span className="text-primary font-headline text-2xl font-bold">03</span>
                  <div>
                    <h5 className="text-on-background font-bold uppercase tracking-widest text-xs mb-1">International Terminal</h5>
                    <p className="text-on-surface-variant text-sm">18 minutes transit</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="h-[650px] w-full border border-outline-variant/15 relative bg-surface-container overflow-hidden">
                <img className="w-full h-full object-cover opacity-90" data-alt="detailed luxury emerald and gold map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOvSwlZZiOwQu38o8dzc4sO8_GGXkZNjWTN5p3QqoXroPDgf66nIFRMgmhqZ60lUdQfEu9WbIpWKCUTdYwDWUE-rJAQv_lnAAa4WDuxIKofi70EbERDLYV0SxfmxeOG1wyW6uccpX2wOush6UKDiZALGS6knkEiW_jEF9_kDn2_n7FNYRdcCcBuh9NAjQB1LrrG284uTdZA8XikWd3iiA77JTf_SrFuccNDQlrrt8tUoTvbzzfkgL88Jtzaz3BOn7Cc5cQ2zgto4I" />
                <div className="absolute inset-0 bg-[#0e0e0e]/30 mix-blend-multiply"></div>
                {/* Landmark Highlights */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary/40 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(233,193,118,0.8)]"></div>
                </div>
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-tertiary rounded-full shadow-[0_0_10px_rgba(211,197,173,0.5)]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary-container rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure Banner */}
        <section className="py-24 px-12">
          <div className="max-w-[1920px] mx-auto gold-shimmer p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter text-on-primary">The Digital <br /><span className="italic">Invitation</span></h2>
              <p className="text-on-primary/80 text-xl font-light">Defining the urban silhouette with absolute architectural purity. Receive the full brief and floor plans directly.</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-on-primary text-primary px-16 py-6 font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform flex items-center gap-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                Download Portfolio
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Floating Contact */}
      <Link className="fixed bottom-12 right-12 z-50 gold-shimmer text-on-primary p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3" href="/booking">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        <span className="hidden md:block font-bold text-xs tracking-widest uppercase">Inquire Now</span>
      </Link>
    </>
  );
}

