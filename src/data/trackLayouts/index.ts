import daytona from './daytona';
import watkins from './watkins';
import charlotte from './charlotte';
import monza from './monza';
import spa from './spa';
import nurburgring from './nurburgring';

export const trackLayouts = {
  'Daytona International Speedway': daytona,
  'Watkins Glen International': watkins,
  'Charlotte Motor Speedway': charlotte,
  'Autodromo Nazionale Monza': monza,
  'Circuit de Spa-Francorchamps': spa,
  'Nürburgring': nurburgring,
} as const;

export type TrackName = keyof typeof trackLayouts;