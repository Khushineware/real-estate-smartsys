import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full border-t border-outline-variant/15">
      <div className="flex flex-col items-center gap-8 w-full py-16 px-12 max-w-[1920px] mx-auto">
        <div className="font-headline text-xl text-primary-container tracking-tighter uppercase font-bold">THE ARCHITECTURAL MONOLITH</div>
        <div className="flex flex-wrap justify-center gap-12 font-manrope text-[10px] uppercase tracking-[0.2em] font-bold">
          <Link className="text-tertiary hover:text-primary transition-opacity opacity-100 hover:opacity-70" href="#">Privacy Policy</Link>
          <Link className="text-tertiary hover:text-primary transition-opacity opacity-100 hover:opacity-70" href="#">Terms of Service</Link>
          <Link className="text-tertiary hover:text-primary transition-opacity opacity-100 hover:opacity-70" href="#">Accessibility</Link>
        </div>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity text-2xl">language</span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity text-2xl">share</span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity text-2xl">photo_camera</span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity text-2xl">mail</span>
        </div>
        <div className="text-tertiary font-manrope text-[10px] tracking-[0.3em] text-center uppercase opacity-50">
          © {new Date().getFullYear()} THE ARCHITECTURAL MONOLITH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
