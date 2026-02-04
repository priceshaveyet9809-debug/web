import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className} bg-white rounded-full shadow-md p-1.5 border border-gray-100`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" /> {/* Orange */}
                    <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
                </linearGradient>
            </defs>
            {/* Geometric Hexagon P Logo recreated based on image */}
            <path 
                d="M50 15 L80 32.5 V67.5 L50 85 L20 67.5 V32.5 L50 15Z" 
                stroke="url(#logoGradient)" 
                strokeWidth="2" 
                className="opacity-20"
            />
            <path 
                d="M35 30 H65 L75 40 V55 L65 65 H35 V75 H28 V30 H35Z M35 55 H65 L68 52 V43 L65 40 H35 V55Z" 
                fill="url(#logoGradient)"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    </div>
  );
};
