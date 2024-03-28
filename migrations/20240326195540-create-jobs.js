'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      remote_or_onsite: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      fulltime_or_Internship: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      job_description: {
        type: Sequelize.TEXT
      },
      job_responsibility: {
        type: Sequelize.TEXT
      },
      educational_requirement: {
        type: Sequelize.STRING
      },
      experiences: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  }
};