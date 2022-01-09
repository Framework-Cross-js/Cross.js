console.log('webpack hello!');

//import * as Cross from "./powerlevel.js";
//new Cross.App('true');
// /powerlevel.js
let Cross = require('./powerlevel.js');
let func = () => console.log("hi"); 
func.repeat(5);
new Cross.power().repeat(5);

new Cross.App('true');

new Cross.createApp({
    el: 'app',
    text: 'Framework Cross.js'
});

new Cross.createApp({
    el: 'ap',
    text: 'Framework Cross.js'
});