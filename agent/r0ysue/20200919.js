function staticField(){
    Java.perform(function(){
        var Arith = Java.use("com.example.junior.util.Arith");
        var divscale = Java.use("com.example.junior.util.Arith").DEF_DIV_SCALE.value;
        console.log("divscale is => ",divscale);
        //可以改静态变量
        Java.use("com.example.junior.util.Arith").DEF_DIV_SCALE.value = 20;
        console.log("divscale is => ",Java.use("com.example.junior.util.Arith").DEF_DIV_SCALE.value);

        //主动调用add方法（静态的方法是可以直接调用的）
        var addResult = Arith.add("1","1");
        console.log("addResult is => ",addResult);
        var addResult2 = Arith.add("999999999999999","4");
        console.log("addResult2 is => ",addResult2);

    })
}

//打印设备指纹，还可以修改
function fingerPrint(){
    Java.perform(function(){
        //静态主动调用
        var BUILD = Java.use("android.os.Build");
        BUILD.DEVICE.value = "sailfish";
        console.log("DEVICE IS =>",BUILD.DEVICE.value)
        console.log("ID IS =>",BUILD.ID.value)
        console.log("MODEL IS =>",BUILD.MODEL.value)
        console.log("SERIAL IS =>",BUILD.SERIAL.value)
        // console.log("SERIAL IS =>",BUILD.getSerial());
        console.log("sdk IS =>",BUILD.getString("ro.build.version.sdk"));

        //动态主动调用
        Java.choose("com.example.junior.CalculatorActivity",{
            //instance就是实例，多个实例就会多次打印
            // onMatch就是不断的搜出实例进行循环
            onMatch:function(instance){
                console.log("found instance =>",instance);
                console.log("instan showText is => ",instance.clear("456"));
                console.log("instan showText value is => ",instance.showText.value);
            },onComplete:function(){
                //onConmplete就是搜索结果
                console.log("Search Complete!")
            }
        })
        
    })
}

function subCommand(){
    Java.perform(function(){
        // input keyevent 4表示退回
        var process = Java.use("java.lang.Runtime").getRuntime().exec("input keyevent 4");
        console.log("subcommand success process is :",process)        
        var process = Java.use("java.lang.Runtime").getRuntime().exec("kill "+process.pid.value);
        var process = Java.use("java.lang.Runtime").getRuntime().exec("reboot");
    })
}

//导出函数的前面一定是小写，不能大写
rpc.exports = {
    subcommand: subCommand,
    fingerprint : fingerPrint
};


setImmediate(fingerPrint)
