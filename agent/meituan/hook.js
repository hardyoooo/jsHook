function main() {
    Java.perform(
        function () {
            var tunnel2a = Java.use('com.dianping.nvnetwork.tunnel2.a')  // com.dianping.nvnetwork.tunnel.impl.b
            tunnel2a.isSocketConnected.implementation = function () {
                console.log('enter isSocketConnected')
                //printstack()
                return false
            }
        }
    )
}
setImmediate(main)