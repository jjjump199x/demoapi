const Joi = require("joi");

const BookSchema = Joi.object({
    title: Joi.string().required().min(5).max(50),
    genre: Joi.string().required().min(5).max(10),
    author: Joi.string().required().min(5).max(20),
    yearPublished: Joi.required().isoDate(),
    price: Joi.required().integer(),
});

module.exports = BookSchema;