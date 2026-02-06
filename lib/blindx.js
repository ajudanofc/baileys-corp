"use strict";

const chalk = require("chalk");
const gradient = require("gradient-string");

const align = (text) => {
  const width = process.stdout.columns || 80;
  const pad = Math.floor((width - text.length) / 2) - 15;
  return " ".repeat(Math.max(0, pad)) + text;
};

console.clear();

setTimeout(() => {

  const size = 32;
  let progress = 0;

  const loader = setInterval(() => {

    progress++;

    const fill = Math.floor((progress / 100) * size);

    const bar =
      chalk.green("█".repeat(fill)) +
      chalk.gray("░".repeat(size - fill));

    process.stdout.write(`\r${chalk.cyan(bar)} ${chalk.yellow(progress + "%")}`);

    if (progress >= 100) {

      clearInterval(loader);

      setTimeout(() => {

        console.clear();

        const ascii = `
   _____       __          .___              
  /  _  \\     |__|__ __  __| _/____    ____  
 /  /_\\  \\    |  |  |  \\/ __ |\\__  \\  /    \\ 
/    |    \\   |  |  |  / /_/ | / __ \\|   |  \\
\\____|__  /\\__|  |____/\\____ |(____  /___|  /
        \\/\\______|          \\/     \\/     \\/ 
`;

        console.log(gradient.rainbow.multiline(ascii));

        console.log(chalk.magentaBright.bold(align("Bailes by Ajudan.0fficiall")));
        console.log(chalk.cyanBright(align("github:ajudanofc")));
        console.log(chalk.gray(align("────────────────────────────")));
        console.log(chalk.yellowBright(align("Masukan nomornya : 62xxx")));
        console.log();

      }, 300);
    }

  }, 18);

}, 5000);



var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
var desc = Object.getOwnPropertyDescriptor(m, k);
if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
desc = { enumerable: true, get: function() { return m[k]; } };
}
Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
for (var p in m)
if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
__createBinding(exports, m, p);
};

var __importDefault = (this && this.__importDefault) || function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;