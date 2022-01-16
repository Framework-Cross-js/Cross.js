let log = console.log; 
let warn = console.warn;
let on;

let $ = function(id){ return document.getElementById(id) }

export class DeCode {
  number = {
    Controller : function(s){
    log(`//=> $cmd number code
    //=> number install..
    number start:`,this.case,`
   number render:`,on[0],`
   number end:`
   ,`\n //=> $cmd end`);
    },
    
    get case(){
      return this._number
    },
    
    set case(number){
      this._number = number;
     this.Controller(this._number);
    }, 
    
  }
  
  constructor(options){
    this.options = options;
  }
}
  
Object.prototype.ETN = (code,lang) => {
   on = new Array();
   on.unshift(code);
    warn('//=> $build start');
    let result;
    
    if(/[2-9]/.test(code) ){
      throw new Error().stack =`[Error]:`+`Вы использовали ненужные числа.`
    } else if(/[a-z]/.test(code) ){
      throw new Error().stack =`[Error]:`
      +`Запрещено использовать буквы.`
    };
  if(lang === 'en'){
   let result = code.replace(/01000001/g,'A').replace(/01000010/g, 'B').replace(/01000011/g,'C').replace(/01000100/g, 'D').replace(/01000101/g, 'E').replace(/01000110/g, 'F').replace(/01000111/g, 'G').replace(/01001000/g, 'H').replace(/01001001/g, 'I').replace(/01001010/g, 'J').replace(/01001011/g, 'K').replace(/01001100/g, 'L').replace(/00100000/g,'')
   
     log(result);
  }
  
};

/*
00100000 
01000011 A ✅
01000010 B ✅
01000011 C ✅
01000100 D ✅
01000101 E ✅
01000110 F ✅ 
01000111 G ✅ 
01001000 H ✅ 
01001001 I ✅ 
01001010 J ✅ 
01001011 K ✅ 
01001100 L ✅ 
01001101 M
01001110 N
01001111 O
*/

export function EncodeApp(el) {
  this.el = el;
  let elem = $(el).innerText;
  
  let result =
  elem.replace(/01000001/g,'A')
      .replace(/01000010/g, 'B').replace(/01000011/g,'C').replace(/01000100/g, 'D').replace(/01000101/g, 'E').replace(/01000110/g, 'F').replace(/01000111/g, 'G').replace(/01001000/g, 'H').replace(/01001001/g, 'I').replace(/01001010/g, 'J').replace(/01001011/g, 'K').replace(/01001100/g, 'L').replace(/00100000/g,'');
  
  $(el).innerHTML = result;

};
