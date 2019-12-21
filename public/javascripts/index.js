const logger = log.noConflict();
const sender = remote.apply(logger, {format:remote.json});
const socket = io();

logger.enableAll();


socket.on('update console', (data) => {
    console.log('UPDATE Console: ', data);
});