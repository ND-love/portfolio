# Bandit Level 16


Задание: The credentials for the next level can be retrieved by submitting the password of the current level to a port on localhost in the range 31000 to 32000. First find out which of these ports have a server listening on them. Then find out which of those speak SSL/TLS and which don't. There is only 1 server that will give the next credentials, the others will simply send back to you whatever you send to it.

Решение:

Вот разбор Bandit16→17 с пояснением каждой части.

**_1) Найти открытые порты 31000--32000_**
```bash
ports=$(for p in $(seq 31000 32000); do
    (echo > /dev/tcp/127.0.0.1/$p) >/dev/null 2>&1 && echo $p
done)
printf '%s\n' $ports
```
Разбор:

- $( \... ) --- подстановка команды. Результат цикла попадёт в переменную ports.

- for p in $(seq 31000 32000) --- перебор чисел 31000..32000.

- ( \... ) --- подпроцесс. Нужен, чтобы редиректы не влияли на остальной шелл.

- echo > /dev/tcp/127.0.0.1/$p --- особенность bash: попытка открыть TCP-соединение. Успех ⇒ код 0.

- >/dev/null 2>&1 --- скрыть stdout и stderr. Не нужен мусор, важен только код возврата.

- && echo $p --- напечатать номер, если соединение удалось.

- printf '%s\n' $ports --- вывести каждый порт с новой строки.

Идея шага: быстро выяснить, где вообще кто-то слушает.

Вывод:
```bash
bandit16@bandit:~$ ports=$(for p in $(seq 31000 32000); do
    (echo > /dev/tcp/127.0.0.1/$p) >/dev/null 2>&1 && echo $p
done)
printf '%s\n' $ports
31046
31518
31691
31790
31960
```
**_2) Отфильтровать порты с TLS_**
```bash
tls=$(
    for p in $ports; do
        timeout 1 openssl s_client -connect 127.0.0.1:$p -servername localhost -brief \
            < /dev/null >/dev/null 2>&1 && echo $p
    done
)
printf '%s\n' $tls
```
Разбор ключей:

- openssl s_client --- «сырой» TLS-клиент.

- -connect 127.0.0.1:$p --- адрес:порт.

- -servername localhost --- SNI. Универсально безопасно.

- -brief --- короткий режим. Полезен как «ping» TLS: при успешном рукопожатии возвращает код 0.

- \< /dev/null --- не ждать ввода.

- >/dev/null 2>&1 --- тишина, нам важен только код возврата.

- timeout 1 --- не зависать на странных сервисах.

Идея шага: из «открытых» оставить те, кто понимает TLS.

Вывод:
```bash
bandit16@bandit:~$ tls=$(
    for p in $ports; do
        timeout 1 openssl s_client -connect 127.0.0.1:$p -servername localhost -brief \
            < /dev/null >/dev/null 2>&1 && echo $p
    done
)
printf '%s\n' $tls
31518
31790
```
**_3) Отправить пароль текущего уровня на TLS-порт и поймать ответ_**
```bash
pass=$(cat /etc/bandit_pass/bandit16)
for p in $tls; do
    printf '%s\n' "$pass" | openssl s_client -connect 127.0.0.1:$p -quiet 2>/dev/null
done
```
Разбор ключей:

- printf '%s\n' \"$pass" --- печать пароля + перевод строки. Многие сервисы ждут \n.

- Конвейер | --- передать пароль во stdin s_client.

- -quiet --- не показывать баннеры, «CONNECTED COMMANDS» и отладку рукопожатия.

- 2>/dev/null --- убрать остатки диагностик в stderr.

Семантика:

- «Эхо»-сервисы вернут присланный пароль без изменений.

- Один правильный сервис вернёт «Correct!» и блок PEM с приватным ключом.

Вывод:
```bash
bandit16@bandit:~$ pass=$(cat /etc/bandit_pass/bandit16)
for p in $tls; do
    printf '%s\n' "$pass" | openssl s_client -connect 127.0.0.1:$p -quiet 2>/dev/null
done
kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx
**Correct**!
-----BEGIN RSA PRIVATE KEY-----
**MIIEogIBAAKCAQEAvmOkuifmMg6HL2YPIOjon6iWfbp7c3jx34YkYWqUH57SUdyJ**
imZzeyGC0gtZPGujUSxiJSWI/oTqexh+cAMTSMlOJf7+**BrJObArnxd9Y7YT2bRPQ**
**Ja6Lzb558YW3FZl87ORiO**+rW4LCDCNd2lUvLE/GL2GWyuKN0K5iCd5TbtJzEkQTu
**DSt2mcNn4rhAL**+**JFr56o4T6z8WWAW18BR6yGrMq7Q**/kALHYW3OekePQAzL0VUYbW
**JGTi65CxbCnzc**/w4+mqQyvmzpWtMAzJTzAzQxNbkR2MBGySxDLrjg0LWN6sK7wNX
x0YVztz/zbIkPjfkU1jHS+9EbVNj+D1XFOJuaQIDAQABAoIBABagpxpM1aoLWfvD
**KHcj10nqcoBc4oE11aFYQwik7xfW**+24pRNuDE6SFthOar69jp5RlLwD1NhPx3iBl
J9nOM8OJ0VToum43UOS8YxF8WwhXriYGnc1sskbwpXOUDc9uX4+**UESzH22P29ovd**
d8WErY0gPxun8pbJLmxkAtWNhpMvfe0050vk9TL5wqbu9AlbssgTcCXkMQnPw9nC
YNN6DDP2lbcBrvgT9YCNL6C+**ZKufD52yOQ9qOkwFTEQpjtF4uNtJom**+asvlpmS8A
vLY9r60wYSvmZhNqBUrj7lyCtXMIu1kkd4w7F77k+**DjHoAXyxcUp1DGL51sOmama**
\+**TOWWgECgYEA8JtPxP0GRJ**+**IQkX262jM3dEIkza8ky5moIwUqYdsx0NxHgRRhORT**
8c8hAuRBb2G82so8vUHk/fur85OEfc9TncnCY2crpoqsghifKLxrLgtT+qDpfZnx
**SatLdt8GfQ85yA7hnWWJ2MxF3NaeSDm75Lsm**+tBbAiyc9P2jGRNtMSkCgYEAypHd
**HCctNi**/**FwjulhttFx**/rHYKhLidZDFYeiE/v45bN4yFm8x7R/b0iE7KaszX+**Exdvt**
**SghaTdcG0Knyw1bpJVyusavPzpaJMjdJ6tcFhVAbAjm7enCIvGCSx**+X3l5SiWg0A
R57hJglezIiVjv3aGwHwvlZvtszK6zV6oXFAu0ECgYAbjo46T4hyP5tJi93V5HDi
**Ttiek7xRVxUl**+iU7rWkGAXFpMLFteQEsRr7PJ/lemmEY5eTDAFMLy9FL2m9oQWCg
R8VdwSk8r9FGLS+9aKcV5PI/**WEKlwgXinB3OhYimtiG2Cg5JCqIZFHxD6MjEGOiu**
L8ktHMPvodBwNsSBULpG0QKBgBAplTfC1HOnWiMGOU3KPwYWt0O6CdTkmJOmL8Ni
blh9elyZ9FsGxsgtRBXRsqXuz7wtsQAgLHxbdLq/ZJQ7YfzOKU4ZxEnabvXnvWkU
**YOdjHdSOoKvDQNWu6ucyLRAWFuISeXw9a**/9p7ftpxm0TSgyvmfLF2MIAEwyzRqaM
77pBAoGAMmjmIJdjp+**Ez8duyn3ieo36yrttF5NSsJLAbxFpdlc1gvtGCWW**+9Cq0b
dxviW8+**TFVEBl1O4f7HVm6EpTscdDxU**+bCXWkfjuRb7Dy9GOtt9JPsX8MBTakzh3
vBgsyi/sN3RqRBcGU40fOoZyfAMT8s1m/uYv52O6IgeuZ/ujbjY=
-----END RSA PRIVATE KEY-----
```
**_4) Извлечь приватный ключ в файл и защитить права_**
```bash
printf '%s\n' "$pass" \
| openssl s_client -connect 127.0.0.1:31790 -quiet 2>/dev/null \
| sed -n '/BEGIN RSA PRIVATE KEY/,/END RSA PRIVATE KEY/p' > /tmp/key17

chmod 600 /tmp/key17
```
Разбор:

- sed -n \'/BEGIN .../,/END .../p\' --- вывести диапазон от метки BEGIN до END.

- \> /tmp/key17 --- сохранить в файл.

- chmod 600 --- права -rw-------. Требование SSH к приватному ключу.

Пояснение 600:

- Октавная запись: владелец rw (6=4+2), группа 0, остальные 0.

- Допустима ещё 400 (только чтение владельцу).

Проверка:
```bash
ls -l /tmp/key17
head -n2 /tmp/key17
```
Вывод:
```bash
bandit16@bandit:~$ ls -l /tmp/key17
head -n2 /tmp/key17
-rw------- 1 bandit16 bandit16 1675 **Oct** 17 09:23 /tmp/key17
-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAvmOkuifmMg6HL2YPIOjon6iWfbp7c3jx34YkYWqUH57SUdyJ
```
**_5) Копирование ключа и вход в bandit17 с локальной машины_**

Сначала выйти с сервера:
```bash
exit
```
На своей машине:
```bash
scp -P 2220 bandit16@bandit.labs.overthewire.org:/tmp/key17 .
chmod 600 key17
ssh -i key17 -p 2220 bandit17@bandit.labs.overthewire.org
```
Разбор:

- scp --- копирование по SSH.

- -P 2220 --- нестандартный порт фарм-сервера.

- user@host:/путь --- что копируем. . --- текущая папка как место назначения.

- ssh -i key17 --- указать приватный ключ для аутентификации.

- Выполнять **на локальной машине**. С сервера внутрь самого себя входы заблокированы.

Вывод:
```bash
┌──(kali㉿kali)-[~]
└─$ scp -P 2220 bandit16@bandit.labs.overthewire.org:/tmp/key17 .
chmod 600 key17
ssh -i key17 -p 2220 bandit17@bandit.labs.overthewire.org

This is an OverTheWire game server.

More information on http://www.overthewire.org/wargames

backend: gibson-0
bandit16@bandit.labs.overthewire.org\'s password: 
```
тут вводим пароль `kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx`

```bash
key17 100% 1675 5.9KB/s 00:00

This is an OverTheWire game server.

More information on http://www.overthewire.org/wargames

backend: gibson-0
Welcome to OverTheWire!
If you find any problems, please report them to the #wargames channel on
discord or IRC.

--[ Playing the games ]--

This machine might hold several wargames.
If you are playing "somegame", then:

    * USERNAMES are somegame0, somegame1, ...
    * Most LEVELS are stored in /somegame/.
    * PASSWORDS for each level are stored in /etc/somegame_pass/.

 

Write-access to homedirectories is disabled. It is advised to create a
working directory with a hard-to-guess name in /tmp/. You can use the
command "mktemp -d" in order to generate a random and hard to guess
directory in /tmp/. Read-access to both /tmp/ is disabled and to /proc
restricted so that users cannot snoop on eachother. Files and directories
with easily guessable or short names will be periodically deleted! The /tmp
directory is regularly wiped.
Please play nice:

    * don't leave orphan processes running
    * don't leave exploit-files laying around
    * don't annoy other players
    * don't post passwords or spoilers
    * again, DONT POST SPOILERS!

This includes writeups of your solution on your blog or website!


--[ Tips ]--


This machine has a 64bit processor and many security-features enabled
by default, although ASLR has been switched off. The following
compiler flags might be interesting:

 

    -m32 compile for 32bit
    -fno-stack-protector disable ProPolice
    -Wl,-z,norelro disable relro

In addition, the execstack tool can be used to flag the stack as
executable on ELF binaries.


Finally, network-access is limited for most levels by a local
firewall.

--[ Tools ]--

For your convenience we have installed a few useful tools which you can find
in the following locations:

    * gef (https://github.com/hugsy/gef) in /opt/gef/
    * pwndbg (https://github.com/pwndbg/pwndbg) in /opt/pwndbg/
    * gdbinit (https://github.com/gdbinit/Gdbinit) in /opt/gdbinit/
    * pwntools (https://github.com/Gallopsled/pwntools)
    * radare2 (http://www.radare.org/)

 

--[ More information ]--

For more information regarding individual wargames, visit
http://www.overthewire.org/wargames/

For support, questions or comments, contact us on discord or IRC.

Enjoy your stay!

bandit17@bandit:~$
```
