import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CartSchema = new Schema(
{
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
  versionKey: false,
  timestamps: true
})

const Cart = model('Cart', CartSchema);
export default Cart;