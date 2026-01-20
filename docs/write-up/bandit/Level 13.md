# Bandit Level 13


На это уровне все немного сложнее и нам придется не сразу подключаться к bandit13, а только лишь использовать пароль от него
```bash
┌── (kali㉿kali)-[~]

└─$ scp -P 2220 bandit13@bandit.labs.overthewire.org:~/sshkey.private .

bandit13@bandit.labs.overthewire.org`s password:

sshkey.private 100% 1679 12.4KB/s 00:00

┌──(kali㉿kali)-[~]

└─$ chmod 600 sshkey.private

┌──(kali㉿kali)-[~]

└─$ ssh -i sshkey.private -p 2220 bandit14@bandit.labs.overthewire.org

bandit14@bandit:~$ cat /etc/bandit_pass/bandit14

MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS

bandit14@bandit:~$
```
 

