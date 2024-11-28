const { data } = require("../data/data");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

let modifiedData = data;

router.get("/data", (req, res) => {
  res.json(modifiedData);
});

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "secret-key");

    req.user = decoded;

    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

router.post("/delete/:id", authenticateToken, (req, res) => {
  console.log("req.params.id", req.params.id);
  modifiedData = modifiedData.filter(
    (item) => item.id !== Number(req.params.id)
  );
  res.status(200).json({ message: "item deleted", modifiedData: modifiedData });
});

router.post("/add", (req, res) => {
  console.log("Raw body:", req.rawBody);
  console.log("req.body", req.body);
  modifiedData.push(req.body);
  res.status(200).json({ message: "item added", modifiedData: modifiedData });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== "admin" || password !== "admin")
    return res.status(401).json({ message: "Unauthorized" });

  const token = jwt.sign({ username }, "secret-key");
  res.status(200).json({ access_token: token });
});

module.exports = router;
