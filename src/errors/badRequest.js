export function badRequest(comment) {
    return {
        type: "badRequest",
        message: `Server got a bad request.${comment ? "\n" + comment : ""}`
    }
}