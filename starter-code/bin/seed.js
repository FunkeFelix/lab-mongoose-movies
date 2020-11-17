const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/celebrity-lab", {
  useNewUrlParser: true,
});

const celebrities = [
  {
    name: "Daniel Craig",
    occupation: "James Bond",
    catchPhrase: "My name is Bond, James Bond",
  },
  {
    name: "Pierce Brosnan",
    occupation: "The Matador",
    catchPhrase:
      "I hate these Catholic countries. It's all blushy-blushy and no sucky-fucky.",
  },
  {
    name: "Sean Connery",
    occupation: "Indiana Jones",
    catchPhrase: "It is okay to hit a women - keep her in line",
  },
];

Celebrity.insertMany(celebrities)
  .then((data) => {
    console.log(`Success! ${data.length} celebrities added to the collection`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
