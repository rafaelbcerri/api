const { Stock } = require('../models');

const getAll = (req, res) => (
  Stock.findAll()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error))
);

const create = (req, res) => {
  if (Array.isArray(req.body)) {
    return Stock.bulkCreate(req.body)
    .then(data =>
      res
        .status(201)
        .send({
          success: true,
          message: "Successfully created.",
          data
        })
    )
    .catch(error => res.status(400).send(error));

  }

  return Stock.create({ symbol: req.body.symbol })
    .then(data =>
      res
        .status(201)
        .send({
          success: true,
          message: "Successfully created.",
          data
        })
    )
    .catch(error => res.status(400).send(error));
};

module.exports = {
  getAll,
  create
};