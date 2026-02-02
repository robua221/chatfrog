import express from "express";
const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("SignUp Endpont");
});
router.get("/login", (req, res) => {
  res.send("Login Endpont");
});
router.get("/logout", (req, res) => {
  res.send("Logout Endpont");
});

export default router;
