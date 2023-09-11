import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {

    switch (error.type) {
        case "conflict":
        case "conflictingResource":
            return res
            .status(httpStatus.CONFLICT)
            .send('🚫 Conflict!\n\n' + error.message);
            
        case "notFound": 
            return res
                .status(httpStatus.NOT_FOUND)
                .send('🚫 Not found!\n\n' + error.message);

        case "incompleteData":
        case "invalidId":
            return res
                .status(httpStatus.UNPROCESSABLE_ENTITY)
                .send('🚫 Unprocessable entity!\n\n' + error.message);
            
        case "entity.parse.failed":
            return res
                .status(httpStatus.UNPROCESSABLE_ENTITY)
                .send('🚫 Unprocessable entity!\n\n' + error.message + "\nYou probably have a field with empty value");

        case "badRequest":
        case "invalidPageValue":
            return res
                .status(httpStatus.BAD_REQUEST)
                .send('🚫 Bad request!\n\n' + error.message);

        case "tooManyResults":
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send('🚫 Internal Server Error!\n\n' + error.message);

        default:
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send('🚫 Internal Server Error!\n\n' +"Sorry, something went wrong 😢");
    }
}

    