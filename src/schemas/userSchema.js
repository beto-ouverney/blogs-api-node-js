const Joi = require('joi');
const { errorsSchema } = require('./errorsSchema');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': errorsSchema.displayNameIsRequired.message,
    'number.min': errorsSchema.displayNameInvalid.message,
  }),
  email: Joi.string().email().required().messages({
   'any.required': errorsSchema.emailIsRequired.message,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': errorsSchema.invalidPassword.message,
    'any.required': errorsSchema.passwordIsRequired.message,
  }),
  image: Joi.string().required(),
});

module.exports = { userSchema };