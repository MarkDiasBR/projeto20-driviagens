export function badRequest() {
    return {
        type: "badRequest",
        message: `Server got a bad request.`
    }
}