import React from 'react';
import { ArrowLeft, Award, Users, Camera } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Prees</span>
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
            We are <span className="text-gray-900 font-bold">Prees</span>, a premier video editing agency dedicated exclusively to the <span className="text-orange-600 font-medium">Luxury Real Estate</span> market. We understand that selling high-end properties requires more than just showing a room; it requires crafting a lifestyle narrative that captivates potential buyers emotionally.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Award className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-500 text-sm">Cinematic color grading, seamless transitions, and sound design that rivals feature films.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Camera className="text-red-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Storytelling</h3>
              <p className="text-gray-500 text-sm">We highlight the architectural beauty and the unique soul of every property.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-pink-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client Partnership</h3>
              <p className="text-gray-500 text-sm">We work closely with agents and developers to ensure the vision is perfectly executed.</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-video mb-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
              alt="Luxury Real Estate Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <p className="text-white font-serif italic text-2xl drop-shadow-md">"Where architecture meets art."</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-12">
             <h2 className="text-2xl font-serif text-gray-900 mb-6">Our Journey</h2>
             <p className="text-gray-600 mb-4">
               Founded in 2020, Prees started with a simple mission: to elevate the standard of real estate marketing. We noticed a gap in the market for truly high-end, narrative-driven video content.
             </p>
             <p className="text-gray-600">
               Today, we partner with top-tier agencies and developers globally, delivering content that not only showcases properties but defines brands.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;