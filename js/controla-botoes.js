// Seleciona todos os botões de trigger
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

// Adiciona o evento de clique a cada botão
acordeonTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        // Alterna a classe 'active' no botão (para alteração de cor ou estilo)
        this.classList.toggle('active');
        
        // Seleciona o conteúdo do acordeão (div.content) relacionado ao trigger
        const content = this.nextElementSibling;

        // Alterna a visibilidade do conteúdo (abre ou fecha)
        if (content.classList.contains('open')) {
            // Se o conteúdo já está aberto, fecha
            content.classList.remove('open');
        } else {
            // Caso contrário, abre
            content.classList.add('open');
        }

        // Alterna a visibilidade do ícone (bi-chevron-down e bi-chevron-up)
        const icon = this.querySelector('.toggle-icon');
        if (icon) {
            if (content.classList.contains('open')) {
                // Se o conteúdo está aberto, troca para o ícone de "fechar"
                icon.classList.remove('bi-chevron-down');
                icon.classList.add('bi-chevron-up');
            } else {
                // Se o conteúdo está fechado, troca para o ícone de "abrir"
                icon.classList.remove('bi-chevron-up');
                icon.classList.add('bi-chevron-down');
            }
        }

        // Verifica se o conteúdo está aberto ou fechado
        if (content.classList.contains('open')) {
            console.log('abriu');
        } else {
            console.log('fechado');
        }
    });
});
