import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Collapse from 'bootstrap/js/dist/collapse';
import * as AnchorJS from 'anchor-js';
// import * as Turbo from '@hotwired/turbo';

import 'bootstrap';

import './slider-toggle';

import './bootstrap-toc';

// window.Turbo = Turbo;
window.Collapse = Collapse;

const anchors = new AnchorJS();
anchors.add('h1:not(.title)', 'h2', 'h3', 'h4', 'h5', 'h6');

// document.addEventListener('turbo:load', () => {
//   anchors.add();
// });

library.add(fas, far, fab);

dom.watch();
