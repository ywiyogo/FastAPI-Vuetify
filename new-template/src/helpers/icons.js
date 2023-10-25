/**
 * This is helper file for svg icons.
 * Some font awesome icons are stored here in order to save size of the bundle.
 * Other icons are https://tablericons.com/ icons.
 */

const size = 22;

export default {
    Dashboard: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="3" y="12" width="6" height="8" rx="1" />
            <rect x="9" y="8" width="6" height="12" rx="1" />
            <rect x="15" y="4" width="6" height="16" rx="1" />
            <line x1="4" y1="20" x2="18" y2="20" />
        </svg>
    `,
    Charts: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="19" x2="20" y2="19" />
            <polyline points="4 15 8 9 12 11 16 6 20 10" />
        </svg>
    `,
    Components: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
    `,
    Forms: `
        <svg xmlns="http://www.w3.org/2000/svg"  class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <line x1="9" y1="9" x2="10" y2="9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
    `,
    Typography: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="18" cy="16" r="3" />
            <line x1="21" y1="13" x2="21" y2="19" />
            <path d="M3 19l5 -13l5 13" />
            <line x1="5" y1="14" x2="11" y2="14" />
        </svg>
    `,
    Tables: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="4" y1="10" x2="20" y2="10" />
            <line x1="10" y1="4" x2="10" y2="20" />
        </svg>
    `,
    Times: `
        <svg style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;" aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path data-v-f32e3862="" fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path>
        </svg>
    `,
    ChevronRight: `
        <svg style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;" aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path data-v-4b010c54="" data-v-084845ef="" fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path>
        </svg>
    `,
    ChevronLeft: `
        <svg style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;" aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path data-v-4b010c54="" data-v-084845ef="" fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class=""></path>
        </svg>
    `,
    ChevronDown: `
        <svg style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;" aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path data-v-18b7de2f="" data-v-a72c8de2="" fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""></path>
        </svg>
    `,
    UserCheck: `
        <svg style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;" aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path data-v-7f40ba36="" data-v-21c870c5="" fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" class=""></path>
        </svg>
    `,
    ChartPie: `
        <svg xmlns="http://www.w3.org/2000/svg"  width="${size}" height="${size}" class="stroke-default"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
          <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
        </svg>
    `,
    Facebook: `
        <svg xmlns="http://www.w3.org/2000/svg"  width="${size}" height="${size}" class="stroke-default"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
    `,
    Twitter: `
        <svg xmlns="http://www.w3.org/2000/svg"  width="${size}" height="${size}" class="stroke-default"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
        </svg>
    `,
    Reddit: `
        <svg xmlns="http://www.w3.org/2000/svg"  width="${size}" height="${size}" class="stroke-default"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
          <path d="M12 8l1-5 6 1" />
          <circle cx="19" cy="4" r="1" />
          <circle cx="9" cy="13" r=".5" fill="currentColor" />
          <circle cx="15" cy="13" r=".5" fill="currentColor" />
          <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
        </svg>
    `,
    YCombinator: `
        <svg xmlns="http://www.w3.org/2000/svg"  width="${size}" height="${size}" class="stroke-default"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 7.002l4 5.998l4 -6" />
          <line x1="12" y1="17" x2="12" y2="13" />
        </svg>
    `,
    Pinterest: `
        <svg xmlns="http://www.w3.org/2000/svg"  width="${size}" height="${size}" class="stroke-default"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="8" y1="20" x2="12" y2="11" />
          <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
          <circle cx="12" cy="12" r="9" />
        </svg>
    `,
    Users: `
        <svg xmlns="http://www.w3.org/2000/svg"  class="stroke-current"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
    `,
    Eye: `
        <svg xmlns="http://www.w3.org/2000/svg"  class="stroke-current"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="2" />
          <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
        </svg>
    `,
    Activity: `
        <svg xmlns="http://www.w3.org/2000/svg"  class="stroke-current"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 12h4l3 8l4 -16l3 8h4" />
        </svg>
    `,
    Cash: `
        <svg xmlns="http://www.w3.org/2000/svg"  class="stroke-current"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="7" y="9" width="14" height="10" rx="2" />
          <circle cx="14" cy="14" r="2" />
          <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
        </svg>
    `,
    ArrowUp: `
        <svg xmlns="http://www.w3.org/2000/svg"  class="stroke-current"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="17" y1="7" x2="7" y2="17"/>
            <polyline points="8 7 17 7 17 16"/>
        </svg>
    `,
}