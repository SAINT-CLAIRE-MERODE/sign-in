const btnSignUp = document.querySelector('.btn-signup');
btnSignUp.addEventListener('click', () => {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    if (!name || !email || !password) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    alert(`Inscription réussie pour : ${name}`);
    window.location.href = 'signin.html';
});

const btnGoogle = document.querySelector('.btn-google');
btnGoogle.addEventListener('click', () => {
    alert('Redirection vers la connexion Google...');
    window.location.href = 'https://accounts.google.com'; // Exemple
});

const btn42 = document.querySelector('.btn-42');
btn42.addEventListener('click', () => {
    alert('Redirection vers la connexion 42...');
    window.location.href = 'https://signin.intra.42.fr'; // Exemple
});
