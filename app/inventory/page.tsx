import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Inventory() {
  return (
    <>
      <NavBar />
      <main className="pt-24 min-h-screen flex">
        {/* Sidebar Filter: The Hybrid Monolith */}
        <aside className="w-80 bg-surface-container-low sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto p-8 border-r border-outline-variant/15">
          <div className="space-y-12">
            <header>
              <h2 className="text-2xl text-primary mb-2 font-headline">Refine Explorer</h2>
              <div className="h-1 w-12 gilt-gradient"></div>
            </header>
            
            {/* Status Filter */}
            <section className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-tertiary/60">Unit Status</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary"></div>
                  </div>
                  <span className="text-sm font-medium">Available</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                  <span className="text-sm font-medium opacity-60">Reserved</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                  <span className="text-sm font-medium opacity-60">Sold</span>
                </label>
              </div>
            </section>
            
            {/* Configuration Filter */}
            <section className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-tertiary/60">Layout Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-4 py-3 bg-surface-container-highest text-xs font-bold uppercase tracking-widest border-b-2 border-primary text-primary">Penthouse</button>
                <button className="px-4 py-3 bg-surface-container-highest text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-outline transition-colors">Apartment</button>
              </div>
            </section>
            
            {/* Price Range Slider Mock */}
            <section className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-tertiary/60">Investment Range</label>
              <div className="space-y-4">
                <div className="h-0.5 w-full bg-outline-variant relative">
                  <div className="absolute left-1/4 right-1/4 h-full gilt-gradient"></div>
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary"></div>
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary"></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold tracking-widest text-primary">
                  <span>$2.5M</span>
                  <span>$12.0M</span>
                </div>
              </div>
            </section>
            
            <button className="w-full bg-surface-container-highest py-4 text-xs font-extrabold uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-colors">
              Reset All Filters
            </button>
          </div>
        </aside>

        {/* Main Explorer Content */}
        <section className="flex-1 bg-surface-container-lowest p-12 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <header className="mb-16 flex justify-between items-end">
              <div className="space-y-4">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Current Selection</span>
                <h1 className="text-5xl tracking-tight font-headline">The 50th Floor Collection</h1>
                <p className="text-tertiary/60 font-medium max-w-xl">Curated residential units featuring expansive glass facades and uninhibited 270-degree views of the metropolitan skyline.</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xs font-bold tracking-[0.2em] opacity-40">SORT BY</span>
                <select className="bg-transparent border-none text-primary font-bold uppercase tracking-widest text-xs focus:ring-0 cursor-pointer">
                  <option>Price: High to Low</option>
                  <option>Size: Largest First</option>
                  <option>Status: Available</option>
                </select>
              </div>
            </header>

            {/* Inventory Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Inventory Card 1 */}
              <div className="group bg-surface-container-low hover:bg-surface-container transition-colors p-8 relative">
                <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-[10px] font-bold text-on-primary uppercase tracking-widest z-10">
                  Available
                </div>
                <div className="aspect-[4/5] bg-surface-container-highest mb-8 overflow-hidden">
                  <img alt="Modern penthouse interior" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0M1whZ1uoVWN2VbgdvvCPdGMbNhr5PCFzPMfNxkKYwGoC4JSvyetdjkYUBvEjjYbBs7fAMl4_UaMugf6nTMx612FOEKDzDT1nP3mo-IRNVEDNztqeL0Z8ik5tO5MkBBHUAGZCFm0cZBo1rOFttS5-lGjbfS6HmDn8vllPArosWZfaW5P8_pqw-tKEZBGKE9zoWucDJtTkKcb_qaCk3yY_Ttpl6NJmTFWsFVAEs1nsE5Qmku3Lr1qgDV8qpdphT3A-0mManAQdALA"/>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl mb-1 font-headline">The Zenith Penthouse</h3>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Unit 5001 • North-East Wing</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-body font-bold text-primary">$8,450,000</p>
                      <p className="text-[10px] font-bold opacity-40 tracking-widest uppercase">Investment value</p>
                    </div>
                  </div>
                  <div className="flex border-t border-outline-variant/15 pt-6 justify-between items-center">
                    <div className="flex space-x-8">
                      <div className="text-center">
                        <p className="text-lg font-bold">4</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Beds</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">4.5</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Baths</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">4,200</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Sq. Ft.</p>
                      </div>
                    </div>
                    <button className="w-12 h-12 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Inventory Card 2 */}
              <div className="group bg-surface-container-low hover:bg-surface-container transition-colors p-8 relative">
                <div className="absolute top-0 right-0 bg-tertiary px-4 py-1 text-[10px] font-bold text-on-tertiary uppercase tracking-widest z-10">
                  Reserved
                </div>
                <div className="aspect-[4/5] bg-surface-container-highest mb-8 overflow-hidden">
                  <img alt="Sleek modern sky villa bedroom" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrMNTA6anAFNKWJtco5u8MidItaN50sjEwb3nvdihaifbp2dUmP87L0oB4zISEEPVEV6RqMCvg6eC0p5IRmzZmIZ36fO8CMeugPXzRsAiH8DF1dDr_3Uh2qgL2zP3Zw3XUgx5t3-GV48A55WujR2HiMrSyXkb02VY-yiAmZ-jQCrQRx-rkHOAafygHs50RDAGMRrB2kLs_SVofESKAF5kP3ITESTQUn4XSRxdLLczxsaVP6iWtnvblwo6BSIq9BpYOP-1HSnA5tY"/>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl mb-1 font-headline">Obsidian Sky Villa</h3>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Unit 5004 • South Wing</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-body font-bold text-primary">$6,200,000</p>
                      <p className="text-[10px] font-bold opacity-40 tracking-widest uppercase">Investment value</p>
                    </div>
                  </div>
                  <div className="flex border-t border-outline-variant/15 pt-6 justify-between items-center">
                    <div className="flex space-x-8">
                      <div className="text-center">
                        <p className="text-lg font-bold">3</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Beds</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">3</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Baths</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">3,550</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Sq. Ft.</p>
                      </div>
                    </div>
                    <button className="w-12 h-12 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Inventory Card 3 */}
              <div className="group bg-surface-container-low hover:bg-surface-container transition-colors p-8 relative">
                <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-[10px] font-bold text-on-primary uppercase tracking-widest z-10">
                  Available
                </div>
                <div className="aspect-[4/5] bg-surface-container-highest mb-8 overflow-hidden">
                  <img alt="Modern living room with terrace" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMQa9xbXw2JTodyV7oFQc1bPXLxIVpN8rb39n7C_NU-eI5GJES5pI44scg0wx6_aNTfc-VQxvAbvEalnAq4vSwUZXq8RJm10KBOgYfh89zucCaZz-Gw9tHyO1ta5CN5tAx8ugVaNSIN3-gTY_qdoLOfpd5BqPcGaaBw5U95ezbBMNnrO2r3qr2mhv9n2in7kH0fAF7yBHGaOaYr0LfJ59IqPcAS0vOfO0tMXbor29o62aZZTMy5ampEGR0QJtrd0Z_LV-ZCoDaWVY"/>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl mb-1 font-headline">The Gilt Residence</h3>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Unit 5012 • West Wing</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-body font-bold text-primary">$4,800,000</p>
                      <p className="text-[10px] font-bold opacity-40 tracking-widest uppercase">Investment value</p>
                    </div>
                  </div>
                  <div className="flex border-t border-outline-variant/15 pt-6 justify-between items-center">
                    <div className="flex space-x-8">
                      <div className="text-center">
                        <p className="text-lg font-bold">2</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Beds</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">2.5</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Baths</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">2,400</p>
                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Sq. Ft.</p>
                      </div>
                    </div>
                    <button className="w-12 h-12 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Placeholder/Loading State */}
              <div className="border border-outline-variant/15 p-8 flex flex-col items-center justify-center space-y-4 opacity-30">
                <span className="material-symbols-outlined text-4xl">architecture</span>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">More Units Loading</p>
              </div>
            </div>

            {/* Pagination/Load More */}
            <div className="mt-24 flex flex-col items-center space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-outline-variant/30"></div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-tertiary">EXPLORE MORE COLLECTIONS</span>
                <div className="w-12 h-[1px] bg-outline-variant/30"></div>
              </div>
              <button className="gilt-gradient text-on-primary px-16 py-5 font-extrabold uppercase tracking-[0.3em] text-xs hover:shadow-[0_0_30px_rgba(233,193,118,0.2)] transition-all active:scale-95">
                Load Floor 49
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
