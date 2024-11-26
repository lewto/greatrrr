import React, { useState, useRef } from 'react';
import { trackLayouts } from '../data/trackLayouts';
import { Share2, Square, RectangleVertical, Download } from 'lucide-react';
import html2canvas from 'html2canvas';

interface CertificateData {
  position: string;
  driverName: string;
  trackName: string;
  date: string;
  lapTime?: string;
  carName?: string;
  split?: string;
  startPosition?: string;
  fastestLap?: boolean;
  incidentPoints?: number;
  seriesName?: string;
  achievement?: string;
}

const CertificatePreview: React.FC<{ data: CertificateData }> = ({ data }) => {
  const [format, setFormat] = useState<'vertical' | 'square'>('vertical');
  const certificateRef = useRef<HTMLDivElement>(null);
  const trackLayout = trackLayouts[data.trackName as keyof typeof trackLayouts];

  const getColorScheme = (position: string) => {
    if (position.includes('1st')) {
      return {
        primary: '#FFD700',
        secondary: '#B8860B',
        gradient: 'linear-gradient(135deg, rgba(25,25,25,1) 0%, rgba(51,41,0,1) 100%)',
        border: '#FFD700',
        glow: '0 0 40px rgba(255,215,0,0.2)',
        text: '#FFD700'
      };
    }
    if (position.includes('2nd')) {
      return {
        primary: '#C0C0C0',
        secondary: '#808080',
        gradient: 'linear-gradient(135deg, rgba(25,25,25,1) 0%, rgba(41,41,41,1) 100%)',
        border: '#C0C0C0',
        glow: '0 0 40px rgba(192,192,192,0.2)',
        text: '#C0C0C0'
      };
    }
    if (position.includes('3rd')) {
      return {
        primary: '#CD7F32',
        secondary: '#8B4513',
        gradient: 'linear-gradient(135deg, rgba(25,25,25,1) 0%, rgba(41,28,19,1) 100%)',
        border: '#CD7F32',
        glow: '0 0 40px rgba(205,127,50,0.2)',
        text: '#CD7F32'
      };
    }
    return {
      primary: '#FF1801',
      secondary: '#FF4D4D',
      gradient: 'linear-gradient(135deg, rgba(25,25,25,1) 0%, rgba(41,19,19,1) 100%)',
      border: '#FF1801',
      glow: '0 0 40px rgba(255,24,1,0.2)',
      text: '#FF1801'
    };
  };

  const colorScheme = getColorScheme(data.position);

  return (
    <div className="relative space-y-4">
      <div 
        id="certificate"
        ref={certificateRef}
        style={{
          background: colorScheme.gradient,
          boxShadow: colorScheme.glow,
          borderColor: colorScheme.border
        }}
        className={`relative overflow-hidden rounded-xl border-2 p-8
          ${format === 'vertical' ? 'aspect-[3/4]' : 'aspect-square'}
          bg-[#0A0A0F]`}
      >
        {/* Speed Lines Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full transform -rotate-45"
              style={{
                top: `${i * 5}%`,
                background: `linear-gradient(90deg, transparent 0%, ${colorScheme.primary} 50%, transparent 100%)`,
                animation: `speed-line ${1 + (i % 3)}s linear infinite`
              }}
            />
          ))}
        </div>

        {/* Track Layout */}
        {trackLayout && (
          <div 
            className="absolute inset-0 opacity-30 transform transition-all duration-1000 hover:scale-105"
            style={{ 
              color: colorScheme.primary,
              filter: `drop-shadow(0 0 10px ${colorScheme.primary})`
            }}
            dangerouslySetInnerHTML={{ __html: trackLayout }} 
          />
        )}

        {/* Certificate Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Achievement Banner */}
          <div className="text-center mb-8">
            <h1 
              className="text-4xl font-bold font-orbitron tracking-wider"
              style={{ color: colorScheme.text }}
            >
              {data.achievement || 'GRAND PRIX VICTORY'}
            </h1>
            <p className="text-sm text-gray-400 mt-2 font-orbitron tracking-wide">
              {data.seriesName || 'FORMULA 1 WORLD CHAMPIONSHIP'}
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {/* Driver Name */}
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">This certifies that</p>
              <h2 className="text-3xl font-bold text-white">{data.driverName}</h2>
            </div>

            {/* Position */}
            <div className="text-center">
              <p className="text-sm text-gray-400">achieved</p>
              <h3 
                className="text-5xl font-bold font-orbitron mt-2"
                style={{ color: colorScheme.text }}
              >
                {data.position}
              </h3>
            </div>

            {/* Car and Track Info */}
            <div className="text-center space-y-2">
              <h4 className="text-xl font-semibold text-white">{data.carName}</h4>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-[1px]" style={{ backgroundColor: colorScheme.primary }} />
                <p className="text-lg text-white font-orbitron">{data.trackName}</p>
                <div className="w-12 h-[1px]" style={{ backgroundColor: colorScheme.primary }} />
              </div>
            </div>

            {/* Race Stats */}
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="text-center">
                <p className="text-gray-400">Best Lap</p>
                <p className="font-mono font-bold text-white text-xl mt-1">{data.lapTime}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Started</p>
                <p className="font-bold text-white text-xl mt-1">{data.startPosition}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex justify-between items-end text-sm">
            <p className="text-gray-500">{data.date}</p>
            <div className="flex items-center space-x-2">
              <span 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: colorScheme.primary }}
              />
              <p className="text-gray-500 font-orbitron">greatrace.gg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;