const loginBtn = document.getElementById('login-button');

const loginHandler = () => {
    const loginEmail = document.querySelector('section.login-form input#email');
    const loginPassword = document.querySelector('section.login-form input#password');

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
            const errorMessage = document.querySelector('section.login-form p.error-message');
            errorMessage.innerText = res.statusText;
        }
        console.log("Request complete! response:");
    });
};

loginBtn.addEventListener('click', loginHandler);