# Bandit Level 9


Вводим команду strings data.txt \| grep -E \'\^=+\', где первая часть оставляет только читаемые фрагменты из файла, а grep -E '\^=+' используется для поиска строк начинающихся с нескольких =
```bash
bandit9@bandit:~$ strings data.txt | grep -E '^=+'

========== theg

========== password

========== is

=v\$,

=}%q

=D!7

========== FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey

=AdD
```
