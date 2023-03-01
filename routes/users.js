var express = require('express');
const { getAllUsers, getOneUser, createOneUser, deleteOneUser, updateOneUser } = require('../database/users')
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await getAllUsers();
  res.send(users);
});
router.post('/', async function(req, res, next) { 
  const newUser = await createOneUser(req.body)
  res.send(newUser);
});
router.get('/:id', async function(req, res, next) {
  const user = await getOneUser(req.params.id);
  res.send(user);
});
router.put('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.patch('/:id', async function(req, res, next) {
  const user = await updateOneUser()
  res.send('respond with a resource');
});
router.delete('/:id', async function(req, res, next) {
  const user = await deleteOneUser(req.params.id);
  res.send(user);
});

module.exports = router;
