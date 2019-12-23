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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
};

loginBtn.addEventListener('click', loginHandler);