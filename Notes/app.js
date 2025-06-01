import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Tested Successfully" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send({ email, password });
});

app.post("/register", (req, res) => {
  const { email, password, cnfrmPassword } = req.body;
  res.send({ email, password, cnfrmPassword });
});

app.post("/addNotes", (req, res) => {
  const { description } = req.body;
  res.send({ description });
});

app.delete("/deleteNotes/:id", (req, res) => {
  const { id } = req.params;
  res.send({ id });
});

app.put("/updateNotes/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  res.send({ id, description });
});

app.get("/getNotes", (req, res) => {
  res.send({ message: "Notes Successfully Recvd" });
});

app.get("/getNotesById/:id", (req, res) => {
  const { id } = req.params;
  res.send({ id });
});

app.listen(3000, () => {
  console.log("Port Connected!!");
});
