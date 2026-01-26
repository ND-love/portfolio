# Bandit Level 18


В уровне bandit18 в \~/.bashrc стоит exit, поэтому интерактивная сессия сразу закрывается. Баннер → "Byebye!" → разрыв --- это норма.

Как работать с таким уровнем: запускать **удалённую команду**, чтобы не открывать интерактивную оболочку.
```bash
┌──(kali㉿kali)-\[\~\]
└─\$ ssh -p 2220 bandit18@bandit.labs.overthewire.org \'cat readme\'

 _                     _ _ _
|  |__  __ _ _ __   __| (_) |_
| '_ \ / _` | '_\  / _` | | __|
| |_) | (_| | | | | (_| | | |_
|_.__/ \__,_|_| |_|\__,_|_|\__|

This is an OverTheWire game server.
More information on http://www.overthewire.org/wargames

backend: gibson-0
bandit18@bandit.labs.overthewire.org's password:
cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8

```