let ajax = new XMLHttpRequest(); 
export class HTTP {
  /**
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
   * @version 0.0.1 (2022г.)
   */
  static send(Document){
    ajax.send(Document);
  }
  
  /**
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
