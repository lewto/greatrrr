const tracks = {
  'Daytona International Speedway': `
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Daytona Oval -->
      <path d="M100 200 C100 100, 300 100, 400 100 C500 100, 700 100, 700 200 C700 300, 500 300, 400 300 C300 300, 100 300, 100 200" 
            stroke="currentColor" 
            fill="none" 
            stroke-width="2"
            class="text-[#FF1801]" />
      <!-- Road Course -->
      <path d="M400 100 C420 120, 450 150, 450 200 C450 250, 420 280, 400 300" 
            stroke="currentColor" 
            fill="none" 
            stroke-width="2"
            stroke-dasharray="4 4"
            class="text-[#FF1801]" />
    </svg>
  `,
  'Watkins Glen International': `
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200 100 L600 100 C650 100, 700 150, 700 200 L700 300 L600 300 L500 200 L300 200 L200 300 L100 300 L100 200 C100 150, 150 100, 200 100" 
            stroke="currentColor" 
            fill="none" 
            stroke-width="2"
            class="text-[#FF1801]" />
    </svg>
  `,
};

export function getTrackSvg(trackName: string): string | null {
  return tracks[trackName as keyof typeof tracks] || null;
}