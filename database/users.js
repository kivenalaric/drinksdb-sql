const connection = require("./index");

async function getAllUsers() {
  const [res] = await connection.query("SELECT * from users");
  return res;
}

async function getOneUser(id) {
  const [[user]] = await connection.query("SELECT * from users WHERE id = ?", [id] );
  return user;
}

async function createOneUser({ name, api_key, phone, email, password }) {
  const [userData] = await connection.query(`INSERT INTO users (name, api_key, phone, email, password)  VALUES (?, ?, ?, ?, ?)`, [name, api_key, phone, email, password]);
  console.log(userData)
  return getOneUser(userData.insertId);
}

async function updateOnUser({ userParam,id }) {
  const [userData] = await connection.query(`UPDATE users SET ${userParam}  WHERE id = ?`, [ , id]);
  console.log(userData)
  return;
}

async function updateOneUser({ name, api_key, phone, email, password,id }) {
  const [userData] = await connection.query(`UPDATE users SET name = ?, api_key = ?, phone = ?, email = ?, password = ?  WHERE id = ?`, [name, api_key, phone, email, password, id]);
  console.log(userData)
  return;
}

async function deleteOneUser(id) {
  const [user] = await connection.query("DELETE from users WHERE id = ?", [id] );
  console.log(id)
  console.log(user)
  return ('sucessfully deleted');
}
// DELETE FROM table_name WHERE condition
// async function main() {
//   // get the client
//   const mysql = require('mysql2/promise');
//   // create the connection
//   const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
//   // query database
//   const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
// }
module.exports = { getAllUsers, getOneUser, createOneUser, deleteOneUser, updateOneUser, updateOnUser };
