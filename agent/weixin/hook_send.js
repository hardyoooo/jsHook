function hook_log(){
    // hook微信的日志模块
    Java.perform(function(){
        console.log("ready hooking Log!")
        var logClass = Java.use("com.tencent.mm.sdk.platformtools.ae");
        var Arrays = Java.use("java.util.Arrays")
        logClass.i.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation = function(str,str2,objArr){
            logClass.i(str,str2,objArr)
            console.log("Log i str=> ",str)
            console.log("Log i str2 => ",str2)
            console.log("Log i objArr",Arrays.toString(objArr))
            console.log("--------------------------------------------------------");
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
        };
        logClass.w.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation = function(str,str2,objArr){
            logClass.w(str,str2,objArr)
            console.log("Log w str=> ",str)
            console.log("Log w str2 => ",str2)
            console.log("Log w objArr",Arrays.toString(objArr))
        }
        logClass.d.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation = function(str,str2,objArr){
            logClass.d(str,str2,objArr)
            console.log("Log d str=> ",str)
            console.log("Log d str2 => ",str2)
            console.log("Log d objArr",Arrays.toString(objArr))
        }
    })
}

function hook_insert(){
    // hook收发消息以及接收最新公众号必经的插入函数
    Java.perform(function(){
        console.log("hook com.tencent.wcdb.database.SQLiteDatabase");
        var classSQLiteDatabase = Java.use("com.tencent.wcdb.database.SQLiteDatabase");
        classSQLiteDatabase.insertWithOnConflict.implementation = function(str,str2,contentValues,int){
            var result = this.insertWithOnConflict(str,str2,contentValues,int);
            console.log("classSQLiteDatabase str => ",str)
            console.log("classSQLiteDatabase str2 => ",str2)
            console.log("classSQLiteDatabase contentValues => ",contentValues)
            console.log("classSQLiteDatabase int => ",int)
            return result;
        }
    })
}

function hook_ayh(){
    Java.perform(function(){
        console.log("com.tencent.mm.sdk.platformtools.bu");
        var bu= Java.use("com.tencent.mm.sdk.platformtools.bu");
        bu.aYh.implementation = function(str){
            var result = this.aYh(str);
            console.log("aYh str => ",str)
            console.log('-------------------------------------------------------')
            console.log("-->ayh_str:",Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
            return result;
        }

    })
}

function hook_a(){
    Java.perform(function(){
        console.log("com.tencent.mm.storagebase.h");
        var st_h= Java.use("com.tencent.mm.storagebase.h");
        st_h.a.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(str,str2,contentValues){
            var result = this.a(str,str2,contentValues);
            console.log("storagebase.h str => ",str)
            console.log("storagebase.h str2 => ",str2)
            console.log("storagebase.h contentValues => ",contentValues)
            console.log('-------------------------------------------------------')
            console.log("-->throwable:",Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
            return result;
        }

    })
}


function hook_axe(){
    Java.perform(function(){
        console.log("com.tencent.mm.sdk.platformtools.bk");
        var st_h= Java.use("com.tencent.mm.sdk.platformtools.bk");
        st_h.aXE.overload('java.lang.String').implementation = function(str){
            var result = this.aXE(str);
            console.log("axe_str => ",str)
            console.log("hashmap_result => ",result.toString())
            console.log('-------------------------------------------------------')
            console.log("-->axe_str_traceback:",Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
            return result;
        }

    })
}

function follow(){
    Java.perform(function(){
        console.log("com.tencent.mm.ui.tools.b");
        var toolsb= Java.use("com.tencent.mm.ui.tools.b");
        toolsb.a.overload('com.tencent.mm.api.c', 'android.app.Activity', 'com.tencent.mm.storage.ar', 'boolean', 'int').implementation = function(cvar,activity,arvar,bool,int1){
            var result = this.a(cvar,activity,arvar,bool,int1);
            console.log("cvar => ",cvar)
            console.log("activity => ",activity)
            console.log("bool => ",bool)
            console.log("int1 => ",int1)
            console.log('-------------------------------------------------------')
            console.log("-->toolsb:",Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
            return result;
        }

    })
}

function unfollow(){
    Java.perform(function(){
        console.log("com.tencent.mm.ui.tools.b");
        var toolsb= Java.use("com.tencent.mm.ui.tools.b");
        toolsb.a.overload('com.tencent.mm.api.c', 'android.app.Activity', 'com.tencent.mm.storage.ar', 'boolean', 'int').implementation = function(cvar,activity,arvar,bool,int1){
            var result = this.a(cvar,activity,arvar,bool,int1);
            console.log("cvar => ",cvar)
            console.log("activity => ",activity)
            console.log("bool => ",bool)
            console.log("int1 => ",int1)
            console.log('-------------------------------------------------------')
            console.log("-->toolsb:",Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
            return result;
        }

    })
}

function unfollow2(){
    Java.perform(function(){
        console.log("com.tencent.mm.ui.tools.b");
        var toolsb= Java.use("com.tencent.mm.ui.tools.b");
        toolsb.a.overload('com.tencent.mm.api.c', 'android.app.Activity', 'com.tencent.mm.storage.ar', 'boolean', 'java.lang.Runnable','int').implementation = function(cvar,activity,arvar,bool,object,int1){
            var result = this.a(cvar,activity,arvar,bool,object,int1);
            console.log("cvar2 => ",cvar)
            console.log("activity2 => ",activity)
            console.log("bool2 => ",bool)
            console.log("object2 => ",object)
            console.log("int2 => ",int1)
            console.log('-------------------------------------------------------')
            console.log("-->toolsb2:",Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
            return result;
        }

    })
}


function key_b(){
    Java.perform(function (){
        var br_d= Java.use('com.tencent.mm.br.d');

        //主动调用com.tencent.mm.br.d.b
        var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
        var context = currentApplication.getApplicationContext();
        console.log('context',context);

        //#Intent;
        //launchFlags=0x20000000;
        //S.preChatName=wxid_hfvnsd0did0d22;
        //i.preChatTYPE=1;
        //S.rawUrl=http://mp.weixin.qq.com/mp/getverifyinfo?__biz=MzUyNzc4Mzk3MQ==&type=reg_info#wechat_redirect;
        //S.prePublishId=msg_717153965695453445;
        //B.key_enable_teen_mode_check=true;
        //i.geta8key_scene=0;
        //S.pre_username=wxid_hfvnsd0did0d22;
        //S.geta8key_username=wxid_hfvnsd0did0d22;
        //S.preUsername=wxid_hfvnsd0did0d22;
        //S.reportSessionId=SessionId@717153965695453445#170524283992117;
        //S.KPublisherId=msg_717153965695453445;end
        var intent=Java.use('android.content.Intent');
        var intent=intent.$new();
        var url = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIwODg1MjQ4OQ==&scene=124&uin=&key=&devicetype=Windows+10+x64&version=6302019a&lang=zh_CN&a8scene=1&fontgear=2"
        intent.putExtra("rawUrl",url)
        // intent.putExtra("preChatName","wxid_hfvnsd0did0d22")
        // intent.putExtra("preChatTYPE",1)
        // intent.putExtra("prePublishId","msg_717153965695453445")
        // intent.putExtra("key_enable_teen_mode_check",true)
        // intent.putExtra("pre_username",0)
        // intent.putExtra("geta8key_scene","wxid_hfvnsd0did0d22")
        // intent.putExtra("geta8key_username","wxid_hfvnsd0did0d22")
        // intent.putExtra("preUsername","wxid_hfvnsd0did0d22")
        // intent.putExtra("preUsername","wxid_hfvnsd0did0d22")
        // intent.putExtra("KPublisherId","msg_717153965695453445")
        // intent.addFlags(536870912)
        // br_d.b(context,'brandservice','.ui.timeline.preload.ui.TmplWebViewTooLMpUI',intent);
        br_d.b(context,'webview','.ui.tools.WebViewUI',intent);
    })
}

function hookEvent(){
    Java.perform(function(){
        Java.choose("android.view.View$ListenerInfo",{
            onMatch:function(instance){
                instance=instance.mOnClickListener.value;
                if(instance){
                    // console.log("mOnClickListener name is :"+getObjClassName(instance))
                    console.log("mOnClickListener name is :"+instance)
                    // watch(instance,'onClick')
                }
            },
            onComplete:function(){
                console.log("onComplete")

            }
        })
    })
}




// function main(){
//     hook_log()
//     hook_insert()
//     hook_a()
//     hook_ayh()
//     hook_axe()
// }


function main(){
    key_b()
    // unfollow()
    // unfollow2()
}





