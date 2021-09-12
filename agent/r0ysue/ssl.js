function hook_KeyStore_load() {
    Java.perform(function () {
        var StringClass = Java.use("java.lang.String");
        var KeyStore = Java.use("java.security.KeyStore");
        KeyStore.load.overload('java.security.KeyStore$LoadStoreParameter').implementation = function (arg0) {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));

            console.log("KeyStore.load1:", arg0);
            this.load(arg0);
        };
        KeyStore.load.overload('java.io.InputStream', '[C').implementation = function (arg0, arg1) {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));

            console.log("KeyStore.load2:", arg0, arg1 ? StringClass.$new(arg1) : null);
            this.load(arg0, arg1);
        };

        console.log("hook_KeyStore_load...");
    });
}
setImmediate(hook_KeyStore_load)

// 一、hook证书密码
// frida -U -f cn.soulapp.android -l ssl.js --no-pause  (spawn模式)
// 二、校验的方式：
// 1. 客户端校验服务器（charles证书）--大部分
// 2. 服务器校验客户端证书--很少
// 3. 代码校验（ssl pinning）--极少，趣充