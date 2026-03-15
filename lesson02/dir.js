const fs = require("fs");

if (!fs.existsSync("./new")) {
  //* klasor var mı yok mu kontrolu

  //* klasor olustur (path, callback)
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("directory created");
  });
}

if (fs.existsSync("./new")) {
  //* Klasoru sil
  fs.rmdir("./new", (err) => {
    if (err) throw err;

    console.log("directory removed");
  });
}
