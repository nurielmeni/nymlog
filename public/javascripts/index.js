const logger = log.noConflict();
const sender = remote.apply(logger, {format:remote.json});
const socket = io();
const nymConsole = document.getElementById('nym-console');

logger.enableAll();

const getLogEntry = (json) => {
    if (!json) return;
    
    const logEntry = document.createElement('div');
    logEntry.id = json._id;
    logEntry.className = 'nym-log';
    logEntry.innerHTML = `
        <p class="summary">
            <span class="timestamp">${json.timestamp}</span>
            <span class="timestamp">${json.logger}</span>
            <span class="timestamp">${json.level}</span>
            <span class="timestamp">${json.message}</span>
        </p>
        <p class="stack" style="display: none;">${json.stackTrace}</p>
    `;

    return logEntry;
};


document.querySelectorAll('.nym-log', function(elm) {
    this.querySelector('p.stack', function() {
        this.hidden = !this.hidden;
    });
});

socket.on('update console', (json) => {
    console.log('UPDATE Console: ', json);
    nymConsole.appendChild(getLogEntry(json));
});