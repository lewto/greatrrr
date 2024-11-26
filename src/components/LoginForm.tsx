import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => Promise<void>;
  loading?: boolean;
  error?: string | null;
}

export default function LoginForm({ onLogin, loading, error }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(username, password);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Login to iRacing
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Enter your credentials to access your race results
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="relative group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF1801] focus:ring-1 focus:ring-[#FF1801] transition-all duration-200"
              placeholder="iRacing username"
              required
              disabled={loading}
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-[#FF1801] transition-colors" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF1801] focus:ring-1 focus:ring-[#FF1801] transition-all duration-200"
              placeholder="Password"
              required
              disabled={loading}
            />
            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-[#FF1801] transition-colors" />
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#FF1801] to-[#FF4D4D] text-white rounded-lg px-4 py-3 font-medium hover:from-[#FF4D4D] hover:to-[#FF1801] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            </div>
          ) : (
            'Connect with iRacing'
          )}
        </button>
      </form>
    </div>
  );
}