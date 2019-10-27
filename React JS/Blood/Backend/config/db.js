const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abubaker:admin123@cluster0-ja1cw.mongodb.net/blood_bank?retryWrites=true&w=majority');

module.exports = mongoose;