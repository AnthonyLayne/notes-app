const router = require("express").Router();
const NOTE = require("./notes-model");

router.get("/:note_id", (req, res, next) => {
  NOTE.getNoteById(req.params.note_id)
    .then((note) => {
      if (!note) return res.status(404);
      return res.status(200).json(note);
    })
    .catch(next);
});

router.use((err, req, res) => {
  res.status(500).json({
    message: "err in note router",
  });
});

module.exports = router;
