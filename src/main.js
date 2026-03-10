import './style.css'

// TEMPO DE DELAY (Em minutos)
// Altere este valor para o tempo exato em que o "pitch" de vendas acontece no vídeo
const DELAY_MINUTES = 0.1; // Exemplo: 0.1 m = 6 segundos (para testes)

document.addEventListener('DOMContentLoaded', () => {
  const delayedElements = document.querySelectorAll('.delayed-content');

  if (delayedElements.length > 0) {
    // Converter minutos para milissegundos
    const delayMilliseconds = DELAY_MINUTES * 60 * 1000;

    setTimeout(() => {
      delayedElements.forEach(el => {
        // Remove a classe hidden para o elemento existir na tela
        el.classList.remove('hidden');

        // Pequeno atraso para o browser renderizar o elemento antes de animar a opacidade
        requestAnimationFrame(() => {
          el.classList.remove('opacity-0');
        });
      });
    }, delayMilliseconds);
  }
});
