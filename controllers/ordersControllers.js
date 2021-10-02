import Order from "../models/Order.js";
import createError from 'http-errors';

export const getOrder = async(req,res,next)=>{
  const {id} = req.params;
  try {
    let foundOrder = await Order.findById(id);
    if(!foundOrder){
      return next(createError(404, `Can't find order with id ${id}`))
    } else {
      res.json(foundOrder);
    }
  } catch (err) {
    next(err)
  }
}

export const addOrder = async(req,res,next)=>{
  let orderData = req.body;
  try {
    let newOrder = await Order.create(orderData);
    res.json(newOrder);
  } catch (err) {
    next(err)
  }
}