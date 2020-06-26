const mongoose = require('mongoose')
const Period = require('../models/Period');

class PeriodController {
  async index(req, res) {
    const periods = await Period.find({}).populate('projects');

    return res.json(periods);
  }

  async show(req, res) {
    const { id } = req.params;

    const period = await Period.find({ id });
    if (!period) {
      return res.status(401).json({
        message: 'Periodo nao encontrado'
      })
    }

    return res.json(period);
  }

  async store(req, res) {
    const { name, description } = req.body;

    const period = await Period.create({
      name,
      description
    });

    return res.json(period);
  }
}

module.exports = new PeriodController();