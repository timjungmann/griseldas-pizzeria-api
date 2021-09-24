import mongoose from 'mongoose';
import Pizza from '../models/Pizza.js';
import dotenv from 'dotenv';
import faker from 'faker';

const {connect} = mongoose;
dotenv.config();

(async function() {
  // * ESTABLISH CONNECTION TO DB
  connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(()=> console.log("Connection to DB established for seeding."))
  .catch((err)=> {
    console.log(`Connection to DB couldn't be established for seeding:`, err)
  });


  // * DELETE ALL PIZZAS
  try {
    await Pizza.deleteMany({});
    console.log('Getting rid of all the pizzas in the database.');
  } catch(err) {
    console.log(err)
  }


  // * CREATE 10 NEW PIZZAS
  const pizzaPromises = Array(10)
  .fill(null)
  .map(()=>{
    const pizzaData = {
      image: faker.image.food(),
      name: 'Pizza ' + faker.random.word(),
      description: faker.lorem.words(10),
      price: faker.commerce.price(7, 16),
      isVegan: faker.datatype.boolean()
    }
    console.log(`Pizza named ${pizzaData.name} was created.`);
    
    const pizza = new Pizza(pizzaData);
    return pizza.save();
  });

  try {
    await Promise.all(pizzaPromises);
    console.log(`10 new pizzas stored in DB.`)
  } catch (err) {
    console.log(err)
  }


  // * CLOSE CONNECTION TO DB
  mongoose.connection.close();
})();