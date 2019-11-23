const logger = log.noConflict();
const sender = remote.apply(logger, {format:remote.json});
logger.enableAll();


