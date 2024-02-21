import express from "express"; // Import syntax for ES6 modules
import cors from "cors";
const app = express();
const port = 3000;
import routes from "./app/Routes/web.mjs"; // Use .mjs extension

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});