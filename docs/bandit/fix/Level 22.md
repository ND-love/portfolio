# Bandit Level 22


bandit22@bandit:\~\$ cd /../../bin

bandit22@bandit:/bin\$ ls \| grep \"cron\"

cronjob_bandit22.sh

cronjob_bandit23.sh

cronjob_bandit24.sh

cronjob_behemoth4

cronjob_leviathan5

crontab

bandit22@bandit:/bin\$ cat cronjob_bandit23.sh

#!/bin/bash

 

myname=\$(whoami)

mytarget=\$(echo I am user \$myname \| md5sum \| cut -d \' \' -f 1)

 

echo \"Copying passwordfile /etc/bandit_pass/\$myname to /tmp/\$mytarget\"

 

cat /etc/bandit_pass/\$myname \> /tmp/\$mytarget

andit22@bandit:\~\$ cd /..

bandit22@bandit:/\$ ls

behemoth dev home lib64 manpage narnia run srv utumno

bin drifter krypton lib.usr-is-merged maze opt sbin sys var

bin.usr-is-merged etc lib libx32 media proc sbin.usr-is-merged tmp vortex

boot formulaone lib32 lost+found mnt root snap usr

bandit22@bandit:/\$ cd /tmp

bandit22@bandit:/tmp\$ h=\$(echo I am user bandit23 \| md5sum \| cut -d\' \' -f1)

echo \"\$h\"

8ca319486bfbbc3663ea0fbe81326349

bandit22@bandit:/tmp\$ cat \"/tmp/\$h\"

[0Zf11ioIjMVN551jX3CmStKLYqjk54Ga]\{.mark\}

