const {model} = require("mongoose");

const {Allposition} =require("../schemas/Allposition.js");

const Allpositionmodel = new model("allposition", Allposition);

module.exports={Allpositionmodel};