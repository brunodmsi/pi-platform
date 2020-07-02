const Vote = require('../models/Vote');
const Project = require('../models/Project');

class VoteController {
  async index(req, res) {
    const votes = await Vote.aggregate([
      {
        $group: {
          _id: '$project_id',
          counter: { $sum: 1 },
          email: { $addToSet: '$email' }
        }
      },
      {
        $sort: {
          counter: -1
        }
      }
    ])

    const populated = await Project.populate(
      votes,
      {
        path: '_id',
        select: 'title image times_clicked period_id'
      }
    );

    const projectVotes = populated.map(query => {
<<<<<<< HEAD
      if (query._id !== null) 
        return {
          _id: query._id._id,
          title: query._id.title,
          image: query._id.image,
          period_id: query._id.period_id,
          totalVotes: query.counter,
         uniqueVotes: query.email.length
        }
      return {}
=======
      return {
        _id: query._id._id,
        title: query._id.title,
        image: query._id.image,
        period_id: query._id.period_id,
        times_clicked: query._id.times_clicked,
        totalVotes: query.counter,
        uniqueVotes: query.email.length
      }
>>>>>>> d6986ee3856154ef1534746a3f93e0177ecf23bb
    })

    return res.json({
      projects: projectVotes,
    });
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
