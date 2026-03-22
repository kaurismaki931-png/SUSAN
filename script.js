const bouquet = document.getElementById('bouquet');
const colors = ['blue', 'yellow', 'violet'];

// --- Generación del Ramo de Flores (Igual que antes) ---
function createFlower() {
    const flower = document.createElement('div');
    const colorClass = colors[Math.floor(Math.random() * colors.length)];

    flower.classList.add('flower', colorClass);

    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 120;
    const x = Math.cos(angle) * radius + 150;
    const y = Math.sin(angle) * radius + 150;

    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;

    const duration = 3 + Math.random() * 4;
    const delay = Math.random() * 5;
    flower.style.animation = `appear ${duration}s ease-in-out ${delay}s infinite`;

    bouquet.appendChild(flower);
}

for (let i = 0; i < 60; i++) {
    createFlower();
}

// --- Generación de Fuegos Artificiales de Corazones (NUEVO) ---

// Definir colores exactos para los fuegos (mismos que las flores)
const fireworkColors = {
    blue: '#00ffff',
    yellow: '#ffdf00',
    violet: '#eaeaff'
};

function createHeartFirework() {
    const container = document.querySelector('.universe');
    const firework = document.createElement('div');
    firework.classList.add('heart-firework');

    // Posición aleatoria en la pantalla
    const x = Math.random() * 80 + 10; // Evitar bordes
    const y = Math.random() * 60 + 10; // Principalmente en la parte superior/media
    firework.style.left = `${x}vw`;
    firework.style.top = `${y}vh`;

    // Color aleatorio
    const colorKey = colors[Math.floor(Math.random() * colors.length)];
    firework.style.background = fireworkColors[colorKey];

    // Crear partículas que forman la explosión
    const numParticles = 12 + Math.floor(Math.random() * 8); // Variar número de partículas

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('heart-particle');

        // Dirección de explosión (coordenadas polares para un círculo)
        const angle = (i / numParticles) * Math.PI * 2;
        const radius = 100 + Math.random() * 150; // Qué tan lejos vuela
        const dx = Math.cos(angle) * radius;
        const dy = Math.sin(angle) * radius;
        const scale = 0.5 + Math.random() * 1.5; // Variar tamaño final

        // Pasar variables CSS para la animación
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.setProperty('--scale', scale);

        firework.appendChild(particle);
    }

    container.appendChild(firework);

    // Eliminar el elemento después de que termine la animación
    setTimeout(() => {
        firework.remove();
    }, 2500);
}

// Iniciar fuegos artificiales periódicamente
// Un fuego cada 3-6 segundos
function scheduleNextFirework() {
    const delay = 3000 + Math.random() * 3000;
    setTimeout(() => {
        createHeartFirework();
        scheduleNextFirework();
    }, delay);
}

// Lanzar el primero
createHeartFirework();
scheduleNextFirework();