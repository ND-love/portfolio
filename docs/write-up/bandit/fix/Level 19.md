# Bandit Level 19


bandit19@bandit:\~\$ ls -l

total 16

-rwsr-x\-\-- 1 bandit20 bandit19 14884 **Oct** 14 09:26 bandit20-do

bandit19@bandit:\~\$ ./bandit20-do id

uid=11019(bandit19) gid=11019(bandit19) euid=11020(bandit20) groups=11019(bandit19)

bandit19@bandit:\~\$ ./bandit20-do cat /etc/bandit_pass/bandit20

[0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO]\{.mark\}

\*Программа bandit20-do приняла аргументы cat /etc/bandit_pass/bandit20, выполнила их с EUID=bandit20, поэтому ядро разрешило чтение. На экран вышел пароль следующего уровня.

