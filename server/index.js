import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { iRacing } from 'node-iracing';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize iRacing client
const iracing = new iRacing();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://greatrace.gg' 
    : 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'greatrace-session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}));

// API Routes
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    await iracing.login(username, password);
    req.session.isAuthenticated = true;
    res.json({ success: true });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
});

app.get('/api/recent-races', async (req, res) => {
  try {
    if (!req.session.isAuthenticated) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    const results = await iracing.getRecentRaces();
    res.json(results);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch recent races' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  app.use(express.static(join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});