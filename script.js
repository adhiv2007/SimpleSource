/*code for sign in form*/ 

document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('.signin-form');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('Form Submitted');
    }); 

    const rememberMeCheckbox = document.getElementById('remember');
    rememberMeCheckbox.addEventListener('change', function(){
        if(this.checked){
            console.log('Remember me checked');
        } else{
            console.log('Remember me unchecked');
        }
    });
});             

/*code for remember me box*/

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('remember');
    const rememberText = document.querySelector('.remember-text');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            rememberText.style.fontWeight = 'bold';
        } else {
            rememberText.style.fontWeight = 'normal';
        }
    });
});

/*light/dark mode code*/ 

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }
});

/*password toggle*/

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
            
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
});