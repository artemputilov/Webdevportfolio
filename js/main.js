const btnDarkMode=document.querySelector('.dark-mode-btn');

// Проверка тёмной темы в Local Storage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add ("dark-mode-btn--active");
    document.body.classList.add("dark");
    }
    


// Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark=document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    }
    else {
        this.localStorage.setItem('darkMode', 'light')
    }
}