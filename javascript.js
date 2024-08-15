document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    const buttonText = document.body.classList.contains('dark-mode') ? '🌕' : '🌑';
    this.textContent = buttonText;
});