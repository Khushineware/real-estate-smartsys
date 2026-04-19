import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-[#131313]/90 dark:bg-[#0e0e0e]/90 border-none transition-all duration-300">
      <div className="flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto">
        <Link href="/" className="font-noto-serif text-2xl font-black tracking-tighter text-primary uppercase">
          ESTATE
        </Link>
        <div className="hidden md:flex gap-8 items-center font-noto-serif text-[11px] uppercase tracking-widest font-bold">
          <Link className="text-primary border-b-2 border-primary pb-1 transition-transform scale-100 hover:scale-[1.02]" href="/">
            OVERVIEW
          </Link>
          <Link className="text-[#e2e2e2] opacity-80 hover:text-primary transition-all duration-300 scale-100 hover:scale-[1.02]" href="/inventory">
            EXPLORE
          </Link>
          <Link className="text-[#e2e2e2] opacity-80 hover:text-primary transition-all duration-300 scale-100 hover:scale-[1.02]" href="/booking">
            BOOKING
          </Link>
          <a className="text-[#e2e2e2] opacity-80 hover:text-primary transition-all duration-300 scale-100 hover:scale-[1.02]" href="#">AMENITIES</a>
          <a className="text-[#e2e2e2] opacity-80 hover:text-primary transition-all duration-300 scale-100 hover:scale-[1.02]" href="#">GALLERY</a>
          <a className="text-[#e2e2e2] opacity-80 hover:text-primary transition-all duration-300 scale-100 hover:scale-[1.02]" href="#">ABOUT US</a>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/booking">
            <button className="gold-shimmer px-8 py-2.5 text-on-primary text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all active:scale-95 duration-150">INQUIRE</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
