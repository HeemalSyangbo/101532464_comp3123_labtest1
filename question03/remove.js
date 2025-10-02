const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "Logs");

if (fs.existsSync(logDir)) {
  const files = fs.readdirSync(logDir);
  files.forEach(f => {
    console.log(`delete files...${f}`);
    fs.unlinkSync(path.join(logDir, f));
  });
  fs.rmdirSync(logDir);
}
