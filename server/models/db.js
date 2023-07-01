const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.d3mrhpz.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => {
  console.log('Mongodb connection success');
})
.catch((err) => {
  console.log(`Error in db connection ${err}`);
});

module.exports = mongoose;
