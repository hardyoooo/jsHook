function hook_Hash() {
    Java.perform(function () {
        var RequestUtils = Java.use('com.shizhuang.duapp.common.utils.RequestUtils');
        RequestUtils.a.overload('java.util.Map', 'long').implementation = function (map, str) {
            console.log("hooking RequestUtils.a ")
            var sig = {};
            var keyset = map.keySet();
            var iter = keyset.iterator();
            while (iter.hasNext()) {
                var key = iter.next().toString();
                var value = map.get(key).toString();
                console.log("key,value => ", key, value)
                sig[key] = value
            }
            var result = this.a(map, str)
            console.log("str,result => ", str, result)
            console.log("json", JSON.stringify(sig))
            return result
        }

        RequestUtils.b.implementation = function (map, int) {
            console.log("hooking RequestUtils.b ")
            var sig = {};
            var keyset = map.keySet();
            var iter = keyset.iterator();
            while (iter.hasNext()) {
                var key = iter.next().toString();
                var value = map.get(key).toString();
                console.log("key,value => ", key, value)
                sig[key] = value
            }
            var result = this.a(map, b)
            console.log("b,result => ", b, result)
            console.log("json", JSON.stringify(sig))
            return result
        }
    })
}



function hook_AES() {
    Java.perform(function () {
        var AESEncrypt = Java.use("com.duapp.aesjni.AESEncrypt");
        AESEncrypt.b.implementation = function (obj, str) {
            console.log("entering AESEncrypt.b =>")
            console.log("obj,str => ", obj, str)
            var result = this.b(obj, str)
            console.log("result => ", result)
            return result;
        }

        AESEncrypt.encodeByte.implementation = function (barr, str) {
            console.log("entering encodeByte => ")
            var result = this.encodeByte(barr, str)
            console.log("barr,str => ", JSON.stringify(barr), str)
            console.log("result => ", result)
            console.log("=====")
            return result;
        }
    })
}

function get_newSign() {
    Java.perform(function () {
        var stringClass = Java.use("java.lang.String")
        var str = "countryCode86loginTokenpasswordac2cd4c06ac63b37949435859d87b094platformandroidsourcePagetimestamp1611282741573typepwduserName18168910313uuid6ae485bd9127cc61v4.43.2";
        var str = stringClass.$new(str)
        var arg1 = str.getBytes();
        send(arg1)
        var str2 = "010110100010001010010010000011000111001011101010101000101110111010011010101101101010001000101100010110100010001010011010110011001111001011100010101000100100110010110010100010101011110010111100"
        var arg2 = stringClass.$new(str2)
        send(str2)
        var AESEncrypt = Java.use("com.duapp.aesjni.AESEncrypt");
        encrypted_str = AESEncrypt.encodeByte(arg1, arg2)




        // tPTodKilx05j6GS8C0RkdWQTBRtcszqLP62M/Z+Hah6z9bp9Cq/8x8ADhhUfiN26EtOfvcb8mxrzFxBVbAil8vjNDIKeCvARv4UfcVlNMoBIZvoV5SOay4aR2R+/hecfOOMWRteZTnKHrPSGZpU6xv3Qjo/bZfCcZ3Ab52XsOfgUoNy4lVH7EKtjeguYJ6TPvIvAIda5GbUQ9S05XkoKdWyDHtaJLvpO+cmxgrM74cM=
        // Java.choose("com.duapp.aesjni.AESEncrypt",{
        //     onMatch:function(instance){
        //         var result = instance.encodeByte(arf1,arg2);
        //         // console.log("result => ",result)
        //         send(result)
        //     },onComplete:function(){}
        // })        
    })
    return encrypted_str
}

function hook_aeskey(){
    Java.perform(function(){
        var pointer = Module.findExportByName("libJNIEncrypt.so","AES_128_ECB_PKCS5Padding_Encrypt")
        send("AES_128_ECB_PKCS5Padding_Encrypt: ",pointer)
        Interceptor.attach(pointer,{
            onEnter:function(args){
                send("hook AES128_ECB_encrypt 00001B18")
                console.log("参数1：",Memory.readUtf8String(args[0]))
                console.log("参数2：",Memory.readUtf8String(args[1]))
            },onLeave:function(retval){
                send("返回值：" + Memory.readUtf8String(retval));
            }
        })
    })
}

function main() {
    hook_Hash()
    hook_AES()
    hook_aeskey()
}
setImmediate(main)
// rpc.exports = {
//     getsign: function () {
//         var newSign;
//         Java.perform(function () {
//             var stringClass = Java.use("java.lang.String")
//             var str = "countryCode86loginTokenpasswordac2cd4c06ac63b37949435859d87b094platformandroidsourcePagetimestamp1611282741573typepwduserName18168910313uuid6ae485bd9127cc61v4.43.2";
//             var str = stringClass.$new(str)
//             var arg1 = str.getBytes();
//             send(arg1)
//             var str2 = "010110100010001010010010000011000111001011101010101000101110111010011010101101101010001000101100010110100010001010011010110011001111001011100010101000100100110010110010100010101011110010111100"
//             var arg2 = stringClass.$new(str2)
//             send(arg2)
//             var AESEncrypt = Java.use("com.duapp.aesjni.AESEncrypt");
//             var MD5Util = Java.use("com.shizhuang.duapp.framework.util.encrypt.MD5Util")
//             newSign = MD5Util.a(AESEncrypt.encodeByte(arg1, arg2))
//         })
//         return newSign
//     }
// }

