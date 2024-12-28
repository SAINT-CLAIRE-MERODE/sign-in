const btnSignUp = document.querySelector('.btn-signup');
const btnSignIn = document.querySelector('.btn-signin');

btnSignUp.addEventListener('click', () => {
    window.location.href = 'signup.html';
});

btnSignIn.addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!email || !password) {
        alert('remplir tous les champs.');
        return;
    }

    alert(`Connexion reussie pour l'email : ${email}`);
    window.location.href = 'home.html';
});

// Bouton Google
const btnGoogle = document.querySelector('.btn-google');
btnGoogle.addEventListener('click', () => {
    alert('redirection vers la connexion Google...');
    window.location.href = 'https://accounts.google.com'; 
});

// Bouton 42
const btn42 = document.querySelector('.btn-42');
btn42.addEventListener('click', () => {
    alert('redirection vers la connexion 42...');
    window.location.href = 'https://signin.intra.42.fr'; 
});
