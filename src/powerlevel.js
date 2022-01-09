let power = function power(err){
  callback = (err) => { console.log('wow!'+ [err] ); };
  
  onfulfilled = () => { setTimeout(() => resolve("result"), 1000);  setTimeout(() => resolve( err ), 1000); };
  onrejected = () => { setTimeout(() => reject( new Error('[solved]: '+ [callback] + 'ES8 Node.js require() not function() /n ERROR' ) ), 1000); };

  new Promise( (resolve, reject) => callback()  ).then([onfulfilled],[onrejected]);
  // onfulfilled - выполнено. onrejected - нет или ошибка.
  /*
  onFulfilled – срабатывают, когда promise в состоянии «выполнен успешно».
  onRejected – срабатывают, когда promise в состоянии «выполнен с ошибкой».
  */
};

let $ = function(id){ return document.getElementById(id) };

class createApp {
  constructor({ el: HTMLElement, text: HTMLText }){
    if(!new.target){
      return new createApp({ el: HTMLElement, text: HTMLText });
    };
    console.log('createApp');
    this.HTMLElement = HTMLElement;
    this.HTMLText = HTMLText;
    (document.getElementById(HTMLElement) || $(HTMLElement) ).innerHTML = HTMLText;
  };
}(Window.prototype = void this | window);

class Cross {
  constructor(create){
    this.create = create;
    if(create === 'true'){ console.log('Cross.js Webpack and createApp work!'); }
  }
};

/** Вы можете использовать эту cmd  Function.prototypeдля удобства. повторять несколько раз ту иную функцию */
Function.prototype.repeat = (count) => {
  if(count != undefined){
    for (; count --> 0;) {
      console.log("l")
    }
  }
};

power.prototype.repeat = function(count){
  if(count != undefined){
    for (; count --> 0;) {
      console.log("2")
    }
  }
}

module.exports = {
  // key or props : value
  power,// : power,
  App : Cross,
  createApp : createApp,
};