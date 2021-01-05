document.addEventListener("DOMContentLoaded", function () {
  // Подключаем исходники для работы

  @@include("StartJS/swiper.min.js", {});

  // Подключаем существующие скрипты

  @@include("dynamicAdapt.js", {});

  // Основной блок кода

  @@include("script.js", {});
});
