//[UTIL] FORMATTING AID
function stringConsoleFormatter(dbString) {
    const nameAndPortArray = dbString.split(':').slice(-1)[0].split('/').reverse();
    return {name: nameAndPortArray[0], port: nameAndPortArray[1]};
}

const databaseUtils = { stringConsoleFormatter };

export default databaseUtils;