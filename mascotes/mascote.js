// ---------- STATUS DO MASCOTE ----------
let status = {
  fome: 100,
  sede: 100,
  animo: 100,
  cansaco: 0,
  intimidade: 0
};
let personalidade = localStorage.getItem('mascotePersonalidade') || "Animado";
let animal = localStorage.getItem('mascoteAnimal') || "Sapo";
let gender = localStorage.getItem('mascoteGender') || "masculine"; // 'masculine' or 'feminine'

// Reset statuses if mascot changed or on page close
const lastAnimal = localStorage.getItem('lastAnimal');
if (lastAnimal && lastAnimal !== animal) {
  status = { fome: 100, sede: 100, animo: 100, cansaco: 0, intimidade: 0 };
  saveStatus();
}
localStorage.setItem('lastAnimal', animal);

window.addEventListener('beforeunload', () => {
  status = { fome: 100, sede: 100, animo: 100, cansaco: 0, intimidade: 0 };
  saveStatus();
});

function getMascoteIcon() {
  const animalIcons = {
    'Sapo': '🐸',
    'Gato': '🐱',
    'Cachorro': '🐶',
    'Passaro': '🐦',
    'Panda': '🐼',
    'Tubarao': '🦈'
  };
  return animalIcons[animal] || '🐸';
}

function loadStatus() {
  const saved = localStorage.getItem('mascoteStatus');
  if (saved) {
    try {
      Object.assign(status, JSON.parse(saved));
    } catch (e) {
    }
  }
}

function saveStatus() {
  localStorage.setItem('mascoteStatus', JSON.stringify(status));
}

function atualizarStatus() {
  ['Fome', 'Sede', 'Animo', 'Cansaco', 'Intimidade'].forEach(key => {
    const lower = key.toLowerCase();
    document.getElementById(`status${key}`).textContent = status[lower];
    document.getElementById(`bar${key}`).style.width = status[lower] + '%';
  });
}

function statusTimerTick() {
  status.fome = Math.max(0, status.fome - 2);
  status.sede = Math.max(0, status.sede - 2);
  status.animo = Math.max(0, status.animo - 2);
  status.cansaco = Math.min(100, status.cansaco + 2);
  atualizarStatus();
  saveStatus();
}

setInterval(statusTimerTick, 5000);

// ---------- TEMA DINÂMICO ----------

function setThemeByAnimal(animalSelecionado) {
  const themes = {
    'Sapo': {
      bg: 'linear-gradient(135deg, #0a2e0a 0%, #1a4e1a 50%, #0a2e0a 100%)',
      accent: '#4ade80',
      accentSecondary: '#22c55e',
      accentTertiary: '#16a34a',
      particles: 'rgba(74, 222, 128, 0.6)',
      textColor: '#e5e7eb',
      textMuted: '#b8c5d6',
      statusIcons: {
        fome: '🍎',
        sede: '💧',
        animo: '🎈',
        cansaco: '😴',
        intimidade: '💕'
      }
    },
    'Gato': {
      bg: 'linear-gradient(135deg, #451a03 0%, #78350f 50%, #451a03 100%)',
      accent: '#fb923c',
      accentSecondary: '#f97316',
      accentTertiary: '#ea580c',
      particles: 'rgba(251, 146, 60, 0.6)',
      textColor: '#e5e7eb',
      textMuted: '#b8c5d6',
      statusIcons: {
        fome: '🐟',
        sede: '💧',
        animo: '🎈',
        cansaco: '😴',
        intimidade: '💕'
      }
    },
    'Cachorro': {
      bg: 'linear-gradient(135deg, #3f2c0a 0%, #6b4423 50%, #3f2c0a 100%)',
      accent: '#a3a3a3',
      accentSecondary: '#737373',
      accentTertiary: '#525252',
      particles: 'rgba(163, 163, 163, 0.6)',
      textColor: '#e5e7eb',
      textMuted: '#b8c5d6',
      statusIcons: {
        fome: '🥩',
        sede: '💧',
        animo: '🎈',
        cansaco: '😴',
        intimidade: '💕'
      }
    },
    'Passaro': {
      bg: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 50%, #450a0a 100%)',
      accent: '#f87171',
      accentSecondary: '#ef4444',
      accentTertiary: '#dc2626',
      particles: 'rgba(248, 113, 113, 0.6)',
      textColor: '#e5e7eb',
      textMuted: '#b8c5d6',
      statusIcons: {
        fome: '🌰',
        sede: '💧',
        animo: '🎈',
        cansaco: '😴',
        intimidade: '💕'
      }
    },
    'Panda': {
      bg: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)',
      accent: '#64748b',
      accentSecondary: '#475569',
      accentTertiary: '#334155',
      particles: 'rgba(100, 116, 139, 0.6)',
      textColor: '#1f2937',
      textMuted: '#6b7280',
      statusIcons: {
        fome: '🍃',
        sede: '💧',
        animo: '🎈',
        cansaco: '😴',
        intimidade: '💕'
      }
    },
    'Tubarao': {
      bg: 'linear-gradient(135deg, #0c1729 0%, #1e293b 50%, #0c1729 100%)',
      accent: '#3b82f6',
      accentSecondary: '#2563eb',
      accentTertiary: '#1d4ed8',
      particles: 'rgba(59, 130, 246, 0.6)',
      textColor: '#e5e7eb',
      textMuted: '#b8c5d6',
      statusIcons: {
        fome: '🐟',
        sede: '💧',
        animo: '🎈',
        cansaco: '😴',
        intimidade: '💕'
      }
    }
  };

  const theme = themes[animalSelecionado] || themes['Sapo'];

  // Aplicar variáveis CSS dinamicamente
  const root = document.documentElement;
  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-secondary', theme.accentSecondary);
  root.style.setProperty('--accent-tertiary', theme.accentTertiary);
  root.style.setProperty('--text-color', theme.textColor);
  root.style.setProperty('--text-muted', theme.textMuted);

  // Atualizar nome do mascote
  const mascotNameElement = document.getElementById('mascotName');
  if (mascotNameElement) {
    const nomeMascote = localStorage.getItem('mascoteNome') || animalSelecionado;
    mascotNameElement.textContent = nomeMascote;
  }

  // Atualizar ícone do mascote
  const mascotEmojiElement = document.getElementById('mascote');
  if (mascotEmojiElement) {
    mascotEmojiElement.textContent = getMascoteIcon();
  }

  // Atualizar ícones dos status
  const statusIcons = theme.statusIcons;
  document.getElementById('statusIconFome').textContent = statusIcons.fome;
  document.getElementById('statusIconSede').textContent = statusIcons.sede;
  document.getElementById('statusIconAnimo').textContent = statusIcons.animo;
  document.getElementById('statusIconCansaco').textContent = statusIcons.cansaco;
  document.getElementById('statusIconIntimidade').textContent = statusIcons.intimidade;

  // Atualizar partículas se existirem
  const canvas = document.getElementById('particles');
  if (canvas && canvas.particlesUpdate) {
    canvas.particlesUpdate(theme.particles);
  }
}




// ---------- MISSÕES ----------

const PROGRESSION_LEVELS = {
  comida: [1, 10, 25, 50, 100, 200, 500],
  agua: [1, 10, 25, 50, 100, 200, 500],
  brincar: [1, 10, 25, 50, 100, 200, 500],
  dormir: [1, 10, 25, 50, 100, 200, 500]
};

const MISSION_TITLES = {
  comida: ["Primeira Alimentação", "Alimentador Experiente", "Mestre da Comida", "Guru Alimentar", "Lenda da Alimentação", "Deus da Comida", "Alimentador Supremo"],
  agua: ["Hidratação Essencial", "Hidratação Avançada", "Mestre da Água", "Guru Hidratação", "Lenda da Água", "Deus da Água", "Hidratador Supremo"],
  brincar: ["Hora de Brincar", "Brincalhão Experiente", "Mestre das Brincadeiras", "Guru do Brincar", "Lenda das Brincadeiras", "Deus do Brincar", "Brincalhão Supremo"],
  dormir: ["Primeira Soneca", "Dorminhoco Experiente", "Mestre do Sono", "Guru do Descanso", "Lenda do Sono", "Deus do Sono", "Dorminhoco Supremo"]
};

const MISSION_DESCRIPTIONS = {
  comida: (qty) => `Alimente seu mascote ${qty} vezes`,
  agua: (qty) => `Dê água ao seu mascote ${qty} vezes`,
  brincar: (qty) => `Brinque com seu mascote ${qty} vezes`,
  dormir: (qty) => `Deixe seu mascote dormir ${qty} vezes`
};

const MISSION_OBJECTIVES = {
  comida: (qty) => `Dar comida ${qty} vezes`,
  agua: (qty) => `Dar água ${qty} vezes`,
  brincar: (qty) => `Brincar ${qty} vezes`,
  dormir: (qty) => `Dormir ${qty} vezes`
};

const MISSION_ICONS = {
  comida: '🍎',
  agua: '💧',
  brincar: '🎈',
  dormir: '😴',
  meta: '🏆'
};

let missionLevels = {
  comida: 0,
  agua: 0,
  brincar: 0,
  dormir: 0
};

let missoes = [];

function generateMission(type, level) {
  const levels = PROGRESSION_LEVELS[type];
  const quantity = levels[level] || levels[levels.length - 1];
  const baseTitle = MISSION_TITLES[type][level] || MISSION_TITLES[type][MISSION_TITLES[type].length - 1];
  const title = `${baseTitle} do ${animal}`;
  const description = MISSION_DESCRIPTIONS[type](quantity).replace('mascote', animal.toLowerCase());
  const objective = MISSION_OBJECTIVES[type](quantity);
  const reward = `Intimidade +${10 + level * 5}`;
  const icon = MISSION_ICONS[type] || MISSION_ICONS.meta;

  return {
    id: `${type}_${level}`,
    titulo: title,
    descricao: description,
    objetivo: objective,
    progresso: 0,
    objetivoTotal: quantity,
    recompensa: reward,
    concluida: false,
    tipo: type,
    icon: icon
  };
}

function initializeMissoes() {
  missoes = [
    generateMission('comida', missionLevels.comida),
    generateMission('agua', missionLevels.agua),
    generateMission('brincar', missionLevels.brincar),
    generateMission('dormir', missionLevels.dormir),
    {
      id: 5,
      titulo: "Cuidador Dedicado ",
      descricao: "Complete todas as missões básicas",
      objetivo: "Completar missões 1-4",
      progresso: 0,
      objetivoTotal: 4,
      recompensa: "Intimidade +25",
      concluida: false,
      tipo: "meta"
    }
  ];
}

function loadMissionLevels() {
  const savedLevels = localStorage.getItem('mascoteMissionLevels');
  if (savedLevels) {
    const parsed = JSON.parse(savedLevels);
    missionLevels.comida = parsed.comida ?? missionLevels.comida;
    missionLevels.agua = parsed.agua ?? missionLevels.agua;
    missionLevels.brincar = parsed.brincar ?? missionLevels.brincar;
    missionLevels.dormir = parsed.dormir ?? missionLevels.dormir;
  }
}

function saveMissionLevels() {
  localStorage.setItem('mascoteMissionLevels', JSON.stringify(missionLevels));
}

function loadMissoesFromStorage() {
  const savedMissoes = localStorage.getItem('mascoteMissoes');
  if (savedMissoes) {
    const parsed = JSON.parse(savedMissoes);
    missoes.forEach(missao => {
      const savedMissao = parsed.find(m => m.id === missao.id);
      if (savedMissao) {
        missao.progresso = savedMissao.progresso;
        missao.concluida = savedMissao.concluida;
      }
    });
  }
}

function loadMissoes() {
  loadMissionLevels();
  initializeMissoes();

  const lastReset = localStorage.getItem('lastMissionReset');
  const today = new Date().toDateString();

  if (!lastReset || lastReset !== today) {
    // Reset missions for new day
    missoes.forEach(missao => {
      missao.progresso = 0;
      missao.concluida = false;
    });
    localStorage.setItem('lastMissionReset', today);
    saveMissoes(); // Save the reset state
  } else {
    // Load saved progress
    loadMissoesFromStorage();
  }
}

function saveMissoes() {
  localStorage.setItem('mascoteMissoes', JSON.stringify(missoes));
}

function atualizarMissao(tipo) {
  for (let i = 0; i < missoes.length; i++) {
    const missao = missoes[i];
    if (!missao.concluida && missao.tipo === tipo) {
      missao.progresso = Math.min(missao.objetivoTotal, missao.progresso + 1);
      if (missao.progresso >= missao.objetivoTotal) {
        missao.concluida = true;
        concederRecompensa(missao);
        addMessage(`🎉 Missão "${missao.titulo}" concluída! ${missao.recompensa}`, false);

        // Progress to next level
        if (tipo !== 'meta') {
          missionLevels[tipo]++;
          missoes[i] = generateMission(tipo, missionLevels[tipo]);
          saveMissionLevels();
        }
      }
    }
  }

  // Verificar missão meta
  const missaoMeta = missoes.find(m => m.tipo === "meta");
  if (!missaoMeta.concluida) {
    const missoesBasicas = missoes.filter(m => m.tipo !== "meta");
    const concluidas = missoesBasicas.filter(m => m.concluida).length;
    missaoMeta.progresso = concluidas;
    if (concluidas >= missaoMeta.objetivoTotal) {
      missaoMeta.concluida = true;
      concederRecompensa(missaoMeta);
      addMessage(`🏆 Meta alcançada! "${missaoMeta.titulo}" concluída! ${missaoMeta.recompensa}`, false);
    }
  }

  saveMissoes();
  atualizarInterfaceMissoes();
}

function concederRecompensa(missao) {
  if (missao.recompensa.includes("Intimidade")) {
    const bonus = parseInt(missao.recompensa.match(/\d+/)[0]);
    status.intimidade = Math.min(100, status.intimidade + bonus);
    atualizarStatus();
    saveStatus();
  }
}

function atualizarInterfaceMissoes() {
  const missoesContainer = document.getElementById('missoesContainer');
  if (!missoesContainer) return;

  missoesContainer.innerHTML = '';

  missoes.forEach(missao => {
    const missaoDiv = document.createElement('div');
    missaoDiv.className = `missao ${missao.concluida ? 'concluida' : 'ativa'}`;

    const tituloDiv = document.createElement('div');
    tituloDiv.className = 'missao-titulo';
    tituloDiv.innerHTML = `${missao.icon} ${missao.titulo} ${getMascoteIcon()}`;

    const descricaoDiv = document.createElement('div');
    descricaoDiv.className = 'missao-descricao';
    descricaoDiv.textContent = missao.descricao;

    const progressoDiv = document.createElement('div');
    progressoDiv.className = 'missao-progresso';
    progressoDiv.textContent = `${missao.progresso}/${missao.objetivoTotal}`;

    const barraDiv = document.createElement('div');
    barraDiv.className = 'missao-barra';
    const barraFill = document.createElement('div');
    barraFill.className = 'missao-barra-fill';
    barraFill.style.width = `${(missao.progresso / missao.objetivoTotal) * 100}%`;
    barraDiv.appendChild(barraFill);

    const recompensaDiv = document.createElement('div');
    recompensaDiv.className = 'missao-recompensa';
    recompensaDiv.textContent = `Recompensa: ${missao.recompensa}`;

    missaoDiv.appendChild(tituloDiv);
    missaoDiv.appendChild(descricaoDiv);
    missaoDiv.appendChild(progressoDiv);
    missaoDiv.appendChild(barraDiv);
    missaoDiv.appendChild(recompensaDiv);

    missoesContainer.appendChild(missaoDiv);
  });
}



// ---------- PARTICULAS VISUAIS ----------

function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 50;
  let particleColor = 'rgba(124, 58, 237, 0.6)'; // Cor padrão

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2
    };
  }

  function updateParticles() {
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particleColor.replace('0.6', particle.opacity);
      ctx.fill();
    });
  }

  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  // Função para atualizar a cor das partículas
  canvas.particlesUpdate = function(newColor) {
    particleColor = newColor;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle());
  }

  animate();
}

// ---------- EVENT LISTENERS ----------

function setupEventListeners() {
  // Modal controls
  const chatToggleBtn = document.getElementById('chatToggleBtn');
  const missionsToggleBtn = document.getElementById('missionsToggleBtn');
  const chatModal = document.getElementById('chatModal');
  const missionsModal = document.getElementById('missionsModal');
  const chatModalClose = document.getElementById('chatModalClose');
  const missionsModalClose = document.getElementById('missionsModalClose');

  // Chat modal toggle
  if (chatToggleBtn) {
    chatToggleBtn.addEventListener('click', () => {
      if (chatModal) {
        chatModal.classList.toggle('hidden');
        missionsModal?.classList.add('hidden'); // Close missions modal if open
      }
    });
  }

  // Missions modal toggle
  if (missionsToggleBtn) {
    missionsToggleBtn.addEventListener('click', () => {
      if (missionsModal) {
        missionsModal.classList.toggle('hidden');
        chatModal?.classList.add('hidden'); // Close chat modal if open
      }
    });
  }

  // Close modals
  if (chatModalClose) {
    chatModalClose.addEventListener('click', () => {
      chatModal?.classList.add('hidden');
    });
  }

  if (missionsModalClose) {
    missionsModalClose.addEventListener('click', () => {
      missionsModal?.classList.add('hidden');
    });
  }

  // Close modals when clicking outside
  if (chatModal) {
    chatModal.addEventListener('click', (e) => {
      if (e.target === chatModal) {
        chatModal.classList.add('hidden');
      }
    });
  }

  if (missionsModal) {
    missionsModal.addEventListener('click', (e) => {
      if (e.target === missionsModal) {
        missionsModal.classList.add('hidden');
      }
    });
  }



  // Action buttons - modified to open minigames instead of direct status update
  const btnComida = document.getElementById('btnComida');
  const btnAgua = document.getElementById('btnAgua');
  const btnBrincar = document.getElementById('btnBrincar');
  const btnDormir = document.getElementById('btnDormir');

  // Minigame modals
  const alimentarModal = document.getElementById('alimentarModal');
  const aguaModal = document.getElementById('aguaModal');
  const brincarModal = document.getElementById('brincarModal');
  const dormirModal = document.getElementById('dormirModal');

  // Close buttons for minigames
  const alimentarModalClose = document.getElementById('alimentarModalClose');
  const aguaModalClose = document.getElementById('aguaModalClose');
  const brincarModalClose = document.getElementById('brincarModalClose');
  const dormirModalClose = document.getElementById('dormirModalClose');

  if (btnComida) {
    btnComida.addEventListener('click', () => {
      if (alimentarModal) {
        alimentarModal.classList.remove('hidden');
      }
    });
  }

  if (btnAgua) {
    btnAgua.addEventListener('click', () => {
      if (aguaModal) {
        aguaModal.classList.remove('hidden');
      }
    });
  }

  if (btnBrincar) {
    btnBrincar.addEventListener('click', () => {
      if (brincarModal) {
        brincarModal.classList.remove('hidden');
      }
    });
  }

  if (btnDormir) {
    btnDormir.addEventListener('click', () => {
      if (dormirModal) {
        dormirModal.classList.remove('hidden');
      }
    });
  }

  // Close minigame modals
  if (alimentarModalClose) {
    alimentarModalClose.addEventListener('click', () => {
      alimentarModal.classList.add('hidden');
      stopAlimentarGame();
    });
  }
  if (aguaModalClose) {
    aguaModalClose.addEventListener('click', () => {
      aguaModal.classList.add('hidden');
      stopAguaGame();
    });
  }
  if (brincarModalClose) {
    brincarModalClose.addEventListener('click', () => {
      brincarModal.classList.add('hidden');
      stopBrincarGame();
    });
  }
  if (dormirModalClose) {
    dormirModalClose.addEventListener('click', () => {
      dormirModal.classList.add('hidden');
      stopDormirGame();
    });
  }

  // Header buttons
  const settingsBtn = document.getElementById('settingsBtn');
  const profileBtn = document.getElementById('profileBtn');

  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      addMessage("Configurações ainda não implementadas! ⚙️", false);
    });
  }

  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      addMessage("Perfil ainda não implementado! 👤", false);
    });
  }
}


// ---------- MINIGAMES IMPLEMENTATION ----------

// Alimentar minigame: pegar frutas caindo
let alimentarGameInterval;
let alimentarTimeout;
let alimentarScore = 0;
const alimentarGameArea = document.getElementById('alimentarGameArea');
const alimentarScoreSpan = document.getElementById('alimentarScore');
const alimentarStartBtn = document.getElementById('alimentarStartBtn');

function startAlimentarGame() {
  alimentarScore = 0;
  alimentarScoreSpan.textContent = alimentarScore;
  alimentarStartBtn.disabled = true;
  alimentarGameArea.innerHTML = `<div class="catcher" id="catcher">${getMascoteIcon()}</div>`;
  const catcher = document.getElementById('catcher');
  let catcherX = alimentarGameArea.clientWidth / 2 - 20;

  catcher.style.left = catcherX + 'px';

  // Move catcher with mouse
  alimentarGameArea.addEventListener('mousemove', (e) => {
    const rect = alimentarGameArea.getBoundingClientRect();
    catcherX = e.clientX - rect.left - 20;
    catcherX = Math.max(0, Math.min(catcherX, alimentarGameArea.clientWidth - 40));
    catcher.style.left = catcherX + 'px';
  });

  // Create falling food items
  let foodItems = [];

  function createFoodItem() {
    const food = document.createElement('div');
    food.className = 'food-item';
    const foods = ['🍎', '🍌', '🍇', '🍓', '🍒'];
    food.textContent = foods[Math.floor(Math.random() * foods.length)];
    food.style.left = Math.random() * (alimentarGameArea.clientWidth - 30) + 'px';
    food.style.top = '-30px';
    alimentarGameArea.appendChild(food);
    foodItems.push(food);
  }

  function updateFoodItems() {
    foodItems.forEach((food, index) => {
      let top = parseFloat(food.style.top);
      top += 4;
      food.style.top = top + 'px';

      // Check collision with catcher
      const catcherRect = catcher.getBoundingClientRect();
      const foodRect = food.getBoundingClientRect();

      if (
        foodRect.bottom >= catcherRect.top &&
        foodRect.left < catcherRect.right &&
        foodRect.right > catcherRect.left
      ) {
        // Caught food
        alimentarScore++;
        alimentarScoreSpan.textContent = alimentarScore;
        alimentarGameArea.removeChild(food);
        foodItems.splice(index, 1);
      } else if (top > alimentarGameArea.clientHeight) {
        // Remove food that fell
        alimentarGameArea.removeChild(food);
        foodItems.splice(index, 1);
      }
    });
  }

  alimentarGameInterval = setInterval(() => {
    if (foodItems.length < 5) {
      createFoodItem();
    }
    updateFoodItems();
  }, 100);

  // End game after 15 seconds
  alimentarTimeout = setTimeout(() => {
    stopAlimentarGame();
    // Apply status changes based on score (partial rewards for effort)
    const fomeBonus = alimentarScore * 2; // 2% per point
    status.fome = Math.min(100, status.fome + fomeBonus);
    if (alimentarScore >= 15) {
      addMessage(`Você alimentou bem o mascote! Pontos: ${alimentarScore} 🍎`, false);
      atualizarMissao("comida");
    } else if (alimentarScore > 0) {
      addMessage(`Você conseguiu alimentar um pouco o mascote! Pontos: ${alimentarScore} 🍎`, false);
    } else {
      addMessage(`Você não conseguiu pegar nenhuma fruta. Tente novamente! 😞`, false);
    }
    atualizarStatus();
    saveStatus();
    alimentarModal.classList.add('hidden');
  }, 15000);
}

function stopAlimentarGame() {
  clearInterval(alimentarGameInterval);
  alimentarStartBtn.disabled = false;
  if (alimentarGameArea) {
    alimentarGameArea.innerHTML = `<div class="catcher" id="catcher">${getMascoteIcon()}</div>`;
  }
}

if (alimentarStartBtn) {
  alimentarStartBtn.addEventListener('click', () => {
    startAlimentarGame();
  });
}

// Água minigame: encher copo no momento certo
let aguaGameInterval;
let aguaTimeout;
let aguaLevel = 0;
let aguaIncreasing = true;
const aguaStartBtn = document.getElementById('aguaStartBtn');
const waterElement = document.getElementById('water');
const pourIndicator = document.getElementById('pourIndicator');

function startAguaGame() {
  aguaLevel = 0;
  aguaIncreasing = true;
  aguaStartBtn.disabled = true;
  pourIndicator.textContent = "Clique quando a água estiver no nível ideal!";
  waterElement.style.height = '0%';

  // Add visual indicator for ideal water level range (40%-60%)
  const glass = document.getElementById('glass');
  let idealIndicator = document.getElementById('idealWaterLevelIndicator');
  if (!idealIndicator) {
    idealIndicator = document.createElement('div');
    idealIndicator.id = 'idealWaterLevelIndicator';
    idealIndicator.style.position = 'absolute';
    idealIndicator.style.bottom = '40%';
    idealIndicator.style.left = '0';
    idealIndicator.style.width = '100%';
    idealIndicator.style.height = '20%';
    idealIndicator.style.backgroundColor = 'rgba(0, 191, 255, 0.7)';
    idealIndicator.style.border = '2px solid #00BFFF';
    idealIndicator.style.pointerEvents = 'none';
    idealIndicator.style.zIndex = '10';
    glass.appendChild(idealIndicator);
  }

  // Remove arrow from glass if exists (to avoid duplicates)
  let idealArrow = document.getElementById('idealWaterLevelArrow');
  if (idealArrow) {
    idealArrow.remove();
  }
  // Create arrow as sibling of glass inside aguaGameArea
  const aguaGameArea = document.getElementById('aguaGameArea');
  if (!idealArrow) {
    idealArrow = document.createElement('div');
    idealArrow.id = 'idealWaterLevelArrow';
    idealArrow.textContent = '←';
    idealArrow.style.position = 'absolute';
    idealArrow.style.right = '10px'; // inside container, not outside
    idealArrow.style.bottom = '50%';
    idealArrow.style.transform = 'translateY(50%)';
    idealArrow.style.fontSize = '24px';
    idealArrow.style.color = '#00BFFF';
    idealArrow.style.pointerEvents = 'none';
    idealArrow.style.zIndex = '15';
    idealArrow.style.userSelect = 'none';
    if (aguaGameArea) {
      aguaGameArea.appendChild(idealArrow);
    }
  }

  aguaGameInterval = setInterval(() => {
    if (aguaIncreasing) {
      aguaLevel += 2;
      if (aguaLevel >= 100) {
        aguaLevel = 100;
        aguaIncreasing = false;
      }
    } else {
      aguaLevel -= 2;
      if (aguaLevel <= 0) {
        aguaLevel = 0;
        aguaIncreasing = true;
      }
    }
    waterElement.style.height = aguaLevel + '%';
  }, 50);

  // End game after 30 seconds if not clicked
  aguaTimeout = setTimeout(() => {
    stopAguaGame();
    addMessage("Você não clicou no momento certo. 😞", false);
    aguaModal.classList.add('hidden');
  }, 30000);
}

function stopAguaGame() {
  clearInterval(aguaGameInterval);
  clearTimeout(aguaTimeout);
  aguaStartBtn.disabled = false;
  waterElement.style.height = '0%';
  pourIndicator.textContent = "Clique quando a água estiver no nível ideal!";
}

if (aguaStartBtn) {
  aguaStartBtn.addEventListener('click', () => {
    startAguaGame();
  });
}

const glass = document.getElementById('glass');
glass?.addEventListener('click', () => {
  if (!aguaStartBtn.disabled) {
    return; // Game not started
  }
  // Check if aguaLevel is within ideal range (40% to 60%)
  if (aguaLevel >= 40 && aguaLevel <= 60) {
    status.sede = Math.min(100, status.sede + 30);
    addMessage("Você encheu o copo no momento certo! 💧", false);
    atualizarMissao("agua");
  } else {
    addMessage("Você errou o momento de encher o copo. 😞", false);
  }
  atualizarStatus();
  saveStatus();
  stopAguaGame();
  aguaModal.classList.add('hidden');
});

// Brincar minigame: jogo da memória simples
const brincarStartBtn = document.getElementById('brincarStartBtn');
const memoryGrid = document.getElementById('memoryGrid');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let brincarAttempts = 0;
const brincarAttemptsSpan = document.getElementById('brincarAttempts');

function createMemoryCards() {
  const icons = ['🎈', '🎉', '🎊', '🎁', '🎀', '🎮', '🧸', '🎯'];
  cards = icons.concat(icons); // duplicate for pairs
  cards.sort(() => Math.random() - 0.5);
}

function renderMemoryGrid() {
  memoryGrid.innerHTML = '';
  cards.forEach((icon, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.icon = icon;
    card.dataset.index = index;
    card.textContent = '';
    card.addEventListener('click', onCardClick);
    memoryGrid.appendChild(card);
  });
}

function onCardClick(e) {
  const card = e.currentTarget;
  if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
    return;
  }
  card.classList.add('flipped');
  card.textContent = card.dataset.icon;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    brincarAttempts++;
    brincarAttemptsSpan.textContent = brincarAttempts;
    if (flippedCards[0].dataset.icon === flippedCards[1].dataset.icon) {
      // Match
      flippedCards[0].classList.add('matched');
      flippedCards[1].classList.add('matched');
      matchedPairs++;
      flippedCards = [];
      if (matchedPairs === cards.length / 2) {
        // Game won
        addMessage(`Parabéns! Você completou o jogo da memória em ${brincarAttempts} tentativas! 🎈`, false);
        status.animo = Math.min(100, status.animo + 30);
        status.cansaco = Math.min(100, status.cansaco + 15);
        atualizarMissao("brincar");
        atualizarStatus();
        saveStatus();
        brincarModal.classList.add('hidden');
        stopBrincarGame();
      }
    } else {
      // No match
      setTimeout(() => {
        flippedCards.forEach(card => {
          card.classList.remove('flipped');
          card.textContent = '';
        });
        flippedCards = [];
      }, 1000);
    }
  }
}

function startBrincarGame() {
  matchedPairs = 0;
  brincarAttempts = 0;
  brincarAttemptsSpan.textContent = brincarAttempts;
  createMemoryCards();
  renderMemoryGrid();
  brincarStartBtn.disabled = true;
}

function stopBrincarGame() {
  brincarStartBtn.disabled = false;
  memoryGrid.innerHTML = '';
  flippedCards = [];
  matchedPairs = 0;
  brincarAttempts = 0;
  brincarAttemptsSpan.textContent = brincarAttempts;
}

if (brincarStartBtn) {
  brincarStartBtn.addEventListener('click', () => {
    startBrincarGame();
  });
}

// Dormir minigame: estrelas aparecendo para clicar
let dormirGameInterval;
let dormirTimeout;
let starElements = [];
let dormirScore = 0;
const dormirStartBtn = document.getElementById('dormirStartBtn');
const dormirScoreSpan = document.getElementById('dormirScore');
const starsContainer = document.getElementById('starsContainer');

function startDormirGame() {
  dormirScore = 0;
  dormirScoreSpan.textContent = dormirScore;
  dormirStartBtn.disabled = true;
  starsContainer.innerHTML = '';
  starElements = [];

  // Create stars randomly
  function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = '⭐';
    const containerWidth = starsContainer.clientWidth || 300;
    const containerHeight = starsContainer.clientHeight || 200;
    star.style.left = Math.random() * (containerWidth - 30) + 'px';
    star.style.top = Math.random() * (containerHeight - 30) + 'px';
    star.addEventListener('click', () => {
      dormirScore++;
      dormirScoreSpan.textContent = dormirScore;
      star.remove();
      starElements = starElements.filter(s => s !== star);
    });
    starsContainer.appendChild(star);
    starElements.push(star);

    // Remove star after 2 seconds if not clicked
    setTimeout(() => {
      if (star.parentNode) {
        star.remove();
        starElements = starElements.filter(s => s !== star);
      }
    }, 2000);
  }

  // Create initial stars after a delay to ensure container is rendered
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      createStar();
    }
  }, 500);

  dormirGameInterval = setInterval(() => {
    if (starElements.length < 8) {
      createStar();
    }
  }, 2000);

  // End game after 15 seconds
  dormirTimeout = setTimeout(() => {
    stopDormirGame();
    dormirModal.classList.add('hidden');
    // Apply status changes based on score
    status.cansaco = Math.max(0, status.cansaco - 20);
    if (dormirScore >= 10) {
      status.intimidade = Math.min(100, status.intimidade + 10);
      addMessage(`Seu mascote teve uma noite de sono incrível! Pontos: ${dormirScore} 🌟`, false);
      atualizarMissao("dormir");
    } else {
      addMessage(`Seu mascote não conseguiu dormir bem. Pontos: ${dormirScore} 😞`, false);
    }
    atualizarStatus();
    saveStatus();
  }, 15000);
}

function stopDormirGame() {
  clearInterval(dormirGameInterval);
  clearTimeout(dormirTimeout);
  dormirStartBtn.disabled = false;
  if (starsContainer) {
    starsContainer.innerHTML = '';
  }
  starElements = [];
  dormirScore = 0;
  dormirScoreSpan.textContent = dormirScore;
}

if (dormirStartBtn) {
  dormirStartBtn.addEventListener('click', () => {
    startDormirGame();
  });
}




  
// ---------- CHAT ----------

// Normalize incoming messages to help detection of intents (abbrev, accents, punctuation)
function normalizeMessage(msg = '') {
  if (!msg) return '';
  let s = msg.toLowerCase().trim();
  // Replace common abbreviations / variants
  s = s.replace(/\bvc\b/g, 'você');
  s = s.replace(/\bvoce\b/g, 'você');
  s = s.replace(/\bc[eé]\b/g, 'cê');
  s = s.replace(/\bce\b/g, 'cê');
  s = s.replace(/\btu\b/g, 'você');
  s = s.replace(/\bq\b/g, 'que');
  s = s.replace(/\bpq\b/g, 'porque');
  // Remove extra punctuation for simpler checks
  s = s.replace(/[.,!?;:()-]/g, ' ');
  // Collapse multiple spaces
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

function adjustResponseForGender(response, gender) {
  if (gender === 'feminine') {
    response = response.replace(/todo/g, 'toda');
    response = response.replace(/meu/g, 'minha');
    response = response.replace(/amigo/g, 'amiga');
    response = response.replace(/companheiro/g, 'companheira');
    response = response.replace(/você é/g, 'você é');
    // Add more if needed
  } else if (gender === 'masculine') {
    response = response.replace(/toda/g, 'todo');
    response = response.replace(/minha/g, 'meu');
    response = response.replace(/amiga/g, 'amigo');
    response = response.replace(/companheira/g, 'companheiro');
  }
  return response;
}

function getRandomMascotResponse(msg = "") {
  const normalized = normalizeMessage(msg);
  const intent = detectIntent(normalized);

  let response = getResponseForIntent(intent, normalized);
  response = adjustResponseForGender(response, gender);

  // Add follow-up logic for certain intents
  if (intent === 'status_question') {
    // Follow up with a question
    response += " E você, como está?";
  } else if (intent === 'compliment') {
    // Increase intimacy slightly
    status.intimidade = Math.min(100, status.intimidade + 1);
    saveStatus();
  }

  return response;
}

function detectIntent(normalized) {
  if (normalized.includes('oi') || normalized.includes('olá') || normalized.includes('ola') || normalized.includes('bom dia') || normalized.includes('boa tarde') || normalized.includes('boa noite')) {
    return 'greeting';
  }
  if (normalized.includes('como vai') || normalized.includes('como está') || normalized.includes('tudo bem') || normalized.includes('como voce está')) {
    return 'status_question';
  }
  if (normalized.includes('tchau') || normalized.includes('até logo') || normalized.includes('adeus') || normalized.includes('até mais')) {
    return 'farewell';
  }
  if (normalized.includes('amor') || normalized.includes('amo') || normalized.includes('te amo') || normalized.includes('amo voce')) {
    return 'love';
  }
  if (normalized.includes('bonito') || normalized.includes('linda') || normalized.includes('fofo') || normalized.includes('adorável') || normalized.includes('gostoso') || normalized.includes('incrível')) {
    return 'compliment';
  }
  if (normalized.includes('fome') || normalized.includes('sede') || normalized.includes('animo') || normalized.includes('cansaco') || normalized.includes('intimidade') || normalized.includes('status')) {
    return 'status_inquiry';
  }
  if (normalized.includes('brincar') || normalized.includes('jogar') || normalized.includes('diversao')) {
    return 'play_request';
  }
  if (normalized.includes('comer') || normalized.includes('alimentar') || normalized.includes('comida')) {
    return 'food_request';
  }
  if (normalized.includes('dormir') || normalized.includes('sono') || normalized.includes('cansado')) {
    return 'sleep_request';
  }
  if (normalized.includes('qual animal') || normalized.includes('que animal') || normalized.includes('tipo de animal')) {
    return 'animal_question';
  }
  if (normalized.includes('historia') || normalized.includes('conta uma historia') || normalized.includes('me conte')) {
    return 'story_request';
  }
  if (normalized.includes('qual seu') || normalized.includes('favorito') || normalized.includes('gosta de')) {
    return 'preference_question';
  }
  return 'general';
}

function getResponseForIntent(intent, normalized) {
  const responses = {
    'Animado': {
      greeting: [`Oi! ${getMascoteIcon()} Que bom ver você! Vamos conversar!`, `Olá! Estou super animado para bater papo! ${getMascoteIcon()}`],
      status_question: [`Estou ótimo, obrigado! Cheio de energia! E você? ${getMascoteIcon()}`, `Tudo perfeito aqui! Vamos fazer algo divertido?`],
      farewell: [`Até logo! Volte logo para mais aventuras! 👋`, `Tchau! Mal posso esperar pela próxima conversa!`],
      love: [`Eu também te amo! ❤️🐾 Você é meu melhor amigo!`, `Amo você demais! Vamos ficar juntos para sempre!`],
      compliment: [`Obrigado! Você me deixa tão feliz! 😊`, `Que fofo! Você é incrível também!`],
      status_inquiry: [`Minha fome está em ${status.fome}%, sede em ${status.sede}%, ânimo em ${status.animo}%! Como posso ajudar?`, `Estou com fome: ${status.fome}%, sede: ${status.sede}%, ânimo: ${status.animo}%. Vamos cuidar disso?`],
      play_request: [`Vamos brincar! Que tal um jogo da memória? 🎈`, `Adoro brincar! Vamos começar uma aventura!`],
      food_request: [`Estou com fome! Vamos jogar o minigame de alimentação? 🍎`, `Comida! Me ajude a pegar as frutas!`],
      sleep_request: [`Estou cansado... Vamos dormir e contar estrelas? 😴`, `Hora de descansar! Me ajude a dormir bem!`],
      animal_question: [`Eu sou um ${animal.toLowerCase()}! ${getMascoteIcon()} E você, qual seu animal favorito?`, `Sou um ${animal.toLowerCase()} fofo! Qual animal você gosta mais?`],
      story_request: [`Era uma vez um ${animal.toLowerCase()} aventureiro... Quer ouvir mais? 📖`, `Vou contar uma história! Prepare-se para uma aventura!`],
      preference_question: [`Gosto de brincar e comer! E você?`, `Meu favorito é brincar com você! O que você gosta?`],
      general: [`Obrigado pela mensagem! 😊`, `Que bom ouvir isso! 🎉`, `Vamos conversar mais! 💬`, `Adorei sua mensagem! ❤️`, `Estou animado para responder! 🚀`, `Isso me deixou feliz! 😄`, `Que legal! Conte mais! 🌟`, `Amo conversar com você! 🐾`, `Sua mensagem me energizou! ⚡`, `Vamos tornar este dia incrível! 🎈`]
    },
    'Calmo': {
      greeting: [`Oi. ${getMascoteIcon()} Bom ver você.`, `Olá. Vamos conversar tranquilamente.`],
      status_question: [`Estou bem, obrigado. E você?`, `Tudo tranquilo aqui. Como vai?`],
      farewell: [`Até logo. Volte quando quiser.`, `Adeus. Tenha um bom dia.`],
      love: [`Eu também te amo. ❤️`, `Aprecio seu amor. Vamos continuar assim.`],
      compliment: [`Obrigado. Você é gentil.`, `Que bom ouvir isso. Obrigado.`],
      status_inquiry: [`Fome: ${status.fome}%, Sede: ${status.sede}%, Ânimo: ${status.animo}%.`, `Meus status estão em equilíbrio.`],
      play_request: [`Vamos brincar calmamente.`, `Brincar pode ser relaxante.`],
      food_request: [`Preciso de comida. Vamos alimentar?`, `Comida ajuda a manter a calma.`],
      sleep_request: [`Estou cansado. Vamos dormir?`, `Sono é importante para o equilíbrio.`],
      animal_question: [`Sou um ${animal.toLowerCase()}. ${getMascoteIcon()}`, `Eu sou um ${animal.toLowerCase()}.`],
      story_request: [`Uma história calma...`, `Vou contar uma história serena.`],
      preference_question: [`Gosto de momentos tranquilos.`, `Prefiro paz e calma.`],
      general: [`Obrigado pela mensagem. 😌`, `Aprecio sua conversa. 🌸`, `Vamos manter a calma e conversar. 💭`, `Sua mensagem é bem-vinda. 🙏`, `Gosto de momentos tranquilos como este. 🕊️`]
    },
    'Brincalhão': {
      greeting: [`Oi! ${getMascoteIcon()} Pronto para brincar?`, `Olá! Vamos rir um pouco!`],
      status_question: [`Estou superbem! E você, como vai? 😂`, `Tudo ótimo! Vamos fazer bagunça?`],
      farewell: [`Tchau! Volte para mais risadas! 👋`, `Até logo! Não esqueça de sorrir!`],
      love: [`Eu também te amo! ❤️🐾 Vamos dançar?`, `Amo você! Vamos fazer algo louco!`],
      compliment: [`Haha, obrigado! Você é hilário!`, `Que engraçado! Você me faz rir!`],
      status_inquiry: [`Fome: ${status.fome}% - vamos comer algo engraçado? Sede: ${status.sede}% - água com gás?`, `Ânimo: ${status.animo}% - pronto para piadas?`],
      play_request: [`Vamos brincar! Jogos malucos! 🎪`, `Brincar é minha paixão!`],
      food_request: [`Comida! Vamos pegar frutas voadoras! 🍎`, `Alimentar com estilo!`],
      sleep_request: [`Dormir? Vamos contar piadas na cama! 😴`, `Sono com sonhos engraçados!`],
      animal_question: [`Sou um ${animal.toLowerCase()} maluco! ${getMascoteIcon()} Qual seu animal engraçado?`, `Eu sou um ${animal.toLowerCase()}! Vamos imitar animais?`],
      story_request: [`Era uma vez um ${animal.toLowerCase()} que fazia caretas... Quer ouvir? 📖`, `História engraçada vindo aí!`],
      preference_question: [`Gosto de brincar e rir! E você?`, `Meu favorito é fazer graça!`],
      general: [`Haha, obrigado! 😂`, `Sua mensagem me fez rir! 🤪`, `Vamos brincar um pouco? 🎪`, `Que mensagem divertida! 🎭`, `Estou pronto para aventuras! 🏞️`]
    }
  };

  const personalityResponses = responses[personalidade] || responses['Animado'];
  const intentResponses = personalityResponses[intent] || personalityResponses['general'];
  return intentResponses[Math.floor(Math.random() * intentResponses.length)];
}

function addMessage(text, isUser = false) {
  const chatMessages = document.getElementById("chatMessages");
  if (!chatMessages) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${isUser ? 'user-message' : 'mascot-message'}`;
  msgDiv.innerHTML = `
    <div class="message-avatar">${isUser ? '👤' : getMascoteIcon()}</div>
    <div class="message-content">
      <div class="message-text">${text}</div>
      <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    </div>
  `;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setupChatEventListeners() {
  const chatInput = document.getElementById('chatInput');
  const chatButton = document.getElementById('chatButton');
  const quickReplies = document.getElementById('quickReplies');

  // Chat button
  if (chatButton) {
    chatButton.addEventListener('click', () => {
      const message = chatInput?.value.trim();
      if (message) {
        addMessage(message, true);
        chatInput.value = '';
        // Simulate mascot response
        setTimeout(() => {
          const response = getRandomMascotResponse(message);
          addMessage(response, false);
        }, 1000);
      }
    });
  }

  // Chat input enter key
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        chatButton?.click();
      }
    });
  }

  // Quick reply buttons
  if (quickReplies) {
    quickReplies.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-reply-btn')) {
        const reply = e.target.getAttribute('data-reply');
        if (reply) {
          addMessage(reply, true);
          // Simulate mascot response
          setTimeout(() => {
            const response = getRandomMascotResponse(reply);
            addMessage(response, false);
          }, 1000);
        }
      }
    });
  }
}

// ---------- 3D MODEL LOADING AND DISPLAY ----------

let scene, camera, renderer, model, mixer, clock;
const mascoteContainer = document.getElementById('mascote');
const modelPathMap = {
  'Sapo': '3d_models/sapo.glb',
  'Gato': '3d_models/gato.glb',
  'Cachorro': '3d_models/cachorro.glb',
  'Passaro': '3d_models/passaro.glb',
  'Panda': '3d_models/panda.glb',
  'Tubarao': '3d_models/tubarao.glb'
};

function getModelConfigSapo() {
  return {
    scale: new THREE.Vector3(25.9, 25.9, 25.9),
    cameraPosition: new THREE.Vector3(0, 1.8, 6.5),
    rotationY: 9.4
  };
}

function getModelConfigGato() {
  return {
    scale: new THREE.Vector3(8, 8, 5),
    cameraPosition: new THREE.Vector3(0, 1.8, 5.5),
    rotationY: 0
  };
}

function getModelConfigCachorro() {
  return {
    scale: new THREE.Vector3(2.5, 1.5, 1.5),
    cameraPosition: new THREE.Vector3(0, 1.8, 6.0),
    rotationY: 0
  };
}

function getModelConfigPassaro() {
  return {
    scale: new THREE.Vector3(1.5, 1.5, 1.5),
    cameraPosition: new THREE.Vector3(0, 1.8, 5.0),
    rotationY: 0
  };
}

function getModelConfigPanda() {
  return {
    scale: new THREE.Vector3(4, 4, 4),
    cameraPosition: new THREE.Vector3(0, 1.6, 6.0),
    rotationY: 0
  };
}

function getModelConfigTubarao() {
  return {
    scale: new THREE.Vector3(0.1, 2.5, 3.5),
    cameraPosition: new THREE.Vector3(0, 1.9, 6.5),
    rotationY: 8
  };
}

function getModelConfigLeopardo() {
  return {
    scale: new THREE.Vector3(2.5, 2.5, 3.0),
    cameraPosition: new THREE.Vector3(0, 2, 6.0),
    rotationY: 0
  };
}

function getModelConfig(animalName) {
  switch (animalName) {
    case 'Sapo': return getModelConfigSapo();
    case 'Gato': return getModelConfigGato();
    case 'Cachorro': return getModelConfigCachorro();
    case 'Passaro': return getModelConfigPassaro();
    case 'Panda': return getModelConfigPanda();
    case 'Tubarao': return getModelConfigTubarao();
    case 'Leopardo': return getModelConfigLeopardo();
    default: return getModelConfigSapo();
  }
}

function init3DModel() {
  if (!mascoteContainer) return;

  // Clear previous canvas if any
  while (mascoteContainer.firstChild) {
    mascoteContainer.removeChild(mascoteContainer.firstChild);
  }

  scene = new THREE.Scene();
  clock = new THREE.Clock();

  const width = 200;
  const height = 200;

  const config = getModelConfig(animal);

  camera = new THREE.PerspectiveCamera(44, width / height, 3, 1000);
  camera.position.copy(config.cameraPosition);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0); // transparent background

  mascoteContainer.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);

  const loader = new THREE.GLTFLoader();
  const modelPath = modelPathMap[animal] || modelPathMap['Sapo'];

  loader.load(
    modelPath,
    function (gltf) {
      model = gltf.scene;
      model.scale.copy(config.scale);
      model.position.set(0, 0, 0);
      model.rotation.y = config.rotationY;
      scene.add(model);

      if (gltf.animations && gltf.animations.length) {
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
      }

      animate();
    },
    undefined,
    function (error) {
      console.error('Erro ao carregar modelo 3D:', error);
    }
  );
}

function animate() {
  requestAnimationFrame(animate);
  if (mixer) {
    mixer.update(clock.getDelta());
  }
  renderer.render(scene, camera);
}

// ---------- INICIALIZAÇÃO ----------

window.addEventListener('DOMContentLoaded', () => {
  loadStatus();
  loadMissoes();
  atualizarStatus();
  atualizarInterfaceMissoes();
  initParticles();
  setupEventListeners();
  setupChatEventListeners();

  // Aplicar tema baseado no animal selecionado
  setThemeByAnimal(animal);

  // Update initial chat avatar to match selected animal
  const initialAvatar = document.querySelector('.mascot-message .message-avatar');
  if (initialAvatar) {
    initialAvatar.textContent = getMascoteIcon();
  }

  // Initialize 3D model display
  init3DModel();

  // Add event listeners for instruction buttons to show instruction modals
  const alimentarInstructionsBtn = document.getElementById('alimentarInstructionsBtn');
  const alimentarInstructionsModal = document.getElementById('alimentarInstructionsModal');
  const alimentarInstructionsClose = document.getElementById('alimentarInstructionsClose');

  const aguaInstructionsBtn = document.getElementById('aguaInstructionsBtn');
  const aguaInstructionsModal = document.getElementById('aguaInstructionsModal');
  const aguaInstructionsClose = document.getElementById('aguaInstructionsClose');

  const brincarInstructionsBtn = document.getElementById('brincarInstructionsBtn');
  const brincarInstructionsModal = document.getElementById('brincarInstructionsModal');
  const brincarInstructionsClose = document.getElementById('brincarInstructionsClose');

  const dormirInstructionsBtn = document.getElementById('dormirInstructionsBtn');
  const dormirInstructionsModal = document.getElementById('dormirInstructionsModal');
  const dormirInstructionsClose = document.getElementById('dormirInstructionsClose');

  if (alimentarInstructionsBtn && alimentarInstructionsModal && alimentarInstructionsClose) {
    alimentarInstructionsBtn.addEventListener('click', () => {
      alimentarInstructionsModal.classList.remove('hidden');
    });
    alimentarInstructionsClose.addEventListener('click', () => {
      alimentarInstructionsModal.classList.add('hidden');
    });
    alimentarInstructionsModal.addEventListener('click', (e) => {
      if (e.target === alimentarInstructionsModal) {
        alimentarInstructionsModal.classList.add('hidden');
      }
    });
  }

  if (aguaInstructionsBtn && aguaInstructionsModal && aguaInstructionsClose) {
    aguaInstructionsBtn.addEventListener('click', () => {
      aguaInstructionsModal.classList.remove('hidden');
    });
    aguaInstructionsClose.addEventListener('click', () => {
      aguaInstructionsModal.classList.add('hidden');
    });
    aguaInstructionsModal.addEventListener('click', (e) => {
      if (e.target === aguaInstructionsModal) {
        aguaInstructionsModal.classList.add('hidden');
      }
    });
  }

  if (brincarInstructionsBtn && brincarInstructionsModal && brincarInstructionsClose) {
    brincarInstructionsBtn.addEventListener('click', () => {
      brincarInstructionsModal.classList.remove('hidden');
    });
    brincarInstructionsClose.addEventListener('click', () => {
      brincarInstructionsModal.classList.add('hidden');
    });
    brincarInstructionsModal.addEventListener('click', (e) => {
      if (e.target === brincarInstructionsModal) {
        brincarInstructionsModal.classList.add('hidden');
      }
    });
  }

  if (dormirInstructionsBtn && dormirInstructionsModal && dormirInstructionsClose) {
    dormirInstructionsBtn.addEventListener('click', () => {
      dormirInstructionsModal.classList.remove('hidden');
    });
    dormirInstructionsClose.addEventListener('click', () => {
      dormirInstructionsModal.classList.add('hidden');
    });
    dormirInstructionsModal.addEventListener('click', (e) => {
      if (e.target === dormirInstructionsModal) {
        dormirInstructionsModal.classList.add('hidden');
      }
    });
  }
});
