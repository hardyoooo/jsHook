function aes_cbc(){
    Java.perform(function (){
        var util_aa= Java.use('com.founder.product.util.a.a');
        //打印数组用java.util.Arrays类，重载时的参数时'[B'
        var arr =Java.use("java.util.Arrays");
        util_aa.a.implementation=function(passwdarr){
            console.log("----------------------------------------passwd-----------------------------------------")
            console.log("==>passwd aes:",arr.toString(passwdarr));
            var ret=this.a(passwdarr);
            console.log("==>ret:",ret)
            return ret
        }
    })
}

function main(){
    aes_cbc();
}