const db = require("../../data/db-config");

async function getNoteById(note_id) {
  const data = await db("notes").where("note_id", note_id);
  const firstRow = data[0];
  if (!firstRow) return null;
  const note = {
    note_id: firstRow.note_id,
    note_title: firstRow.note_title,
    note_description: firstRow.note_description,
  };
  return note;
}

module.exports = {
  getNoteById,
};
