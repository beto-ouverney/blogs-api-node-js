const errorsSchema = {
  misssingFields: {
    status: 400,
    message: 'Some required fields are missing',
  },
  invalidFields: {
     status: 400,
     message: 'Invalid fields',
  },
  invalidId: {
    status: 400,
    message: 'Id deve ser um número',
  },
  emailIsRequired: {
    status: 400,
    message: 'Some required fields are missing',
  },
  invalidEmail: {
    status: 400,
    message: 'O "email" deve ter o formato "email@email.com"',
  },
  passwordIsRequired: {
    status: 400,
    message: 'O campo "password" é obrigatório',
  },
  invalidPassword: {
    status: 400,
    message: 'O "password" deve ter pelo menos 6 caracteres',
  },
  tokenNotFound: {
    status: 401,
    message: 'Token não encontrado',
  },
  invalidToken: {
    status: 401,
    message: 'Token inválido',
  },
  nameIsRequired: {
    status: 400,
    message: 'O campo "name" é obrigatório',
  },
  invalidName: {
    status: 400,
    message: 'O "name" deve ter pelo menos 3 caracteres',
  },
};

module.exports = { errorsSchema };