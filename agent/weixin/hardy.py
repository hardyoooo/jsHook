import time
import frida

print('1111111111')
device7 = frida.get_device_manager().add_remote_device('160.53.143.75:58888')
print(device7.get_frontmost_application())

# #attach模式
# pid = device7.get_frontmost_application().pid
# session7 = device7.attach(pid)

# 使用spawn模式
pid7 = device7.spawn(["com.tencent.mm"])
device7.resume(pid7)
time.sleep(1)
session7 = device7.attach(pid7)

# 加载s1.js脚本
with open("hardy.js") as f:
    script7 = session7.create_script(f.read())
script7.load()
script7.exports.keyb()
time.sleep(3)
script7.exports.getkey()