/**
 * create component
 * @version 0.0.1
 * 1 Января 2022г.
 */
export function createComponents({
  name: nameComponent,
  valid : validComponent,
  Attribute : boolean,
  nameAtrribute : nameAt, 
  valueAtrribute : valueAt, 
  el : idEl
}){
  
if(nameComponent != undefined){
  
class validComponent extends HTMLElement{
  constructor(){
    super();
    
    this.outerHTML =
`<content id="cm" class="cross-component">
  <div id="TodoCm">
    <p>`+this.innerText+`</p>
  </div>
 </content>`
  }
}
   customElements.define(nameComponent,validComponent);
}
};


