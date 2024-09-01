import { check } from 'express-validator'

export const fullNameValidator = [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('lastName', 'Last name is required')
    .not()
    .isEmpty()
]
