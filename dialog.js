window.addEventListener('load', () => {
    const modal = document.getElementById('startModal');
    const closeBtn = document.getElementById('closeModalBtn');

    // Открываем модальное окно нативно
    if (modal) {
        modal.showModal();
    }

    // Закрываем при клике на крестик
    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    // Закрытие при клике ВНЕ окна (на бэкдроп)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
});