// fireworks-bg.js

// Ждем полной загрузки страницы
window.addEventListener('load', () => {
    const container = document.querySelector('.fireworks-bg');

    // Проверяем, загрузилась ли библиотека и найден ли контейнер
    if (container && window.Fireworks) {
        
        const fireworks = new Fireworks.default(container, {
            // Настройки салюта (можно поиграться)
            autoresize: true,
            opacity: 0.5,     // Прозрачность залпов (чтобы не отвлекало)
            acceleration: 1.05, 
            friction: 0.97,
            gravity: 1.5,
            particles: 50,    // Количество частиц в взрыве
            traceLength: 3,
            traceSpeed: 10,
            explosion: 5,     // Сила взрыва
            intensity: 40,    // Как часто запускаются (чем выше число, тем реже)
            flickering: 50,
            lineStyle: 'round',
            hue: {
                min: 0,
                max: 360
            },
            delay: {
                min: 30,
                max: 60
            },
            rocketsPoint: {
                min: 50,
                max: 50
            },
            lineWidth: {
                explosion: {
                    min: 1,
                    max: 3
                },
                trace: {
                    min: 1,
                    max: 2
                }
            },
            brightness: {
                min: 50,
                max: 80
            },
            decay: {
                min: 0.015,
                max: 0.03
            },
            mouse: {
                click: false,
                move: false,
                max: 1
            }
        });

        // Запуск салюта
        fireworks.start();
    }
});