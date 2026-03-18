const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get(/\/ahmet(.html)?/, (req, res) => {
  // res.send("Hello world");
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get(/\/new-page(.html)?/, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get(/\/old-page(.html)?/, (req, res) => {
  res.redirect(301, "/new-page.html"); //default 302, 310 yapman lazım
});

// app.get(/\/*/, (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "index.html"));
// });

//Route Handlers

app.get(
  /\/hello(.html)?/,
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.sendFile(path.join(__dirname, "views", "subdir", "test.html"));
  },
);

const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res) => {
  console.log("three");
  res.send("Finished");
};

app.get("/trying", [one, two, three]);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
