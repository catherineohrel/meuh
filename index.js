const info = require("./information.js");
console.log(`Student name is ${info.nom} and campus is${info.campus}`);
const cowSay = require("cowsay");


console.log(cowSay.say({
    text: info.nom + info.campus,

}))