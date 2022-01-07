console.log('webpack hello!');

let Cross = require('./powerlevel.js');

Cross.power();
new Cross.Cross('true');
new Cross.createApp({
    el: 'app',
    text: 'Cross.js'
});