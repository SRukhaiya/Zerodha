const {model}=require ("mongoose");

const {Holdingsschema} =require( "../schemas/Holdingsschema.js");

const Holdingsmodel=new model("holding",Holdingsschema);

module.exports={Holdingsmodel};