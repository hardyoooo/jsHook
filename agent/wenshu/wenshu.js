

function hook_wenshu(){
    Java.perform(function () {
        var lawyee = Java.use("com.lawyee.wenshuapp.a.a");
        lawyee.a.overload('java.lang.String', 'java.lang.String').implementation = function (str1, str2) {
            console.log('param str1: ', str1);
            console.log('param str2: ', str2);
            var ret = this.a(str1, str2);
            console.log("ret: ", ret);
            return ret;
        }
    });
    Java.perform(function () {
        var ByteString = Java.use("com.android.okhttp.okio.ByteString");
        var lawyee = Java.use("com.lawyee.wenshuapp.util.c$a");
        
        lawyee.$init.implementation = function(bArr) {
            // console.log("lawyee.b:", ByteString.of(bArr).hex());
            console.log("pararm:",bArr)
    
            return this.$init(bArr);
            // console.log("j.a:", ByteString.of(bArr).hex());
            // ret=this.$init(bArr);

            // return ret;
        };
    });
}

setImmediate(hook_wenshu)

