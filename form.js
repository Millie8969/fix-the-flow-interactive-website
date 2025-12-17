// 1. Selecteer de form waarmee de gebruiker zich aanmeldt
let emailForm = document.querySelector('#form');

//2. Wacht totdat erop geklikt wordt
emailForm.addEventListener('submit', function(e) {
    //3. Verberg het formulier en de hulptekst en toon de bevestiging van de signup, alsmede de link terug naar de homepage
    e.preventDefault();
    document.querySelector('.signup-form').classList.add('signup-form-hidden');
    document.querySelector('.signup-text').classList.add('signup-form-hidden');
    document.querySelector('#successMessage').classList.add('confirmSignup-visible');
    document.querySelector('.returnText').classList.add('confirmSignup-visible');
});

console.log("Script loaded!");