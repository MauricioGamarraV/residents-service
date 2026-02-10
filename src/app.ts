import "reflect-metadata";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const router = express.Router();

app.use('/v1/residents', router);

router.get('/', (_req, res) => {
  res.send("residents microservice is runinng...");
})  

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Residents server is running on port: ${PORT}`);
})

export default app;
