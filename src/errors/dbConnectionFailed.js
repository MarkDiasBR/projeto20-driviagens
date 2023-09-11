export function dbConnectionFailed() {
    return {
        type: "dbConnectionFailed",
        message: `DB can't connect.`
    }
}