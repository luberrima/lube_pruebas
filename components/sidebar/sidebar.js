/* // Usamos mouseover y mouseout que son más fiables para delegación
document.addEventListener('mouseover', (e) => {
    const menu = e.target.closest('.main-menu');
    if (menu) {
        window.dispatchEvent(new CustomEvent('sidebar-toggle', { detail: { expanded: true } }));
    }
}, true);

document.addEventListener('mouseout', (e) => {
    const menu = e.target.closest('.main-menu');
    if (menu) {
        window.dispatchEvent(new CustomEvent('sidebar-toggle', { detail: { expanded: false } }));
    }
}, true); */