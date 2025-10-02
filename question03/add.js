const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "Logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

process.chdir(logDir);

for (let i = 0; i < 10; i++) {
  const file = `log${i}.txt`;
  fs.writeFileSync(file, `This is log file number ${i}`);
  console.log(file);
}
