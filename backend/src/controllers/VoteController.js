const Vote = require('../models/Vote');
const Project = require('../models/Project');

class VoteController {
  async index(req, res) {
    const votes = await Vote.find({});

    return res.json(votes);
  }

  async show(req, res) {
    const { projectId } = req.params;

    const votes = await Vote.find({
      project_id: projectId
    })

    return res.json(votes)
  }

  async store(req, res) {
    const { projectId, email } = req.body;

    try {
      const voting = await Vote.create({
        project_id: projectId,
        email
      });

      return res.json(voting);
    } catch(err) {
      return res.status(400).json({
        message: 'Falha ao cadastrar'
      })
    }
  }
}

module.exports = new VoteController();
