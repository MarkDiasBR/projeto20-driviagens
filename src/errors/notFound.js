export function notFound(resource = "Item", value = "") {
    return {
        type: "notFound",
        message: `${resource}${value && ` ${value}`} not found!`
    }
}
