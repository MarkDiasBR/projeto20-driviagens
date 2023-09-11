import joi from 'joi';
import dayjs from 'dayjs';
import custommParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(custommParseFormat);

const passenger = joi.object({
    firstName: joi.string()
        .min(2)
        .max(100)
        .required(),
    lastName: joi.string()
        .min(2)
        .max(100)
        .required()
});

const city = joi.object({
    name: joi.string()
        .min(2)
        .max(50)
        .required()
});

const flight = joi.object({
    origin: joi.number()
        .integer()
        .greater(0)
        .required(),
    destination: joi.number()
        .integer()
        .greater(0)
        .custom((value, helpers) => {
            const origin = helpers.state.ancestors[0].origin;

            if (value !== origin) {
                return value;
            } else { 
                return helpers.error('number.conflict');
            }
        })
        .messages({
          'number.conflict': 'Destination can\'t be the same as Origin!',
        })
        .required(),
    date: joi.string()
        .custom((value, helpers) => {
            if (dayjs(value, "DD-MM-YYYY", true).isValid()) {
                if (dayjs(value, "DD-MM-YYYY", true).isAfter(dayjs(), 'day')) {
                    return value;
                } else {
                    return helpers.error('string.invalidDate');
                }
            } else {
                return helpers.error('string.invalidFormat');
            }
        })
        .messages({
          'string.invalidDate': 'Date must be at least tomorrow!',
          'string.invalidFormat': 'Date must be in the DD-MM-YYYY format!',
        })  
        .required()
});

const travel = joi.object({
    passengerId: joi.number()
        .integer()
        .greater(0)
        .required(),
    flightId: joi.number()
        .integer()
        .greater(0)
        .required()
})

const flightsParams = joi.object({
    origin: joi.string(),
    destination: joi.string(),
    'smaller-date': joi.string()
        .custom((value, helpers) => {
            if (dayjs(value, "DD-MM-YYYY", true).isValid()) {
                return value;
            } else {
                return helpers.error('string.invalidFormat');
            }
        })
        .messages({
        'string.invalidFormat': 'Date must be in the DD-MM-YYYY format!',
        }),
    'bigger-date': joi.string()        
        .custom((value, helpers) => {
            if (dayjs(value, "DD-MM-YYYY", true).isValid()) {
                return value;
            } else {
                return helpers.error('string.invalidFormat');
            }
        })
        .messages({
        'string.invalidFormat': 'Date must be in the DD-MM-YYYY format!',
        })
});


const schemas = { passenger, city, flight, travel, flightsParams };

export default schemas;