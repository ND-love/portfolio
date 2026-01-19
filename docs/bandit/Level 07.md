# Bandit Level 7


Используем такую команду:
```bash
bandit7@bandit:~$ find / -name data.txt 2>/dev/null -exec grep -nH 'millionth\' {} \;

/home/bandit7/data.txt:54377:millionth dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc
```
тут:

-n показывает **номер строки**, где найдено совпадение.\
-H показывает **имя файла**, из которого эта строка.

{} -- сюда передается значение из find, а **\;** - показывает, де заканчивается -exec

