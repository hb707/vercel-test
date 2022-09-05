const express = require("express");
const http = require("http");
const cors = require("cors");
// const { connectDB } = require("./db");
// const router = require("./routes");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: ["https://nftube.vercel.app", "http://localhost:3000"],
    credentials: true,
  })
);

// app.use("/api", router);
app.get("/", (req, res) => {
  res.json("hi");
});
app.get("/hello", (req, res) => {
  res.json("hello");
});

app.listen(4000, () => {
  console.log("server start");
});

// connectDB()
//   .then(() => {
//     console.log("db connected");
//     server.listen(process.env.PORT || "4000", () => {
//       socket(io);
//       console.log("server started : 4000");
//     });
//   })
//   .catch(console.error);
