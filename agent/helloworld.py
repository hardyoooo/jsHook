import frida
import time 

'''
frida的两个操作方式：1.命令方式 2.RPC调用
- 本脚本是frida的RPC调用的使用方式，并加载执行js脚本返回执行结果
- 等同于命令执行的frida使用方式：frida -UF -l helloworld.js --runtime=v8
(命令方式中的U表示USB的方式，F表示获取前台应用，l表示加载脚本，runtime=v8表示是使用V8引擎)
'''

#device=frida.get_device_manager().add_remote_device('192.168.1.21')
# 首先通过USB的方法获取手机设备
device=frida.get_usb_device()
# 打印前台应用
print(device.get_frontmost_application())

# 打印所有应用
print(device.enumerate_applications())

# 获取手机运行的前台应用、及其pid
pid=device.get_frontmost_application().pid
# 是用attach模式
session=device.attach(pid)

# 加载js脚本
with open('helloworld.js') as f:
    script=session.create_script(f.read())
script.load()

# 脚本会持续等待输入命令
input()