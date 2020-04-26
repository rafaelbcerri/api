const humps = require('humps');
const { HistoricalDaily } = require('../models');

const getAll = (req, res) => {
  const query = humps.camelizeKeys(req.query);

  if (Object.keys(query).length > 0) {
    const [ orderColumn, orderType ] = query.orderBy.split('.');
    return HistoricalDaily.findAll({
      where: { stock_id: query.stockId },
      order: [[orderColumn, orderType]],
      limit: 50
    })
    .then(items => res.status(200).send(items))
    .catch(error => res.status(400).send(error))
  }

  return HistoricalDaily.findAll({limit: 50})
    .then(items => res.status(200).send(items))
    .catch(error => res.status(400).send(error))
};

const create = (req, res) => {
  const body = humps.decamelizeKeys(req.body);

  if (Array.isArray(body)) {
    return HistoricalDaily.bulkCreate(body)
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

  return HistoricalDaily.create({ ...body })
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