import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const OrderSchema = new Schema({
  pizzas:[
    {
      quantity:{
        type:Number,
        required:true
      },
      image: {
        type: String,
        required: true
      },
      name: {
          type: String,
          required: true
      },
      description: {
          type: String,
          required: true
      },
      price: {
          type: Number,
          required: true 
      },
      ingredients: {
          type: Array,
          required: false
      },
      isVeg: {
          type: Boolean,
          required: true
      },
      _id: {
        type: Schema.Types.ObjectId,
        required: true
      }
    }
  ]
},{
      versionKey: false,
      timestamps: true
    });

const Order = model('Order', OrderSchema);
export default Order;