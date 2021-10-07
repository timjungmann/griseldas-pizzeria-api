import Pizza from "../models/Pizza.js";
import createError from 'http-errors';

export const getPizzas = async(req,res)=>{
  try {
    let allPizzas = await Pizza.find();
    res.json(allPizzas);
  } catch (err) {
    next(err)
  }
}

export const addPizza = async(req,res)=>{
  const pizzaData = req.body;
  try {
    const newPizza = await Pizza.create(pizzaData);
    res.json(newPizza);
  } catch (err) {
    next(err);
  }
}

export const deletePizza = async(req,res)=>{
  const {id} = req.params;
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(id);
    if(!deletedPizza) {
      throw new createError(404, `No Pizza with id ${id} found.`)
    } else {
      res.json(deletedPizza);
    }
  } catch (err) {
    next(err)
  }
}

export const updatePizza = async(req,res)=>{
  const {id} = req.params;
  const data = req.body;
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(id, data, {new: true});
    if(!updatedPizza){
      throw new createError(404, `No Pizza with id ${id} found.`)
    } else {
      res.json(updatedPizza);
    }
  } catch (err) {
    next(err)
  }
}