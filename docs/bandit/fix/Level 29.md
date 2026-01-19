# Bandit Level 29


┌──(kali㉿kali)-\[/\]

└─\$ mktemp -d

/tmp/tmp.AV6YY2wzEc

┌──(kali㉿kali)-\[/\]

└─\$ cd /tmp/tmp.AV6YY2wzEc

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc\]

└─\$ git clone ssh://bandit29-git@bandit.labs.overthewire.org:2220/home/bandit29-git/repo

 

**Cloning** into \'repo\'\...

\_ \_ \_ \_

\| \|\_\_ \_\_ \_ \_ \_\_ \_\_\| (\_) \|\_

\| \'\_ \\ / \_\` \| \'\_ \\ / \_\` \| \| \_\_\|

\| \|\_) \| (\_\| \| \| \| \| (\_\| \| \| \|\_

\|\_.\_\_/ \\\_\_,\_\|\_\| \|\_\|\\\_\_,\_\|\_\|\\\_\_\|

 

This is an OverTheWire game server.

More information on http://www.overthewire.org/wargames

 

backend: gibson-0

bandit29-git@bandit.labs.overthewire.org\'s password:

remote: Enumerating objects: 16, done.

remote: Counting objects: 100% (16/16), done.

remote: Compressing objects: 100% (11/11), done.

remote: Total 16 (delta 2), reused 0 (delta 0), pack-reused 0

Receiving objects: 100% (16/16), done.

Resolving deltas: 100% (2/2), done.

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc\]

└─\$ ls

repo

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc\]

└─\$ cd repo

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$ ls

README.md

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$ cat README.md

\# Bandit Notes

Some notes for bandit30 of bandit.

 

\## credentials

 

\- username: bandit30

\- password: \<no passwords in production!\>

 

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$ git log

commit b879c94bd4641ebb8b5470258b3a41debb25f7c2 (HEAD -\> master, origin/master, origin/HEAD)

Author: Ben Dover \<noone@overthewire.org\>

Date: Tue Oct 14 09:26:20 2025 +0000

 

fix username

 

commit 358fb1e671f460043ff5bd372e8d87e228dc148d

Author: Ben Dover \<noone@overthewire.org\>

Date: Tue Oct 14 09:26:20 2025 +0000

 

initial commit of README.md

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$ git branch -l

\* master

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$ git branch -a

\* master

remotes/origin/HEAD -\> origin/master

remotes/origin/dev

remotes/origin/master

remotes/origin/sploits-dev

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$ git checkout remotes/origin/dev

Note: switching to \'remotes/origin/dev\'.

 

You are in \'detached HEAD\' state. You can look around, make experimental

changes and commit them, and you can discard any commits you make in this

state without impacting any branches by switching back to a branch.

 

If you want to create a new branch to retain commits you create, you may

do so (now or later) by using -c with the switch command. Example:

 

git switch -c \<new-branch-name\>

 

Or undo this operation with:

 

git switch -

 

Turn off this advice by setting config variable advice.detachedHead to false

 

HEAD is now at eb43500 add data needed for development

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$ cat README.md

\# Bandit Notes

Some notes for bandit30 of bandit.

 

\## credentials

 

\- username: bandit30

\- password: [qp30ex3VLz5MDG1n91YowTv4Q8l7CDZL]{.mark}

 

┌──(kali㉿kali)-\[/tmp/tmp.AV6YY2wzEc/repo\]

└─\$

 

