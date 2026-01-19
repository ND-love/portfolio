document.addEventListener("DOMContentLoaded", function() {
    // 1. Находим все переключатели (чекбоксы) в меню
    var toggles = document.querySelectorAll("input[type='checkbox'].md-nav__toggle");

    toggles.forEach(function(toggle) {
        // 2. Ищем родительский элемент (папку), к которой относится чекбокс
        var parentItem = toggle.closest("li.md-nav__item");

        if (parentItem) {
            // 3. Проверяем: есть ли внутри этой папки активная ссылка (страница, которую ты читаешь сейчас)?
            var isActive = parentItem.querySelector(".md-nav__link--active");

            // 4. Если внутри папки НЕТ активной страницы -> СНИМАЕМ галочку (сворачиваем)
            if (!isActive) {
                toggle.checked = false;
            }
        }
    });
});