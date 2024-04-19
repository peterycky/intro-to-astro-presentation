// import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
// import 'reveal.js/dist/theme/black.css';
import 'reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro.css';
import './theme.css'
import RevealNotes from 'reveal.js/plugin/notes/notes';
import Highlight from 'reveal.js/plugin/highlight/highlight';

import Reveal from 'reveal.js';

let prezi = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'fade',
  plugins: [
    RevealNotes,
    Highlight
  ],
  // dependencies: [
  //   { src: 'plugin/notes/notes.js' },
  //   { src: 'plugin/highlight/highlight.js' }
  // ]
});

prezi.initialize();

