document.addEventListener('DOMContentLoaded', () => {
    const mainWindow = document.querySelector('main');
    const closeBtn = document.querySelector('.st-bar-btn-main-close');
    const hideBtn = document.querySelector('.st-bar-btn-main-hide');
    const expandBtn = document.querySelector('.st-bar-btn-main-expand');
    const restoreBtn = document.querySelector('.restore-btn'); 
    
    const navbar = document.querySelector("footer");
    
    const appTaskbarBtn = document.querySelectorAll('.taskbar-icn')[0];

    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            mainWindow.classList.toggle('window-maximized');
        });
    }

    hideBtn.addEventListener('click', () => {
        mainWindow.classList.add('window-minimized'); 
        
        if (appTaskbarBtn) {
            appTaskbarBtn.classList.remove('active');
            appTaskbarBtn.classList.add('opened');
        }
        
        if (navbar) navbar.style.bottom = "0";
    });

    closeBtn.addEventListener('click', () => {
        mainWindow.classList.add('window-minimized');
        mainWindow.classList.remove('window-maximized');
        
        setTimeout(() => {
            mainWindow.style.display = "none";
        }, 200);
        
        if (appTaskbarBtn) {
            appTaskbarBtn.classList.remove('active', 'opened');
        }
        
        if (navbar) navbar.style.bottom = "0";
    });

    const restoreWindow = () => {
        mainWindow.style.display = "flex";
        
        requestAnimationFrame(() => {
            mainWindow.classList.remove('window-minimized');
        });
        
        if (appTaskbarBtn) {
            appTaskbarBtn.classList.add('active');
            appTaskbarBtn.classList.add('opened');
        }
        
        if (navbar) navbar.style.bottom = "-40px";
    };

    if (restoreBtn) {
        restoreBtn.addEventListener('click', restoreWindow);
    }
    
    if (appTaskbarBtn) {
        appTaskbarBtn.addEventListener('click', () => {
            if (!mainWindow.classList.contains('window-minimized') && mainWindow.style.display !== "none") {
                hideBtn.click();
            } else {
                restoreWindow();
            }
        });
    }
});