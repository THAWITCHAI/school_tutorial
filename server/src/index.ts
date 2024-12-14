import express, { Request, Response } from "express";
import allFunc from '../untils/GlobalApi';
import { assert } from "console";


const app = express();
const port = 3000;
app.use(express.json());

app.get("/roles", async (req: Request, res: Response) => {
  const role = await allFunc.getAllRole()
  res.send(role);
});
app.get("/roles/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const role = await allFunc.getUniqueRole(id)
  res.send(role);
});

app.post("/roles", async (req: Request, res: Response) => {
  try {
    const {name } = req.body
    allFunc.createData(name)
    res.send("Successfully created");
  } catch (error) {
    console.error(error);
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
