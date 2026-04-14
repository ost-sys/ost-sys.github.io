async function loadChangelog() {
    try {
        const response = await fetch('../assets/json/changelog.json');
        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();
        
        renderChangelog(data);
        
    } catch (error) {
        console.error('Cannot load changelog:', error);
        document.getElementById('changelog-container').innerText = 'Error loading data';
    }
}

function renderChangelog(jsonData) {
    const container = document.getElementById('changelog-container');
    container.innerHTML = ''; 

    jsonData.changelog.forEach(item => {
        const card = document.createElement('div');
        card.className = 'notification-card';

        const changesObj = item.changes[0];
        let tableRows = '';
        for (const [key, value] of Object.entries(changesObj)) {
            tableRows += `
                <tr>
                    <td>${key}</td>
                    <td class="table-info">${value}</td>
                </tr>`;
        }

        card.innerHTML = `
            <span class="notification-card-title">Версия ${item.version}</span>
            <span class="notification-card-summary">
                <table>
                    ${tableRows}
                </table>
            </span>
        `;
        container.appendChild(card);
    });
}
loadChangelog();