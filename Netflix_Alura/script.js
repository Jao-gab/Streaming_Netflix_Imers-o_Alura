// Script para alternar entre dark e light mode

// Seleciona o botão de toggle
const toggleButton = document.getElementById('theme-toggle');

// Verifica se há uma preferência salva no localStorage
const currentTheme = localStorage.getItem('theme');

// Aplica o tema salvo ou padrão (dark)
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
} else {
    document.body.classList.remove('light-mode');
}

// Adiciona evento de clique ao botão
toggleButton.addEventListener('click', () => {
    // Adiciona classe de animação
    toggleButton.classList.add('animating');

    // Alterna a classe light-mode no body
    document.body.classList.toggle('light-mode');

    // Salva a preferência no localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }

    // Remove a classe de animação após a transição
    setTimeout(() => {
        toggleButton.classList.remove('animating');
    }, 300);
});