window.addEventListener('load', function(){
    var activeTheme = localStorage.getItem('theme');

    if (activeTheme !== null) {
        document.querySelector('[name="theme-mode"][value="'+ activeTheme +'"]').checked = true;
    } else {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.querySelector('[name="theme-mode"][value="light"]').checked = true;
        } else {
            document.querySelector('[name="theme-mode"][value="dark"]').checked = true;
        }
    }

    document.querySelectorAll('.theme-switcher label').forEach((function(e) {
        e.addEventListener('click', function() {
            activeTheme = this.dataset.value;

            localStorage.setItem('theme', activeTheme);
            document.documentElement.setAttribute('data-theme', activeTheme);
        })
    }))

    document.querySelectorAll('input[name="theme-mode"]').forEach((function(e) {
        e.addEventListener('change', function() {
            activeTheme = this.value;

            localStorage.setItem('theme', activeTheme);
            document.documentElement.setAttribute('data-theme', activeTheme);
        })
    }))
});
