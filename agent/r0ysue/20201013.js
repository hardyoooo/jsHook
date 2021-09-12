function hook_HttpUrlConnection(){

    Java.perform(function(){
            // java.net.URL.URL  ($init) (得到URL)

        Java.use("java.net.URL").$init.overload('java.lang.String').implementation = function (str){
            var result = this.$init(str)
            console.log("result , str => ",result,str);
            return result;
        }

        //HttpURLConnection setRequestProperty 得到各种请求头、属性等
        Java.use("com.android.okhttp.internal.huc.HttpURLConnectionImpl").setRequestProperty.implementation = function(str1,str2){
            var result = this.setRequestProperty(str1,str2);
            console.log(".setRequestProperty result,str1,str2->",result,str1,str2);
            return result; 
        }

        Java.use("com.android.okhttp.internal.huc.HttpURLConnectionImpl").setRequestMethod.implementation = function(str1){
            var result = this.setRequestMethod(str1);
            console.log(".setRequestMethod result,str1,str2->",result,str1);
            return result; 
        }

        // 1. 动态查看类名 .$className gson // 查看方法在哪个类中


        // PrintWriter objection hook contents

    })

}
setImmediate(hook_HttpUrlConnection)