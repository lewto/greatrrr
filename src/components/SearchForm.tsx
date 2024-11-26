import React, { useState } from 'react';
import { Search, Trophy } from 'lucide-react';

interface SearchFormProps {
  onSearch: (profileId: string, resultId?: string) => void;
  loading?: boolean;
}

export default function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [profileId, setProfileId] = useState('');
  const [resultId, setResultId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(profileId, resultId);
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="profileId" className="block text-sm font-medium text-gray-300">
            iRacing Profile ID
          </label>
          <div className="relative group">
            <Trophy className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FF1801]" />
            <input
              type="text"
              id="profileId"
              value={profileId}
              onChange={(e) => setProfileId(e.target.value)}
              className="block w-full rounded-lg bg-[#2D2D3B] border border-gray-700 pl-10 pr-3 py-2 text-gray-100 placeholder-gray-500 focus:border-[#FF1801] focus:ring-[#FF1801] transition-all duration-300 group-hover:border-[#FF1801]/50"
              placeholder="Enter your iRacing ID (e.g., 468543)"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="resultId" className="block text-sm font-medium text-gray-300">
            Race Result ID (Optional)
          </label>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FF1801]" />
            <input
              type="text"
              id="resultId"
              value={resultId}
              onChange={(e) => setResultId(e.target.value)}
              className="block w-full rounded-lg bg-[#2D2D3B] border border-gray-700 pl-10 pr-3 py-2 text-gray-100 placeholder-gray-500 focus:border-[#FF1801] focus:ring-[#FF1801] transition-all duration-300 group-hover:border-[#FF1801]/50"
              placeholder="Enter result ID (e.g., 72967094)"
              disabled={loading}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-white bg-gradient-to-r from-[#FF1801] to-[#FF4D4D] hover:from-[#FF4D4D] hover:to-[#FF1801] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF1801] focus:ring-offset-2 focus:ring-offset-[#15151E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
          ) : (
            'Generate Certificate'
          )}
        </button>
      </form>
    </div>
  );
}