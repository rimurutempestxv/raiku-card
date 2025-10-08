import React, { useState } from 'react';
import { Download, Upload, Sparkles, Zap } from 'lucide-react';

export default function RaikuCardGenerator() {
  const [username, setUsername] = useState('username');
  const [badgeTitle, setBadgeTitle] = useState('Big Poster');
  const [badgeDescription, setBadgeDescription] = useState('Active on X. Can be smart, funny, chaotic or loud. Mastery in the art of shitposting.');
  const [avatarImage, setAvatarImage] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 relative overflow-hidden">
      {/* Ultra dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-500/10 via-transparent to-purple-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(lime 1px, transparent 1px), linear-gradient(90deg, lime 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Epic Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400 rounded-full filter blur-3xl opacity-10"></div>
          <Sparkles className="w-12 h-12 text-lime-400 mx-auto mb-4 animate-pulse" style={{animation: 'bounce-smooth 2s infinite'}} />
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500 mb-4 tracking-tighter relative">
            RAIKU CARDS
            <Zap className="inline-block w-8 md:w-12 h-8 md:h-12 text-lime-400 ml-2 -mt-2" style={{animation: 'bounce-smooth 1.5s infinite'}} />
          </h1>
          <p className="text-lime-400 text-lg md:text-xl font-bold tracking-wider">
            FORGE YOUR DIGITAL LEGEND
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card Preview */}
          <div className="flex items-center justify-center" style={{animation: 'float 6s ease-in-out infinite'}}>
            <div className="relative w-full max-w-md">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-600 rounded-3xl blur-2xl opacity-60" style={{animation: 'glow-pulse 3s infinite'}}></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-lime-400 to-cyan-400 rounded-3xl blur-xl opacity-40" style={{animation: 'spin-slow 10s linear infinite'}}></div>
              
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-purple-950 via-indigo-950 to-black rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-lime-400/30 overflow-hidden">
                {/* Holographic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 via-transparent to-purple-600/5 pointer-events-none"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                
                {/* Raiku Logo Header */}
                <div className="text-center mb-6 relative">
                  <div className="inline-flex items-center gap-3 bg-black/80 backdrop-blur-xl px-6 md:px-8 py-4 rounded-2xl border-2 border-lime-400/40 shadow-2xl shadow-lime-400/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-cyan-400/10"></div>
                    <img 
                      src="https://pbs.twimg.com/profile_images/1879318096711290880/E-1sZXv4_400x400.jpg" 
                      alt="Raiku" 
                      className="relative w-10 h-10 rounded-full ring-2 ring-lime-400 shadow-lg shadow-lime-400/50"
                    />
                    <span className="relative text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 tracking-wider">RAIKU</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative bg-gradient-to-br from-gray-950 via-purple-950/50 to-gray-950 rounded-2xl p-5 md:p-6 shadow-2xl border-2 border-lime-400/20 overflow-hidden">
                  {/* Circuit board pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-lime-400"></div>
                    <div className="absolute top-2/4 left-0 right-0 h-px bg-cyan-400"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-px bg-purple-400"></div>
                    <div className="absolute left-1/4 top-0 bottom-0 w-px bg-lime-400"></div>
                    <div className="absolute left-2/4 top-0 bottom-0 w-px bg-cyan-400"></div>
                    <div className="absolute left-3/4 top-0 bottom-0 w-px bg-purple-400"></div>
                  </div>
                  
                  {/* Username Header */}
                  <div className="relative bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500 rounded-xl p-[2px] mb-5 shadow-lg shadow-lime-400/30">
                    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl px-4 md:px-5 py-3 md:py-4 flex items-center justify-between">
                      <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400 tracking-wide">{username}</span>
                      <div className="relative">
                        <div className="absolute inset-0 bg-lime-400 rounded-lg blur opacity-50"></div>
                        <div className="relative w-10 h-10 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg transform hover:rotate-180 transition-transform duration-500">
                          <Sparkles className="text-purple-900 w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Avatar Section */}
                  <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 rounded-2xl p-8 md:p-10 mb-5 shadow-2xl border-2 border-lime-400/30 overflow-hidden">
                    {/* Holographic scan lines */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent" style={{animation: 'float 4s ease-in-out infinite'}}></div>
                    
                    {/* Dynamic sparkles */}
                    <div className="absolute inset-0">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute text-2xl"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            color: ['#a3e635', '#22d3ee', '#a855f7'][i % 3],
                            animation: `bounce-smooth ${2 + Math.random() * 2}s infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: 0.6
                          }}
                        >
                          ★
                        </div>
                      ))}
                    </div>
                    
                    {/* Energy rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-lime-400/20 rounded-full" style={{animation: 'spin-slow 20s linear infinite'}}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyan-400/20 rounded-full" style={{animation: 'spin-slow 15s linear infinite reverse'}}></div>
                    
                    {/* Avatar Container */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative group">
                        {/* Outer glow */}
                        <div className="absolute -inset-3 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity" style={{animation: 'glow-pulse 2s infinite'}}></div>
                        
                        {/* Avatar circle */}
                        <div className="relative w-40 h-40 md:w-44 md:h-44 bg-gradient-to-br from-lime-400 via-cyan-400 to-lime-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-purple-900 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                          {avatarImage ? (
                            <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-center relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full"></div>
                              <div className="relative">
                                <Upload className="w-12 h-12 text-purple-900 mx-auto mb-2 animate-pulse" />
                                <span className="text-purple-900 text-xs font-black uppercase tracking-wider">Upload</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Orbiting particles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56">
                          <div className="absolute top-0 left-1/2 w-2 h-2 bg-lime-400 rounded-full -translate-x-1/2 shadow-lg shadow-lime-400/50" style={{animation: 'spin-slow 8s linear infinite'}}></div>
                          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 shadow-lg shadow-cyan-400/50" style={{animation: 'spin-slow 8s linear infinite'}}></div>
                          <div className="absolute left-0 top-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-y-1/2 shadow-lg shadow-purple-400/50" style={{animation: 'spin-slow 8s linear infinite'}}></div>
                        </div>
                      </div>
                      
                      {/* Base platform */}
                      <div className="relative w-36 h-24 bg-gradient-to-t from-purple-900 via-purple-800 to-purple-700 rounded-t-full -mt-10 border-t-4 border-lime-400/50 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Badge Section */}
                  <div className="relative bg-gradient-to-r from-lime-400/10 via-cyan-400/10 to-purple-500/10 rounded-xl p-[2px] shadow-lg">
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 md:p-5 flex items-start gap-3 md:gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-lime-400 rounded-xl blur opacity-50"></div>
                        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-300">
                          <svg className="w-10 h-10 md:w-12 md:h-12 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 mb-2 tracking-wide">{badgeTitle}</h3>
                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{badgeDescription}</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between px-2 md:px-3">
                    <span className="text-xs text-lime-400 font-black tracking-widest">RAIKU CARDS</span>
                    <div className="relative">
                      <div className="absolute inset-0 bg-lime-400 rounded-full blur opacity-50 animate-pulse"></div>
                      <div className="relative w-8 h-8 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-purple-900 text-sm font-black">R</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-600 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-gray-950 to-black rounded-3xl p-6 md:p-8 border-2 border-lime-400/30 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500 mb-8 tracking-tight">
                CUSTOMIZE YOUR CARD
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-lime-400 text-sm font-black mb-3 tracking-wider">
                    <Zap className="w-4 h-4" />
                    USERNAME
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-black/50 border-2 border-lime-400/30 rounded-xl px-5 py-4 text-white font-bold focus:outline-none focus:border-lime-400 focus:shadow-lg focus:shadow-lime-400/30 transition-all placeholder-gray-600"
                    placeholder="Enter username"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lime-400 text-sm font-black mb-3 tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    AVATAR IMAGE
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="avatar-upload"
                    />
                    <label
                      htmlFor="avatar-upload"
                      className="relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-lime-400/10 to-cyan-400/10 border-2 border-dashed border-lime-400/50 rounded-xl px-5 py-8 text-lime-400 font-black cursor-pointer hover:border-lime-400 hover:bg-lime-400/20 transition-all group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/10 to-lime-400/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <Upload size={24} className="relative animate-pulse" />
                      <span className="relative">{avatarImage ? 'CHANGE IMAGE' : 'UPLOAD AVATAR'}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lime-400 text-sm font-black mb-3 tracking-wider">
                    <Zap className="w-4 h-4" />
                    BADGE TITLE
                  </label>
                  <input
                    type="text"
                    value={badgeTitle}
                    onChange={(e) => setBadgeTitle(e.target.value)}
                    className="w-full bg-black/50 border-2 border-lime-400/30 rounded-xl px-5 py-4 text-white font-bold focus:outline-none focus:border-lime-400 focus:shadow-lg focus:shadow-lime-400/30 transition-all placeholder-gray-600"
                    placeholder="Enter badge title"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lime-400 text-sm font-black mb-3 tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    BADGE DESCRIPTION
                  </label>
                  <textarea
                    value={badgeDescription}
                    onChange={(e) => setBadgeDescription(e.target.value)}
                    className="w-full bg-black/50 border-2 border-lime-400/30 rounded-xl px-5 py-4 text-white font-bold focus:outline-none focus:border-lime-400 focus:shadow-lg focus:shadow-lime-400/30 transition-all resize-none placeholder-gray-600"
                    rows={4}
                    placeholder="Enter badge description"
                  />
                </div>

                <div className="relative pt-2">
                  <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <button className="relative w-full bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500 hover:from-lime-500 hover:via-cyan-500 hover:to-purple-600 text-black font-black py-5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transform group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <Download size={24} className="relative" />
                    <span className="relative tracking-wider">DOWNLOAD CARD</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-lime-400/70 text-sm font-bold tracking-wide">
                    📸 TAKE A SCREENSHOT TO SAVE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}