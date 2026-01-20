---
title: Cross-Site Tracing (XST)
---

# Cross-Site Tracing (XST)

**Шаг 1: Сканирование для метода trace**

**Цель:** Сканирование и отслеживание доступных методов HTTP на целевом хосте.

__Команда__:
```bash
nmap 192.168.42.132 --script http-methods --script-args http-method.test.all='192.168.42.132'
```
**Шаг 2: Сканирование на предмет использования метода TRACE с помощью nikto**

**Цель:** Сканирование сервера на предмет использования уязвимого метода TRACE.

_Команда_:
```bash
nikto -h 192.168.42.132
```

**Шаг 3: Использование curl для сканирования и проверки**

**Цель:** Ручная проверка, используется ли метод TRACE (в примере _Команда_ для OPTIONS).

_Команда_: 
```bash
curl -v -X OPTIONS 192.168.42.132
```
**Шаг 4: Проверка метода trace с помощью metasploit**

**Цель:** Использование фреймворка Metasploit для автоматизированной проверки.

Команды:
```bash
msfconsole
search http trace
use 1
show options
set RHOST 192.168.42.132
show options
run
```
![](images/img_1.png)