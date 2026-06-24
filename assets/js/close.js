document.addEventListener('DOMContentLoaded', () => {
    const mainWindow = document.querySelector('main');
    const closeBtn = document.querySelector('.st-bar-btn-main-close');
    const hideBtn = document.querySelector('.st-bar-btn-main-hide');
    const expandBtn = document.querySelector('.st-bar-btn-main-expand');
    const restoreBtn = document.querySelector('.restore-btn'); 
    const navbar = document.querySelector("footer");
    
    const appTaskbarBtn = document.querySelectorAll('.taskbar-icn')[0];

    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('.html') === false;

    if (navbar && mainWindow && !mainWindow.classList.contains('window-minimized') && mainWindow.style.display !== "none") {
        navbar.classList.add('taskbar-hidden');
    }

    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            mainWindow.classList.toggle('window-maximized');
        });
    }

    if (hideBtn) {
        hideBtn.addEventListener('click', () => {
            mainWindow.classList.remove('window-maximized', 'window-closed');
            mainWindow.classList.add('window-minimized');
            
            if (appTaskbarBtn) {
                appTaskbarBtn.classList.remove('active');
                appTaskbarBtn.classList.add('opened');
            }
            if (navbar) navbar.classList.remove('taskbar-hidden');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mainWindow.classList.remove('window-maximized', 'window-minimized');
            mainWindow.classList.add('window-closed');

            setTimeout(() => {
                mainWindow.style.display = "none";
            }, 450);
            
            if (appTaskbarBtn) {
                appTaskbarBtn.classList.remove('active', 'opened');
            }
            if (navbar) navbar.classList.remove('taskbar-hidden');
        });
    }

    const restoreWindow = () => {
        if (mainWindow.style.display === "none" || mainWindow.classList.contains('window-closed')) {
            if (isIndexPage) {
                mainWindow.style.display = "flex";
                setTimeout(() => {
                    mainWindow.classList.remove('window-closed', 'window-minimized');
                }, 10);
                if (appTaskbarBtn) appTaskbarBtn.classList.add('active', 'opened');
                if (navbar) navbar.classList.add('taskbar-hidden');
            } else {
                window.location.href = 'index.html';
            }
        }
        else if (mainWindow.classList.contains('window-minimized')) {
            mainWindow.classList.remove('window-minimized');
            if (appTaskbarBtn) appTaskbarBtn.classList.add('active', 'opened');
            if (navbar) navbar.classList.add('taskbar-hidden');
        }
    };

    if (restoreBtn) {
        restoreBtn.addEventListener('click', restoreWindow);
    }
    
    if (appTaskbarBtn) {
        appTaskbarBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const isMinimized = mainWindow.classList.contains('window-minimized');
            const isClosed = mainWindow.style.display === "none" || mainWindow.classList.contains('window-closed');
            
            if (!isMinimized && !isClosed) {
                hideBtn.click();
            } else {
                restoreWindow();
            }
        });
    }
});