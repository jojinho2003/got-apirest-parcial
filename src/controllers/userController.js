
const getUsers = (req, res) => {
  res.json([
    { id: 1, username: "admin", email: "admin@example.com" },
    { id: 2, username: "jon_snow", email: "jon@winterfell.com" }
  ]);
};


const createUser = (req, res) => {
  const { username, email } = req.body;
  res.status(201).json({ id: Date.now(), username, email });
};

module.exports = {
  getUsers,
  createUser
};
