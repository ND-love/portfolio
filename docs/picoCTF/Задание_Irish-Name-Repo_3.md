**Задание Irish-Name-Repo 3**

Проведем снова SQL-инъекцию. возьмем фразу %27+or+1%3D1+\--+%27 и отправим, а также поставим debug = 1. (рис 1)

![img](media/Задание_Irish-Name-Repo_3/media/image1.png)

Дебаге видно, что «or» преобразовался в «be», поэтому перекодируем «or» в « be» в декодере и снова отправим (рис 2)

![img](media/Задание_Irish-Name-Repo_3/media/image2.png)

**ОТВЕТ: picoCTF\{3v3n_m0r3_SQL_06a9db19\}**

