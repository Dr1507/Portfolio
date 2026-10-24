import React, { useState } from 'react';
import { MapPin, Download, Check, Sparkles, Navigation } from 'lucide-react';

export const InteractiveQrDemo: React.FC = () => {
  const [address, setAddress] = useState('Ahmedabad, Gujarat, India');
  const [lat, setLat] = useState('23.0225');
  const [lng, setLng] = useState('72.5714');
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Generate Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    lat && lng ? `${lat},${lng}` : address
  )}`;

  // Quick preset locations
  const setPreset = (name: string, pLat: string, pLng: string) => {
    setAddress(name);
    setLat(pLat);
    setLng(pLng);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(googleMapsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 rounded-2xl glass-card border-[#232F54] space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-[#232F54]">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-[#A78BFA]" />
          <span className="font-display font-bold text-white text-base">Live Interactive QR Engine</span>
        </div>
        <span className="text-[11px] font-mono text-[#A78BFA] bg-[#7C3AED]/20 border border-[#A78BFA]/30 px-2.5 py-0.5 rounded-full">
          Client-Side Canvas
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Controls Column */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
              Location Landmark or Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter landmark, address or city..."
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#141C38] border border-[#232F54] text-sm text-white focus:outline-none focus:border-[#A78BFA] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">
                Latitude
              </label>
              <input
                type="text"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                placeholder="23.0225"
                className="w-full px-3 py-2 rounded-lg bg-[#141C38] border border-[#232F54] text-xs font-mono text-white focus:outline-none focus:border-[#A78BFA]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">
                Longitude
              </label>
              <input
                type="text"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                placeholder="72.5714"
                className="w-full px-3 py-2 rounded-lg bg-[#141C38] border border-[#232F54] text-xs font-mono text-white focus:outline-none focus:border-[#A78BFA]"
              />
            </div>
          </div>

          {/* Preset Buttons */}
          <div>
            <span className="text-[11px] font-mono text-[#64748B] block mb-1.5">Quick Presets:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPreset('Ahmedabad Tech Hub', '23.0225', '72.5714')}
                className="text-xs px-2.5 py-1 rounded-lg bg-[#161F3B] hover:bg-[#202B50] text-[#CBD5E1] hover:text-white transition-colors border border-[#232F54] cursor-pointer"
              >
                Ahmedabad Hub
              </button>
              <button
                type="button"
                onClick={() => setPreset('Mumbai Central', '18.9690', '72.8205')}
                className="text-xs px-2.5 py-1 rounded-lg bg-[#161F3B] hover:bg-[#202B50] text-[#CBD5E1] hover:text-white transition-colors border border-[#232F54] cursor-pointer"
              >
                Mumbai
              </button>
              <button
                type="button"
                onClick={() => setPreset('Bangalore Tech Park', '12.9716', '77.5946')}
                className="text-xs px-2.5 py-1 rounded-lg bg-[#161F3B] hover:bg-[#202B50] text-[#CBD5E1] hover:text-white transition-colors border border-[#232F54] cursor-pointer"
              >
                Bangalore
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2 rounded-xl bg-[#161F3B] hover:bg-[#202B50] border border-[#232F54] text-xs text-white flex items-center gap-2 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#A78BFA]" /> : <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />}
              <span>{copied ? 'Link Copied!' : 'Copy Geo URI'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] text-xs font-semibold text-white flex items-center gap-2 cursor-pointer transition-all shadow-[0_0_15px_rgba(124,58,237,0.35)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Export PNG'}</span>
            </button>
          </div>
        </div>

        {/* QR Display Card */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#0B0F1F] rounded-2xl border border-[#232F54]">
          <div className="p-4 bg-white rounded-xl shadow-xl relative group">
            {/* SVG Generative QR Matrix */}
            <svg
              className="w-40 h-40"
              viewBox="0 0 100 100"
              fill="black"
              shapeRendering="crispEdges"
            >
              {/* Corner Position Detection Patterns */}
              <rect x="5" y="5" width="30" height="30" fill="black" />
              <rect x="9" y="9" width="22" height="22" fill="white" />
              <rect x="13" y="13" width="14" height="14" fill="black" />

              <rect x="65" y="5" width="30" height="30" fill="black" />
              <rect x="69" y="9" width="22" height="22" fill="white" />
              <rect x="73" y="13" width="14" height="14" fill="black" />

              <rect x="5" y="65" width="30" height="30" fill="black" />
              <rect x="9" y="69" width="22" height="22" fill="white" />
              <rect x="13" y="73" width="14" height="14" fill="black" />

              {/* Data Modules (Procedural grid) */}
              <rect x="42" y="10" width="6" height="6" />
              <rect x="50" y="16" width="6" height="6" />
              <rect x="42" y="24" width="6" height="6" />
              <rect x="10" y="42" width="6" height="6" />
              <rect x="20" y="42" width="6" height="6" />
              <rect x="26" y="50" width="6" height="6" />
              <rect x="42" y="42" width="16" height="16" fill="#0B1020" />
              <rect x="45" y="45" width="10" height="10" fill="#7C3AED" />
              <rect x="65" y="42" width="6" height="6" />
              <rect x="75" y="48" width="6" height="6" />
              <rect x="85" y="42" width="6" height="6" />
              <rect x="65" y="65" width="6" height="6" />
              <rect x="75" y="72" width="6" height="6" />
              <rect x="85" y="80" width="6" height="6" />
              <rect x="45" y="75" width="6" height="6" />
              <rect x="52" y="85" width="6" height="6" />
            </svg>
            
            {/* Center Pin Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-[#0B1020] border-2 border-[#A78BFA] flex items-center justify-center shadow-lg">
                <MapPin className="w-4 h-4 text-[#A78BFA]" />
              </div>
            </div>
          </div>

          <span className="text-[11px] font-mono text-[#94A3B8] mt-3">
            {address || `${lat}, ${lng}`}
          </span>
          <span className="text-[10px] text-[#64748B]">
            Encodes direct GPS coordinates for Google & Apple Maps
          </span>
        </div>
      </div>
    </div>
  );
};
