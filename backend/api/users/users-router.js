const router = require("express").Router();

router.use("*", (req, res) => {
  res.json({ api: "up" });
});

router.use((err, req, res, next) => [
  res.status(500).json({
    customMessage: "something went wrong in the user router",
  }),
]);

module.exports = router;
