// ============================================
// ЭФФЕКТ ПРИ НАВЕДЕНИИ НА КОНТЕЙНЕР
// ============================================
function initContainerGlow() {
    const container = document.querySelector('.container');
    if (!container) return;

    container.addEventListener('mouseenter', () => {
        container.style.boxShadow = '0 30px 80px rgba(0,0,0,0.8), 0 0 60px rgba(255,180,100,0.05), inset 0 0 80px rgba(255,180,100,0.06)';
    });
    container.addEventListener('mouseleave', () => {
        container.style.boxShadow = '0 30px 80px rgba(0,0,0,0.7), inset 0 0 80px rgba(255,180,100,0.03)';
    });
}

// ============================================
// АВТОЗАПУСК
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initContainerGlow();
});
