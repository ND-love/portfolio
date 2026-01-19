# Bandit Level 28


┌──(kali㉿kali)-\[/tmp/tmp.**OTsY9lLKls**\]

└─\$ git clone ssh://bandit28-git@bandit.labs.overthewire.org:2220/home/bandit28-git/repo

 

**Cloning** into \'repo\'\...

\_ \_ \_ \_

\| \|\_\_ \_\_ \_ \_ \_\_ \_\_\| (\_) \|\_

\| \'\_ \\ / \_\` \| \'\_ \\ / \_\` \| \| \_\_\|

\| \|\_) \| (\_\| \| \| \| \| (\_\| \| \| \|\_

\|\_.\_\_/ \\\_\_,\_\|\_\| \|\_\|\\\_\_,\_\|\_\|\\\_\_\|

 

This is an OverTheWire game server.

More information on http://www.overthewire.org/wargames

 

backend: gibson-0

bandit28-git@bandit.labs.overthewire.org\'s password:

remote: Enumerating objects: 9, done.

remote: Counting objects: 100% (9/9), done.

remote: Compressing objects: 100% (6/6), done.

remote: Total 9 (delta 2), reused 0 (delta 0), pack-reused 0

Receiving objects: 100% (9/9), done.

Resolving deltas: 100% (2/2), done.

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls\]

└─\$ ls

repo

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls\]

└─\$ cd repo

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls/repo\]

└─\$ ls

README.md

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls/repo\]

└─\$ cat README.md

\# Bandit Notes

Some notes for level29 of bandit.

 

\## credentials

 

\- username: bandit29

\- password: xxxxxxxxxx

 

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls/repo\]

└─\$ git log

commit b0354c7be30f500854c5fc971c57e9cbe632fef6 (HEAD -\> master, origin/master, origin/HEAD)

Author: Morla Porla \<morla@overthewire.org\>

Date: Tue Oct 14 09:26:19 2025 +0000

 

fix info leak

 

commit d0cf2ab7dd7ebc6075b59102a980155268f0fe8f

Author: Morla Porla \<morla@overthewire.org\>

Date: Tue Oct 14 09:26:19 2025 +0000

 

add missing data

 

commit bd6bc3a57f81518bb2ce63f5816607a754ba730d

Author: Ben Dover \<noone@overthewire.org\>

Date: Tue Oct 14 09:26:18 2025 +0000

 

initial commit of README.md

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls/repo\]

└─\$ git checkout d0cf2ab7dd7ebc6075b59102a980155268f0fe8f

Note: switching to \'d0cf2ab7dd7ebc6075b59102a980155268f0fe8f\'.

 

You are in \'detached HEAD\' state. You can look around, make experimental

changes and commit them, and you can discard any commits you make in this

state without impacting any branches by switching back to a branch.

 

If you want to create a new branch to retain commits you create, you may

do so (now or later) by using -c with the switch command. Example:

 

git switch -c \<new-branch-name\>

 

Or undo this operation with:

 

git switch -

 

Turn off this advice by setting config variable advice.detachedHead to false

 

HEAD is now at d0cf2ab add missing data

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls/repo\]

└─\$ ls

README.md

┌──(kali㉿kali)-\[/tmp/tmp.OTsY9lLKls/repo\]

└─\$ cat README.md

\# Bandit Notes

Some notes for level29 of bandit.

 

\## credentials

 

\- username: bandit29

\- password: [4pT1t5DENaYuqnqvadYs1oE4QLCdjmJ7]\{.mark\} 

