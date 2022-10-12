const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const quizRoutes = require('./quizRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;
