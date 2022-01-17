import { DeCode, EncodeApp } from './Binary/ES6/Scripts/module/binary.js';

let DCN = new DeCode();
let NumberToken = '010000110010000001000001 '; // CAD
DCN.ETN(NumberToken,'en');
DCN.number.case = NumberToken; 

new EncodeApp('app');
    //"give ASCII" : "echo \"ASCII\" " 
 
(function profile(){
let arg = prompt('have profile?')
  if(arg === 'yes') alert('oohh')
   else alert(arg)
}());



