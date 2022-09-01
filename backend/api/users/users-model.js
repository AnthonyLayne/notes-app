const db = require("../../data/db-config");

function getAllUsers(users) {
  //return db("users").leftJoin("user_id", "note_id").select("users.*");
  return db("users", users);
}

async function getUserById(user_id) {
  const userData = await db("users").where("user_id", user_id);
  const firstRow = userData[0];
  if (!firstRow) return null;
  const user = {
    user_id: firstRow.user_id,
    user_username: firstRow.user_username,
    user_password: firstRow.user_password,
  };
  return user;
}

const addUser = async (user_username, user_password) => {
  const newUser = await db("users").insert(user_username, user_password);
  return newUser;
};

const deleteUserById = (user_id) => {
  return db("users").where("user_id", user_id).del();
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
};
