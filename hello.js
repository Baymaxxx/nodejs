function Hello(){
    var name;
    this.setName = function(thyName){
        name=thyName;
    };
    this.sayHello = function(){
        console.log("hello" + name);
    };
}
//(function(){
//    console.log(__dirname);
//})();
module.exports=Hello;