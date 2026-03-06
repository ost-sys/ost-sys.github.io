const welcome = document.getElementById('welcome');
let currentActiveTabId = null;

const tabs = [
    { id: 'changelog', title: 'Список изменений - OST' },
    { id: 'themes',    title: 'Кастомизация - OST' },
    { id: 'keys',      title: 'Ключи активации - OST' },
    { id: 'about',     title: 'Информация - OST' }
];

function switchTab(newTabId) {
    if (currentActiveTabId === newTabId) return;

    if (welcome && welcome.style.display !== 'none') {
        welcome.style.display = 'none';
    }

    if (currentActiveTabId) {
        const oldIndicator = document.getElementById(currentActiveTabId);
        const oldContent = document.getElementById(currentActiveTabId + 'Main');

        if (oldIndicator) oldIndicator.style.display = 'none';
        if (oldContent) oldContent.style.display = 'none';
    }

    const newIndicator = document.getElementById(newTabId);
    const newContent = document.getElementById(newTabId + 'Main');

    if (newIndicator) newIndicator.style.display = 'block';
    if (newContent) newContent.style.display = 'block';

    const tabData = tabs.find(t => t.id === newTabId);
    if (tabData) document.title = tabData.title;

    currentActiveTabId = newTabId;
}

tabs.forEach(tab => {
    const capitalId = tab.id.charAt(0).toUpperCase() + tab.id.slice(1);
    const btnId = 'btn' + capitalId;
    const btn = document.getElementById(btnId);

    if (btn) {
        btn.addEventListener('click', function() {
            switchTab(tab.id);
        });
    } else {
        console.warn(`Button with ID ${btnId} not found`);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1); 

    if (hash) {
        const isValidTab = tabs.some(tab => tab.id === hash);
        
        if (isValidTab) {
            switchTab(hash);
        }
    }
});