const {Schema}=require ("mongoose");

const Ordersschema=new Schema({
    name:String,
    qty:Number,
    price:Number,
    model:String
})

module.exports={Ordersschema};