function main() {
    Java.perform(function () {//只要是java的代码都要跑在Java.perform里面
        console.log("Entering Hook!")
        Java.use("com.example.junior.util.Utils").dip2px.implementation = function (context, float) {
            //return null;
            var result = this.dip2px(context, 100);
            console.log("context,float,result  ==> ", context, float, result);
            //智姐姐的打印调用栈
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
            return result;
        }
    })
}

function Screen() {
    Java.perform(function () {
        //overload表示setText有多个重载，需要选择指定参数类型的重载
        Java.use("android.widget.TextView").setText.overload('java.lang.CharSequence').implementation = function (text) {
            //'java.lang.CharSequence'本质上就是个string，我们这里把text替换掉

            //构造字符串
            var javaString = Java.use("java.lang.String");
            var newString = javaString.$new("roysue")
            
            var result = null;
            //这里text必须转成string才能作下面的indexof判断，text这里不是一个string
            var realText = String(text);

            //如果text包含junior就把他换成roysue字符串，否则不变
            if (realText.indexOf("junior") >= 0) {
                var result = this.setText(newString);
                console.log("text,result ==> ", newString, result);
            } else {
                var result = this.setText(text);
                console.log("text,result ==> ", text, result);
            }

            //打印调用栈
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
            return result;
        }
    })
}

// function Equals(){
//     Java.perform(function(){
//         Java.use("java.lang.String").equals.implementation = function(obj){
//             var result = this.equals(obj);
//             console.log("obj,result ==> ",obj,result);
//             return result;
//         }
//     })
// }

function sub(){
    Java.perform(function(){
        Java.use("com.example.junior.util.Arith").sub.overload('java.lang.String', 'java.lang.String').implementation = function(str1,str2){
            
            var javaString = Java.use("java.lang.String")
            
            //构造修改str2
            var result = this.sub(str1,javaString.$new("2"));
            console.log("str1,str2,result==>",str1,str2,result)
            return javaString.$new("10");
        }
    })
}

setImmediate(sub)