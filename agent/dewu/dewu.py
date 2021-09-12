import frida



def message(message,payload):
    print("payload:",payload)
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)
        

process = frida.get_usb_device().attach('com.shizhuang.duapp')
# 加载脚本
with open("dewu.js") as f:
    script = process.create_script(f.read())
script.on("message",message)  
script.load()


newSign = script.exports.getsign()
print(newSign)
