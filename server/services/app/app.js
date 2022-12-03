const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;
const os = require("os");

app.get("/", (_, res) => {
  res.status(200).json({ msg: "app service is running", os: os.platform() });
});

app.listen(PORT, () => {
  console.log("app service is running on PORT", PORT);
});
