import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <div>
            <p className="text-sm text-gray-400 mb-6">Last Updated: October 24, 2024</p>
            <p className="text-xl font-light text-gray-800 leading-relaxed">
              At Prees, we value your privacy and are committed to protecting your personal data. This policy outlines how we handle your information when you use our services or visit our website.
            </p>
          </div>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h3>
            <p>We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and details about your property or project.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and send related information, including confirmations and invoices.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Communicate with you about services, offers, and events offered by Prees.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h3>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h3>
            <p>We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., payment processing, hosting services). We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@prees-media.com" className="text-orange-600 hover:underline">hello@prees-media.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
