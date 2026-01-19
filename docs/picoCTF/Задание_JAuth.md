**Задание JAuth**

Открываем сайт, логинимся в системе под test Test123!. Смотрим cookies и видим значение eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoxNzU5OTEwNDg1MTE2LCJhZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NDsgcnY6MTI4LjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvMTI4LjAiLCJyb2xlIjoidXNlciIsImlhdCI6MTc1OTkxMDQ4NX0.GY0rp72T0OZgMspb5DJdi9fdsTNkROfgc1m-6x-FxRk\
название самого таска наталкивает на использование JWT токена, поэтому открываем сайт &lt;https://token.dev/&gt; и вставляем токен туда (рис 1)

![img](media/Задание_JAuth/media/image1.png)

Теперь меняем значение "alg" и "role" (рис 2)

![img](media/Задание_JAuth/media/image2.png)

Добавляем точку в самый конец и вставляем токен на сайт с таском (рис 3)

![img](media/Задание_JAuth/media/image3.png)

Итог -- флаг (рис 4)

![img](media/Задание_JAuth/media/image4.png)

**ОТВЕТ: picoCTF\{succ3ss\_@u7h3nt1c@710n_3444eacf\}**

