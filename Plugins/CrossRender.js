function Log(message){
    this.message = message;
    typeof message in Array | Object | Number
    if(typeof message === 'number')
        console.log('TOKEN NUMBER.', eval(message))
    else
        console.log(message);
};

Array.prototype.create = (items) => { compilerArray = new Array(items); }
(Object || Array).prototype.parsing = function(){ return Object.keys(this), JSON.parse(JSON.stringify(this)) /* end return*/ }

/**
 * Create Plugin Array
 * @param {array} params 
*/
function ModuleArraySyntax(params, count){
    this.params = [params][0];
    this.count = [count][0];

    typeof params in Number | Array;
    typeof count in Number;

    let compilerArray;
    const compiler = new Array(count);
    params.forEach(function(item, index, array){
        function run(){
            const VALUE = 'VALUE: ' + item;
            const INDEX = 'INDEX: ' + index;
            const ARRAY = 'ARRAY: ' + array;
            new Log(INDEX +'  /////  '+ VALUE +'  /////  '+ ARRAY);
        };
        return run();
    });
    new Log(compiler);
    new Log('LENGHT: ' + compiler["length"]);

};

let arr = [1,2,4,8];
const PlugArray = new ModuleArraySyntax(arr,5)
console.log(PlugArray)
new Log(arr.parsing(arr));

let obj = {
    name: 'Aidar',
    age: 24
};

new Log(obj.parsing(obj));