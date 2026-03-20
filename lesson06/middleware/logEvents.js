const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
let sayi = 0;
const check = true;

const logEvents = async (message, logName) => {
  const dateTime = format(new Date(), "yyyy/MM/dd\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
  } catch (error) {
    console.log(error);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
  console.log(`${req.method} ${req.path}`);
  next();
};

const anotherLogger = (req, res, next) => {
  logEvents(`${++sayi}\t${req.method}`, "reqLog.txt");
  if (check) next();
  else res.status(403).send("Access denied");
};

module.exports = { logEvents, logger, anotherLogger };
