require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const connectDB = async () => {
  try {
    mongoose.set('useCreateIndex', true);
    const conn = await mongoose.connect(
      "mongodb+srv://baju-commerce:commerce@cluster0.km7by.mongodb.net/mern_ecommerce",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
  } catch (error) {
    console.error(error);
  }
};


const setupDB = async () => {
  try {
    // Connect to MongoDB
    mongoose.set('useCreateIndex', true);
    mongoose
      .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() =>
        console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
      )
      .catch(err => console.log(err));
  } catch (error) {
    return null;
  }
};

module.exports = connectDB;
