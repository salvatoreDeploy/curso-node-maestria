// Externo
const minimist = require("minimist");

// Interno
const soma = require("./soma").soma;

// Execução
const args = minimist(process.argv.splice(2));

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

soma(a, b);
