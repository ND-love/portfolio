document.addEventListener("DOMContentLoaded", function() {
    // Находим все "раскрывашки" в меню
    var allDetails = document.querySelectorAll(".md-nav__item > details");
    
    allDetails.forEach(function(detail) {
        // Если внутри этой папки НЕТ активной ссылки (текущей страницы)...
        if (!detail.querySelector(".md-nav__link--active")) {
            // ...то убираем атрибут open (захлопываем папку)
            detail.removeAttribute("open");
        }
    });
});