# Bandit Level 15


Данный уровень тоже выполняется не очень сложно. Просто подключаемся к bandit15. при помощи cat получаем пароль и при помощи pipe перенаправляем пароль для подключения по TLS на 30001 порт и получаем обратно пароль.
```bash
bandit15@bandit:~$ cat /etc/bandit_pass/bandit15 | openssl s_client -connect localhost:30001 -quiet 2>/dev/null

Correct!
```
**`kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx`**

