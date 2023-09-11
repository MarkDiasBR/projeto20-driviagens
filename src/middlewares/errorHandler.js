import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
    switch (error.type) {
        case "conflict":
        case "conflictingResource":
            res
                .status(httpStatus.CONFLICT)
                .send('🚫 Conflict!\n\n' + error.message);
            break;

        case "notFound": 
            res
                .status(httpStatus.NOT_FOUND)
                .send('🚫 Not found!\n\n' + error.message);
            break;

        case "incompleteData":
        case "invalidId":
            res
                .status(httpStatus.UNPROCESSABLE_ENTITY)
                .send('🚫 Unprocessable entity!\n\n' + error.message);
            break;

        case "entity.parse.failed":
            res
                .status(httpStatus.UNPROCESSABLE_ENTITY)
                .send('🚫 Unprocessable entity!\n\n' + error.message + "\nYou probably have a field with empty value");
            break;

        case "badRequest":
        case "invalidPageValue":
            res
                .status(httpStatus.BAD_REQUEST)
                .send('🚫 Bad request!\n\n' + error.message);
            break;

        case "tooManyResults":
        case "dbConnectionFailed":
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send('🚫 Internal Server Error!\n\n' + error.message);
            break;

        default:
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send('🚫 Internal Server Error!\n\n' +"Sorry, something went wrong 😢");
    }
}
    