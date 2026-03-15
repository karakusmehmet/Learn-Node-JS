const fs = require("fs");
//* parca parca chunk chunk oku Rami yorma
const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/new-lorem.txt");

// rs.on("data", (dataChunk) => {
//   console.log(dataChunk);
// });

//* Aktarma kopyalama islemi
rs.pipe(ws);
