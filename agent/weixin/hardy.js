function key_b(){
    Java.perform(function (){
        var br_d= Java.use('com.tencent.mm.br.d');
        //打开列表页会触发b2,打开详情就会触发b1、b3(在b1内部调用了a,a又调用了b3);
        //打开详情的同时会触发产生com.tencent.mm.protocal.protobuf.bty实例；每次触发产生三个实例，实例对象的静态变量里含有key
        //所以只需要触发b1
        br_d.b.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent').implementation=function(context,str1,str2,intent){
            console.log("----------------------------------------b1-----------------------------------------")
            console.log("==>android.content.Context:",context);
            console.log("==>java.lang.String:",str1);
            console.log("==>java.lang.String:",str2);
            console.log("==>android.content.Intent:",decodeURIComponent(intent.toUri(256)));
            var ret=this.b(context,str1,str2,intent);
            return ret

        }

        br_d.b.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent', 'int').implementation=function(context,str1,str2,intent,num){
            console.log("----------------------------------------b2-----------------------------------------")
            console.log("==>android.content.Context:",context);
            console.log("==>java.lang.String:",str1);
            console.log("==>java.lang.String:",str2);
            console.log("==>android.content.Intentv:",decodeURIComponent(intent.toUri(256)));
            console.log("==>int:",num);
            var ret=this.b(context,str1,str2,intent,num);
            return ret
        }

        br_d.b.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent', 'android.os.Bundle').implementation=function(context,str1,str2,intent,bunble){
            console.log("----------------------------------------b3-----------------------------------------")
            console.log("==>android.content.Context:",context);
            console.log("==>java.lang.String:",str1);
            console.log("==>java.lang.String:",str2);
            console.log("==>android.content.Intent:",decodeURIComponent(intent.toUri(256)));
            console.log("==>android.os.Bundle:",bunble);
            var ret=this.b(context,str1,str2,intent,bunble);
            return ret
        }

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
        var url = "http://mp.weixin.qq.com/mp/getverifyinfo?__biz=MzUyNzc4Mzk3MQ==&type=reg_info#wechat_redirect"
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

function get_key(){
    var uin="";
    var key="";
    Java.perform(function(){
        Java.choose("com.tencent.mm.protocal.protobuf.bty",{
            onMatch:function(instance){
                //onMatch就是不断的搜出实例
                
                console.log('====>instance',instance)
                if(instance.voc.value=="X-WECHAT-UIN"){
                    console.log('==>uin',instance.zzJ.value)
                    uin=instance.zzJ.value
                }

                if(instance.voc.value=="X-WECHAT-KEY"){
                    console.log("==>key",instance.zzJ.value)
                    key=instance.zzJ.value
                }
                
            },
            onComplete:function(){
            }
        })

    })
    return [uin,key]
}

function main(){
    key_b();
    get_key();

}

// setImmediate(key_b)
rpc.exports={
    keyb:key_b,
    getkey:get_key

}