const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json(
    process.env.WELCOME_MESSAGE
      ? `${process.env.WELCOME_MESSAGE}`
      : "No message provided"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
