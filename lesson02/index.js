//* Normal fs explanation
// const fs = require("fs");

const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
    await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you");
    await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"));
    const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), "utf8");
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// //* Read a file
// fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// //* Write a file
// fs.writeFile(path.join(__dirname, "random.js"), 'console.log("Melihin götü sadece benim")', (err) => {
//   if (err) throw err;
//   console.log("Write complete");
// });
// //* Append a file
// fs.appendFile(path.join(__dirname, "random.js"), '\n\nconsole.log("kes lan")', (err) => {
//   if (err) throw err;
//   console.log("Append complete");
// });

// //* Rename a file
// fs.rename(path.join(__dirname, "random.js"), path.join(__dirname, "melih.js"), (err) => {
//   if (err) throw err;
//   console.log("Rename complete");
// });

// console.log(path.join(__dirname, "files", "starter.txt"));
