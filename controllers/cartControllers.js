import Cart from "../models/Cart.js";
import createError from 'http-errors';

export const getCartItems = async(req,res)=>{
  try {
    let cartItems = await Cart.find();
    if(!cartItems){
      throw new createError(404, "No items in cart yet.")
    } else {
      res.json(cartItems);
    }
  } catch (err) {
    next(err)
  }
}

export const changeQuantity = async(req,res)=>{
  let {id} = req.params
  let newCart = req.body;
  try {
    let changedCart = await Cart.findByIdAndUpdate(id,newCart,{new:true})
    if(!changedCart){
      throw new createError(404, "Cannot update cart.")
    } else {
      res.json(changedCart);
    }
  } catch (err) {
    next(err)
  }
}