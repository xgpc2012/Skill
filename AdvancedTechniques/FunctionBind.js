/**
 * Created by pc on 2017/9/12.
 */

//函数绑定：绑定上下文环境
function bind(fn, context){
    return function(){
        return fn.apply(context, arguments);
    };
}
//bind函数返回一个函数 该函数执行时绑定了context的上下文环境
//IE9+支持原生的bind方法

//函数柯里化
function curry(fn){
    //初始参数
    var args=Array.prototype.slice.call(arguments,1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        //
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}