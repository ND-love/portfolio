**Задание Bookmarklet**

**1. Исходные данные**

Фрагмент кода, приведённый на веб-странице, имеет следующий вид:

```bash
javascript:(function() {

var encryptedFlag = \"àÒÆÞ¦È¬ëÙ£ÖÓÚåÛÑ¢ÕÓ¡ÒÅ¤í\";

var key = \"picoctf\";

var decryptedFlag = \"\";

for (var i = 0; i \< encryptedFlag.length; i++) {

decryptedFlag += String.fromCharCode(

(encryptedFlag.charCodeAt(i) - key.charCodeAt(i % key.length) + 256) % 256

);

}

alert(decryptedFlag);

})();
```

**2. В консоль вставляем дешифратор:**
```bash
(() =\> {

const encryptedFlag = \"àÒÆÞ¦È¬ëÙ£ÖÓÚåÛÑ¢ÕÓ¡ÒÅ¤í\";

const key = \"picoctf\";

let out = \"\";

for (let i = 0; i \< encryptedFlag.length; i++) {

out += String.fromCharCode(

(encryptedFlag.charCodeAt(i) - key.charCodeAt(i % key.length) + 256) % 256

);

}

console.log(out);

})();
```
**ОТВЕТ: picoCTF{p@g3_turn3r_0148cb05}**

