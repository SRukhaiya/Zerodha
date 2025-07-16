const {model}=require ("mongoose");

const {Ordersschema}=require ("../schemas/Ordersschema.js");

const Ordersmodel=new model("order",Ordersschema);

module.exports={Ordersmodel};