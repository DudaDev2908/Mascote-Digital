// ---------- START BUTTON ----------
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

// ---------- PARTÍCULAS (todas as telas) ----------
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Parâmetros para fumaça densa
    const particleCount = 350;
    let particles = [];
    let smokeOffset = 0;

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            // Distribui por toda tela, mais espaçadas
            let baseX = (canvas.width/Math.sqrt(particleCount))*(i%Math.sqrt(particleCount)) + Math.random()*18;
            let baseY = (canvas.height/Math.sqrt(particleCount))*(Math.floor(i/Math.sqrt(particleCount))) + Math.random()*18;
            particles.push({
                x: baseX,
                y: baseY,
                baseX: baseX,
                baseY: baseY,
                speed: 0.4 + Math.random()*0.6,
                size: 1 + Math.random()*1.5,
                alpha: 0.12 + Math.random()*0.18,
                drift: (Math.random()-0.5)*0.5
            });
        }
    }
    initParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const cor = '#9d00ff';
        smokeOffset += 0.6;
        particles.forEach(p => {
            // Movimento suave e limitado na tela
            p.x += Math.sin(smokeOffset/80 + p.baseY/120)*0.8 + (Math.random()-0.5)*0.5;
            p.y += Math.cos(smokeOffset/60 + p.baseX/120)*0.8 + (Math.random()-0.5)*0.5;
            // Limites da tela
            if (p.x < 0) p.x = 0;
            if (p.x > canvas.width) p.x = canvas.width;
            if (p.y < 0) p.y = 0;
            if (p.y > canvas.height) p.y = canvas.height;

            ctx.save();
            ctx.globalAlpha = p.alpha;
            // Novo design: elipse, cor variada, blur e rotação
            ctx.translate(p.x, p.y);
            let angle = smokeOffset/60 + p.baseX/300;
            ctx.rotate(angle);
            let ellipseW = p.size * (1.8 + Math.random()*0.7);
            let ellipseH = p.size * (0.8 + Math.random()*0.5);
            // Cor: tons de roxo e branco translúcido
            let grad = ctx.createRadialGradient(0,0,ellipseH/2, 0,0,ellipseW);
            grad.addColorStop(0, 'rgba(255,255,255,0.18)');
            grad.addColorStop(0.5, cor);
            grad.addColorStop(1, 'rgba(124,58,237,0.12)');
            ctx.beginPath();
            ctx.ellipse(0, 0, ellipseW, ellipseH, 0, 0, Math.PI*2);
            ctx.fillStyle = grad;
            ctx.shadowColor = cor;
            ctx.shadowBlur = 16;
            ctx.fill();
            ctx.setTransform(1,0,0,1,0,0); // reset transform
            ctx.restore();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
});
