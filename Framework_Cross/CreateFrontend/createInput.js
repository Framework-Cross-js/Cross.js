
export function createInput({ 
  el: id,
  data: { 
    type: HTMLEl,
    typeElement : type, // type input.
    id : idEl, 
    Class : classEl,
    Attribute: nameAt, 
    valueAt : valueAt
  }
}){
  
  if(HTMLEl === undefined){
    let error = new SyntaxError();
    let errorHTMLEl = 'Ошибка при создании input.\n Причина: вы пропустили параметр type. \n это обязательный параметр при создании createInput().';
    error.message = errorHTMLEl; 
   throw error;
  }
  
  if(type === undefined){
    let error = new SyntaxError();
    let errorMs = 'Ошибка при создании input.\n Причина: вы пропустили параметр typeElement. \n это обязательный параметр при создании createInput().';
    error.message = errorMs; 
   throw error;
  }
  
  if(idEl === undefined){
    let error = new SyntaxError();
    let erroridEl = 'Ошибка при создании input.\n Причина: вы пропустили параметр id. \n это обязательный параметр при создании createInput().';
    error.message = erroridEl; 
   throw error;
  }
  
  /*if(data === undefined){
    let error = new SyntaxError();
    let errordata = 'Ошибка при создании input.\n Причина: вы пропустили целый конструктор data{} . \n это обязательный конструктор при создании createInput().';
    error.message = errordata; 
   throw error;
  }*/
  
  if(id !== ''){
   if( HTMLEl === 'input'){
    if(idEl !==  ' ' ){
     let input = document.createElement('input');
    if(classEl != ''){
     input.setAttribute('class',classEl);
    };
    
    input.setAttribute('id', idEl);
    input.setAttribute('type', type);
    
    if(type === 'email'){
      
    };
    
    if(type === 'text'){
    input.setAttribute('class', 'cross-input-front-text');
    };
    
    if(type === 'password'){
      
    };
    
    
    if(nameAt !== '' && valueAt != undefined){
     input.setAttribute(nameAt,valueAt);
    };
    
    if(id === undefined){
      document.body.appendChild(input);
    } else {
    document.getElementById(id).appendChild(input); 
    };
    //input.style = inputCSS ;
    }
   }
  }
  
};

export function createTemplate({
  el: idT,
  data: {
    id: idEl,
    Class : classEl,
  },
}){
  
  if(idEl === undefined){
    let error = new SyntaxError();
    let erroridEl = 'Ошибка при создании input.\n Причина: вы пропустили параметр id. \n это обязательный параметр при создании createInput().';
    error.message = erroridEl; 
   throw error;
  }
  
   if(idT === undefined){
    let tmp = document.createElement('template');
    let tmp1 = document.getElementById('template1');
    tmp.setAttribute('id',idEl);
    document.body.insertBefore(tmp,tmp1);
   } 
   
    if(idT !== ''){
    let tmp = document.createElement('template');
    let text = document.createTextNode('')
    tmp.appendChild(text);
    let tmp1 = document.getElementById('template1');
    tmp.setAttribute('id',idEl);
   // tmp.appendChild(tmp1);
   // document.getElementById(idT)
   } 
   
};

/*
new Content({
  el: elId,
  data: {
    id: idEl,
    Class : classEl,
  },
  Hook: {
    created: {
     change: function() {
     
     }
    }
  }
});
*/