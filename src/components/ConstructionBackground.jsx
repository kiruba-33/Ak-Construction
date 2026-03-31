import React from 'react';

const ConstructionBackground = ({ children }) => {
  return (
    // Pure white background for a clean, premium look
    <div className="relative w-full overflow-hidden bg-white"> 
      
      {/* Premium Animated & Realistic Construction Substrate - White Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <style>
            {`
              /* Realistic & Premium Animations (Alive Logic) */
              
              @keyframes detailedHookFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-30px); }
              }
              
              @keyframes excavatorAction {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(-5deg); }
              }
              
              @keyframes pulseWireframeProgress {
                0%, 100% { opacity: 0.2; filter: drop-shadow(0 0 1px rgba(184, 115, 51, 0.2)); }
                50% { opacity: 0.9; filter: drop-shadow(0 0 8px rgba(184, 115, 51, 0.4)); }
              }
              
              @keyframes cloudDrift {
                0% { transform: translateX(-50px); }
                100% { transform: translateX(50px); }
              }

              .crane-hook-float { animation: detailedHookFloat 5s ease-in-out infinite; }
              .excavator-arm-complex { 
                animation: excavatorAction 7s ease-in-out infinite; 
                transform-origin: 860px 350px;
                transform-box: fill-box;
              }
              .pulse-building-progress { animation: pulseWireframeProgress 4s ease-in-out infinite; }
              .cloud-group { animation: cloudDrift 60s linear infinite alternate; }

              /* Responsive Pattern Scaling (Code original logic retained) */
              #constructionPattern {
                transform: scale(0.6); 
              }

              @media (min-width: 768px) {
                #constructionPattern { transform: scale(1); }
              }

              @media (min-width: 1024px) {
                #constructionPattern { transform: scale(1.3); }
              }

              /* White Theme Muted Palette */
              .detailed-structure { stroke: #64748b; stroke-width: 1.2; fill: none; } /* Slate Blue-Gray */
              .machinery-body { fill: #94a3b8; stroke: #475569; stroke-width: 0.8; }
              .wireframe-building { stroke: #b87333; stroke-width: 1.5; fill: none; } /* Bronze Accent */
              .ground-line { stroke: #cbd5e1; stroke-width: 1.5; stroke-dasharray: 4 3; }
              .cloud-shape { fill: #f1f5f9; opacity: 0.8; }
            `}
          </style>

          <defs>
            <pattern 
              id="constructionSkylineWhiteTheme" 
              width="1000" 
              height="400" 
              patternUnits="userSpaceOnUse"
            >
              <g id="constructionPattern">
                
                {/* 1. Drifted Clouds (Alive Logic) */}
                <g className="cloud-group">
                  <ellipse cx="200" cy="50" rx="60" ry="20" className="cloud-shape" />
                  <ellipse cx="600" cy="80" rx="80" ry="30" className="cloud-shape" />
                  <ellipse cx="850" cy="40" rx="50" ry="15" className="cloud-shape" />
                </g>

                {/* 2. Detailed Structure: Cranes */}
                <g className="detailed-structure">
                  {/* Left Crane */}
                  <g className="crane-structure" transform="translate(100, 400)">
                    <rect x="-10" y="-300" width="20" height="300" className="machinery-body"/>
                    <path d="M-10 -300 L200 -300 M200 -300 L0 -280 Z" fill="none" stroke="#475569" strokeWidth="0.8"/>
                    
                    <g className="crane-hook-float" transform="translate(180, -300)">
                      <line x1="0" y1="0" x2="0" y2="60" className="detailed-structure" strokeWidth="2" />
                      <circle cx="0" cy="60" r="5" fill="#475569" />
                      <path d="M-5 65 A 5 5 0 0 1 5 65" className="detailed-structure" strokeWidth="1" strokeDasharray="2 2" />
                    </g>
                  </g>
                  
                  {/* Right Crane */}
                  <g className="crane-structure" transform="translate(700, 400)">
                    <rect x="-10" y="-250" width="20" height="250" className="machinery-body"/>
                    <path d="M-10 -250 L-200 -250 M-200 -250 L0 -230 Z" fill="none" stroke="#475569" strokeWidth="0.8"/>
                    
                    <g transform="translate(-180, -250)">
                      <line x1="0" y1="0" x2="0" y2="80" className="detailed-structure" strokeWidth="2" />
                      <circle cx="0" cy="80" r="5" fill="#475569" />
                    </g>
                  </g>
                </g>

                {/* 3. Wireframe Buildings with Pulse (Alive Logic) */}
                <g className="wireframe-building">
                  <g transform="translate(250, 280)">
                    <rect x="0" y="0" width="80" height="120" />
                    {[30, 60, 90].map(y => <line key={y} x1="0" y1={y} x2="80" y2={y} />)}
                    {[20, 40, 60].map(x => <line key={x} x1={x} y1="0" x2={x} y2="120" />)}
                  </g>
                  
                  <g className="pulse-building-progress" transform="translate(400, 280)">
                    <rect x="0" y="0" width="100" height="120" className="wireframe-building"/>
                    {[20, 40, 60, 80].map(x => <line key={x} x1={x} y1="0" x2={x} y2="120" />)}
                    <rect x="5" y="5" width="90" height="110" rx="3" style={{fill: 'rgba(184, 115, 51, 0.1)', stroke: 'none'}}/>
                  </g>
                </g>

                {/* 4. Heavy Machinery (Alive Logic) */}
                <g className="heavy-machinery">
                  {/* Excavator */}
                  <g className="excavator-unit" transform="translate(800, 370)">
                    <path d="M0 0 L50 0 L60 -20 L20 -20 Z" className="machinery-body"/>
                    <g className="excavator-arm-complex" transform-origin="60px -20px">
                      <path d="M60 -20 L90 -50 L110 -20" fill="none" stroke="#475569" strokeWidth="4" />
                      <path d="M110 -20 L120 -10 L100 0 Z" fill="#b87333" stroke="#8b4513" strokeWidth="0.8"/>
                    </g>
                    <ellipse cx="25" cy="5" rx="30" ry="10" fill="#334155" opacity="0.3"/>
                  </g>
                  
                  {/* Truck */}
                  <g className="truck-unit" transform="translate(550, 375)">
                    <rect x="0" y="0" width="60" height="25" rx="2" className="machinery-body"/>
                    <circle cx="10" cy="25" r="5" fill="#334155" />
                    <circle cx="50" cy="25" r="5" fill="#334155" />
                    <rect x="10" y="5" width="15" height="10" rx="1" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5"/>
                  </g>
                </g>

                {/* Ground Line */}
                <line x1="0" y1="400" x2="1000" y2="400" className="ground-line" />
              </g>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#constructionSkylineWhiteTheme)" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ConstructionBackground;