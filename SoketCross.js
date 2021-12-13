// импортируем проверку на наличие 📤
import { sayHi } from './say.js';
// импортируем ядро фреймворка 📤
import { Cross } from './Cross.js'; 
// импортируем лаунчер для  запуска 📤
import { launcher } from './Cross.js';
// импортируем все для Ajax запросов 📤
import { HTTP } from '/Framework_Cross/ HTTPCross/HTTPCross.js';
//импортируем сreateInput для создания input 📤
import { createInput }             from  './Framework_Cross/CreateFrontend/createInput.js';


launcher.launcheroff();

// Ajax 
// пишем метод запроса и файл
let name = 'Фреймворк';
HTTP.File('GET','index.html'); 
name = 'BD:' + encodeURIComponent(name);
HTTP.shifr('Content-Type','application/x-www-form-urlencoded');
HTTP.send(name);
// Ajax end 


// попробуем создать input без new

createInput({ 
 // el: 'progress',
  data: {
   type: 'input', 
   id : 'text',
   typeElement: 'password',
   Class: 'anonimus'
  }
});

/*
можем так отправлять сообщения в консоль, вместо console.log() 
*/
Cross.message('container');
/*
запускаем, должна вывести в консоль таблицу
*/
Cross.launch();
/*
с помощью этой команды мы можем узнать что мы можем изменить в конфигурации.
*/
Cross.config();
// пример изменения цвета body,по умолчанию #95B46A
Cross.configuration('window','bgdocolor', '#95B46A');
// теперь попробуем изменить цвет текста, по умолчанию белый цвет текста.
Cross.configuration('window','color','white');
// напечатаем на экран текст
Cross.printLine('Hello Cross.js!');
Cross.printLine('Container');
// 📁 say.js
sayHi('Cross.js');