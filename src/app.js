console.log('webpack hello!');

//import * as Cross from "./powerlevel.js";
let Cross = require('./powerlevel.js');

Cross.power();
new Cross.App('true');

new Cross.createApp({
    el: 'app',
    text: 'Framework Cross.js'
});

new Cross.createApp({
    el: 'ap',
    text: 'Framework Cross.js'
});

//new Cross.App('true');