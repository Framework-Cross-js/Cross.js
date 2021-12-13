// Framework Cross.js
const string = class String{};
let val = new string();
const message = String;
let bgdocolor = 'darkorange';
document.body.style.background=bgdocolor;

export class Cross {
  static message(message){
    console.log(message)
  }
  static launch(){
    console.log('%c launch work 🐺    ','color: white; border-radius: 2px; width:200px; height:50px; font-size:20pt; background-color: #95B46A');
 document.body.style.background='#95B46A';
  document.cookie ="user=name; max-age=5";
  //document.DOCUMENT_POSITION_FOLLOWING
  }
  static config(){
    //console.table(tabularInfo);
    console.table(tabularConfig);
  }
  
  static printLine(message){
   let Ln = document.createElement('p');
   let msLine = document.createTextNode(message);
   Ln.appendChild(msLine);
   let Ln1 =document.getElementById('p1');
   document.body.insertBefore(Ln,Ln1); 
  }
  
  static configuration(doc,parametr,options){
    if(doc === 'window'){
     if(parametr === 'bgdocolor'){
      document.body.style.background = options;
     }else if(parametr === 'color'){
      document.body.style.color = options;
     } 
    }
  }
};

let Microsoft = {
'soft':'Microsoft','Copyright':'2021-2022'
}
let tabularInfo = {
  "type" : "Cross.js lang progress programm",
  "language" : "Cross", 
  "soft" : Microsoft, 
  "rashirenie" :".js"
}

let tabularConfig = {
  'document' : {
    'background-color' : bgdocolor , 
    'cookie' : 'true',
    'type' : 'active'
  },
  'component' : { 'type' : 'active' },
  'compiler' : { 'type' : 'defined' }
}

export class launcher {
  static launcheroff(){
    
    void analog;
    analogpin = true;
    void analog(true);
    analog(true);
   
    let text = 'launch on ✔️';
    if(analogpin === true || analogpin !== undefined){
    console.log(`%c 🐺 ${text}`,'color: white; border-radius: 2px; width:200px; height:50px; font-size:20pt; background-color: #95B46A');
    };
  }
};


function analogpin(){
  console.log('launch function work.');
};

function analog(e){
analogpin = e;
};
analog();

if(analogpin === false ){
  let error = new SyntaxError();
  error.stack = false;
  error.message = '<p style="color:white">launch off ✖️</p>\n\bFailed to load resourse: net : : ERR_FAILED_OFF \n\b Cors policy: launch to on true.\n\b<strong>BLOCKED FRAMEWORK CROSS.JS</strong>\n\b <strong style="color:darkorange">BLOCKED FRAMEWORK CROSS.JS</strong>\n Введите команду для запуска: <code lang="javascript">launcher.launcheroff();</code>';
 throw error;
}