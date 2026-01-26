# Bandit Level 31

```bash
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9]
└─$ git clone ssh://bandit31-git@bandit.labs.overthewire.org:2220/home/bandit31-git/repo
 
**Cloning** into 'repo'...
 _                     _ _ _
| |__   __ _ _ __   __| (_) |_
| '_ \ / _` | '_ \ / _` | | __|
| |_) | (_| | | | | (_| | | |_
|_.__/ \__,_|_| |_|\__,_|_|\__|

 
This is an OverTheWire game server.
More information on http://www.overthewire.org/wargames
 
backend: gibson-0
bandit31-git@bandit.labs.overthewire.org's password:
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9]
└─$ cd repo
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ ls
README.md
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ cat README.md
This time your task is to push a file to the remote repository.

Details:
File name: key.txt
Content: 'May I come in?'
Branch: master

┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git branch -a
* master
remotes/origin/HEAD -> origin/master
remotes/origin/master
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ vi key.txt
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git add key.txt
The following paths are ignored by one of your .gitignore files:
key.txt
hint: Use -f if you really want to add them.
hint: Disable this message with "git config set advice.addIgnoredFile false"
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git add -f key.txt
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git coomit -m "upload key.txt"
git: 'coomit' is not a git command. See 'git --help'.
 
The most similar command is
commit
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git commit -m "upload key.txt"
Author identity unknown
 
*** Please tell me who you are.

Run
 
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
 
to set your account's default identity.
Omit --global to set the identity only in this repository.
 
fatal: unable to auto-detect email address (got 'kali@kali.(none)')
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git config user.name "bandit31"
git config user.email "bandit31@local"
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ printf "May I come in?n" > key.txt
 
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git add -f key.txt
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git commit -m "add key.txt"
[master 534d16b] add key.txt
1 file changed, 1 insertion(+), 1 deletion(-)
┌──(kali㉿kali)-[/tmp/tmp.a7cNF6mRD9/repo]
└─$ git push origin master
 _                     _ _ _
| |__   __ _ _ __   __| (_) |_
| '_ \ / _` | '_ \ / _` | | __|
| |_) | (_| | | | | (_| | | |_
|_.__/ \__,_|_| |_|\__,_|_|\__|

 
This is an OverTheWire game server.
More information on http://www.overthewire.org/wargames

backend: gibson-0
bandit31-git@bandit.labs.overthewire.org's password:
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 6 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 523 bytes | 523.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: ### Attempting to validate files... ####
remote:
remote: .oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.
remote:
remote: Well done! Here is the password for the next level:
remote: 3O9RfhqyAlVBEZpVb6LYStshZoqoSx5K
remote:
remote: .oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.
remote:
remote:
remote: .oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.
remote:
remote: Wrong!
remote:
remote: .oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.
remote:
To ssh://bandit.labs.overthewire.org:2220/home/bandit31-git/repo
! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'ssh://bandit.labs.overthewire.org:2220/home/bandit31-git/repo' 
```