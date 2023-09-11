import schemas from "../schemas/schemas.js";

export default function paramsSchemaValidation(schema) {
    
    return (req, res, next) => {
    
        const { error } = schema.validate(req.query, { abortEarly: false });

        if (error) {
            const errors = error.details.map((detail) => `${detail.message}`);

            if (error.details[0].type === "number.conflict") return res.status(409).send(`🚫 Conflict!\n\n${errors}`);
            
            return res.status(422).send(`🚫 Unprocessable entity!\n\n${errors}`);
        }

        next();
    }
}