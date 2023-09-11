export function conflictingResource(column = "provided", value = "equal to the one that was given") {
    return {
        type: "conflictingResource",
        message: `Column ${column} already has a value ${value}.`
    }
}