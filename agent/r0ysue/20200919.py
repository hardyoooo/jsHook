import time
import frida

# device7 = frida.get_device_manager().add_remote_device('160.53.143.75:58888')
# device7 = frida.get_device_manager().add_remote_device('192.168.43.140:8888')
device7 = frida.get_usb_device()
print(device7.get_frontmost_application())

# #attach模式
# pid = device7.get_frontmost_application().pid
# session7 = device7.attach(pid)

# 使用spawn模式
pid7 = device7.spawn(["com.example.junior"])
device7.resume(pid7)
time.sleep(1)
session7 = device7.attach(pid7)

# 加载s1.js脚本
with open("20200919.js") as f:
    script7 = session7.create_script(f.read())
script7.load()
script7.exports.fingerprint()
time.sleep(2)
script7.exports.subcommand()




# #device8 = frida.get_device_manager().add_remote_device('192.168.0.8:8888')
# device8 = frida.get_device_manager().add_remote_device('118.126.66.193:58888')
# #device = frida.get_usb_device()
# print(device8.get_frontmost_application())

# pid8 = device8.spawn(["com.example.junior"])
# device8.resume(pid8)
# time.sleep(1)
# session8 = device8.attach(pid8)

# # 加载s1.js脚本
# with open("20200919.js") as f:
#     script8 = session8.create_script(f.read())
# script8.load()


# 脚本会持续运行等待输入
input()

"""
command = ""
while 1 == 1:
    command = input("Enter command:\n1: Exit\n2: Call Simulator Touch function\nchoice:")
    if command == "1":
        break
    elif command == "2": #在这里调用
        script.exports.subcommand()
    else:
        script.exports.fingerprint()
"""