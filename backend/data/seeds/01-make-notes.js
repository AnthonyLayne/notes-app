const notes = [
  { note_id: 1 },
  { note_title: "this is a test" },
  { note_description: "it either worked or it didn't lol" },
];

exports.seed = async function (knex) {
  await knex("notes").insert(notes);
};
