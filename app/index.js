import express from "express";
import termsData from "./db/terms.json" assert { type: "json" };

// Start express
const app = express();
const port = 3001;

app.get("/api/terms", (_, res) => {
  res.json(termsData);
});

app.get("/api/terms/:term", (req, res) => {
  const { term } = req.params;

  const requestedTerm = termsData.find(
    (t) => t.term.toUpperCase() === term.toUpperCase()
  );

  if (requestedTerm) {
    res.json(requestedTerm);
  } else {
    res.status(404).json({ error: `Term ${term} not found. :(` });
  }
});

app.listen(port, () => {
  console.info("server running");
});
