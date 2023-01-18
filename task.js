import { Application } from '../node_modules/@splinetool/runtime/build/runtime.js';



const canvascool = document.getElementById('canvascool');
const app_cool = new Application(canvascool);
app_cool.load('https://prod.spline.design/cHYcy3yVGTYQT3kw/scene.splinecode');

// TASK EMOJI 3d
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/ahjKx5OFCLtVZl2f/scene.splinecode');

