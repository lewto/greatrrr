import { IRacingResult } from '../types';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

axios.defaults.withCredentials = true;

// Rest of the file remains the same