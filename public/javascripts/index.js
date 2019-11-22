log.enableAll();
remote.apply(log, {format:remote.json});
log.warn('message', (res) => console.log(res));