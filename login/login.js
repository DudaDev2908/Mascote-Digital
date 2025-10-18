// ---------- CAPTCHA ----------
const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");
const loginButton = document.getElementById("loginButton");

function gerarCaptcha() {
	let chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
	let str = "";
	for (let i = 0; i < 5; i++) str += chars.charAt(Math.floor(Math.random() * chars.length));
	captchaText.textContent = str;
}
gerarCaptcha();

// ---------- LOGIN ----------
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit", (e) => {
	e.preventDefault(); // Prevent form submission
	if (captchaInput.value === captchaText.textContent) {
		window.location.href = "home.html";
	} else {
		alert("Captcha incorreto!");
		gerarCaptcha();
		captchaInput.value = "";
	}
});

// ---------- PARTÍCULAS (todas as telas) ----------
document.addEventListener('DOMContentLoaded', function() {
	function isConfigScreen() {
		return !document.getElementById('configScreen').classList.contains('hidden');
	}
			const canvas = document.getElementById("particles");
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			function resizeCanvas() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
			resizeCanvas();
			window.addEventListener('resize', resizeCanvas);

			// Detecta se está na tela de login
			function isLoginScreen() {
				return !document.getElementById('loginScreen').classList.contains('hidden');
			}

			// Parâmetros para fumaça densa
				const particleCountLogin = 420;
				const particleCountDefault = 180;
			let particles = [];
			let lastScreenLogin = isLoginScreen();

			// Variável para movimento conjunto
			let smokeOffset = 0;

			function initParticles() {
				particles = [];
				const count = (isLoginScreen() || isConfigScreen()) ? particleCountLogin : particleCountDefault;
					for (let i = 0; i < count; i++) {
						// Distribui por toda tela, mais espaçadas
						let baseX = (canvas.width/(Math.sqrt(count)))*(i%Math.sqrt(count)) + Math.random()*18;
						let baseY = (canvas.height/(Math.sqrt(count)))*(Math.floor(i/Math.sqrt(count))) + Math.random()*18;
						particles.push({
							x: baseX,
							y: baseY,
							baseX: baseX,
							baseY: baseY,
							speed: isLoginScreen() ? (0.5 + Math.random()*0.7) : (0.2 + Math.random()*0.4),
							size: isLoginScreen() ? (1.2 + Math.random()*1.8) : (1 + Math.random()*1.2),
							alpha: isLoginScreen() ? (0.10 + Math.random()*0.18) : (0.18 + Math.random()*0.22),
							drift: (Math.random()-0.5)*0.5
						});
					}
			}
			initParticles();

			// Reinicializa partículas ao trocar tela
			function checkScreenChange() {
				const nowLogin = isLoginScreen();
				if (nowLogin !== lastScreenLogin) {
					lastScreenLogin = nowLogin;
					initParticles();
				}
			}

			function animateParticles() {
				checkScreenChange();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				const cor = window.particleColor || '#9d00ff';
						if (isLoginScreen() || isConfigScreen()) smokeOffset += 0.7;
						particles.forEach(p => {
							// Movimento suave e limitado na tela
							if (isLoginScreen() || isConfigScreen()) {
								// Partículas transitam horizontal e verticalmente, sem sair da tela
								p.x += Math.sin(smokeOffset/80 + p.baseY/120)*0.8 + (Math.random()-0.5)*0.5;
								p.y += Math.cos(smokeOffset/60 + p.baseX/120)*0.8 + (Math.random()-0.5)*0.5;
								// Limites da tela
								if (p.x < 0) p.x = 0;
								if (p.x > canvas.width) p.x = canvas.width;
								if (p.y < 0) p.y = 0;
								if (p.y > canvas.height) p.y = canvas.height;
							} else {
								// Efeito padrão
								p.y += Math.cos(p.baseX/60 + smokeOffset/80)*0.6 + (Math.random()-0.5)*0.3;
								p.x += Math.sin(p.baseY/60 + smokeOffset/80)*0.6 + (Math.random()-0.5)*0.3;
								if (p.x < 0) p.x = 0;
								if (p.x > canvas.width) p.x = canvas.width;
								if (p.y < 0) p.y = 0;
								if (p.y > canvas.height) p.y = canvas.height;
							}
						ctx.save();
						ctx.globalAlpha = p.alpha;
						// Novo design: elipse, cor variada, blur e rotação
						ctx.translate(p.x, p.y);
						let angle = (isLoginScreen() ? smokeOffset/60 : p.y/60) + p.baseX/300;
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