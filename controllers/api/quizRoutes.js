const router = require('express').Router();
const { User, Quiz } = require('../../models');

router.post('/', async (req, res) => {
    try {
    let userAnswers = req.body.answer 
    console.log(userAnswers)
    const answerSheet = await Quiz.findAll({attributes: ["answer"]});
    let quizAnswers = answerSheet.map((q) => q.get({ plain: true }));
    quizAnswers = quizAnswers.map((a) => a.answer)

    let points = 0;
    for (let index = 0; index < userAnswers.length; index++) {
     if(quizAnswers[index] === userAnswers[index]){ 
      points++ 
     }   
     
     //console.log(quizAnswers[index])
    //console.log(userAnswers[index])
    }
    
    console.log(points)
    console.log(req.body)
    console.log(parseInt(req.body.user_id))
    const userData = await User.update({ score: points},{ where: { id: parseInt(req.body.user_id )} });
    const userBody = await User.findOne({ where: { id: parseInt(req.body.user_id )} });
    console.log(userBody)
    
    //console.log(userData)
    

    //console.log(quizAnswers)
        
      res.status(200).json({status: "hello" });
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;