const notes = [
  {
    note_id: 1,
    note_title: "this is a test",
    note_description: "it either worked or it didnt lol",
  },
];
const users = [
  {
    user_id: 1,
    user_username: "test",
    user_password: "testpass",
  },
];

exports.seed = async function (knex) {
  await knex("notes").insert(notes);
  await knex("users").insert(users);
};
