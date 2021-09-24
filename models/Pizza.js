import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const PizzaSchema = new Schema({
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
  isVegan: {
      type: Boolean,
      required: true
  }
},{
  versionKey: false,
  timestamps: true
});

const Pizza = model('Pizza', PizzaSchema);
export default Pizza;