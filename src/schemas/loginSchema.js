const Joi = require('joi');
const { errors } = require('./errorsSchema');

const loginSchema = Joi.array().items(({
  email: Joi.string().required().messages({
    'any.required': errors.misssingFields.message,
  }),
  password: Joi.string().required().messages({ 'any.required': errors.misssingFields.message }),
}));

module.exports = { loginSchema };