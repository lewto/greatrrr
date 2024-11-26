export default `
<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Main Oval with thicker stroke -->
  <path d="M100 200 C100 100, 300 100, 400 100 C500 100, 700 100, 700 200 C700 300, 500 300, 400 300 C300 300, 100 300, 100 200" 
        stroke="currentColor" 
        fill="none" 
        stroke-width="4"
        class="text-[#FF1801]" />
  <!-- Road Course with thicker stroke -->
  <path d="M400 100 C420 120, 450 150, 450 200 C450 250, 420 280, 400 300" 
        stroke="currentColor" 
        fill="none" 
        stroke-width="4"
        stroke-dasharray="8 8"
        class="text-[#FF1801]" />
  <!-- Start/Finish Line -->
  <line x1="390" y1="100" x2="410" y2="100" 
        stroke="currentColor" 
        stroke-width="6"
        class="text-white" />
  <!-- Track Direction Indicator -->
  <path d="M250 200 L270 190 L270 210 Z" 
        fill="currentColor"
        class="text-[#FF1801]" />
</svg>`;