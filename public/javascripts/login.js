const loginBtn = document.getElementById('login-button');

const loginHandler = () => {
    const loginEmail = document.querySelector('section.login-form input#email');
    const loginPassword = document.querySelector('section.login-form input#password');
    const errorMessage = document.querySelector('section.login-form p.error-message');

    // Clears the error message place holder
    errorMessage.innerText = '';

    let data = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    fetch("/users/login", {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 400) {
            errorMessage.innerText = res.statusText;
        } else if (res.status === 200) {
            window.localStorage.setItem('user', res.headers.get('x-auth-token'));
        }
        console.log("Request complete! response:");
    });
};

loginBtn.addEventListener('click', loginHandler);