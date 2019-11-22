// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: ["@babel/preset-env"],
    only: [
        // File paths that **don't** match this regex are not compiled
        /server.js/,
    ],
});


const { setConfig } = require('next/config');
setConfig(require('./next.config'));

// Import the rest of our application.
require('./server');
