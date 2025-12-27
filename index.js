import express from "express";

const app = express();

app.get("/", () => {
  console.log("Hello Hanh");
  console.log("Hello Ho Van Hanh Root!!");
});

app.get("/health", (req, res) => {
  console.log("API is supper power!!");
  res.send("Hello new api!!");
});

app.listen(3000, () => {
  console.log("App is running on localhost://3000");
});
