export const SimpleLogo = () => (
    <div className="relative">
      {/* Simple glow effect */}
      <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-30"></div>
      
      {/* Logo container */}
      <div className="relative bg-white rounded-full p-6 shadow-xl border-2 border-yellow-400 hover:scale-105 transition-transform duration-300">
        <svg 
          className="w-28 h-28 text-blue-900" 
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          {/* Simple book icon */}
          <rect x="30" y="25" width="40" height="35" rx="2" fill="currentColor" opacity="0.8"/>
          <rect x="35" y="20" width="30" height="35" rx="2" fill="currentColor"/>
          
          {/* Simple connecting line */}
          <path 
            d="M20 70 Q30 65, 40 70 Q50 75, 60 70 Q70 65, 80 70"
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none"
            opacity="0.7"
          />
          
          {/* Simple dots */}
          <circle cx="20" cy="80" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="50" cy="80" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.6"/>
        </svg>
        
        {/* Simple floating dot */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
