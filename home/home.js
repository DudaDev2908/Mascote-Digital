document.addEventListener('DOMContentLoaded', function() {

    // ---------- LÓGICA DE SELEÇÃO E CONFIRMAÇÃO ----------
    let personalidade = "";
    let animal = "";

    function showConfirmIfReady() {
        const confirmBtn = document.getElementById("confirmConfig");
        if (confirmBtn) {
            if (personalidade && animal) {
                confirmBtn.classList.add("visible");
            } else {
                confirmBtn.classList.remove("visible");
            }
        }
    }

    function updateSelectionSlots() {
        const personalidadeSlot = document.getElementById("selectedPersonalidade");
        const animalSlot = document.getElementById("selectedAnimal");

        // Update personalidade slot
        if (personalidade) {
            personalidadeSlot.classList.add("has-selection");
            personalidadeSlot.querySelector(".slotLabel").textContent = "Selecionado";
        } else {
            personalidadeSlot.classList.remove("has-selection");
            personalidadeSlot.querySelector(".slotLabel").textContent = "Personalidade Selecionada";
        }

        // Update animal slot
        if (animal) {
            animalSlot.classList.add("has-selection");
            animalSlot.querySelector(".slotLabel").textContent = "Selecionado";
        } else {
            animalSlot.classList.remove("has-selection");
            animalSlot.querySelector(".slotLabel").textContent = "Mascote Selecionado";
        }
    }

    // Função para mover o botão para o espaço central
    function moveButtonToArea(btn, targetArea) {
        // Remove any existing selected button
        const existingBtn = targetArea.querySelector('.selected-button');
        if (existingBtn) {
            existingBtn.remove();
        }

        // Clone the button and add class
        const clonedBtn = btn.cloneNode(true);
        clonedBtn.classList.add('selected-button');

        // Append cloned button to target area
        targetArea.appendChild(clonedBtn);
        updateSelectionSlots();
    }

    // Event listeners para os botões de personalidade
    document.querySelectorAll("#personalidadeOptions button").forEach(btn => {
        btn.addEventListener("click", () => {
            personalidade = btn.dataset.personalidade;
            document.querySelectorAll("#personalidadeOptions button").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");

            const selectedArea = document.getElementById("selectedPersonalidade");
            moveButtonToArea(btn, selectedArea);

            showConfirmIfReady();
        });
    });

    // Event listeners para os botões de animal
    document.querySelectorAll("#animalOptions button").forEach(btn => {
        btn.addEventListener("click", () => {
            animal = btn.dataset.animal;
            document.querySelectorAll("#animalOptions button").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");

            const selectedArea = document.getElementById("selectedAnimal");
            moveButtonToArea(btn, selectedArea);

            showConfirmIfReady();
        });
    });

    // Event listener para o botão de confirmação
    const confirmBtn = document.getElementById("confirmConfig");
    if (confirmBtn) {
        confirmBtn.addEventListener("click", () => {
            const nomeMascote = document.getElementById("mascoteNome").value.trim() || "Mascote";
            if (!personalidade || !animal) {
                showNotification("Por favor, selecione uma personalidade e um mascote!", "error");
                return;
            }
            if (!nomeMascote) {
                showNotification("Por favor, digite o nome do mascote.", "error");
                return;
            }

            localStorage.setItem('mascotePersonalidade', personalidade);
            localStorage.setItem('mascoteAnimal', animal);
            localStorage.setItem('mascoteNome', nomeMascote);

            showNotification("Mascote criado com sucesso! Redirecionando...", "success");

            setTimeout(() => {
                window.location.href = "mascote.html";
            }, 1500);
        });
    }

    // Event listener para o botão "Usar Padrão"
    const skipBtn = document.getElementById("skipConfig");
    if (skipBtn) {
        skipBtn.addEventListener("click", () => {
            // Define valores padrão
            const defaultPersonalidade = "Animado";
            const defaultAnimal = "Gato";
            const defaultNome = "Mascote";

            localStorage.setItem('mascotePersonalidade', defaultPersonalidade);
            localStorage.setItem('mascoteAnimal', defaultAnimal);
            localStorage.setItem('mascoteNome', defaultNome);

            showNotification("Usando configurações padrão. Redirecionando...", "info");

            setTimeout(() => {
                window.location.href = "mascote.html";
            }, 1500);
        });
    }

    // Função para mostrar notificações
    function showNotification(message, type = "info") {
        // Remove any existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Add to body
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Initialize selection slots
    updateSelectionSlots();

    // Add some interactive effects
    document.querySelectorAll('.optionButton').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

});
