function hook_key() {
    Java.perform(function () {
        console.log("entering hook_key")
        var op_cls = Java.use("com.tencent.mm.protocal.protobuf.bty")  //获取java类
        var Arrays = Java.use("java.util.Arrays")
        op_cls.op.implementation = function (int1, objArr) {
            var result = this.op(int1, objArr);
            console.log("op参数1:", int1)
            console.log("op参数2:", Arrays.toString(objArr))
            if (objArr.length >= 1) {
                for (var i = 0; i <= objArr.length; i++) {
                    console.log("参数2循环", objArr[i]);
                }
            }
            console.log("result:", result)
            console.log('开始获取成员变量')
            var voc = this.voc.value
            var zzJ = this.zzJ.value
            console.log("voc => ", voc)
            console.log("zzJ => ", zzJ)
            console.log("================op函数end======================")
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
            return result;
        }
    })
}



function hook_readString() {
    Java.perform(function () {
        var clazz = Java.use("f.a.a.b.a.a")
        clazz.readString.implementation = function () {
            var result = this.readString();
            console.log("readString返回值：", result)
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
            // if (result.indexOf("X-WECHAT-KEY") >= 0) {
            //     console.log("readString返回值：", result)
            // }
            return result;
        }

    })
}

function hook_readString_fz() {
    Java.perform(function () {
        var clazz = Java.use("f.a.a.b.a.a")
        clazz.fz.implementation = function (int1) {
            console.log("fz param int1 => ", int1)
            var result2 = this.fz(int1)
            var ByteString = Java.use("com.android.okhttp.okio.ByteString");
            console.log("fz返回值 => ", ByteString.of(result2).hex())
            return result2;
        }
    })
}

// f.a.a.b.b.a
function hook_str() {
    Java.perform(function () {
        var clazz = Java.use("f.a.a.b.b.a")
        clazz.d.overload('int', 'java.lang.String').implementation = function (int1, str1) {
            console.log("f.a.a.b.b.a类d函数参数：", int1, str1)
            var result = this.d(int1, str1)
            console.log("f.a.a.b.b.a类d函数返回值：", result)
            return result;
        }
    })
}

function hook_parseFrom() {
    Java.perform(function () {
        var cls = Java.use("com.tencent.mm.bw.a")
        cls.parseFrom.implementation = function (bArr) {
            var ByteString = Java.use("com.android.okhttp.okio.ByteString");

            console.log("hook parseFrom 参数 => ", ByteString.of(bArr).hex())
            var result = this.parseFrom(bArr);
            console.log("parseFrom函数 return => ", result)
            return result;
        }
    })
}

function hook_construct() {
    // hook构造方法
    Java.perform(function () {
        console.log("hook f.a.a.a.a构造方法")
        var a = Java.use("f.a.a.a.a");
        var Arrays = Java.use("java.util.Arrays")
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        const gson = Java.use('com.r0ysue.gson.Gson');
        var ByteString = Java.use("com.android.okhttp.okio.ByteString");
        // console.log("list is => ", gson.$new().toJson(objArr))
        a.$init.implementation = function (bArr, bArr_len) {

            console.log("参数列表：", ByteString.of(bArr).hex(), Arrays.toString(bArr_len));
            this.$init(bArr, bArr_len);
        }
    });
}

function hook_a() {
    Java.perform(function () {
        var d_cls = Java.use("com.tencent.mm.br.d");
        d_cls.a.overload('java.lang.String', 'com.tencent.mm.br.a', 'com.tencent.mm.br.b').implementation = function (str1, a_cls, b_cls) {
            console.log("a函数参数1: str1 => ", str1)
            console.log("a函数参数2: a_cls=> ", String.valueOf(a_cls))
            console.log("a函数参数3： b_cls => ", String.valueOf(b_cls))
            var result = this.a(str1, a_cls, b_cls);
            console.log("a函数返回值 result => ", String.valueOf(result))
            return result;
        }
    })
}

function hook_anymous() {
    // hook匿名内部类
    Java.perform(function () {
        var d = Java.use("com.tencent.mm.br.d$9")
        d.$init.implementation = function (str1, str2, intent, content, bundle) {
            console.log("successful")
            d.$init(str1, str2, intent, content, bundle)
        }
        d.onDone.implementation = function () {
            console.log("ttt")
        }

    })
}


function hook_b() {
    Java.perform(function () {
        var d_clz = Java.use("com.tencent.mm.br.d");
        d_clz.b.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent').implementation = function (context, str1, str2, intent) {
            console.log("hooking b1 param=>['android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent']")
            console.log("b1 param context=> ", context)
            console.log("b1 param str1=> ", str1)
            console.log("b1 param str2=> ", str2)
            // console.log("b1 param intent => ", intent)
            console.log("b1 param intent => ",decodeURIComponent(intent.toUri(256)))
            console.log("----------------b1 end-----------------------")
            this.b(context, str1, str2, intent)
        }
        d_clz.b.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent', 'int').implementation = function (context, str1, str2, intent, int1) {
            console.log("hooking b2 param=>['android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent', 'int']")
            console.log("context => ", context)
            console.log("str1 => ", str1)
            console.log("str2 => ", str2)
            console.log("intent => ", intent)
            console.log("b1 param intent => ",decodeURIComponent(intent.toUri(256)))
            console.log("int1 => ", int1)
            console.log("----------------b2 end-----------------------")
            this.b(context, str1, str2, intent, int1)
        }
        d_clz.b.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent', 'android.os.Bundle').implementation = function (context, str1, str2, intent, bundle) {
            console.log("hooking b3 param=>['android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent', 'android.os.Bundle']")
            console.log("b1 param context => ", context)
            console.log("b1 param str1 => ", str1)
            console.log("b1 param str2 => ", str2)
            // console.log("b1 param intent => ", intent)
            console.log("b1 param intent => ",decodeURIComponent(intent.toUri(256)))
            console.log("b1 param bundle => ", bundle)
            console.log("------------------b3 end---------------------")
            this.b(context, str1, str2, intent, bundle)
        }
    })
}

function heartbeat() {
    Java.perform(function () {
        var AppMethodBeat = Java.use("com.tencent.matrix.trace.core.AppMethodBeat")
        AppMethodBeat.i.implementation = function (methodCode) {
            console.log("[Start call]", methodCode)
            var ret = this.i(methodCode)
            return ret;
        }
    })
    AppMethodBeat.o.implementation = function (methodCode) {
        var ret = this.o(methodCode)
        console.log("[End call]", methodCode)
        return ret
    }
}


var instance1 = null;
Java.perform(function () {
    Java.choose("com.tencent.mm.plugin.brandservice.c", {
        onMatch: function (instance) {
            instance1 = instance
            console.log("found com.tencent.mm.plugin.brandservice.c => ", instance1)
        }, onComplete() { }
    })
})



function invoke() {
    // hook com.tencent.mm.plugin.brandservice.ui.timeline.preload.k
    var KEY = null;
    var UIN = null;
    console.log("entering invoke")
    Java.perform(function () {
        //     var k_cls = Java.use("com.tencent.mm.plugin.brandservice.ui.timeline.preload.k")
        //     k_cls.a.overload('android.content.Context', 'android.content.Intent', 'com.tencent.mm.protocal.protobuf.ctk', 'boolean', 'java.lang.String', 'java.lang.String').implementation = function(context, intent, ctk, bool, str, str2){
        //         console.log("k参数context => ",context)
        //         console.log("k参数intent => ",intent)
        //         console.log("k参数ctk => ",ctk)
        //         console.log("k参数bool => ",bool)
        //         console.log("k参数str => ",str)
        //         console.log("k参数str2 => ",str2)
        //         this.a(context,intent,ctk,bool,str,str2)


        //     }

        // com.tencent.mm.plugin.brandservice.c
        var brandservice_cls
        var brCls;
        // com.tencent.mm.plugin.brandservice.c
        Java.choose("com.tencent.mm.plugin.brandservice.c", {
            onMatch: function (instance) {
                instance1 = instance
                console.log("com.tencent.mm.plugin.brandservice.c => ", instance1)
                brandservice_cls = instance;
                console.log("brandservice_cls => ", brandservice_cls)
            }, onComplete() { }
        })
        // com.tencent.mm.br.d
        Java.choose("com.tencent.mm.br.d", {
            onMatch: function (instance) {
                brCls = instance
                console.log("com.tencent.mm.br.d => ", instance1)
                brandservice_cls = instance;
                console.log("brCls => ", brandservice_cls)
            }, onComplete() {}
        })

        /**
         * Class class_d = XposedHelpers.findClass("com.tencent.mm.br.d", classLoader);
            Intent intent = new Intent();
            intent.putExtra("rawUrl", url);
            intent.addFlags(536870912);
            //  传递intent，以便后续startActivity
            XposedHelpers.callStaticMethod(class_d, "b", activity, "webview", ".ui.tools.WebViewUI", intent);
         * 
         * 
         * 
         */
        // com.tencent.mm.plugin.profile.ui.ContactInfoUI@12a3bd2, http://mp.weixin.qq.com/s?__biz=MzA3Mzk3MTU0Mw==&mid=2247484748&idx=1&sn=fffe6d72cc6a92a5669f132f7f4b1d30&chksm=9f07a774a8702e62366c5879aab98902c338cb4503e4e7dfa703bfc856b21e4f37f7c80a443b&&&sessionid=0&scene=126&subscene=0#rd, (none), 126, 10000, Intent { (has extras) }
        var url = "http://mp.weixin.qq.com/mp/getverifyinfo?__biz=MzUyNzc4Mzk3MQ==&type=reg_info#wechat_redirect"
        var String_class = Java.use("java.lang.String")
        var context = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext();
        var Intent = Java.use("android.content.Intent")
        var intent = Intent.$new()
        intent.putExtra("rawUrl",url)
        intent.addFlags(536870912)
        // brandservice_cls.a(context, String_class.$new("http://mp.weixin.qq.com/s?__biz=MzA3Mzk3MTU0Mw==&mid=2247484748&idx=1&sn=fffe6d72cc6a92a5669f132f7f4b1d30&chksm=9f07a774a8702e62366c5879aab98902c338cb4503e4e7dfa703bfc856b21e4f37f7c80a443b&&&sessionid=0&scene=126&subscene=0#rd"), 1, 126, 10000, intent)
        Java.use("com.tencent.mm.br.d").b(context,"webview",".ui.tools.WebViewUI",intent)
        var op_cls = Java.use("com.tencent.mm.protocal.protobuf.bty")  //获取java类

        Java.perform(function () {
            console.log("success")
            Java.choose("com.tencent.mm.protocal.protobuf.bty", {
                onMatch: function (instance) {
                    instance1 = instance
                    console.log("found com.tencent.mm.protocal.protobuf.bty => ", instance1)
                    var voc = instance.voc.value  // 键
                    var zzJ = instance.zzJ.value  // 值
                    console.log("voc => ", voc)
                    console.log("zzJ => ", zzJ)
                    if (voc == "X-WECHAT-KEY") {
                        KEY = zzJ
                    } else if (voc == "X-WECHAT-UIN") {
                        UIN = decodeURIComponent(zzJ)
                    } else {
                        console.log("暂不需要")
                    }

                }, onComplete() {
                }
            })

        })


        // op_cls.op.implementation = function (int1, objArr) {
        //     var result = this.op(int1, objArr);
        //     console.log('开始获取成员变量')
        //     var voc = this.voc.value
        //     var zzJ = this.zzJ.value
        //     console.log("voc => ",voc)
        //     console.log("zzJ => ",zzJ)
        //     return result;
        // }
        // })
        console.log("KEY:",KEY)
        console.log("UIN:",UIN)
        // console.log("key:%s\tuin:%s"%(KEY,UIN))
    })
    return KEY,UIN
}



function hook_intent() {
    Java.perform(function () {
        var cls = Java.use("com.tencent.mm.plugin.brandservice.c")
        console.log("hook intent => ")
        cls.a.overload('android.content.Context', 'java.lang.String', 'int', 'int', 'int', 'android.content.Intent').implementation = function (context, str, i2, i3, i4, intent) {
            console.log("a参数context => ", context)
            console.log("a参数str => ", str)
            console.log("a参数i2 => ", i2)
            console.log("a参数i3 => ", i3)
            console.log("a参数i4 => ", i4)
            console.log("a参数intent => ", intent)
            this.a(context, str, i2, i3, i4, intent)
            console.log("====================================")
            console.log(decodeURIComponent(intent.toUri(256)))

            console.log("====================================")
        }
    })

}

function main() {
    hook_b()
    invoke()
}
// setImmediate(main)