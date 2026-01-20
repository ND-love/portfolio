# Bandit Level 6


Тут нам необходимо использовать дополнительные опции для поиска нужного файла (-user, -group) и в итоге получим вывод:
```bash
bandit6@bandit:~$ find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null

/var/lib/dpkg/info/bandit7.password

bandit6@bandit:~$ cat /var/lib/dpkg/info/bandit7.password
```
**`morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj`**

