const errorsSchema = {
  categoryNotFound: {
    status: 400,
    message: '"categoryIds" not found',
  },
  nameIsRequired: {
    status: 400,
    message: '"name" is required',
  },
  userNotExist: {
    status: 404,
    message: 'User does not exist',
  },
  userAlreadyExists: {
    status: 409,
    message: 'User already registered',
  },
  misssingFields: {
    status: 400,
    message: 'Some required fields are missing',
  },
  invalidFields: {
     status: 400,
     message: 'Invalid fields',
  },
  emailIsRequired: {
    status: 400,
    message: '"email" must be a valid email',
  },
  invalidPassword: {
    status: 400,
    message: '"password" length must be at least 6 characters long',
  },
  passwordIsRequired: {
    status: 400,
    message: '"password" is required',
  },
  tokenNotFound: {
    status: 401,
    message: 'Token not found',
  },
  invalidToken: {
    status: 401,
    message: 'Expired or invalid token',
  },
  displayNameIsRequired: {
    status: 400,
    message: '"displayName" is required',
  },
  displayNameInvalid: {
    status: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
};

module.exports = { errorsSchema };