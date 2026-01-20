# Bandit Level 5


На этом уровне нам понадобится команда find для поиска файла по размеру. Используем вот такие команды, чтобы найти необходимый файл:
```bash
bandit5@bandit:~/inhere$ find ~/inhere -type f -size 1033c -print

/home/bandit5/inhere/maybehere07/.file2

bandit5@bandit:~/inhere$ cat /home/bandit5/inhere/maybehere07/.file2
```
**`HWasnPhtq9AVKe0dmk45nxy20cvUa6EG`**

Суффикс «с» означает байты в нашем случае.

