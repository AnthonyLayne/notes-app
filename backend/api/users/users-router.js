const router = require("express").Router();
const USER = require("./users-model");

router.get("/", (req, res, next) => {
  USER.getAllUsers(req.params.users)
    .then((users) => {
      if (!users) return res.status(404);
      return res.status(200).json(users);
    })
    .catch(next);
});

router.get("/:user_id", (req, res, next) => {
  USER.getUserById(req.params.user_id)
    .then((user) => {
      if (!user) return res.status(404);
      return res.status(200).json(user);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await USER.addUser({
      user_username: req.body.user_username,
      user_password: req.body.user_password,
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:user_id", async (req, res, next) => {
  try {
    await USER.deleteUserById(req.params.user_id);
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

// router.use("*", (req, res) => {
//   res.json({ api: "up" });
// });

router.use((err, req, res, next) => [
  res.status(500).json({
    customMessage: "something went wrong in the user router",
  }),
]);

module.exports = router;
