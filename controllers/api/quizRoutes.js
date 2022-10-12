const router = require('express').Router();
const { User, Quiz } = require('../../models');

router.post('/', async (req, res) => {
    try {
    let userAnswers = req.body.answer 
    console.log(userAnswers)
    const answerSheet = await Quiz.findAll({attributes: ["answer"]});
    let quizAnswers = answerSheet.map((q) => q.get({ plain: true }));
    quizAnswers = quizAnswers.map((a) => a.answer)
    console.log(quizAnswers)
        
      res.status(200).json({status: "hello" });
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;