import { createHomepage } from './pageLoad.js';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import './style.css';

document.addEventListener('DOMContentLoaded', (event) => {
    createHomepage();
});

function openTab(tabName) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear current content

    let tabContent;
    switch (tabName) {
        case 'Home':
            tabContent = loadHome();
            break;
        case 'Menu':
            tabContent = loadMenu();
            break;
        case 'Contact':
            tabContent = loadContact();
            break;
    }

    contentDiv.appendChild(tabContent);
    tabContent.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for tabs
    document.getElementById('tab-home').addEventListener('click', () => openTab('Home'));
    document.getElementById('tab-menu').addEventListener('click', () => openTab('Menu'));
    document.getElementById('tab-contact').addEventListener('click', () => openTab('Contact'));

    // Initialize default tab
    openTab('Home');
});
