// userController.js

const User = require('../model/User')

// Controller to save the registration form data
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, country, state, city, gender, dateOfBirth, age } = req.body;

    // Save the user data to the database
    const user = await User.create({
      firstName,
      lastName,
      email,
      country,
      state,
      city,
      gender,
      dateOfBirth,
      age,
    });

    res.status(201).json(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = {};
      for (const field in err.errors) {
        errors[field] = err.errors[field].message;
      }
      return res.status(400).json({ errors });
    }

    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to get all registered users along with country, state, and city data
exports.getAllUsers = async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.find();
  
      // Collect unique country, state, and city names from the users' data
      const countries = [...new Set(users.map(user => user.country))];
      const states = [...new Set(users.map(user => user.state))];
      const cities = [...new Set(users.map(user => user.city))];
  
      // Construct the response object with the collected data
      const responseData = {
        users,
        countries,
        states,
        cities,
      };
  
      res.status(200).json(responseData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };