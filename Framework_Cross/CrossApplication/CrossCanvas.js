export class Application {

  constructor(widthcv,heightcv,color){
    this.widthcv = widthcv;
    this.heightcv = heightcv;
    
    this.application();
    
    if(heightcv != undefined){
      canvasGlobal.height = heightcv;
    };
    
    if(widthcv != undefined){
      canvasGlobal.width = widthcv;
    };
    
    if(color != undefined){
    canvasGlobal.style.background = color;
    };

  };
  
  application(){
  const div=document.createElement('div');
  const canvasLocal = canvasGlobal;
 
  ctx.mozImageSmoothingEnabled = false;
 ctx.webkitImageSmoothingEnabled = false;
 ctx.msImageSmoothingEnabled = false;
 ctx.imageSmoothingEnabled = false;
 ctx.shadowBlur = false;
 ctx.imageSmoothingQuality = 'high';

 canvasLocal.style.background = 'white';
 canvasLocal.style.display = 'block';
 div.appendChild(canvasLocal);
  const div1=document.getElementById('div1' );
  document.body.insertBefore(div,div1)
  }
  
  static start(){
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  };
 
  static drawLine(x1, y1, x2, y2){
   //ctx.moveTo(x1, y1);
   ctx.lineTo(x1, y1);
   ctx.lineTo(x2, y2);
  };
 
  static BoxGeometry(x, y, w, h) {
   ctx.rect(x, y, w, h);
  };
 
  static MeshPhongMaterial({color:color}){
   this.color = color;
   ctx.fillStyle = color;
  };
 
  static Mesh(geometry, material){
   let g = this.geometry = geometry;
   let m =this.material= String(material);
  };
 
  static end(){
   ctx.stroke();
   ctx.fill();
   ctx.closePath();
  };
  
    
};


const canvasGlobal = document.createElement('canvas');
canvasGlobal.id = 'canvasHolst';
let canvas = document.getElementById('canvasHolst');
let ctx = canvasGlobal.getContext("2d");