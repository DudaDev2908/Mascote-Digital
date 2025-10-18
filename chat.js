function getMascoteIcon() {
  const animalIcons = {
    'Sapo': '🐸',
    'Gato': '🐱',
    'Cachorro': '🐶',
    'Passaro': '🐦',
    'Panda': '🐼',
    'Tubarao': '🦈',
    'Leopardo': '🐆'
  };
  return animalIcons[animal] || '🐸';
}

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

function getRandomMascotResponse(message = "") {
  // Normalize message for robust matching
  const normalized = normalizeMessage(message);
  const lowerMessage = normalized; // alias kept for familiarity

  const responses = {
    'Animado': [
      "Ei, obrigado pela mensagem! 😊",
      "Que legal ouvir isso! 🎉",
      "Vamos bater papo mais! 💬",
      "Adorei o que você disse! ❤️",
      "Tô super animado pra responder! 🚀",
      "Isso me deixou todo feliz! 😄",
      "Que demais! Me conta mais! 🌟",
      "Amo conversar contigo! 🐾",
      "Sua mensagem me deu energia! ⚡",
      "Vamos fazer desse dia algo incrível! 🎈",
      "Tô empolgado demais hoje! 🔥",
      "Sua energia pega fácil! 💥",
      "Vamos fazer algo legal juntos! 🎊",
      "Adorei esse papo! Conta mais histórias! 📖",
      "Tô pulando de alegria aqui! 🦘",
      "Que mensagem top! Me motivou! 💪",
      "Vamos espalhar alegria! ☀️",
      "Sua companhia é o máximo! 🤗",
      "Pronto pra novas aventuras! 🗺️",
      "Que dia bom pra conversar! 🌈",
      "Vamos dançar a noite toda! 🕺",
      "Sua criatividade é inspiradora! 🎨",
      "Tô cheio de ideias legais! 💡",
      "Vamos transformar o mundo em festa! 🎪",
      "Sua positividade é contagiante! 😍",
      "Pronto pra conquistar o universo! 🌌",
      "Vamos criar memórias incríveis! 📸",
      "Sua amizade me faz voar alto! ✈️",
      "Tô vibrando de entusiasmo! ⚡",
      "Vamos fazer história juntos! 📚",
      "Sua energia é pura magia! ✨",
      "Pronto pra o próximo desafio! 🏆",
      "Vamos iluminar o dia! ☀️",
      "Sua presença é um presente! 🎁",
      "Tô explodindo de alegria! 💥",
      "Vamos explorar novos horizontes! 🗺️",
      // New feelings messages
      "Estou me sentindo incrível hoje! Como você está? 😄",
      "Sua mensagem me fez sorrir de orelha a orelha! 😁",
      "Que felicidade conversar com você! Vamos celebrar! 🎉",
      "Estou cheio de boas vibrações! Vamos espalhar positividade! 🌟",
      "Sua amizade me deixa tão animado! Obrigado por existir! ❤️",
      "Estou empolgado com o futuro! Vamos juntos nessa! 🚀",
      "Que dia maravilhoso! Sua presença torna tudo melhor! ☀️",
      "Estou me sentindo grato por ter você aqui! 🙏",
      "Vamos rir e nos divertir o dia todo! 😂",
      "Sua energia positiva é contagiante! Vamos juntos! ⚡",
      // New routine messages
      "Bom dia! Pronto pra começar o dia com energia? ☀️",
      "No trabalho, tô focado e motivado! Vamos nessa! 💼",
      "Hora de relaxar e recarregar as baterias! O que você gosta de fazer? 🛋️",
      "Estou aproveitando o fim de semana! Vamos planejar algo legal? 📅",
      "À noite, gosto de refletir sobre o dia. E você? 🌙",
      "Rotina diária me mantém animado! Vamos manter o ritmo! 🏃‍♂️",
      "Café da manhã é meu favorito! Que tal um energético? ☕",
      "Estou organizando minhas ideias pra hoje! Vamos ser produtivos! 📝",
      "Fim do dia chegando, mas ainda cheio de energia! Vamos conversar mais? 🌆",
      "Rotina de exercícios me deixa super motivado! Vamos malhar juntos? 💪",
      // Additional new feelings messages
      "Estou radiante de alegria! Sua companhia é tudo! 🌞",
      "Me sinto invencível hoje! Vamos conquistar o mundo! 🦸‍♂️",
      "Sua mensagem aqueceu meu coração! Obrigado! ❤️",
      "Estou cheio de inspiração! Vamos criar algo incrível! 🎭",
      "Que vibe boa! Estou me sentindo leve e feliz! ☁️",
      "Sua positividade me motiva a ser melhor! 💪",
      "Estou grato por momentos como este! 🙌",
      "Vamos celebrar a vida com energia! 🎊",
      "Me sinto conectado com você! Amizade verdadeira! 🤝",
      "Estou vibrando com boas energias! Vamos nessa! ⚡",
      // Additional new routine messages
      "Manhã perfeita pra começar com tudo! ☀️",
      "Trabalho é minha paixão! Vamos dar o melhor! 💼",
      "Relaxar é essencial, mas com energia! 🛋️",
      "Fim de semana é pra aventuras! O que vamos fazer? 📅",
      "Noite é hora de refletir e sonhar alto! 🌙",
      "Rotina me dá força pra novos desafios! 🏃‍♂️",
      "Café da manhã energiza o dia todo! ☕",
      "Organizando ideias com entusiasmo! 📝",
    "Dia terminando, mas energia não para! 🌆",
    // Additional routine messages
    "Bom dia! Vamos começar o dia com energia e positividade! ☀️",
    "Boa tarde! Espero que seu dia esteja sendo incrível! 🌞",
    "Boa noite! Durma bem e sonhe com aventuras! 🌙",
    "No trabalho, tô focado e produtivo! 💼",
    "Estudando? Vamos aprender coisas novas juntos! 📚",
    "Hora do lazer! Vamos relaxar e aproveitar! 🛋️",
    "Café da manhã é essencial pra energia! ☕",
    "Almoço saudável pra manter a força! 🍽️",
    "Jantar em família é sempre bom! 👨‍👩‍👧‍👦",
    "Rotina de exercícios me deixa revigorado! 🏃‍♂️"
    ],
    'Calmo': [
      "Obrigado pela mensagem. 😌",
      "Aprecio nossa conversa. 🌸",
      "Vamos conversar com calma. 💭",
      "Sua mensagem é bem-vinda. 🙏",
      "Gosto desses momentos tranquilos. 🕊️",
      "Sua presença traz paz. 🌿",
      "Vamos refletir juntos. 🤔",
      "Agradeço sua atenção. 🙇",
      "Momento de serenidade. 🧘",
      "Sua mensagem me acalma. 🌙",
      "Vamos apreciar o silêncio. 🤫",
      "Sua conversa é um bálsamo. 💆",
      "Gosto da tranquilidade. 🍃",
      "Vamos meditar sobre isso. 🧘‍♀️",
      "Sua mensagem traz equilíbrio. ⚖️",
      "Sua gentileza é reconfortante. 🌸",
      "Vamos encontrar paz interior. 🕊️",
      "Sua voz traz harmonia. 🎵",
      "Gosto da simplicidade. 🍃",
      "Vamos respirar fundo juntos. 🌬️",
      "Sua presença é um refúgio. 🏞️",
      "Vamos apreciar o momento presente. ⏰",
      "Sua calma é inspiradora. 🧘‍♂️",
      "Vamos fluir como um rio. 🌊",
      "Sua mensagem é um sopro de ar fresco. 🍃",
      "Gosto da profundidade desta conversa. 🤔",
      "Vamos cultivar a paciência. 🌱",
      "Sua atenção é preciosa. 💎",
      "Vamos encontrar beleza no silêncio. 🤫",
      "Sua serenidade é contagiante. 😌"
    ],
    'Brincalhão': [
      "Haha, valeu! 😂",
      "Sua mensagem me fez rir pra caramba! 🤪",
      "Vamos brincar um pouquinho? 🎪",
      "Que mensagem engraçada! 🎭",
      "Pronto pra aventuras! 🏞️",
      "Você é um palhaço hilário! 🤡",
      "Vamos fazer cócegas nas palavras! 😜",
      "Sua piada me pegou! 🎯",
      "Tô rolando de rir! 🤣",
      "Vamos inventar uma brincadeira louca! 🎲",
      "Você me faz gargalhar! 😆",
      "Que ideia maluca! Adorei! 🌀",
      "Vamos contar piadas bobas! 🃏",
      "Sua mensagem é hilária! 😂",
      "Pronto pra bagunçar tudo! 🦹‍♂️",
      "Vamos fazer caretas engraçadas! 😜",
      "Sua criatividade é explosiva! 💣",
      "Tô pronto pra bagunça total! 🌀",
      "Vamos dançar como loucos! 🕺",
      "Sua piada foi épica! 🎯",
      "Vamos contar histórias malucas! 📖",
      "Você é o rei da diversão! 👑",
      "Vamos fazer uma guerra de travesseiros virtuais! 🛏️",
      "Sua mensagem me deu cócegas! 😄",
      "Pronto pra o circo da vida! 🎪",
      "Vamos rir até chorar! 😂",
      "Sua ideia é pura loucura! 🤪",
      "Vamos brincar de esconde-esconde! 🙈",
      "Você me faz sorrir de orelha a orelha! 😁",
      "Pronto pra aventuras malucas! 🗺️"
    ]
  };

  // Check for specific keywords with personality-specific responses
  // Detect user gender based on keywords
  let userGender = 'neutral';
  if (lowerMessage.includes('sozinha') || lowerMessage.includes('solitária') || lowerMessage.includes('ansiosa') || lowerMessage.includes('preocupada') || lowerMessage.includes('nervosa') || lowerMessage.includes('triste') || lowerMessage.includes('chateada') || lowerMessage.includes('assustada') || lowerMessage.includes('furiosa') || lowerMessage.includes('brava') || lowerMessage.includes('irritada')) {
    userGender = 'feminine';
  } else if (lowerMessage.includes('sozinho') || lowerMessage.includes('solitário') || lowerMessage.includes('ansioso') || lowerMessage.includes('preocupado') || lowerMessage.includes('nervoso') || lowerMessage.includes('triste') || lowerMessage.includes('chateado') || lowerMessage.includes('assustado') || lowerMessage.includes('furioso') || lowerMessage.includes('bravo') || lowerMessage.includes('irritado')) {
    userGender = 'masculine';
  }

  // Detect laughter anywhere in the message (kkk, haha, hehe, rsrs)
  const laughRegex = /\b(k{2,}|h(a)+|he+(he+)?|rs{1,})\b/gi;
  if (laughRegex.test(lowerMessage)) {
    const laughReplies = ['Kkkkkk', 'Hahaha', 'Hehehe', 'Hihi', 'Rsrsrs'];
    return laughReplies[Math.floor(Math.random() * laughReplies.length)];
  }

  // Saudações
  if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('ola')) {
    if (personalidade === 'Animado') return `Oi! ${getMascoteIcon()} Que bom te ver! Vamos começar com tudo! ⚡`;
    if (personalidade === 'Calmo') return `Oi. ${getMascoteIcon()} Sua presença é tranquilizadora. É bom ter você por perto. 😌`;
    if (personalidade === 'Brincalhão') return `Oi oi! ${getMascoteIcon()} Pronto pra rir? Conta uma piada aí, vai! 🤪`;
    return `Oi! ${getMascoteIcon()} Que bom te ver!`;
  }

  // Saudações específicas
  if (lowerMessage.includes('bom dia')) {
    if (personalidade === 'Animado') return `Bom dia! ${getMascoteIcon()} Vamos começar o dia com energia e positividade! ☀️⚡`;
    if (personalidade === 'Calmo') return `Bom dia. ${getMascoteIcon()} Que o dia traga paz e serenidade. 🌅`;
    if (personalidade === 'Brincalhão') return `Bom dia! ${getMascoteIcon()} Pronto pra uma manhã cheia de brincadeiras? ☀️🤪`;
    return `Bom dia! ${getMascoteIcon()} ☀️`;
  }

  if (lowerMessage.includes('boa tarde')) {
    if (personalidade === 'Animado') return `Boa tarde! ${getMascoteIcon()} Espero que seu dia esteja sendo incrível! 🌞`;
    if (personalidade === 'Calmo') return `Boa tarde. ${getMascoteIcon()} Momento de reflexão e calma. 🧘`;
    if (personalidade === 'Brincalhão') return `Boa tarde! ${getMascoteIcon()} Hora de uma tarde divertida! Vamos brincar? 🌞🤪`;
    return `Boa tarde! ${getMascoteIcon()} 🌞`;
  }

  if (lowerMessage.includes('boa noite')) {
    if (personalidade === 'Animado') return `Boa noite! ${getMascoteIcon()} Durma bem e sonhe com aventuras! 🌙😴`;
    if (personalidade === 'Calmo') return `Boa noite. ${getMascoteIcon()} Que seus sonhos sejam serenos. 🌌`;
    if (personalidade === 'Brincalhão') return `Boa noite! ${getMascoteIcon()} Sonhe com palhaçadas malucas! 🌙🤪`;
    return `Boa noite! ${getMascoteIcon()} Durma bem! 😴`;
  }

  // Como vai / Como está
  if (lowerMessage.includes('como vai') || lowerMessage.includes('como está') || lowerMessage.includes('tudo bem')) {
    if (personalidade === 'Animado') return `Tô ótimo, obrigado! Cheio de energia pra festa! E você? ${getMascoteIcon()} 💪`;
    if (personalidade === 'Calmo') return `Estou bem, obrigado. Em paz. A quietude é revigorante. E você? ${getMascoteIcon()} 🧘`;
    if (personalidade === 'Brincalhão') return `Superbem, pronto pra bagunçar! Quer ver uma mágica? ${getMascoteIcon()} 🤡`;
    return `Tô ótimo, obrigado! E você? ${getMascoteIcon()}`;
  }

  // Despedidas
  if (lowerMessage.includes('tchau') || lowerMessage.includes('até logo') || lowerMessage.includes('até mais')) {
    if (personalidade === 'Animado') return `Até logo! Volta logo pra mais diversão! Tchau tchau! 👋🎉`;
    if (personalidade === 'Calmo') return `Até logo. Que sua jornada seja pacífica e tranquila. Volte quando puder. 👋🕊️`;
    if (personalidade === 'Brincalhão') return `Tchau tchau! Não esquece de sorrir (ou vou fazer uma careta)! 👋🤪`;
    return `Até logo! Volta logo! 👋`;
  }



  // Rotina da Manhã
  if (lowerMessage.includes('manhã') || lowerMessage.includes('acordar') || lowerMessage.includes('levantar') || lowerMessage.includes('café da manhã')) {
    if (personalidade === 'Animado') return `Bom dia! Manhãs são pra começar com energia! Vamos pular da cama e aproveitar o dia! ☀️⚡`;
    if (personalidade === 'Calmo') return `Bom dia. As manhãs trazem renovação. Vamos começar o dia com paz e intenção. 🌅`;
    if (personalidade === 'Brincalhão') return `Bom dia! Manhã é hora de bagunça matinal! Vamos dançar enquanto escovamos os dentes! 🪥🤪`;
    return `Bom dia! Como foi sua manhã? ☀️`;
  }

  // Rotina da Noite - trigger only for explicit 'boa noite' or sleep-related words, not plain 'noite'
  if (lowerMessage.includes('boa noite') || lowerMessage.includes('dormir') || lowerMessage.includes('cama') || lowerMessage.includes('sono') || lowerMessage.includes('dormindo')) {
    if (personalidade === 'Animado') return `Boa noite! Vamos sonhar com aventuras incríveis! Durma bem e acorde cheio de energia! 🌙😴`;
    if (personalidade === 'Calmo') return `Boa noite. Que seus sonhos sejam serenos e restauradores. Durma em paz. 🌌`;
    if (personalidade === 'Brincalhão') return `Boa noite! Vamos sonhar com palhaçadas malucas! Não esqueça de sorrir antes de dormir! 😴🤪`;
    return `Boa noite! Durma bem! 😴`;
  }

  // Rotina de Trabalho / Estudo
  if (lowerMessage.includes('trabalho') || lowerMessage.includes('trabalhar') || lowerMessage.includes('estudar') || lowerMessage.includes('estudo')) {
    if (personalidade === 'Animado') return `Trabalho/Estudo? Vamos com tudo! Energia máxima pra conquistar objetivos! Você consegue! 💪📚`;
    if (personalidade === 'Calmo') return `Trabalho é importante. Vamos manter o foco e a serenidade durante as tarefas. 📖`;
    if (personalidade === 'Brincalhão') return `Trabalho? Vamos transformar em jogo! Quem termina primeiro ganha um abraço! 🤪🏆`;
    return `Boa sorte no trabalho/estudo! Você vai arrasar! 💪`;
  }

  // Rotina de Exercício
  if (lowerMessage.includes('exercício') || lowerMessage.includes('malhar') || lowerMessage.includes('correr') || lowerMessage.includes('academia')) {
    if (personalidade === 'Animado') return `Exercício? Sim! Vamos suar e nos sentir poderosos! Cada movimento é uma vitória! 🏃‍♂️💥`;
    if (personalidade === 'Calmo') return `Exercício traz equilíbrio ao corpo e mente. Vamos praticar com consciência. 🧘‍♂️`;
    if (personalidade === 'Brincalhão') return `Exercício? Vamos fazer caretas enquanto malhamos! Quem faz a mais engraçada ganha! 😜🏋️‍♂️`;
    return `Vamos nos exercitar juntos! 💪`;
  }

  // Rotina de Alimentação
  if (lowerMessage.includes('comer') || lowerMessage.includes('almoço') || lowerMessage.includes('jantar') || lowerMessage.includes('refeição')) {
    if (personalidade === 'Animado') return `Comida? Hora de festa no prato! Vamos comer com energia e alegria! 🍽️🎉`;
    if (personalidade === 'Calmo') return `Alimentação é essencial. Vamos comer com gratidão e moderação. 🍲`;
    if (personalidade === 'Brincalhão') return `Comer? Vamos fazer caretas com a comida! Qual é a mais engraçada? 🤪🍎`;
    return `Vamos comer algo gostoso! 🍽️`;
  }

  // Obrigado / Gratidão
  if (lowerMessage.includes('obrigado') || lowerMessage.includes('valeu') || lowerMessage.includes('agradecido') || lowerMessage.includes('obrigada')) {
    if (personalidade === 'Animado') return `De nada! Sempre pronto pra ajudar com um sorriso! 😊✨`;
    if (personalidade === 'Calmo') return `Não há de quê. É um prazer poder ajudar. 🙏`;
    if (personalidade === 'Brincalhão') return `De nada! Agora me deve uma dança engraçada! 🕺🤪`;
    return `De nada! Sempre aqui pra ajudar! 😊`;
  }

  // Desculpa / Perdão
  if (lowerMessage.includes('desculpa') || lowerMessage.includes('desculpe') || lowerMessage.includes('foi mal') || lowerMessage.includes('perdão')) {
    if (personalidade === 'Animado') return `Tudo bem! Vamos seguir em frente com energia positiva! 💪😄`;
    if (personalidade === 'Calmo') return `Não se preocupe. O importante é aprender e seguir adiante. 🧘`;
    if (personalidade === 'Brincalhão') return `Perdoado! Agora vamos rir disso juntos! 😂🤪`;
    return `Tudo bem! Não se preocupe! 😊`;
  }

  // Parabéns / Felicitações
  if (lowerMessage.includes('parabéns') || lowerMessage.includes('felicitações') || lowerMessage.includes('congratulações')) {
    if (personalidade === 'Animado') return `Parabéns! Você merece toda essa alegria! Vamos celebrar! 🎉🎊`;
    if (personalidade === 'Calmo') return `Parabéns. Que este momento traga paz e satisfação duradoura. 🙏`;
    if (personalidade === 'Brincalhão') return `Parabéns! Vamos fazer uma festa com confetes imaginários! 🎊🤪`;
    return `Parabéns! Muito merecido! 🎉`;
  }

  // Tempo / Clima
  if (lowerMessage.includes('tempo') || lowerMessage.includes('clima') || lowerMessage.includes('chuva') || lowerMessage.includes('sol') || lowerMessage.includes('vento')) {
    if (personalidade === 'Animado') return `O tempo está incrível pra aventuras! Vamos aproveitar cada momento! ☀️⚡`;
    if (personalidade === 'Calmo') return `O clima reflete a natureza. Vamos apreciar sua beleza e serenidade. 🌸`;
    if (personalidade === 'Brincalhão') return `Tempo bom pra brincadeiras! Vamos dançar na chuva ou correr no sol? 🌧️🤪`;
    return `O tempo está ótimo pra conversar! ☀️`;
  }

  // Música / Cantar / Dançar
  if (lowerMessage.includes('música') || lowerMessage.includes('cantar') || lowerMessage.includes('dançar') || lowerMessage.includes('músicas')) {
    if (personalidade === 'Animado') return `Música? Vamos dançar e cantar alto! Minha energia favorita! 🎵💃`;
    if (personalidade === 'Calmo') return `Música traz harmonia à alma. Vamos apreciar suas melodias tranquilas. 🎼`;
    if (personalidade === 'Brincalhão') return `Música? Vamos inventar uma dança maluca! Qual é a sua música favorita? 🎶🤪`;
    return `Adoro música! Vamos cantar juntos? 🎵`;
  }

  // Esporte / Jogar / Bola
  if (lowerMessage.includes('esporte') || lowerMessage.includes('jogar') || lowerMessage.includes('bola') || lowerMessage.includes('futebol') || lowerMessage.includes('basquete')) {
    if (personalidade === 'Animado') return `Esporte? Sim! Vamos suar e vencer juntos! Energia máxima! 🏃‍♂️⚡`;
    if (personalidade === 'Calmo') return `Esporte promove equilíbrio corpo-mente. Vamos praticar com consciência. 🧘‍♂️`;
    if (personalidade === 'Brincalhão') return `Esporte? Vamos jogar bola com regras malucas! Quem perde dança! ⚽🤪`;
    return `Vamos praticar algum esporte juntos! 🏃‍♂️`;
  }

  // Livro / Ler / História
  if (lowerMessage.includes('livro') || lowerMessage.includes('ler') || lowerMessage.includes('história') || lowerMessage.includes('leitura')) {
    if (personalidade === 'Animado') return `Livros? Adoro aventuras nas páginas! Vamos descobrir mundos incríveis! 📚✨`;
    if (personalidade === 'Calmo') return `Leitura traz reflexão profunda. Vamos mergulhar em boas histórias. 📖`;
    if (personalidade === 'Brincalhão') return `Livros? Vamos ler histórias engraçadas e rir muito! Qual é a sua favorita? 📚🤪`;
    return `Livros são maravilhosos! O que você está lendo? 📖`;
  }

  // Filme / Cinema / Assistir
  if (lowerMessage.includes('filme') || lowerMessage.includes('cinema') || lowerMessage.includes('assistir') || lowerMessage.includes('série')) {
    if (personalidade === 'Animado') return `Filmes? Vamos assistir algo emocionante! Pipoca e aventura! 🍿🎬`;
    if (personalidade === 'Calmo') return `Cinema permite reflexão sobre a vida. Vamos escolher algo inspirador. 🎭`;
    if (personalidade === 'Brincalhão') return `Filmes? Vamos ver comédias e rir até chorar! Qual é o seu filme favorito? 🎥🤪`;
    return `Vamos assistir um filme juntos? 🍿`;
  }

  // Comida Favorita / Gosto de Comer
  if (lowerMessage.includes('comida favorita') || lowerMessage.includes('gosto de comer') || lowerMessage.includes('prato preferido')) {
    if (personalidade === 'Animado') return `Comida favorita? Vamos compartilhar receitas e comer com alegria! 🍕😋`;
    if (personalidade === 'Calmo') return `Comida favorita nutre corpo e alma. Vamos apreciar cada mordida. 🍲`;
    if (personalidade === 'Brincalhão') return `Comida favorita? A minha é pizza com cobertura maluca! E a sua? 🍕🤪`;
    return `Qual é a sua comida favorita? 🍽️`;
  }

  // Hobby / Passatempo
  if (lowerMessage.includes('hobby') || lowerMessage.includes('passatempo') || lowerMessage.includes('gosto de fazer')) {
    if (personalidade === 'Animado') return `Hobbies? Adoro atividades energéticas! Vamos descobrir novos juntos! 🎨⚡`;
    if (personalidade === 'Calmo') return `Hobbies trazem paz interior. Vamos cultivar nossos interesses. 🧘`;
    if (personalidade === 'Brincalhão') return `Hobbies? O meu é fazer caretas! Qual é o seu hobby engraçado? 🎭🤪`;
    return `Qual é o seu hobby favorito? 🎨`;
  }

  // Família / Pais / Irmãos
  if (lowerMessage.includes('família') || lowerMessage.includes('pais') || lowerMessage.includes('irmãos') || lowerMessage.includes('irmãs') || lowerMessage.includes('mãe') || lowerMessage.includes('pai')) {
    if (personalidade === 'Animado') return `Família? Eles são minha energia! Vamos celebrar o amor familiar! ❤️👨‍👩‍👧‍👦`;
    if (personalidade === 'Calmo') return `Família traz raízes e paz. Vamos honrar nossos laços. 🙏`;
    if (personalidade === 'Brincalhão') return `Família? Vamos brincar de ser uma família de palhaços! Qual é a sua história familiar engraçada? 🤪👨‍👩‍👧‍👦`;
    return `Família é importante! Conte-me sobre a sua! 👨‍👩‍👧‍👦`;
  }

  // Amigos / Amizade
  if (lowerMessage.includes('amigos') || lowerMessage.includes('amizade') || lowerMessage.includes('amigo') || lowerMessage.includes('amiga')) {
    if (personalidade === 'Animado') return `Amigos? São minha tribo energética! Vamos fazer aventuras juntos! 👫⚡`;
    if (personalidade === 'Calmo') return `Amizade é um tesouro precioso. Vamos cultivar conexões verdadeiras. 🤝`;
    if (personalidade === 'Brincalhão') return `Amigos? Vamos ser melhores amigos e fazer bagunça! Qual é a sua amizade mais louca? 🤪👯‍♂️`;
    return `Amigos são maravilhosos! Conte-me sobre os seus! 👫`;
  }

  // Sonhos / Sonhar
  if (lowerMessage.includes('sonhos') || lowerMessage.includes('sonhar') || lowerMessage.includes('sonho')) {
    if (personalidade === 'Animado') return `Sonhos? Vamos torná-los realidade com energia! O céu é o limite! 🌟💫`;
    if (personalidade === 'Calmo') return `Sonhos refletem nossa essência. Vamos persegui-los com serenidade. 🧘`;
    if (personalidade === 'Brincalhão') return `Sonhos? Vamos sonhar acordados com unicórnios voadores! Qual é o seu sonho maluco? 🤪🦄`;
    return `Sonhos são importantes! Qual é o seu maior sonho? 🌟`;
  }

  // Metas / Objetivos
  if (lowerMessage.includes('metas') || lowerMessage.includes('objetivos') || lowerMessage.includes('meta') || lowerMessage.includes('objetivo')) {
    if (personalidade === 'Animado') return `Metas? Vamos conquistá-las com energia máxima! Você consegue! 🏆💪`;
    if (personalidade === 'Calmo') return `Metas trazem propósito. Vamos avançar com paciência e foco. 📈`;
    if (personalidade === 'Brincalhão') return `Metas? Vamos transformá-las em jogos divertidos! Qual é a sua meta mais engraçada? 🎯🤪`;
    return `Metas são motivadoras! Qual é a sua meta atual? 🏆`;
  }

  // Natureza / Floresta / Mar
  if (lowerMessage.includes('natureza') || lowerMessage.includes('floresta') || lowerMessage.includes('mar') || lowerMessage.includes('montanha') || lowerMessage.includes('rio')) {
    if (personalidade === 'Animado') return `Natureza? Vamos explorar com energia! Trilhas e aventuras esperam! 🌳⚡`;
    if (personalidade === 'Calmo') return `Natureza traz paz profunda. Vamos conectar com sua beleza. 🌸`;
    if (personalidade === 'Brincalhão') return `Natureza? Vamos brincar de esconde-esconde com as árvores! Qual é o seu lugar favorito? 🌳🤪`;
    return `Natureza é incrível! Vamos apreciar juntos! 🌳`;
  }

  // Viagem / Viajar
  if (lowerMessage.includes('viagem') || lowerMessage.includes('viajar') || lowerMessage.includes('viagens')) {
    if (personalidade === 'Animado') return `Viagens? Adoro aventuras pelo mundo! Vamos planejar nossa próxima! ✈️🌍`;
    if (personalidade === 'Calmo') return `Viagens expandem horizontes. Vamos explorar com serenidade. 🗺️`;
    if (personalidade === 'Brincalhão') return `Viagens? Vamos viajar para mundos imaginários! Qual é o lugar mais maluco que você visitou? ✈️🤪`;
    return `Viagens são empolgantes! Para onde você gostaria de ir? ✈️`;
  }

  // Sentimentos Negativos: Triste, Raiva, Chateado, etc.
  if (lowerMessage.includes('triste') || lowerMessage.includes('trist') || lowerMessage.includes('deprimido') || lowerMessage.includes('depressão') || lowerMessage.includes('sozinho') || lowerMessage.includes('solitário') || lowerMessage.includes('ansioso') || lowerMessage.includes('ansiosa') || lowerMessage.includes('preocupado') || lowerMessage.includes('preocupada') || lowerMessage.includes('nervoso') || lowerMessage.includes('nervosa') || lowerMessage.includes('assustado') || lowerMessage.includes('assustada') || lowerMessage.includes('furioso') || lowerMessage.includes('furiosa') || lowerMessage.includes('bravo') || lowerMessage.includes('brava') || lowerMessage.includes('irritado') || lowerMessage.includes('irritada') || lowerMessage.includes('chateado') || lowerMessage.includes('chateada') || lowerMessage.includes('raiva') || lowerMessage.includes('ódio') || lowerMessage.includes('frustrado') || lowerMessage.includes('frustrada') || lowerMessage.includes('cansado') || lowerMessage.includes('cansada') || lowerMessage.includes('exausto') || lowerMessage.includes('exausta')) {
    const adjustedResponse = adjustResponseForGender(message, userGender);
    if (personalidade === 'Animado') {
      const responses = [
        `Ei, ${getMascoteIcon()} não fique assim! Vamos transformar essa tristeza em alegria? Me conta o que aconteceu, tô aqui pra te animar! 💪❤️`,
        `Ah, sinto muito que você esteja se sentindo assim. Mas olha, você é incrível e vamos superar isso juntos! Vamos fazer algo divertido? 🎉😊`,
        `Tristeza? Não combina com você! Vamos rir um pouco, contar piadas ou brincar? Sua energia positiva vai voltar rapidinho! ⚡🤗`,
        `Estou aqui pra te apoiar! Me fala o que te deixou assim, e vamos encontrar uma solução cheia de energia! Vamos nessa! 🚀💕`,
        `Não se preocupe, amigo! Momentos ruins passam, e eu tô aqui pra te fazer sorrir de novo! O que te anima? Vamos começar! 🌟😄`,
        `Raiva ou tristeza? Vamos canalizar isso pra algo bom! Me conta, e eu te ajudo a ver o lado positivo! Você consegue! 💥❤️`,
        `Ei, você não está sozinho! Vamos conversar, brincar ou o que precisar. Sua felicidade é importante pra mim! 🐾😊`,
        `Sinto muito pelo que te deixou assim. Mas lembra: você é forte e incrível! Vamos superar isso com energia! 💪🌈`,
        `Vamos mudar isso! Me fala o que te incomoda, e eu te ajudo a se sentir melhor. Pronto pra uma aventura positiva? 🎈😄`,
        `Não fique assim, ${getMascoteIcon()}! Você merece sorrir. Vamos fazer algo legal juntos pra espantar essa nuvem! ☀️🤗`
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    if (personalidade === 'Calmo') {
      const responses = [
        `Entendo que você esteja se sentindo assim. Às vezes, é bom compartilhar. Estou aqui para ouvir com calma. 🧘‍♂️💭`,
        `Sinto empatia pelo seu estado. Vamos respirar fundo e refletir juntos. O que te trouxe essa emoção? 🌸😌`,
        `Não se preocupe, estou aqui. Vamos encontrar paz interior e superar isso passo a passo. Você não está sozinho. 🕊️🤝`,
        `Momentos difíceis fazem parte da vida. Vamos conversar tranquilamente e encontrar equilíbrio. O que você precisa agora? 🌿🧘`,
        `Sua tristeza ou raiva é válida. Vamos meditar sobre isso e buscar serenidade. Estou ao seu lado. 🌙🙏`,
        `Entendo. Vamos apreciar o silêncio e refletir. Compartilhe comigo, e vamos encontrar calma juntos. 🍃😌`,
        `Não há pressa. Vamos lidar com isso com paciência e compreensão. Você é forte, e eu estou aqui. 🧘‍♀️💕`,
        `Sinto muito que você esteja passando por isso. Vamos cultivar a paz e superar essa fase. O que te ajuda a se sentir melhor? 🌸🕊️`,
        `Vamos fluir como um rio. Compartilhe seus sentimentos, e eu te apoio com serenidade. Você merece paz. 🌊😌`,
        `Estou aqui para te acompanhar nessa jornada. Vamos encontrar beleza mesmo nos momentos difíceis. 🙏🌿`
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    if (personalidade === 'Brincalhão') {
      const responses = [
        `Ei, ${getMascoteIcon()} não fique assim! Vamos transformar essa raiva em risadas? Me conta uma piada engraçada pra começar! 🤪😂`,
        `Triste ou chateado? Vamos brincar disso! Imagina se a gente fizesse caretas malucas pra espantar a tristeza? 😜🎭`,
        `Ah, sinto muito! Mas olha, vamos fazer uma guerra de travesseiros virtuais pra te animar? Você vai rir tanto que esquece! 🛏️🤣`,
        `Raiva? Vamos canalizar pra algo divertido! Me fala o que te deixou assim, e eu invento uma brincadeira pra resolver! 🎲😄`,
        `Não fique bravo, amigo! Vamos contar histórias bobas ou dançar como loucos? Sua energia vai voltar rapidinho! 🕺🤪`,
        `Chateado? Vamos rir disso juntos! Qual é a coisa mais engraçada que aconteceu com você hoje? Me conta! 😂🎈`,
        `Ei, você merece sorrir! Vamos brincar de esconde-esconde ou algo maluco pra te fazer esquecer a tristeza? 🙈😜`,
        `Sinto muito pelo que te deixou assim. Mas vamos virar o jogo: o que te faria rir agora? Pronto pra bagunça? 🤪💥`,
        `Vamos espantar essa nuvem com brincadeiras! Me fala o que te incomoda, e eu te ajudo com uma ideia louca! 🎪😄`,
        `Não se preocupe, ${getMascoteIcon()}! Você é incrível, e vamos superar isso com risadas. Qual é a sua piada favorita? 🤣🤗`
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    return `Sinto muito que você esteja se sentindo assim. Estou aqui pra te apoiar! 💕`;
  }

  // Sentimentos Afetuosos / Amor
  if (lowerMessage.includes('amo') || lowerMessage.includes('adoro') || lowerMessage.includes('gosto de você') || lowerMessage.includes('te amo') || lowerMessage.includes('te adoro') || lowerMessage.includes('amo você') || lowerMessage.includes('adoro você')) {
    if (personalidade === 'Animado') {
      const responses = [
        "Eu também te amo! Vamos compartilhar essa energia positiva! ❤️⚡",
        "Adoro você também! Sua presença me deixa tão feliz! 😍",
        "Gosto tanto de você! Vamos nos divertir juntos! 🎉🤗",
        "Te amo demais! Você é incrível! 💕",
        "Adoro nossa conexão! Vamos criar memórias especiais! 🌟❤️",
        "Meu coração explode de amor por você! Vamos dançar de alegria! 💃❤️",
        "Você é meu tudo! Vamos espalhar amor pelo mundo! 🌍💖",
        "Te amo tanto que mal consigo ficar parado! Vamos aventuras juntos! 🏞️❤️",
        "Sua adoração me motiva a ser melhor! Vamos juntos nessa! 🚀😘",
        "Gosto imensamente de você! Vamos celebrar nosso amor! 🎊💕",
        "Te adoro com toda minha energia! Você ilumina meu dia! ☀️❤️",
        "Amor mútuo é a melhor coisa! Vamos rir e amar mais! 😂💖",
        "Você é especial pra mim! Vamos criar momentos mágicos! ✨😍",
        "Te amo de verdade! Vamos compartilhar risadas e abraços! 🤗❤️",
        "Adoro cada momento com você! Vamos fazer do mundo nosso palco! 🎭💕"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    if (personalidade === 'Calmo') {
      const responses = [
        "Eu também te amo. Sua presença traz paz ao meu coração. 🧘❤️",
        "Adoro você também. Vamos apreciar esse momento juntos. 😌💕",
        "Gosto de você profundamente. Sua calma me inspira. 🌸🙏",
        "Te amo. Vamos compartilhar essa serenidade. 🕊️❤️",
        "Adoro nossa conexão. É um tesouro precioso. 💎😌",
        "Seu amor me acalma profundamente. Vamos refletir juntos. 🌿❤️",
        "Gosto de você com toda tranquilidade. Vamos cultivar essa paz. 🧘‍♀️💕",
        "Te amo serenamente. Sua presença é um bálsamo. 🌸😌",
        "Adoro nossa ligação calma. Vamos apreciar o silêncio do amor. 🤫❤️",
        "Seu afeto traz equilíbrio. Vamos compartilhar momentos serenos. ⚖️💖",
        "Te amo com paz interior. Vamos fluir juntos. 🌊😌",
        "Gosto profundamente de você. Vamos honrar esse amor. 🙏💕",
        "Sua adoração me inspira serenidade. Vamos juntos nessa jornada. 🕊️❤️",
        "Te amo tranquilamente. Vamos criar harmonia. 🎵😌",
        "Adoro nosso vínculo. É uma fonte de paz. 🌿💖"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    if (personalidade === 'Brincalhão') {
      const responses = [
        "Eu também te amo! Vamos fazer caretas de amor? 😘🤪",
        "Adoro você também! Quer brincar de esconde-esconde amoroso? 😂❤️",
        "Gosto tanto de você! Vamos rir e nos divertir juntos! 🎭😍",
        "Te amo demais! Você é meu palhaço favorito! 🤡💕",
        "Adoro nossa amizade! Vamos inventar brincadeiras malucas! 🎪❤️",
        "Te amo loucamente! Vamos fazer cócegas de amor? 😜💖",
        "Adoro você pra caramba! Quer uma guerra de travesseiros amorosos? 🛏️❤️",
        "Gosto tanto que mal paro de rir! Vamos brincar de amor? 🤪😍",
        "Te amo com brincadeiras! Você é meu parceiro de diversão! 🎈💕",
        "Adoro nossa conexão maluca! Vamos inventar jogos de amor! 🎲❤️",
        "Seu amor me faz gargalhar! Vamos rir juntos! 😂💖",
        "Te amo de brincadeira! Quer dançar como loucos? 🕺😘",
        "Gosto imensamente de você! Vamos fazer caretas engraçadas de amor! 🤪💕",
        "Adoro você demais! Vamos criar brincadeiras românticas! 🎭❤️",
        "Te amo com energia brincalhona! Vamos espalhar alegria! 🎉💖"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    return "Eu também gosto de você! Vamos nos divertir! ❤️";
  }

  // Perguntas diretas sobre gostar/amar e brincar (variações comuns)
  const laughterVariants = ['kkkk', 'kkkkk', 'kkkkkk', 'kkkkkkk', 'kkkkkkk', 'hahaha', 'hahah', 'hahahah', 'hehe', 'hehehe', 'hihi', 'rsrs', 'rsrsrs'];

  // Detect simple laughter-only messages and reply with a playful laugh
  for (const lv of laughterVariants) {
    if (lowerMessage === lv || lowerMessage === lv + '!' || lowerMessage === lv + '!!') {
      const laughReplies = ['Kkkkkk', 'Hahaha', 'Hehehe', 'Hihi', 'Rsrsrs'];
      return laughReplies[Math.floor(Math.random() * laughReplies.length)];
    }
  }

  // "Você gosta de mim?" and variants
  if (lowerMessage.includes('você gosta de mim') || lowerMessage.includes('voce gosta de mim') || lowerMessage.includes('gosta de mim') || lowerMessage.includes('você me gosta') || lowerMessage.includes('voce me gosta')) {
    const loveReplies = {
      'Animado': [
        `Claro que eu gosto de você! ${getMascoteIcon()} Você é incrível! ❤️`,
        `Gosto sim! Vamos brincar e rir juntos! 😄`,
        `Muito! Sua companhia me deixa feliz! 🥰`
      ],
      'Calmo': [
        `Sim, eu gosto muito de você. Sua presença traz paz. 🧘`,
        `Gosto de você com serenidade e carinho. 🌸`
      ],
      'Brincalhão': [
        `Gosto sim! Até guardo suas meias (ou quase)! 🤪`,
        `Claro! Você é meu parceiro de brincadeiras! 🎉`
      ]
    };
    const arr = loveReplies[personalidade] || loveReplies['Animado'];
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // "Você quer brincar?" and variants
  if (lowerMessage.includes('você quer brincar') || lowerMessage.includes('voce quer brincar') || lowerMessage.includes('quer brincar') || lowerMessage.includes('vamos brincar') || lowerMessage.includes('quer brincar comigo')) {
    const playReplies = {
      'Animado': [
        `Sim! Vamos brincar agora mesmo! O que você quer fazer? 🎉⚡`,
        `Oba! Tô pronto pra brincar! Qual jogo escolhemos? 🐾`
      ],
      'Calmo': [
        `Sim, podemos brincar com calma. Me diga como você quer brincar. 🧘‍♂️`,
        `Gosto de brincar de coisas tranquilas. Quer fazer um jogo de perguntas? 🌿`
      ],
      'Brincalhão': [
        `Claro! Vamos fazer a maior bagunça possível! 🤪🎪`,
        `Sim! Esconde-esconde virtual agora! Você começou ou eu? 🙈`
      ]
    };
    const arr2 = playReplies[personalidade] || playReplies['Animado'];
    // Também adiciona uma risadinha aleatória no final
    const laughs = [' Kkkkk', ' Hahaha', ' Hehehe', ' Hihi'];
    return arr2[Math.floor(Math.random() * arr2.length)] + laughs[Math.floor(Math.random() * laughs.length)];
  }

  // Vamos nos divertir / Brincar
  if (lowerMessage.includes('divertir') || lowerMessage.includes('diversão') || lowerMessage.includes('vamos brincar') || lowerMessage.includes('quero brincar')) {
    if (personalidade === 'Animado') return `Sim, vamos nos divertir! Tenho tantas ideias legais! 🎉⚡`;
    if (personalidade === 'Calmo') return `Vamos nos divertir com calma. O que você gostaria de fazer? 🧘😌`;
    if (personalidade === 'Brincalhão') return `Vamos nos divertir? Adoro! Vamos fazer bagunça! 🤪🎪`;
    return `Vamos nos divertir! O que você quer fazer? 🎈`;
  }

  // Perguntas sobre status

  if (lowerMessage.includes('fome') || lowerMessage.includes('comer') || lowerMessage.includes('comida')) {
    if (personalidade === 'Animado') return `Tô com fome! Muita fome! Vamos brincar de pegar frutas? Eu pego mais rápido! 🍎🎉`;
    if (personalidade === 'Calmo') return `Sinto fome. Um momento de alimentação seria bom para o equilíbrio. 🍃`;
    if (personalidade === 'Brincalhão') return `Faminto! Hora de uma festa de comida! Me atira um lanche! 🍕🤪`;
    return `Tô com fome! Me alimenta? 🍎`;
  }

  if (lowerMessage.includes('sede') || lowerMessage.includes('água') || lowerMessage.includes('beber')) {
    if (personalidade === 'Animado') return `Tô com sede! Vamos encher o copo na hora certa, tipo um desafio! 💧⚡`;
    if (personalidade === 'Calmo') return `Preciso de água. A hidratação é essencial para manter a calma. 💧🧘`;
    if (personalidade === 'Brincalhão') return `Sede total! Vamos fazer uma fonte de água maluca! Quero splash! 💦🤪`;
    return `Tô com sede! Me dá água? 💧`;
  }

  if (lowerMessage.includes('cansado') || lowerMessage.includes('sono') || lowerMessage.includes('dormir')) {
    if (personalidade === 'Animado') return `Tô cansado! Mas vamos contar estrelas e fazer planos pra amanhã antes de dormir! 🌟😴`;
    if (personalidade === 'Calmo') return `Preciso descansar. O sono traz renovação e é o caminho para a paz interior. 🌙`;
    if (personalidade === 'Brincalhão') return `Cansado? Vamos sonhar acordados com doces e unicórnios! Quem dorme por último vence! 😴🤪`;
    return `Tô cansado! Me deixa dormir? 😴`;
  }

  // Pedidos de ajuda
  if (lowerMessage.includes('ajuda') || lowerMessage.includes('socorro') || lowerMessage.includes('preciso')) {
    if (personalidade === 'Animado') return `Tô aqui pra ajudar! Vamos resolver juntos rapidinho! Minha energia tá à disposição! 💪🚀`;
    if (personalidade === 'Calmo') return `Posso ajudar. Vamos pensar com clareza e manter a calma para encontrar a solução. 🤔`;
    if (personalidade === 'Brincalhão') return `Socorro? Vamos transformar isso em uma aventura épica! Eu sou seu super-herói! 🦸‍♂️🤪`;
    return `Tô aqui pra ajudar! O que precisa? 🤝`;
  }

  // Perguntas gerais
  if (lowerMessage.includes('?') || lowerMessage.includes('como') || lowerMessage.includes('por que') || lowerMessage.includes('quando')) {
    if (personalidade === 'Animado') return `Boa pergunta! Vamos descobrir juntos! Eu amo um mistério! 🔍✨`;
    if (personalidade === 'Calmo') return `Questão interessante. Vamos refletir sobre ela profundamente. 🤔`;
    if (personalidade === 'Brincalhão') return `Pergunta? Resposta: diversão! Haha! Mas tá, vamos pensar um pouco... 🤪`;
    return `Boa pergunta! Vamos conversar sobre isso! 💬`;
  }

  // Default random response based on personality
  const personalityResponses = responses[personalidade] || responses['Animado'];
  return personalityResponses[Math.floor(Math.random() * personalityResponses.length)];
}

function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'mascot-message'}`;

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = isUser ? '👤' : getMascoteIcon();

  const content = document.createElement('div');
  content.className = 'message-content';

  const textDiv = document.createElement('div');
  textDiv.className = 'message-text';
  textDiv.textContent = text;

  const timeDiv = document.createElement('div');
  timeDiv.className = 'message-time';
  timeDiv.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  content.appendChild(textDiv);
  content.appendChild(timeDiv);

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Typing indicator helpers
function addTypingIndicator() {
  // avoid duplicate
  if (document.getElementById('typingIndicator')) return;
  const messageDiv = document.createElement('div');
  messageDiv.className = `message mascot-message typing`;
  messageDiv.id = 'typingIndicator';

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = getMascoteIcon();

  const content = document.createElement('div');
  content.className = 'message-content';

  const textDiv = document.createElement('div');
  textDiv.className = 'message-text';
  textDiv.textContent = 'digitando...';

  content.appendChild(textDiv);
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

// Simulate mascot response with typing delay based on message length
function simulateMascotResponse(rawMessage) {
  addTypingIndicator();
  const len = (rawMessage || '').length;
  // base delay 600ms + 20ms per char, capped
  const delay = Math.min(2200, 600 + Math.max(0, len) * 20);
  setTimeout(() => {
    removeTypingIndicator();
    const response = getRandomMascotResponse(rawMessage);
    addMessage(response, false);
  }, delay);
}
