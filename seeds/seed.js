const sequelize = require('../config/connection');
const { User, Quiz, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const quizData = require('./quizData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const quiz = await Quiz.bulkCreate(quizData)

  process.exit(0);
};

seedDatabase();
