import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const OrderSchema = new Schema({
  pizzas:[
    {
      pizza:{
      type: Schema.Types.ObjectId,
      ref:'Pizza'
      },
      quantity:{
        type:Number,
        required:true
      }
    }
  ]
},{
  versionKey:false
})

const Order = model('Order', OrderSchema);
export default Order;