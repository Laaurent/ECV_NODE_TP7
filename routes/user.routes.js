const express = require('express');
const router = express.Router();

const {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getManyUsers,
} = require('../handlers/users.handler.js');

router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getOneUser);
router.get('/', getManyUsers);

module.exports = router;
