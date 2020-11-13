const rest = require("../models/rest");

const getAll = (req, res) => {
  console.log(req.url);
  rest.find(function (err, rest) {
    res.status(200).send(rest);
  });
};

const getCuisine = (req, res) => {
  rest.find({ cuisine }, function (err, rest) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send(rest)
  })
};

const postNewRest = (req, res) => {
   let restaurant = new rest(req.body);
   console.log(restaurant)

  restaurant.save((err) => {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(201).send({ message: "Successful registration!!" });
  });
};

const deleteRest = (req, res) => {
  const id = req.params.id
  rest.deleteMany({ id }, (err) => {
    if(err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(200).send({ message: "Successfully removed!"})
    }
  })
};

const deleteByPrice = (req, res) => {
  const price = req.params.price
  cursos.deleteMany({price}, (err) => {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(201).send({ message: "This restaurant was very expensive!!!" })
      }
  })
};

const putRest = (req, res) => {
  const id = req.params.id
  rest.updateMany({ id }, {$set: req.body}, {upsert: true}, (err) => {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(200).send({ message: "Updated Restaurant!"})
    }
  })
};


module.exports = {
  getAll,
  getCuisine,
  postNewRest,
  deleteRest,
  deleteByPrice,
  putRest,
};
