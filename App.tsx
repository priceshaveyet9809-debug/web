import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Instagram, Facebook, ArrowRight, Camera, Home, Mail, MessageCircle, Sparkles, Zap, ShieldCheck, Clock, Layers, MapPin } from 'lucide-react';
import { BrandLogo } from './components/BrandLogo';
import VideoMarquee from './components/VideoMarquee';
import PackageCard from './components/PackageCard';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import { AIChat } from './components/AIChat';
import { ServiceItem } from './types';
import { LONG_FORM_VIDEOS, SHORT_FORM_VIDEOS, PACKAGES, CONTACT_INFO } from './data';

// --- SUB-COMPONENT: BEFORE/AFTER SLIDER ---
const BeforeAfterSlider: React.FC<{ before: string; after: string }> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="relative w-full h-full overflow-hidden cursor-col-resize select-none" onMouseMove={handleMove} onTouchMove={handleMove}>
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
          <div className="flex gap-1"><div className="w-1 h-3 bg-orange-500 rounded-full"></div><div className="w-1 h-3 bg-orange-500 rounded-full"></div></div>
        </div>
      </div>
    </div>
  );
};

// --- SERVICES DATA ---
const services: ServiceItem[] = [
  {
    title: 'Photography Editing',
    description: 'HDR merging, sky replacement, and architectural retouching for flawless property imagery.',
    icon: <Camera className="text-orange-500" size={32} />,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1470&auto=format&fit=crop',
    type: 'standard'
  },
  {
    title: 'Virtual Staging',
    description: 'Transforming empty spaces into fully furnished luxury homes with realistic 3D staging.',
    icon: <Home className="text-red-500" size={32} />,
    beforeImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    type: 'comparison'
  },
  {
    title: 'Video Editing + AI',
    description: 'AI-driven construction visualization and high-end cinematic property storytelling.',
    icon: <Zap className="text-pink-500" size={32} />,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-construction-site-of-a-building-at-sunset-18860-large.mp4',
    type: 'video'
  }
];

export default function App() {
  const [view, setView] = useState<'home' | 'about' | 'privacy'>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <AIChat />
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b h-20 px-6 flex items-center justify-between">
        <div className="cursor-pointer group" onClick={() => setView('home')}>
          <BrandLogo size="md" />
        </div>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-500">
          <button onClick={() => scrollTo('services')} className="hover:text-gray-900 transition-colors">Services</button>
          <button onClick={() => scrollTo('work')} className="hover:text-gray-900 transition-colors">Portfolio</button>
          <button onClick={() => scrollTo('packages')} className="hover:text-gray-900 transition-colors">Pricing</button>
          <button onClick={() => { setView('about'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className={`hover:text-gray-900 transition-colors ${view === 'about' ? 'text-gray-900' : ''}`}>About</button>
          <button onClick={() => scrollTo('contact')} className="bg-[#0f172a] text-white px-8 py-3 rounded-full hover:bg-black transition-all shadow-md font-black">Contact</button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* --- MOBILE MENU --- */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-8 flex flex-col gap-6 md:hidden">
          <button onClick={() => scrollTo('services')} className="text-3xl font-serif font-bold">Services</button>
          <button onClick={() => scrollTo('work')} className="text-3xl font-serif font-bold">Portfolio</button>
          <button onClick={() => scrollTo('packages')} className="text-3xl font-serif font-bold">Pricing</button>
          <button onClick={() => { setView('about'); setMenuOpen(false); }} className="text-3xl font-serif font-bold">About</button>
          <button onClick={() => scrollTo('contact')} className="text-3xl font-serif font-bold text-orange-600">Contact</button>
        </div>
      )}

      {view === 'about' ? (
        <About onBack={() => setView('home')} />
      ) : view === 'privacy' ? (
        <PrivacyPolicy onBack={() => setView('home')} />
      ) : (
        <main className="pt-20">
          {/* --- HERO SECTION --- */}
          <section className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-rose-200/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[40%] left-[30%] -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto">
              <span className="inline-block py-1.5 px-6 bg-[#fff7ed] text-[#e66c2c] border border-orange-100 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-10 shadow-sm animate-bounce">High-End Post Production</span>
              <div className="mb-12">
                <h1 className="text-7xl md:text-[140px] font-serif font-black leading-[0.85] tracking-tight text-[#0f172a] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  Architecture
                </h1>
                <h2 className="text-6xl md:text-[120px] font-serif font-normal leading-[0.85] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e66c2c] to-[#d62d7a] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                  Meets Art.
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mb-16 px-4">
                Elevating property listings through world-class cinematic editing and AI-driven visual enhancements.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button 
                  onClick={() => scrollTo('work')} 
                  className="group px-12 py-5 bg-gradient-to-r from-[#e66c2c] to-[#d62d7a] text-white rounded-full font-black text-lg hover:shadow-[0_20px_50px_-10px_rgba(214,45,122,0.5)] hover:-translate-y-1 transition-all flex items-center gap-3 shadow-xl"
                >
                  Watch Showcase <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="px-12 py-5 bg-[#cbd5e1]/30 backdrop-blur-md text-[#0f172a] rounded-full font-black text-lg hover:bg-[#cbd5e1]/50 transition-all shadow-lg border border-white/60"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </section>

          {/* --- SERVICES SECTION --- */}
          <section id="services" className="py-32 px-6 bg-white reveal">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl font-serif font-bold mb-4">Our Services</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">Comprehensive visual solutions for luxury real estate marketing.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, i) => (
                  <div key={i} className="group relative rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[550px] bg-black reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                    {service.type === 'standard' && <img src={service.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-700" />}
                    {service.type === 'comparison' && <div className="absolute inset-0"><BeforeAfterSlider before={service.beforeImage!} after={service.afterImage!} /></div>}
                    {service.type === 'video' && <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" src={service.videoUrl} />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-20">
                      <div className="mb-4 bg-white/10 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- PORTFOLIO INTRODUCTION --- */}
          <section id="work" className="pt-32 pb-10 px-6 bg-[#020617] text-white reveal">
             <div className="max-w-5xl mx-auto text-center">
                <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Portfolio</span>
                <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-none">Curated <span className="italic font-light opacity-60">Cinematic</span> Excellence.</h2>
                <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-16">
                   Explore our track record of transforming empty houses into emotional home narratives. We combine technical precision with artistic soul to deliver results that sell.
                </p>
                <div className="flex justify-center gap-10">
                   <div className="text-center">
                      <div className="text-4xl font-black mb-1">500+</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Projects Delivered</div>
                   </div>
                   <div className="w-[1px] h-12 bg-white/10"></div>
                   <div className="text-center">
                      <div className="text-4xl font-black mb-1">24h</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Fast Turnaround</div>
                   </div>
                </div>
             </div>
          </section>

          {/* --- PORTFOLIO MARQUEES --- */}
          <section className="pb-32 bg-[#020617] overflow-hidden">
            <VideoMarquee title="Long-form Cinematic Tours" videos={LONG_FORM_VIDEOS} direction="left" />
            <div className="h-10"></div>
            <VideoMarquee title="Vertical Social Content" videos={SHORT_FORM_VIDEOS} direction="right" />
          </section>

          {/* --- PACKAGES SECTION --- */}
          <section id="packages" className="py-32 px-6 bg-white reveal">
            <div className="max-w-7xl mx-auto text-center">
              <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs">Pricing & Plans</span>
              <h2 className="text-5xl md:text-7xl font-sans font-black text-[#0f172a] mt-4 mb-16">Tailored Cinema Solutions</h2>
              <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                {PACKAGES.map((pkg, i) => <PackageCard key={i} pkg={pkg} />)}
              </div>
            </div>
          </section>

          {/* --- POST-PRICING INTRODUCTION (THE STANDARD) --- */}
          <section className="py-32 px-6 bg-[#0f172a] text-white reveal">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="reveal">
                   <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4 block">The Prees Standard</span>
                   <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Beyond Simple <br/><span className="italic font-light opacity-80">Video Editing.</span></h2>
                   <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      We don't just cut clips together. We craft immersive digital experiences that transport potential buyers directly into the lifestyle offered by each property. Our process is a fusion of advanced technology and classical cinematic principles.
                   </p>
                   <ul className="space-y-6">
                      <li className="flex gap-4">
                         <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-orange-500"><ShieldCheck size={24}/></div>
                         <div><h4 className="font-bold mb-1">Quality Guaranteed</h4><p className="text-sm text-gray-400">Every project undergoes a rigorous 3-step quality review process.</p></div>
                      </li>
                      <li className="flex gap-4">
                         <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-pink-500"><Clock size={24}/></div>
                         <div><h4 className="font-bold mb-1">Punctual Delivery</h4><p className="text-sm text-gray-400">We respect your marketing timeline with precise 24-48h turnarounds.</p></div>
                      </li>
                      <li className="flex gap-4">
                         <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-blue-500"><Layers size={24}/></div>
                         <div><h4 className="font-bold mb-1">Multi-Format Strategy</h4><p className="text-sm text-gray-400">Content optimized for YouTube, Instagram, Facebook, and Web.</p></div>
                      </li>
                   </ul>
                </div>
                <div className="relative reveal delay-200">
                   <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl animate-float">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6191ecdb50?w=1200&q=80" className="w-full h-full object-cover" alt="Luxury Villa" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                   </div>
                   <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-2xl text-[#0f172a] hidden md:block animate-pulse">
                      <div className="text-5xl font-black mb-1">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Customer Satisfaction</div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- MEDIA CHANNELS --- */}
          <section id="media" className="py-32 px-6 bg-[#f8fafc] overflow-hidden reveal">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="relative bg-white rounded-[48px] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] reveal">
                <div className="mb-8 w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500"><Youtube size={32} /></div>
                <h3 className="text-4xl font-bold text-[#0f172a] mb-4">PREES Global</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">Our primary cinematic channel where we redefine real estate marketing through narrative excellence and high-end walkthroughs.</p>
                <a href={CONTACT_INFO.youtube} target="_blank" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#0f172a] text-white rounded-2xl font-bold text-sm hover:bg-rose-600 transition-all shadow-lg">Subscribe Now <ArrowRight size={18} /></a>
              </div>

              <div className="relative bg-[#0f172a] rounded-[48px] p-12 shadow-2xl text-white reveal delay-100">
                <div className="mb-8 w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-orange-400"><Instagram size={32} /></div>
                <h3 className="text-4xl font-bold mb-4">PREES Living</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">A showcase of viral social trends, short-form reveals, and luxury lifestyles curated for the digital age.</p>
                <a href={CONTACT_INFO.instagram} target="_blank" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#e66c2c] to-[#d62d7a] text-white rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all shadow-lg">Follow @PREES <ArrowRight size={18} /></a>
              </div>
            </div>
          </section>

          {/* --- CONTACT SECTION --- */}
          <section id="contact" className="py-32 px-6 bg-white reveal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-[#0f172a]">Let's Create <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Something Extraordinary.</span></h2>
              <p className="text-xl text-gray-500 mb-16 leading-relaxed max-w-2xl mx-auto">Ready to elevate your listing? Connect with our studio across our social channels or via direct inquiry.</p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white border border-gray-100 hover:border-orange-500 transition-all shadow-sm hover:shadow-xl group reveal" style={{transitionDelay: '0ms'}}>
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Mail size={32} /></div>
                  <span className="font-bold text-[#0f172a]">Email Studio</span>
                </a>
                <a href={CONTACT_INFO.whatsapp} target="_blank" className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white border border-gray-100 hover:border-green-500 transition-all shadow-sm hover:shadow-xl group reveal" style={{transitionDelay: '100ms'}}>
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all"><MessageCircle size={32} /></div>
                  <span className="font-bold text-[#0f172a]">WhatsApp</span>
                </a>
                <a href={CONTACT_INFO.facebook} target="_blank" className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-500 transition-all shadow-sm hover:shadow-xl group reveal" style={{transitionDelay: '200ms'}}>
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all"><Facebook size={32} /></div>
                  <span className="font-bold text-[#0f172a]">Facebook</span>
                </a>
                <a href={CONTACT_INFO.instagram} target="_blank" className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white border border-gray-100 hover:border-pink-500 transition-all shadow-sm hover:shadow-xl group reveal" style={{transitionDelay: '300ms'}}>
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all"><Instagram size={32} /></div>
                  <span className="font-bold text-[#0f172a]">Instagram</span>
                </a>
              </div>
            </div>
          </section>

          {/* --- FOOTER --- */}
          <footer className="py-24 px-6 md:px-12 bg-white border-t border-gray-100 reveal">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              
              {/* BRAND COLUMN */}
              <div className="md:col-span-5 space-y-8">
                <h2 className="text-4xl font-bold tracking-tighter text-[#ef4444]">PREES</h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                  Elevating luxury real estate through cinematic storytelling. We turn properties into emotions and listings into legends.
                </p>
                <div className="flex gap-4">
                  <a href={CONTACT_INFO.instagram} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 text-gray-700 hover:text-red-500 hover:scale-110 transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href={CONTACT_INFO.youtube} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 text-gray-700 hover:text-red-500 hover:scale-110 transition-all">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>

              {/* CONTACT COLUMN */}
              <div className="md:col-span-4 space-y-6">
                <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#0f172a]">Contact</h4>
                <div className="space-y-4">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-colors group">
                    <div className="w-6 h-6 flex items-center justify-center rounded-md bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Mail size={14} />
                    </div>
                    <span className="text-base font-medium">{CONTACT_INFO.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="w-6 h-6 flex items-center justify-center rounded-md bg-orange-50 text-orange-600">
                      <MapPin size={14} />
                    </div>
                    <span className="text-base font-medium">{CONTACT_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* COMPANY COLUMN */}
              <div className="md:col-span-3 space-y-6">
                <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#0f172a]">Company</h4>
                <div className="flex flex-col space-y-4 text-gray-500">
                  <button onClick={() => scrollTo('work')} className="text-left font-medium hover:text-red-500 transition-colors">Work</button>
                  <button onClick={() => scrollTo('services')} className="text-left font-medium hover:text-red-500 transition-colors">Services</button>
                  <button onClick={() => { setView('about'); window.scrollTo(0,0); }} className="text-left font-medium hover:text-red-500 transition-colors">About Us</button>
                  <button onClick={() => { setView('privacy'); window.scrollTo(0,0); }} className="text-left font-medium hover:text-red-500 transition-colors">Privacy Policy</button>
                </div>
              </div>

            </div>
          </footer>
        </main>
      )}
    </div>
  );
}
