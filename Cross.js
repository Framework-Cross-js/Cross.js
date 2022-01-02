// Framework Cross.js
const string = class String {};
let val = new string();
let bgdocolor = 'darkorange';
document.body.style.background=bgdocolor;

export class Cross {
  /**
   * существует много вариантов параметров с type (message, info,error, warn, clear).
   * 
   * @param {Element|string|number|boolean|void} message
   * в message тоже можно писать Array и Object.
   * @param {string} type
   * type: `message,imfo,warn,error,clear`
   * 
   * 
   * 2022г. 1 Января. 
   */
  static message(message, type) {
   
    if (type === undefined) {
      console.log(message);
    };
    if (type === 'message') {
      console.log(message);
    };
    if (type === 'info') {
      console.info(message);
    };
    if (type === 'error') {
      console.error(message);
    };
    if (type === 'warn') {
      console.warn(message);
    };
    if (type === 'clear') {
      console.clear();
    };
    
    if(typeof message === 'array'){
      JSON.parse(JSON.stringify(this))
    };
    if(typeof message === 'object'){
      JSON.parse(JSON.stringify(this))
    };
    
  };

  console = {
    clear: function() {
      console.clear();
    }
  };
  /**
   * @version 0.0.1
   * 1 Января 3022г.
   */
  static launch() {
   console.log('%c launch work 🐺    ', 'color: white; border-radius: 2px; width:200px; height:50px;font-size:20pt;background-color:darkorange');
document.body.style.background=bgdocolor;
   //document.DOCUMENT_POSITION_FOLLOWING
   let text = 'launch on ✔️';
   console.log(`%c 🐺 ${text}`,'color:white;border-radius:2px;width:200px;height:50px;font-size:20pt;background-color:darkorange');
    console.table(tabularInfo);
  }

  /**
   * @version 0.0.1
   * 1 Января 2022г.
   */
  static config() {
    console.table(tabularConfig);
  }
  
  /**
   * @param {string|number} message
   * 
   * @version 0.0.1
   * 1 Января 2022г.
   */
  static printLine(message) {
    let Ln = document.createElement('p');
    let msLine = document.createTextNode(message);
    Ln.appendChild(msLine);
    let Ln1 = document.getElementById('p1');
    document.body.insertBefore(Ln, Ln1);
  }

  /**
   * @param {string} doc
   * 
   * @version 0.0.1
   * 1 Января 2022г.
   */
  static configuration(doc, parametr, options) {
    if (doc === 'window') {
      if (parametr === 'bgdocolor') {
        document.body.style.background = options;
      } else if (parametr === 'color') {
        document.body.style.color = options;
      }
    }
  }
};

let Microsoft = {
  'soft': 'Microsoft',
  'Copyright': '2021-2022'
}
let tabularInfo = {
  "type": "Cross.js The Progressive JavaScript Framework",
  "language": "Cross",
  "soft": Microsoft,
  "rashirenie": ".js"
}

let tabularConfig = {
  'document': {
    'background-color': bgdocolor,
    'cookie': 'true',
    'type': 'active'
  },
  'component': { 'type': 'active' },
  'compiler': { 'type': 'defined' }
}


export function Terminal(type, active, time) {
  this.type = type;
  this.active = active;
  if (type === 'terminal') {
    if (active === 'on') {
      if (active != undefined) {

      }
    }
  }
};


class CrossCommands extends HTMLElement {
  constructor(){
    super()
    let welcome = 'Cross.js';
    this.innerText = welcome;
    this.setAttribute('id','application')

    if (this.hasAttribute("color")) {
      this.style.color = this.getAttribute("color");
    }

    let id=document.getElementById(this);

    if (this.hasAttributes(`{{ ${id} }}`)) {
      let message = 'launch';
      this.innerText = message
    }

  }
};


let TIME = ((e) => {
  if (e === undefined) {
    setInterval(function() {
      this.innerText = new Date().toLocaleString()
    }, 1000)
  }
});

class CrossTimezone extends HTMLElement {
  constructor(){
    super()
  }
};

customElements.define("cross-timezone", CrossTimezone);
customElements.define("cross-commands", CrossCommands);

export class CrossApp {
  /**
   * @version 0.0.1
   */
  constructor(options){
    if (!new.target){
    return false;
    throw new Error('not Failed App')
    } 
  
    if(typeof options === 'object'){
      if(options.el != undefined){
        
      }
    }
  }
  
  
}


