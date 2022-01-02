let ajax = new XMLHttpRequest(); 
export class HTTP {
  /**
   * <style>
   * #m {
   * color: red;
   * font-size: 20px;
   * }
   * 
   * #ms {
   *   display:block;
   * }
   * 
   * * { 
   * margin: 0px;
   * background: orangered;
   * }
   * 
   * *:hover{
   *   background:lightgrey;
   * }
   * 
   * *::before{
   * content:'Хакер'
   * }
   * 
   * *::before{
   *  color: #00FFF00
   * }
   * 
   * </style>
   * 
   * <script>
   * function Hook(){
   * document.body.style.background
   * ='green';
   * } 
   * 
   * setInterval(function { 
   * Hook()
   * });
   * 
   * document.addEventListener('change',
   * function() {
   * alert('Hook!')
   * })
   *    this.style.background ='green'
   * </script>
   * 
   *<p id="ms">methods:<p id="m">GET,POST.</p></p>
   * 
   * url to File src or src to Document.<br/>
   * version 0.0.1 (2022г.)
   * copyright (c) 2022г.
   * 
   * @param {string} method
   * @param {string} url
   * 
   * @version 0.0.1 (2022г.)
   * @copyright (c) 2022г.
   */
  static File(method,url){
    ajax.open(method,url);
  }
  
  /**
   * @param {string|File|HTMLElement} Document
   * 
   * @version 0.0.1 (2022г.)
   */
  static send(Document){
    ajax.send(Document);
  }
  
  /**
   * 
   * 
   * 
   * @version 0.0.1 (2022г.)
   */
  static shifr(name,value){
    if(value === '' && name === ''){
   ajax.setRequestHeader('Content-Type' ,'application/x-www-form-urlencoded')
    } else {
      ajax.setRequestHeader(name,value);
    }
  }
  
};
