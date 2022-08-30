import { sendMail } from "../utils/mailer";
import myEntity from "./myEntitiy";

async function create(req, res) {
  try {
    const data = await myEntity.create(req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error trying to create myEntity` });
  }
}

async function list(req, res) {
  const data = await myEntity.get();
  res.json(data);
}

async function update(req, res) {
  const id = req.params.id;
  const numId = Number(req.params.id);
  if (isNaN(numId))
    return res.status(400).json({ error: `Invalid id of "${id}"` });
  try {
    const data = await myEntity.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error trying to update myEntity` });
  }
}

async function del(req, res) {
  const id = Number(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `Passed id must be a number` });

  try {
    const data = await myEntity.del(id);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function login(req, res) {
  try {
    if (!req.body.email) res.status(400).send("Email is required");
    const status = await sendMail(req.body.email);
    res.send({ status });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error trying to login` });
  }
}

export default {
  myEntity: { create, list, update, del },
  auth: { login },
};
