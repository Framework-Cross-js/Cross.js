// импортируем ядро фреймворка 📤
import { Cross } from './Cross.js'; 
// импортируем все для Ajax запросов 📤
import { HTTP } from '/Framework_Cross/ HTTPCross/HTTPCross.js';
// импортируем терминал для cmd 📤
import { Terminal } from './Cross.js';

//import { createTemplate }  from './Framework_Cross/CreateFrontend/createInput.js';

// это полный  импорт для фронтендера 📤
import * as CreateFrontend from './Framework_Cross/CreateFrontend/createInput.js'; 

//launcher.launcheron();

new Terminal('terminal','on');

// Ajax 
// пишем метод запроса и файл
/*
let name = 'Фреймворк';
HTTP.File('GET','index.html'); 
name = 'BD:' + encodeURIComponent(name);
HTTP.shifr('Content-Type','application/x-www-form-urlencoded');
HTTP.send(name);
*/
// Ajax end 

CreateFrontend.createInput({
  data: {
   type: 'input', 
   id : 'text',
   typeElement: 'text',
   Class: 'anonimus'
  }
})

CreateFrontend.createTemplate({
  data: {
    id : 'textdanger'
  }
});
// попробуем создать template 
/*
createTemplate({
  data: {
    id : 'textdanger'
  }
})
*/

// попробуем создать input без new
CreateFrontend.createInput({ 
 //el: 'progress',
  data: {
   type: 'input', 
   id : 'text',
   typeElement: 'password',
   Class: 'anonimus'
  }
});

// попробуем создать input с Cross.js CSS.
CreateFrontend.createInput({ 
  el: 'progress',
  data: {
   type: 'input', 
   id : 'text',
   typeElement: 'text',
   Class: 'to-cross-input-success',
   Attribute: 'onclick', 
   valueAt: 'alert(1)',
   Attribute: 'onclick', 
   valueAt: 'alert(2)'//выведит именно 2
  }
});

/*
можем так отправлять сообщения в console
*/

Cross.message('container','warn');
Cross.message(typeof true); // boolean

//и ещё другие примеры:
let number = 1130403;
let typeT = 'Easy! Wohooot!! 😄';
Cross.message(1+number +': '+`${typeT}`);


/*
запускаем, должна вывести в консоль таблицу
*/
Cross.launch();
/*
с помощью этой команды мы можем узнать что мы можем изменить в конфигурации.
*/
Cross.config();
// пример изменения цвета body,по умолчанию darkorange
Cross.configuration('window','bgdocolor', '#95EFFE');
// теперь попробуем изменить цвет текста, по умолчанию белый цвет текста.
Cross.configuration('window','color','red');
// напечатаем на экран текст
Cross.printLine('Hello Cross.js!');
Cross.printLine('Container');

// Способы создания компонентов:
import * as Component from './Framework_Cross/Components/CrossComponents.js';
// Cross.js и html
Component.createComponents({
  name: 'cross-anonimus',
  valid: 'CrossAnonimus'
});

// Canvas
import {  Application } from './Framework_Cross/CrossApplication/CrossCanvas.js';

// попробуем нарисовать график 😄
//Application.Scense(340,220,'skyblue');
new Application(400,220, 'lightgrey');
// нарисуем линию
Application.start();
Application.drawLine(50,10,100,10);
// теперь попробуем нарисовать квадрат
Application.BoxGeometry(0,60,50,50);
Application.end();

import { CrossApp } from "./Cross.js";
new CrossApp()

let elem  = HTMLElement | null;
if(elem=document.getElementById('up')){
  elem.textContent = 'Hello World App!'
};


/*
class token {
  constructor(number){
    this.number = typeof Number;
    let NTF = number;
     this.TokenFabric();
      let tokenL = new Array(NTF);
       console.warn(tokenL);
  };
 
  TokenFabric(){
    console.log('Token fabric true');
  };
};

let tokenGlobal = new token();

function newToken(el = new token(this) ){
console.log('message:new token in true');

  console.info(el);
    tokenGlobal.TokenFabric();
};
newToken(550.151);
*/


let u = new Uint8Array([72,50,50,85]);
console.info(new TextDecoder().decode(u))

  navigator.clipboard.writeText('Hello Alligator!').then(() => {
    // Получилось!
  }).catch(err => {
 console.log('Something went wrong',err);
  });
  
  
