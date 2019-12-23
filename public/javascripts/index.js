const logger = log.noConflict();
const sender = remote.apply(logger, {format:remote.json});
const socket = io();
const nymConsole = document.getElementById('nym-console');
const loginBtn = document.getElementById('login-button');

logger.enableAll();

const getLogEntry = (json) => {
    if (!json) return;

    const logEntry = document.createElement('div');
    logEntry.id = json._id;
    logEntry.className = 'nym-log';
    logEntry.innerHTML = `
        <p class="summary">
            <span class="timestamp">${json.timestamp}</span>
            <span class="logger">${json.logger}</span>
            <span class="level ${json.level}
            ">[${json.level}]</span>
            <span class="message">${json.message}</span>
        </p>
        <p class="stacktrace" hidden>${json.stacktrace}</p>
    `;

    logEntry.addEventListener('click', function() {
        toggleVisibility(this.querySelector('p.stacktrace'));
    });
    return logEntry;
};

const toggleVisibility = (elm) => {
    elm.hidden = !elm.hidden;
}

socket.on('update console', (json) => {
    if (json) {
        console.log('UPDATE Console: ', json);
        nymConsole.appendChild(getLogEntry(json));
    }
});

const loginHandler = () => {
    const loginEmail = document.querySelector('section.login-form input#email');
    const loginPassword = document.querySelector('section.login-form input#password');

    let data = {
        email: loginEmail.vlaue,
        password: loginPassword.vlaue
    };

    fetch("/users/login", {
        method: "POST", 
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
};

loginBtn.addEventListener('click', loginHandler);