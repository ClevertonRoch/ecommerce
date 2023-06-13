const { setLocale } = require('yup')

setLocale({
  mixed: {
    required: 'Este parametro é obrigatório',
    notType: 'Tipo do parametro é invalido',
    defined: 'Este parametro precisa ter um valor definido',
    // eslint-disable-next-line no-template-curly-in-string
    oneOf: 'Deve ser um dos seguintes valores: ${values}',
    // eslint-disable-next-line no-template-curly-in-string
    notOneOf: 'Não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    lowercase: 'Deve estar em maiúsculo',
    uppercase: 'Deve estar em minúsculo',
    url: 'Deve ter um formato de URL válida',
    // eslint-disable-next-line no-template-curly-in-string
    max: 'Deve ter no máximo ${max} caracteres',
    // eslint-disable-next-line no-template-curly-in-string
    min: 'Deve ter no mínimo ${min} caracteres',
    email: 'Formato de e-mail digitado não é valido',
    // eslint-disable-next-line no-template-curly-in-string
    length: 'Deve ter exatamente ${length} caracteres',
    uuid: 'Valor digitado não confere a um UUID valido',
    trim: 'Não deve conter espaços no início ou no fim.',
    // eslint-disable-next-line no-template-curly-in-string
    matches: 'O valor deve corresponder ao padrão: ${regex}'
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    min: 'Deve ser no mínimo ${min}',
    // eslint-disable-next-line no-template-curly-in-string
    max: 'Deve ser no máximo ${max}',
    integer: 'Deve ser um número inteiro',
    // eslint-disable-next-line no-template-curly-in-string
    lessThan: 'Deve ser menor que ${less}',
    // eslint-disable-next-line no-template-curly-in-string
    moreThan: 'Deve ser maior que ${more}',
    positive: 'Deve ser um número positivo',
    negative: 'Deve ser um número negativo'
  },
  date: {
    // eslint-disable-next-line no-template-curly-in-string
    min: 'Deve ser maior que a data ${min}',
    // eslint-disable-next-line no-template-curly-in-string
    max: 'Deve ser menor que a data ${max}'
  },
  array: {
    // eslint-disable-next-line no-template-curly-in-string
    min: 'Deve ter no mínimo ${min} itens',
    // eslint-disable-next-line no-template-curly-in-string
    max: 'Deve ter no máximo ${max} itens',
    // eslint-disable-next-line no-template-curly-in-string
    length: 'Deve conter exatamente ${length} itens'
  },
  object: {
    noUnknown: 'Deve ser passado um valor definido'
  }
})
