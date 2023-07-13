const express = require("express");
const { chats } = require("./data/dummyData");
const connectDB = require("./config/db");
const userRoutes = require("./userRoutes");
const { errorHandler, notFound } = require("./middelware/errorMiddleware");

require("dotenv").config();

const PORT = process.env.PORT || 4000;
connectDB();

const app = express();

app.use(express.json()); // to support JSON-encoded bodies

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});
