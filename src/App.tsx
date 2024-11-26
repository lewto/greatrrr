import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import CertificatePreview from './components/CertificatePreview';
import Confetti from './components/Confetti';
import AnimatedLogo from './components/AnimatedLogo';
import { Trophy, Share2, Map, Calendar, Flag, Clock } from 'lucide-react';

// Example certificate data for landing page
const exampleCertificate = {
  position: '1st Place',
  driverName: 'Max Verstappen',
  trackName: 'Daytona International Speedway',
  date: 'March 14, 2024',
  lapTime: '1:43.567',
  carName: 'Red Bull Racing RB19',
  split: 'Top Split',
  startPosition: 'P1',
  fastestLap: true,
  incidentPoints: 0,
  seriesName: 'FORMULA 1 WORLD CHAMPIONSHIP',
  achievement: 'GRAND PRIX VICTORY'
};

// Example recent races
const recentRaces = [
  {
    id: '1',
    position: '1st Place',
    trackName: 'Daytona International Speedway',
    date: 'March 14, 2024',
    lapTime: '1:43.567',
    carName: 'Red Bull Racing RB19',
    seriesName: 'FORMULA 1 WORLD CHAMPIONSHIP'
  },
  {
    id: '2',
    position: '2nd Place',
    trackName: 'Watkins Glen International',
    date: 'March 12, 2024',
    lapTime: '2:05.123',
    carName: 'Ferrari SF-24',
    seriesName: 'GT3 CHALLENGE'
  },
  {
    id: '3',
    position: '1st Place',
    trackName: 'Circuit de Spa-Francorchamps',
    date: 'March 10, 2024',
    lapTime: '2:15.789',
    carName: 'Mercedes-AMG GT3',
    seriesName: 'VRS GT ENDURANCE'
  }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedRace, setSelectedRace] = useState(exampleCertificate);

  const handleRaceSelect = (race: any) => {
    setSelectedRace({
      ...race,
      driverName: 'Max Verstappen', // This would come from the user's profile
      achievement: 'GRAND PRIX VICTORY',
      startPosition: 'P1',
      fastestLap: true,
      incidentPoints: 0
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleHomeClick = () => {
    setIsLoggedIn(false);
    setSelectedRace(exampleCertificate);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Confetti active={showConfetti} />
      
      {/* Header */}
      <header className="pt-8 pb-12">
        <AnimatedLogo onHomeClick={handleHomeClick} />
      </header>

      <main className="container mx-auto px-4 max-w-7xl">
        {isLoggedIn ? (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Race Selection */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-orbitron mb-4">Recent Races</h2>
              <div className="space-y-4">
                {recentRaces.map((race) => (
                  <button
                    key={race.id}
                    onClick={() => handleRaceSelect(race)}
                    className="w-full bg-[#1A1A1F] hover:bg-[#252530] border border-gray-800 rounded-lg p-4 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          race.position.includes('1st') ? 'bg-gradient-to-br from-[#FFD700] to-[#B8860B]' :
                          race.position.includes('2nd') ? 'bg-gradient-to-br from-[#C0C0C0] to-[#808080]' :
                          race.position.includes('3rd') ? 'bg-gradient-to-br from-[#CD7F32] to-[#8B4513]' :
                          'bg-gradient-to-br from-[#FF1801] to-[#FF4D4D]'
                        }`}>
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold text-lg group-hover:text-[#FF1801] transition-colors">
                            {race.position}
                          </h3>
                          <p className="text-sm text-gray-400">{race.seriesName}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{race.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                          <Flag className="w-4 h-4" />
                          <span>{race.trackName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Best Lap: {race.lapTime}</span>
                      </div>
                      <span>{race.carName}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="lg:pl-8">
              <CertificatePreview data={selectedRace} />
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Features */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold font-orbitron leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Showcase Your Racing Excellence
                </h1>
                <p className="text-xl text-gray-400">
                  Transform your iRacing victories into stunning certificates. Share your achievements with the racing community.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-[#FF1801] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Custom track-specific certificate designs</h3>
                    <p className="text-gray-400">Each certificate features unique track layouts and custom designs based on your race location.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Share2 className="w-6 h-6 text-[#FF1801] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">One-click social sharing</h3>
                    <p className="text-gray-400">Share your certificates directly to Twitter, Facebook, Reddit, and Discord.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Map className="w-6 h-6 text-[#FF1801] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Track-specific designs</h3>
                    <p className="text-gray-400">Beautiful track outlines and custom graphics for each circuit.</p>
                  </div>
                </div>
              </div>

              <LoginForm 
                onLogin={async () => setIsLoggedIn(true)}
                loading={false}
              />
            </div>

            {/* Right Column - Example Certificate */}
            <div className="lg:pl-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF1801] to-[#FF4D4D] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <CertificatePreview data={exampleCertificate} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;