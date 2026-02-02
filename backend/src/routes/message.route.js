import express from "express";

const router = express();

router.get("/send", (req, res) => {
  res.send("message sent");
});

export default router;
