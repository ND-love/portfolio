# Bandit Level 3


Просто выполняем данные команды последовательно и получаем пароль:
```bash
bandit3@bandit:~$ ls -a

. .. .bash_logout .bashrc inhere .profile

bandit3@bandit:~$ cd ~/inhere

bandit3@bandit:~/inhere$ ls -a

. .. ...**Hiding**-**From**-**You**

bandit3@bandit:~/inhere$ cat ~/inhere/...**Hiding**-**From**-**You**
```
**`2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ`**

Используя ключ -а мы можем просматривать скрытые файлы

